import * as THREE from "three";
import { ArmorSlots } from "./inventory";
import { ITEM_DEFINITIONS } from "./items";
import { clamp } from "./math";

export interface SurvivalState {
  health: number;
  hunger: number;
  saturation: number;
  exhaustion: number;
  air: number;
  spawn: [number, number, number];
  alive: boolean;
  invulnerabilityTimer: number;
}

export function createSurvivalState(spawn: THREE.Vector3): SurvivalState {
  return {
    health: 20,
    hunger: 20,
    saturation: 5,
    exhaustion: 0,
    air: 20,
    spawn: [spawn.x, spawn.y, spawn.z],
    alive: true,
    invulnerabilityTimer: 0
  };
}

export class SurvivalController {
  private tickTimer = 0;

  constructor(readonly state: SurvivalState) {}

  update(delta: number, inWater: boolean, moving: boolean, sprinting: boolean): void {
    if (!this.state.alive) {
      return;
    }

    this.state.invulnerabilityTimer = Math.max(0, this.state.invulnerabilityTimer - delta);

    if (inWater) {
      this.state.air = Math.max(0, this.state.air - delta * 1.8);
      if (this.state.air <= 0) {
        this.tickTimer += delta;
        if (this.tickTimer >= 1) {
          this.damage(2);
          this.tickTimer = 0;
        }
      }
    } else {
      this.state.air = Math.min(20, this.state.air + delta * 7);
    }

    if (moving && sprinting) {
      this.addExhaustion(delta * 0.1);
    }

    if (this.state.exhaustion >= 4) {
      this.state.exhaustion -= 4;
      if (this.state.saturation > 0) {
        this.state.saturation = Math.max(0, this.state.saturation - 1);
      } else {
        this.state.hunger = Math.max(0, this.state.hunger - 1);
      }
    }

    this.tickTimer += delta;

    if (this.state.hunger >= 18 && this.state.health < 20 && this.tickTimer >= 4) {
      this.heal(1);
      this.addExhaustion(0.75);
      this.tickTimer = 0;
    }

    if (this.state.hunger <= 0 && this.tickTimer >= 4) {
      this.damage(1, true);
      this.tickTimer = 0;
    }
  }

  canSprint(): boolean {
    return this.state.hunger > 6 && this.state.alive;
  }

  addExhaustion(value: number): void {
    this.state.exhaustion += value;
  }

  eat(hunger: number, saturation: number): void {
    this.state.hunger = clamp(this.state.hunger + hunger, 0, 20);
    this.state.saturation = clamp(this.state.saturation + saturation, 0, this.state.hunger);
  }

  damage(amount: number, options: boolean | DamageOptions = {}): number {
    if (!this.state.alive) {
      return 0;
    }

    const normalized = typeof options === "boolean" ? { ignoreInvulnerability: options } : options;
    const ignoreInvulnerability = normalized.ignoreInvulnerability ?? false;
    if (!ignoreInvulnerability && this.state.invulnerabilityTimer > 0) {
      return 0;
    }

    const reduced = applyArmorReduction(amount, normalized.armorSlots, normalized.blocking ?? false);
    if (reduced <= 0) {
      return 0;
    }

    this.state.health = Math.max(0, this.state.health - reduced);
    this.state.invulnerabilityTimer = 0.7;
    this.addExhaustion(0.1);

    if (this.state.health <= 0) {
      this.state.alive = false;
    }

    return reduced;
  }

  heal(amount: number): void {
    this.state.health = clamp(this.state.health + amount, 0, 20);
  }

  respawn(): void {
    this.state.health = 20;
    this.state.hunger = 20;
    this.state.saturation = 5;
    this.state.exhaustion = 0;
    this.state.air = 20;
    this.state.alive = true;
    this.state.invulnerabilityTimer = 1.5;
  }
}

export interface DamageOptions {
  ignoreInvulnerability?: boolean;
  armorSlots?: ArmorSlots;
  blocking?: boolean;
}

export function armorPoints(slots: ArmorSlots): number {
  return Object.values(slots).reduce((sum, stack) => sum + (stack ? ITEM_DEFINITIONS[stack.item].armor?.points ?? 0 : 0), 0);
}

export function armorToughness(slots: ArmorSlots): number {
  return Object.values(slots).reduce(
    (sum, stack) => sum + (stack ? ITEM_DEFINITIONS[stack.item].armor?.toughness ?? 0 : 0),
    0
  );
}

export function applyArmorReduction(amount: number, slots?: ArmorSlots, blocking = false): number {
  let incoming = amount;

  if (blocking) {
    incoming *= 0.45;
  }

  if (slots) {
    const points = armorPoints(slots);
    const toughness = armorToughness(slots);
    const reduction = Math.min(20, Math.max(points / 5, points - incoming / (2 + toughness / 4))) / 25;
    incoming *= 1 - reduction;
  }

  return Math.max(1, Math.round(incoming));
}
