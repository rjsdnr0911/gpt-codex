import * as THREE from "three";
import { BlockType, WORLD_HEIGHT } from "./blocks";
import { clamp } from "./math";
import { World } from "./world";

export interface EndBossStats {
  name: string;
  health: number;
  maxHealth: number;
  crystals: number;
  phaseKo: string;
}

export interface EndBossUpdate {
  damage: number;
}

export interface DragonHitResult {
  hit: boolean;
  killed: boolean;
}

export interface CrystalDestroyResult {
  destroyed: boolean;
  killedDragon: boolean;
}

const DRAGON_MAX_HEALTH = 200;

export class EndBossController {
  readonly group = new THREE.Group();

  private readonly dragon = new THREE.Group();
  private readonly beamGroup = new THREE.Group();
  private world: World | null = null;
  private active = false;
  private defeated = false;
  private health = DRAGON_MAX_HEALTH;
  private damageCooldown = 0;
  private healTimer = 0;
  private deathTimer = 0;
  private healingCrystalKey: string | null = null;
  private readonly dragonPosition = new THREE.Vector3(0, 54, 0);
  private phaseKo = "순항";

  constructor() {
    this.group.name = "End boss";
    this.dragon.name = "Ender Dragon";
    this.group.add(this.dragon, this.beamGroup);
    this.createDragonMesh();
    this.group.visible = false;
  }

  setWorld(world: World, defeated: boolean): void {
    this.world = world;
    this.defeated = defeated;
    this.active = world.dimension === "end" && !defeated;
    this.group.visible = this.active || (world.dimension === "end" && this.deathTimer > 0);
    this.clearBeams();

    if (this.active && this.health <= 0) {
      this.health = DRAGON_MAX_HEALTH;
      this.deathTimer = 0;
    }

    if (this.active) {
      this.dragon.scale.setScalar(1);
    }
  }

  get stats(): EndBossStats | null {
    if (!this.active) {
      return null;
    }

    return {
      name: "엔더 드래곤",
      health: this.health,
      maxHealth: DRAGON_MAX_HEALTH,
      crystals: this.activeCrystals().length,
      phaseKo: this.phaseKo
    };
  }

  update(delta: number, playerPosition: THREE.Vector3, elapsed: number): EndBossUpdate {
    if (!this.active || !this.world) {
      if (this.deathTimer > 0) {
        this.group.visible = true;
        this.animateDeath(delta, elapsed);
        this.deathTimer = Math.max(0, this.deathTimer - delta);
      } else {
        this.group.visible = false;
      }
      return { damage: 0 };
    }

    this.group.visible = true;
    this.damageCooldown = Math.max(0, this.damageCooldown - delta);
    this.healTimer -= delta;

    const crystals = this.activeCrystals();
    if (crystals.length > 0 && this.healTimer <= 0) {
      this.healTimer = 0.5;
      this.health = Math.min(DRAGON_MAX_HEALTH, this.health + 1);
    }

    const healthRatio = this.health / DRAGON_MAX_HEALTH;
    const cycleLength = healthRatio < 0.38 ? 16 : 22;
    const cycle = elapsed % cycleLength;
    const phase = cycle < 9 ? "orbit" : cycle < 13 ? "perch" : "charge";
    this.phaseKo = phase === "orbit" ? "순항" : phase === "perch" ? "중앙 착지" : "돌진";
    const angle = elapsed * (healthRatio < 0.38 ? 0.34 : 0.24);
    const target = new THREE.Vector3();

    if (phase === "charge") {
      target.set(playerPosition.x * 0.72, clamp(playerPosition.y + 3.4, 38, 58), playerPosition.z * 0.72);
    } else if (phase === "perch") {
      const perchY = clamp(this.world.terrainHeight(0, 0) + 7, 38, 48);
      target.set(Math.sin(elapsed * 1.4) * 4, perchY, Math.cos(elapsed * 1.1) * 4);
    } else {
      const radius = 31 + Math.sin(elapsed * 0.19) * 7;
      target.set(Math.cos(angle) * radius, 51 + Math.sin(elapsed * 0.31) * 6, Math.sin(angle) * radius);
    }

    const follow = phase === "charge" ? 2.5 : phase === "perch" ? 1.6 : 1.15;
    this.dragonPosition.lerp(target, clamp(delta * follow, 0, 1));
    this.dragon.position.copy(this.dragonPosition);
    this.dragon.scale.setScalar(1);

    const look = playerPosition.clone().sub(this.dragonPosition);
    this.dragon.rotation.y = Math.atan2(look.x, look.z);
    this.dragon.rotation.z = Math.sin(elapsed * 1.7) * 0.12;
    this.animateDragon(elapsed);
    this.updateHealingBeams(crystals);

    let damage = 0;
    const contactDistance = phase === "charge" ? 4.2 : phase === "perch" ? 3.8 : 3.2;
    if (this.dragonPosition.distanceTo(playerPosition.clone().add(new THREE.Vector3(0, 1.1, 0))) < contactDistance && this.damageCooldown <= 0) {
      damage = phase === "charge" ? 11 : phase === "perch" ? 7 : 8;
      this.damageCooldown = phase === "charge" ? 1.15 : 1.4;
    }

    return { damage };
  }

  hitDragonByRay(origin: THREE.Vector3, direction: THREE.Vector3, maxDistance: number, damage: number): DragonHitResult {
    if (!this.active) {
      return { hit: false, killed: false };
    }

    const toDragon = this.dragonPosition.clone().sub(origin);
    const projection = toDragon.dot(direction);
    if (projection < 0 || projection > maxDistance) {
      return { hit: false, killed: false };
    }

    const closest = origin.clone().add(direction.clone().multiplyScalar(projection));
    if (closest.distanceTo(this.dragonPosition) > 4.0) {
      return { hit: false, killed: false };
    }

    const reducedDamage = damage / 4 + Math.min(1, damage);
    this.health = Math.max(0, this.health - reducedDamage);

    if (this.health <= 0) {
      this.active = false;
      this.defeated = true;
      this.deathTimer = 5;
      this.clearBeams();
      return { hit: true, killed: true };
    }

    return { hit: true, killed: false };
  }

  destroyCrystalAt(x: number, y: number, z: number): CrystalDestroyResult {
    if (!this.world || this.world.getBlock(x, y, z) !== BlockType.EndCrystal) {
      return { destroyed: false, killedDragon: false };
    }

    const key = crystalKey(x, y, z);
    const wasHealing = this.healingCrystalKey === key;
    this.world.setBlock(x, y, z, BlockType.Air);

    if (this.active && wasHealing) {
      this.health = Math.max(0, this.health - 10);
    }

    if (this.health <= 0) {
      this.active = false;
      this.defeated = true;
      this.deathTimer = 5;
      this.clearBeams();
    }

    return { destroyed: true, killedDragon: this.defeated };
  }

  private activeCrystals(): THREE.Vector3[] {
    if (!this.world) {
      return [];
    }

    return this.world
      .endCrystalLocations()
      .filter((position) => this.world?.getBlock(Math.floor(position.x), Math.floor(position.y), Math.floor(position.z)) === BlockType.EndCrystal);
  }

  private updateHealingBeams(crystals: THREE.Vector3[]): void {
    this.clearBeams();
    this.healingCrystalKey = null;

    if (crystals.length === 0) {
      return;
    }

    const sorted = [...crystals].sort((a, b) => a.distanceTo(this.dragonPosition) - b.distanceTo(this.dragonPosition));
    const nearest = sorted[0];
    this.healingCrystalKey = crystalKey(Math.floor(nearest.x), Math.floor(nearest.y), Math.floor(nearest.z));

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute([nearest.x + 0.5, nearest.y + 0.55, nearest.z + 0.5, this.dragonPosition.x, this.dragonPosition.y, this.dragonPosition.z], 3)
    );
    const material = new THREE.LineBasicMaterial({ color: "#f2efe6", transparent: true, opacity: 0.72 });
    const line = new THREE.LineSegments(geometry, material);
    this.beamGroup.add(line);
  }

  private clearBeams(): void {
    for (const child of [...this.beamGroup.children]) {
      this.beamGroup.remove(child);
      if (child instanceof THREE.LineSegments) {
        child.geometry.dispose();
        disposeMaterial(child.material);
      }
    }
  }

  private createDragonMesh(): void {
    const body = mat("#17121d", "#3a1d4d", 0.18);
    const wing = mat("#211429", "#4e2670", 0.12);
    const horn = mat("#e4d7aa");
    const eye = new THREE.MeshBasicMaterial({ color: "#c45cff" });
    addBox(this.dragon, [2.6, 1.0, 3.3], [0, 0, 0], body);
    addBox(this.dragon, [1.6, 0.72, 1.4], [0, 0.18, -1.45], body);
    addBox(this.dragon, [1.15, 0.75, 1.15], [0, 0.28, -2.15], body);
    addBox(this.dragon, [0.18, 0.42, 0.18], [-0.35, 0.78, -2.65], horn);
    addBox(this.dragon, [0.18, 0.42, 0.18], [0.35, 0.78, -2.65], horn);
    addBox(this.dragon, [0.16, 0.1, 0.05], [-0.22, 0.38, -2.74], eye);
    addBox(this.dragon, [0.16, 0.1, 0.05], [0.22, 0.38, -2.74], eye);
    addBox(this.dragon, [0.45, 0.45, 4.2], [0, -0.08, 3.35], body, "tail");
    addBox(this.dragon, [0.22, 0.22, 2.5], [0, -0.06, 6.3], body, "tail");
    addBox(this.dragon, [5.2, 0.12, 2.3], [-3.45, 0.15, 0.25], wing, "wing-left");
    addBox(this.dragon, [5.2, 0.12, 2.3], [3.45, 0.15, 0.25], wing, "wing-right");
    addBox(this.dragon, [0.34, 1.2, 0.34], [-0.72, -1, -0.85], body, "leg-a");
    addBox(this.dragon, [0.34, 1.2, 0.34], [0.72, -1, -0.85], body, "leg-b");
    addBox(this.dragon, [0.34, 1.2, 0.34], [-0.72, -1, 0.95], body, "leg-b");
    addBox(this.dragon, [0.34, 1.2, 0.34], [0.72, -1, 0.95], body, "leg-a");
  }

  private animateDragon(elapsed: number): void {
    const flap = Math.sin(elapsed * 5.2) * 0.28;
    for (const child of this.dragon.children) {
      if (child.name === "wing-left") {
        child.rotation.z = 0.08 + flap;
      } else if (child.name === "wing-right") {
        child.rotation.z = -0.08 - flap;
      } else if (child.name === "tail") {
        child.rotation.y = Math.sin(elapsed * 1.7) * 0.12;
      } else if (child.name === "leg-a") {
        child.rotation.x = Math.sin(elapsed * 3.2) * 0.18;
      } else if (child.name === "leg-b") {
        child.rotation.x = -Math.sin(elapsed * 3.2) * 0.18;
      }
    }
  }

  private animateDeath(delta: number, elapsed: number): void {
    const pulse = Math.max(0, this.deathTimer / 5);
    this.dragon.rotation.y += delta * 2.3;
    this.dragon.rotation.z = Math.sin(elapsed * 5.5) * 0.45;
    this.dragon.position.y = this.dragonPosition.y + (1 - pulse) * 3.2;
    this.dragon.scale.setScalar(0.92 + pulse * 0.16 + Math.sin(elapsed * 12) * 0.025);
  }
}

export function buildEndExitPortal(world: World): void {
  const y = Math.min(WORLD_HEIGHT - 8, world.terrainHeight(0, 0) + 1);

  for (let dz = -4; dz <= 4; dz += 1) {
    for (let dx = -4; dx <= 4; dx += 1) {
      world.setBlock(dx, y - 1, dz, Math.abs(dx) <= 3 && Math.abs(dz) <= 3 ? BlockType.EndStoneBricks : BlockType.EndStone);
      for (let dy = 0; dy <= 4; dy += 1) {
        world.setBlock(dx, y + dy, dz, BlockType.Air);
      }
    }
  }

  for (let dz = -2; dz <= 2; dz += 1) {
    for (let dx = -2; dx <= 2; dx += 1) {
      const edge = Math.abs(dx) === 2 || Math.abs(dz) === 2;
      world.setBlock(dx, y, dz, edge ? BlockType.Bedrock : BlockType.EndPortal);
    }
  }

  world.setBlock(0, y + 1, 0, BlockType.DragonEgg);
}

function crystalKey(x: number, y: number, z: number): string {
  return `${x},${y},${z}`;
}

function mat(color: string, emissive = "#000000", emissiveIntensity = 0): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: new THREE.Color(emissive),
    emissiveIntensity,
    roughness: 0.86,
    metalness: 0
  });
}

function addBox(
  group: THREE.Group,
  size: [number, number, number],
  position: [number, number, number],
  material: THREE.Material,
  name = ""
): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  mesh.name = name;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  return mesh;
}

function disposeMaterial(material: THREE.Material | THREE.Material[]): void {
  if (Array.isArray(material)) {
    material.forEach((entry) => entry.dispose());
    return;
  }
  material.dispose();
}
