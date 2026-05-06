import * as THREE from "three";
import { BlockType, WORLD_HEIGHT, isSolid } from "./blocks";
import { ItemStack } from "./items";
import { clamp } from "./math";
import { type SavedEntity } from "./saveSystem";
import { World } from "./world";

export type MobType = "zombie" | "skeleton" | "spider" | "creeper" | "armored_zombie" | "skeleton_captain" | "cow" | "pig" | "sheep" | "chicken";

type MobBehavior = "melee" | "skeleton" | "spider" | "creeper" | "animal";

interface MobDefinition {
  type: MobType;
  name: string;
  hostile: boolean;
  behavior: MobBehavior;
  health: number;
  speed: number;
  radius: number;
  height: number;
  detection: number;
  attackDamage: number;
  attackRange: number;
  attackCooldown: number;
  colors: {
    body: string;
    accent?: string;
    legs?: string;
    eyes?: string;
  };
  drops: LootEntry[];
}

interface LootEntry {
  item: ItemStack["item"];
  min: number;
  max: number;
  chance: number;
  durability?: number;
}

interface MobEntity {
  id: number;
  type: MobType;
  health: number;
  attackCooldown: number;
  age: number;
  fuse: number;
  eggTimer: number;
  panicTimer: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  mesh: THREE.Group;
}

interface ArrowEntity {
  id: number;
  age: number;
  damage: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  mesh: THREE.Mesh;
}

export interface MobHitResult {
  killed: boolean;
  name: string;
  hostile: boolean;
  drops: ItemStack[];
}

export interface MobExplosion {
  x: number;
  y: number;
  z: number;
  radius: number;
  damage: number;
}

export interface MobUpdateResult {
  damage: number;
  drops: ItemStack[];
  explosions: MobExplosion[];
}

const DEFINITIONS: Record<MobType, MobDefinition> = {
  zombie: {
    type: "zombie",
    name: "좀비",
    hostile: true,
    behavior: "melee",
    health: 20,
    speed: 1.65,
    radius: 0.34,
    height: 1.74,
    detection: 32,
    attackDamage: 3,
    attackRange: 1.15,
    attackCooldown: 1.2,
    colors: { body: "#50734f", accent: "#3f6680", legs: "#374255", eyes: "#f6d86b" },
    drops: [{ item: "rotten_flesh", min: 0, max: 2, chance: 0.88 }]
  },
  armored_zombie: {
    type: "armored_zombie",
    name: "무장 좀비",
    hostile: true,
    behavior: "melee",
    health: 28,
    speed: 1.55,
    radius: 0.36,
    height: 1.8,
    detection: 34,
    attackDamage: 5,
    attackRange: 1.18,
    attackCooldown: 1.1,
    colors: { body: "#536b55", accent: "#aab1ad", legs: "#4a5260", eyes: "#ffd666" },
    drops: [
      { item: "rotten_flesh", min: 1, max: 3, chance: 1 },
      { item: "chainmail_helmet", min: 1, max: 1, chance: 0.08 }
    ]
  },
  skeleton: {
    type: "skeleton",
    name: "스켈레톤",
    hostile: true,
    behavior: "skeleton",
    health: 20,
    speed: 1.35,
    radius: 0.32,
    height: 1.74,
    detection: 28,
    attackDamage: 4,
    attackRange: 15,
    attackCooldown: 1.8,
    colors: { body: "#d8d5c5", accent: "#bfb9a3", legs: "#cfcab9", eyes: "#202020" },
    drops: [
      { item: "bone", min: 0, max: 2, chance: 0.92 },
      { item: "arrow", min: 0, max: 2, chance: 0.78 }
    ]
  },
  skeleton_captain: {
    type: "skeleton_captain",
    name: "스켈레톤 대장",
    hostile: true,
    behavior: "skeleton",
    health: 30,
    speed: 1.45,
    radius: 0.34,
    height: 1.82,
    detection: 32,
    attackDamage: 6,
    attackRange: 17,
    attackCooldown: 1.35,
    colors: { body: "#d8d5c5", accent: "#d6aa35", legs: "#bfb9a3", eyes: "#b53634" },
    drops: [
      { item: "bone", min: 2, max: 4, chance: 1 },
      { item: "arrow", min: 2, max: 5, chance: 1 },
      { item: "bow", min: 1, max: 1, chance: 0.1, durability: 80 }
    ]
  },
  spider: {
    type: "spider",
    name: "거미",
    hostile: true,
    behavior: "spider",
    health: 16,
    speed: 2.45,
    radius: 0.62,
    height: 0.92,
    detection: 28,
    attackDamage: 2,
    attackRange: 1.25,
    attackCooldown: 0.9,
    colors: { body: "#2d2730", accent: "#5e394d", legs: "#1d171f", eyes: "#d8423a" },
    drops: [
      { item: "string", min: 0, max: 2, chance: 0.92 },
      { item: "spider_eye", min: 1, max: 1, chance: 0.18 }
    ]
  },
  creeper: {
    type: "creeper",
    name: "크리퍼",
    hostile: true,
    behavior: "creeper",
    health: 20,
    speed: 1.55,
    radius: 0.34,
    height: 1.7,
    detection: 25,
    attackDamage: 0,
    attackRange: 1.85,
    attackCooldown: 0,
    colors: { body: "#55a95a", accent: "#35793b", legs: "#3e8742", eyes: "#101510" },
    drops: [{ item: "gunpowder", min: 0, max: 2, chance: 0.86 }]
  },
  cow: {
    type: "cow",
    name: "소",
    hostile: false,
    behavior: "animal",
    health: 10,
    speed: 1.25,
    radius: 0.48,
    height: 1.35,
    detection: 0,
    attackDamage: 0,
    attackRange: 0,
    attackCooldown: 0,
    colors: { body: "#6f4b36", accent: "#e8ded0", legs: "#3f2a1e", eyes: "#111111" },
    drops: [
      { item: "raw_beef", min: 1, max: 3, chance: 1 },
      { item: "leather", min: 0, max: 2, chance: 0.72 }
    ]
  },
  pig: {
    type: "pig",
    name: "돼지",
    hostile: false,
    behavior: "animal",
    health: 10,
    speed: 1.2,
    radius: 0.45,
    height: 1.05,
    detection: 0,
    attackDamage: 0,
    attackRange: 0,
    attackCooldown: 0,
    colors: { body: "#d8919c", accent: "#e8abb5", legs: "#b86f7a", eyes: "#151515" },
    drops: [{ item: "raw_porkchop", min: 1, max: 3, chance: 1 }]
  },
  sheep: {
    type: "sheep",
    name: "양",
    hostile: false,
    behavior: "animal",
    health: 8,
    speed: 1.15,
    radius: 0.46,
    height: 1.2,
    detection: 0,
    attackDamage: 0,
    attackRange: 0,
    attackCooldown: 0,
    colors: { body: "#e7e3d2", accent: "#56504a", legs: "#3c3532", eyes: "#111111" },
    drops: [
      { item: "raw_mutton", min: 1, max: 2, chance: 1 },
      { item: "wool", min: 1, max: 2, chance: 1 }
    ]
  },
  chicken: {
    type: "chicken",
    name: "닭",
    hostile: false,
    behavior: "animal",
    health: 4,
    speed: 1.35,
    radius: 0.28,
    height: 0.72,
    detection: 0,
    attackDamage: 0,
    attackRange: 0,
    attackCooldown: 0,
    colors: { body: "#eee8d7", accent: "#d8423a", legs: "#d6aa35", eyes: "#111111" },
    drops: [
      { item: "raw_chicken", min: 1, max: 1, chance: 1 },
      { item: "feather", min: 0, max: 2, chance: 0.84 }
    ]
  }
};

export class MobManager {
  readonly group = new THREE.Group();

  private readonly mobs: MobEntity[] = [];
  private readonly arrows: ArrowEntity[] = [];
  private spawnTimer = 1.5;
  private nextId = 1;

  constructor() {
    this.group.name = "Codex Craft entities";
  }

  clear(): void {
    for (const mob of this.mobs) {
      this.group.remove(mob.mesh);
      this.disposeGroup(mob.mesh);
    }

    for (const arrow of this.arrows) {
      this.group.remove(arrow.mesh);
      arrow.mesh.geometry.dispose();
      disposeMaterial(arrow.mesh.material);
    }

    this.mobs.length = 0;
    this.arrows.length = 0;
    this.spawnTimer = 1.5;
  }

  restore(entities: SavedEntity[]): void {
    this.clear();
    for (const saved of entities.slice(0, 32)) {
      if (!isMobType(saved.type)) {
        continue;
      }
      this.spawnAt(saved.type, saved.position[0], saved.position[1], saved.position[2], saved.health, saved.age);
    }
  }

  snapshot(): SavedEntity[] {
    return this.mobs.slice(0, 32).map((mob) => ({
      id: mob.id,
      type: mob.type,
      position: [mob.position.x, mob.position.y, mob.position.z],
      health: mob.health,
      age: mob.age
    }));
  }

  get count(): number {
    return this.mobs.length;
  }

  update(
    delta: number,
    world: World,
    playerPosition: THREE.Vector3,
    dayFactor: number,
    undergroundFactor: number,
    elapsed: number
  ): MobUpdateResult {
    this.spawnTimer -= delta;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 3.2 + Math.random() * 3.4;
      this.trySpawn(world, playerPosition, dayFactor, undergroundFactor);
    }

    const result: MobUpdateResult = {
      damage: 0,
      drops: [],
      explosions: []
    };

    for (let index = this.mobs.length - 1; index >= 0; index -= 1) {
      const mob = this.mobs[index];
      const definition = DEFINITIONS[mob.type];
      mob.age += delta;
      mob.attackCooldown = Math.max(0, mob.attackCooldown - delta);

      const toPlayer = playerPosition.clone().sub(mob.position);
      const horizontalDistance = Math.hypot(toPlayer.x, toPlayer.z);
      const verticalDistance = Math.abs(toPlayer.y);

      if (this.shouldDespawn(mob, definition, horizontalDistance)) {
        this.removeMob(index);
        continue;
      }

      if (definition.behavior === "animal") {
        this.updateAnimal(mob, definition, world, playerPosition, horizontalDistance, elapsed, delta);
      } else if (definition.behavior === "skeleton") {
        this.updateSkeleton(mob, definition, world, playerPosition, toPlayer, horizontalDistance, verticalDistance, delta);
      } else if (definition.behavior === "creeper") {
        this.updateCreeper(mob, definition, world, playerPosition, toPlayer, horizontalDistance, verticalDistance, delta, result, index);
        if (!this.mobs.includes(mob)) {
          continue;
        }
      } else {
        this.updateMelee(mob, definition, world, playerPosition, toPlayer, horizontalDistance, verticalDistance, delta, result);
      }

      if (horizontalDistance > 0.001) {
        mob.mesh.rotation.y = Math.atan2(toPlayer.x, toPlayer.z);
      }

      this.animateMob(mob, definition, elapsed, horizontalDistance);
      mob.mesh.position.copy(mob.position);
    }

    this.updateArrows(delta, world, playerPosition, result);
    return result;
  }

  hitByRay(origin: THREE.Vector3, direction: THREE.Vector3, maxDistance: number, damage: number): MobHitResult | null {
    let bestIndex = -1;
    let bestDistance = Infinity;

    for (let index = 0; index < this.mobs.length; index += 1) {
      const mob = this.mobs[index];
      const definition = DEFINITIONS[mob.type];
      const center = mob.position.clone();
      center.y += definition.height * 0.5;
      const toCenter = center.clone().sub(origin);
      const projection = toCenter.dot(direction);

      if (projection < 0 || projection > maxDistance) {
        continue;
      }

      const closest = origin.clone().add(direction.clone().multiplyScalar(projection));
      const distance = closest.distanceTo(center);
      if (distance < definition.radius + 0.34 && projection < bestDistance) {
        bestDistance = projection;
        bestIndex = index;
      }
    }

    if (bestIndex < 0) {
      return null;
    }

    const mob = this.mobs[bestIndex];
    const definition = DEFINITIONS[mob.type];
    mob.health -= damage;
    mob.panicTimer = definition.hostile ? 0 : 4.5;
    mob.velocity.add(direction.clone().multiplyScalar(definition.hostile ? 3.2 : 4.4));
    mob.velocity.y = Math.max(mob.velocity.y, definition.behavior === "spider" ? 4.2 : 3);

    if (mob.health <= 0) {
      const drops = this.rollDrops(definition);
      this.removeMob(bestIndex);
      return {
        killed: true,
        name: definition.name,
        hostile: definition.hostile,
        drops
      };
    }

    return {
      killed: false,
      name: definition.name,
      hostile: definition.hostile,
      drops: []
    };
  }

  private updateMelee(
    mob: MobEntity,
    definition: MobDefinition,
    world: World,
    playerPosition: THREE.Vector3,
    toPlayer: THREE.Vector3,
    horizontalDistance: number,
    verticalDistance: number,
    delta: number,
    result: MobUpdateResult
  ): void {
    const desired = new THREE.Vector3();
    if (horizontalDistance < definition.detection) {
      desired.set(toPlayer.x, 0, toPlayer.z).normalize().multiplyScalar(definition.speed);
    } else {
      desired.set(Math.sin(mob.age * 0.9 + mob.id), 0, Math.cos(mob.age * 0.7 + mob.id)).multiplyScalar(0.45);
    }

    this.steer(mob, desired, delta);
    this.moveMob(mob, definition, world, delta);

    if (horizontalDistance < definition.attackRange && verticalDistance < definition.height && mob.attackCooldown <= 0) {
      result.damage += definition.attackDamage;
      mob.attackCooldown = definition.attackCooldown;
    }
  }

  private updateSkeleton(
    mob: MobEntity,
    definition: MobDefinition,
    world: World,
    playerPosition: THREE.Vector3,
    toPlayer: THREE.Vector3,
    horizontalDistance: number,
    verticalDistance: number,
    delta: number
  ): void {
    const desired = new THREE.Vector3();
    if (horizontalDistance < 7) {
      desired.set(-toPlayer.x, 0, -toPlayer.z).normalize().multiplyScalar(definition.speed * 0.9);
    } else if (horizontalDistance < definition.detection) {
      const side = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize().multiplyScalar(Math.sin(mob.age * 2 + mob.id));
      desired.set(toPlayer.x, 0, toPlayer.z).normalize().multiplyScalar(definition.speed * 0.55).add(side);
    } else {
      desired.set(Math.sin(mob.age * 0.8 + mob.id), 0, Math.cos(mob.age * 0.5 + mob.id)).multiplyScalar(0.35);
    }

    this.steer(mob, desired, delta);
    this.moveMob(mob, definition, world, delta);

    if (horizontalDistance < definition.attackRange && verticalDistance < 5 && mob.attackCooldown <= 0) {
      this.shootArrow(mob, definition, playerPosition);
      mob.attackCooldown = definition.attackCooldown;
    }
  }

  private updateCreeper(
    mob: MobEntity,
    definition: MobDefinition,
    world: World,
    playerPosition: THREE.Vector3,
    toPlayer: THREE.Vector3,
    horizontalDistance: number,
    verticalDistance: number,
    delta: number,
    result: MobUpdateResult,
    index: number
  ): void {
    const desired = new THREE.Vector3();
    if (horizontalDistance < definition.detection) {
      desired.set(toPlayer.x, 0, toPlayer.z).normalize().multiplyScalar(definition.speed);
    }

    this.steer(mob, desired, delta);
    this.moveMob(mob, definition, world, delta);

    if (horizontalDistance < definition.attackRange && verticalDistance < 2.2) {
      mob.fuse += delta;
      mob.mesh.scale.setScalar(1 + Math.sin(mob.fuse * 26) * 0.04 + mob.fuse * 0.08);
      if (mob.fuse >= 1.5) {
        result.explosions.push({
          x: mob.position.x,
          y: mob.position.y + 0.8,
          z: mob.position.z,
          radius: 3.15,
          damage: 16
        });
        this.removeMob(index);
      }
    } else {
      mob.fuse = Math.max(0, mob.fuse - delta * 0.65);
      mob.mesh.scale.setScalar(1);
    }
  }

  private updateAnimal(
    mob: MobEntity,
    definition: MobDefinition,
    world: World,
    playerPosition: THREE.Vector3,
    horizontalDistance: number,
    elapsed: number,
    delta: number
  ): void {
    mob.panicTimer = Math.max(0, mob.panicTimer - delta);
    const away = mob.position.clone().sub(playerPosition);
    const desired = new THREE.Vector3();

    if (mob.panicTimer > 0 || horizontalDistance < 2.2) {
      desired.set(away.x, 0, away.z).normalize().multiplyScalar(definition.speed * 1.85);
    } else {
      desired
        .set(Math.sin(elapsed * 0.55 + mob.id * 1.7), 0, Math.cos(elapsed * 0.45 + mob.id * 2.3))
        .multiplyScalar(definition.speed * 0.36);
    }

    if (mob.type === "chicken") {
      mob.eggTimer -= delta;
      if (mob.eggTimer <= 0) {
        mob.eggTimer = 80 + Math.random() * 140;
      }
    }

    this.steer(mob, desired, delta);
    this.moveMob(mob, definition, world, delta);
  }

  private updateArrows(delta: number, world: World, playerPosition: THREE.Vector3, result: MobUpdateResult): void {
    for (let index = this.arrows.length - 1; index >= 0; index -= 1) {
      const arrow = this.arrows[index];
      arrow.age += delta;
      arrow.velocity.y -= 5.2 * delta;
      arrow.position.addScaledVector(arrow.velocity, delta);
      arrow.mesh.position.copy(arrow.position);
      arrow.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), arrow.velocity.clone().normalize());

      if (arrow.position.distanceTo(playerPosition.clone().add(new THREE.Vector3(0, 0.9, 0))) < 0.7) {
        result.damage += arrow.damage;
        this.removeArrow(index);
        continue;
      }

      if (
        arrow.age > 5 ||
        arrow.position.y < 0 ||
        arrow.position.y >= WORLD_HEIGHT ||
        isSolid(world.getBlock(Math.floor(arrow.position.x), Math.floor(arrow.position.y), Math.floor(arrow.position.z)))
      ) {
        this.removeArrow(index);
      }
    }
  }

  private trySpawn(world: World, playerPosition: THREE.Vector3, dayFactor: number, undergroundFactor: number): void {
    if (this.mobs.length >= 18) {
      return;
    }

    const night = dayFactor < 0.34;
    const cave = undergroundFactor > 0.48;
    const animalWeather = dayFactor > 0.55 && undergroundFactor < 0.18;
    const hostileCount = this.mobs.filter((mob) => DEFINITIONS[mob.type].hostile).length;
    const animalCount = this.mobs.length - hostileCount;

    if ((night || cave) && hostileCount < 11) {
      const pool: MobType[] = cave
        ? ["zombie", "skeleton", "spider", "creeper", "armored_zombie", "skeleton_captain"]
        : ["zombie", "skeleton", "spider", "creeper"];
      this.trySpawnType(world, playerPosition, pool[Math.floor(Math.random() * pool.length)], cave);
      return;
    }

    if (animalWeather && animalCount < 7 && Math.random() < 0.82) {
      const pool: MobType[] = ["cow", "pig", "sheep", "chicken"];
      this.trySpawnType(world, playerPosition, pool[Math.floor(Math.random() * pool.length)], false);
    }
  }

  private trySpawnType(world: World, playerPosition: THREE.Vector3, type: MobType, cave: boolean): void {
    const definition = DEFINITIONS[type];
    for (let attempt = 0; attempt < 22; attempt += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = definition.hostile ? 18 + Math.random() * 18 : 12 + Math.random() * 28;
      const x = Math.floor(playerPosition.x + Math.cos(angle) * distance) + 0.5;
      const z = Math.floor(playerPosition.z + Math.sin(angle) * distance) + 0.5;
      const y = cave
        ? this.findCaveSpawnY(world, Math.floor(x), Math.floor(playerPosition.y), Math.floor(z), definition.hostile)
        : world.terrainHeight(Math.floor(x), Math.floor(z)) + 1;

      if (y === null || y < 3 || y > WORLD_HEIGHT - 3) {
        continue;
      }

      if (definition.hostile && this.isNearTorch(world, Math.floor(x), y, Math.floor(z), 7)) {
        continue;
      }

      if (this.isSpawnSpace(world, Math.floor(x), y, Math.floor(z), definition)) {
        this.spawnAt(type, x, y, z);
        return;
      }
    }
  }

  private findCaveSpawnY(world: World, x: number, centerY: number, z: number, hostile: boolean): number | null {
    for (let offset = 0; offset <= 11; offset += 1) {
      for (const sign of [-1, 1]) {
        const y = centerY + offset * sign;
        if (hostile && this.isNearTorch(world, x, y, z, 7)) {
          continue;
        }
        if (this.isSpawnSpace(world, x, y, z, DEFINITIONS.zombie)) {
          return y;
        }
      }
    }

    return null;
  }

  private spawnAt(type: MobType, x: number, y: number, z: number, health = DEFINITIONS[type].health, age = 0): void {
    const definition = DEFINITIONS[type];
    const mob: MobEntity = {
      id: this.nextId,
      type,
      health,
      attackCooldown: definition.attackCooldown * 0.6,
      age,
      fuse: 0,
      eggTimer: type === "chicken" ? 45 + Math.random() * 80 : 0,
      panicTimer: 0,
      position: new THREE.Vector3(x, y, z),
      velocity: new THREE.Vector3(),
      mesh: this.createMobMesh(definition)
    };
    this.nextId += 1;
    mob.mesh.position.copy(mob.position);
    this.mobs.push(mob);
    this.group.add(mob.mesh);
  }

  private shootArrow(mob: MobEntity, definition: MobDefinition, playerPosition: THREE.Vector3): void {
    const start = mob.position.clone().add(new THREE.Vector3(0, definition.height * 0.72, 0));
    const target = playerPosition.clone().add(new THREE.Vector3(0, 1.05, 0));
    const direction = target.sub(start).normalize();
    direction.y += 0.07;
    direction.normalize();

    const geometry = new THREE.BoxGeometry(0.06, 0.62, 0.06);
    const material = new THREE.MeshStandardMaterial({ color: "#d8d3c0", roughness: 0.8 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    this.group.add(mesh);

    const arrow: ArrowEntity = {
      id: this.nextId,
      age: 0,
      damage: definition.attackDamage,
      position: start,
      velocity: direction.multiplyScalar(13.5),
      mesh
    };
    this.nextId += 1;
    this.arrows.push(arrow);
  }

  private steer(mob: MobEntity, desired: THREE.Vector3, delta: number): void {
    mob.velocity.x += (desired.x - mob.velocity.x) * clamp(delta * 4, 0, 1);
    mob.velocity.z += (desired.z - mob.velocity.z) * clamp(delta * 4, 0, 1);
    mob.velocity.y -= 18 * delta;
  }

  private moveMob(mob: MobEntity, definition: MobDefinition, world: World, delta: number): void {
    const next = mob.position.clone();
    next.x += mob.velocity.x * delta;
    if (this.collidesAt(next, definition, world)) {
      next.x = mob.position.x;
      mob.velocity.x = 0;
    }

    next.z += mob.velocity.z * delta;
    if (this.collidesAt(next, definition, world)) {
      next.z = mob.position.z;
      mob.velocity.z = 0;
    }

    next.y += mob.velocity.y * delta;
    if (this.collidesAt(next, definition, world)) {
      next.y = mob.position.y;
      if (mob.velocity.y < -4 && Math.hypot(mob.velocity.x, mob.velocity.z) > 0.35) {
        mob.velocity.y = definition.behavior === "spider" ? 6.4 : 5.6;
      } else {
        mob.velocity.y = 0;
      }
    }

    mob.position.copy(next);
  }

  private collidesAt(position: THREE.Vector3, definition: MobDefinition, world: World): boolean {
    const minX = Math.floor(position.x - definition.radius);
    const maxX = Math.floor(position.x + definition.radius);
    const minY = Math.floor(position.y);
    const maxY = Math.floor(position.y + definition.height);
    const minZ = Math.floor(position.z - definition.radius);
    const maxZ = Math.floor(position.z + definition.radius);

    for (let y = minY; y <= maxY; y += 1) {
      for (let z = minZ; z <= maxZ; z += 1) {
        for (let x = minX; x <= maxX; x += 1) {
          if (isSolid(world.getBlock(x, y, z))) {
            return true;
          }
        }
      }
    }

    return false;
  }

  private isSpawnSpace(world: World, x: number, y: number, z: number, definition: MobDefinition): boolean {
    const ground = world.getBlock(x, y - 1, z);
    if (ground === BlockType.Water || !isSolid(ground)) {
      return false;
    }

    if (!definition.hostile && ground !== BlockType.Grass) {
      return false;
    }

    const maxY = Math.ceil(definition.height);
    for (let dy = 0; dy <= maxY; dy += 1) {
      if (world.getBlock(x, y + dy, z) !== BlockType.Air) {
        return false;
      }
    }

    return true;
  }

  private isNearTorch(world: World, x: number, y: number, z: number, radius: number): boolean {
    for (let dy = -3; dy <= 3; dy += 1) {
      for (let dz = -radius; dz <= radius; dz += 1) {
        for (let dx = -radius; dx <= radius; dx += 1) {
          if (dx * dx + dy * dy + dz * dz > radius * radius) {
            continue;
          }
          if (world.getBlock(x + dx, y + dy, z + dz) === BlockType.Torch) {
            return true;
          }
        }
      }
    }

    return false;
  }

  private shouldDespawn(mob: MobEntity, definition: MobDefinition, horizontalDistance: number): boolean {
    if (horizontalDistance > 82 || mob.position.y < -14 || mob.age > 520) {
      return true;
    }

    return definition.hostile && horizontalDistance > 46 && mob.age > 90;
  }

  private rollDrops(definition: MobDefinition): ItemStack[] {
    const drops: ItemStack[] = [];
    for (const drop of definition.drops) {
      if (Math.random() > drop.chance) {
        continue;
      }
      const count = drop.min + Math.floor(Math.random() * (drop.max - drop.min + 1));
      if (count <= 0) {
        continue;
      }
      drops.push({ item: drop.item, count, durability: drop.durability });
    }
    return drops;
  }

  private removeMob(index: number): void {
    const mob = this.mobs[index];
    this.group.remove(mob.mesh);
    this.disposeGroup(mob.mesh);
    this.mobs.splice(index, 1);
  }

  private removeArrow(index: number): void {
    const arrow = this.arrows[index];
    this.group.remove(arrow.mesh);
    arrow.mesh.geometry.dispose();
    disposeMaterial(arrow.mesh.material);
    this.arrows.splice(index, 1);
  }

  private disposeGroup(mesh: THREE.Group): void {
    const disposed = new Set<THREE.Material>();
    mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        for (const material of materials) {
          if (!disposed.has(material)) {
            material.dispose();
            disposed.add(material);
          }
        }
      }
    });
  }

  private animateMob(mob: MobEntity, definition: MobDefinition, elapsed: number, horizontalDistance: number): void {
    const stride = Math.sin((elapsed + mob.id) * (definition.behavior === "animal" ? 6 : 8)) * Math.min(1, horizontalDistance / 7);
    for (const child of mob.mesh.children) {
      if (child.name.startsWith("leg-a")) {
        child.rotation.x = stride * 0.55;
      }
      if (child.name.startsWith("leg-b")) {
        child.rotation.x = -stride * 0.55;
      }
      if (child.name.startsWith("arm-a")) {
        child.rotation.x = -0.35 + stride * 0.45;
      }
      if (child.name.startsWith("arm-b")) {
        child.rotation.x = -0.35 - stride * 0.45;
      }
    }
  }

  private createMobMesh(definition: MobDefinition): THREE.Group {
    if (definition.behavior === "spider") {
      return this.createSpiderMesh(definition);
    }

    if (definition.behavior === "animal") {
      return this.createAnimalMesh(definition);
    }

    if (definition.behavior === "creeper") {
      return this.createCreeperMesh(definition);
    }

    return this.createHumanoidMesh(definition);
  }

  private createHumanoidMesh(definition: MobDefinition): THREE.Group {
    const group = new THREE.Group();
    const body = mat(definition.colors.body);
    const accent = mat(definition.colors.accent ?? definition.colors.body);
    const legs = mat(definition.colors.legs ?? definition.colors.body);
    const eyes = new THREE.MeshBasicMaterial({ color: definition.colors.eyes ?? "#ffd666" });

    addBox(group, [0.58, 0.58, 0.58], [0, 1.52, 0], body);
    addBox(group, [0.62, 0.7, 0.34], [0, 0.94, 0], accent);
    addBox(group, [0.22, 0.72, 0.22], [-0.42, 0.92, 0.02], body, "arm-a");
    addBox(group, [0.22, 0.72, 0.22], [0.42, 0.92, 0.02], body, "arm-b");
    addBox(group, [0.24, 0.78, 0.24], [-0.16, 0.32, 0], legs, "leg-a");
    addBox(group, [0.24, 0.78, 0.24], [0.16, 0.32, 0], legs, "leg-b");
    addBox(group, [0.08, 0.08, 0.03], [-0.12, 1.58, -0.31], eyes);
    addBox(group, [0.08, 0.08, 0.03], [0.12, 1.58, -0.31], eyes);

    if (definition.behavior === "skeleton") {
      addBox(group, [0.06, 0.72, 0.06], [0.52, 0.92, -0.18], mat("#8b5f35"));
      addBox(group, [0.05, 0.8, 0.05], [0.62, 0.92, -0.18], mat("#d8d3c0"));
    }

    return group;
  }

  private createCreeperMesh(definition: MobDefinition): THREE.Group {
    const group = new THREE.Group();
    const body = mat(definition.colors.body);
    const accent = mat(definition.colors.accent ?? definition.colors.body);
    const eyes = new THREE.MeshBasicMaterial({ color: definition.colors.eyes ?? "#101510" });

    addBox(group, [0.58, 0.72, 0.58], [0, 1.35, 0], body);
    addBox(group, [0.58, 0.9, 0.42], [0, 0.72, 0], accent);
    addBox(group, [0.2, 0.38, 0.24], [-0.22, 0.2, -0.16], body, "leg-a");
    addBox(group, [0.2, 0.38, 0.24], [0.22, 0.2, -0.16], body, "leg-b");
    addBox(group, [0.2, 0.38, 0.24], [-0.22, 0.2, 0.18], body, "leg-b");
    addBox(group, [0.2, 0.38, 0.24], [0.22, 0.2, 0.18], body, "leg-a");
    addBox(group, [0.1, 0.09, 0.03], [-0.13, 1.45, -0.31], eyes);
    addBox(group, [0.1, 0.09, 0.03], [0.13, 1.45, -0.31], eyes);
    addBox(group, [0.12, 0.18, 0.03], [0, 1.26, -0.31], eyes);
    return group;
  }

  private createSpiderMesh(definition: MobDefinition): THREE.Group {
    const group = new THREE.Group();
    const body = mat(definition.colors.body);
    const legs = mat(definition.colors.legs ?? "#1d171f");
    const eye = new THREE.MeshBasicMaterial({ color: definition.colors.eyes ?? "#d8423a" });
    addBox(group, [1.08, 0.38, 0.78], [0, 0.48, 0], body);
    addBox(group, [0.58, 0.34, 0.46], [0, 0.54, -0.56], mat(definition.colors.accent ?? definition.colors.body));
    for (let side of [-1, 1]) {
      for (let index = 0; index < 4; index += 1) {
        const z = -0.46 + index * 0.3;
        const leg = addBox(group, [0.56, 0.08, 0.08], [side * 0.72, 0.42, z], legs, index % 2 === 0 ? "leg-a" : "leg-b");
        leg.rotation.z = side * 0.25;
      }
    }
    addBox(group, [0.09, 0.07, 0.03], [-0.13, 0.6, -0.81], eye);
    addBox(group, [0.09, 0.07, 0.03], [0.13, 0.6, -0.81], eye);
    return group;
  }

  private createAnimalMesh(definition: MobDefinition): THREE.Group {
    const group = new THREE.Group();
    const body = mat(definition.colors.body);
    const accent = mat(definition.colors.accent ?? definition.colors.body);
    const legs = mat(definition.colors.legs ?? definition.colors.body);
    const eye = new THREE.MeshBasicMaterial({ color: definition.colors.eyes ?? "#111" });
    const chicken = definition.type === "chicken";

    addBox(group, chicken ? [0.42, 0.46, 0.38] : [0.9, 0.58, 0.52], chicken ? [0, 0.46, 0] : [0, 0.72, 0], body);
    addBox(group, chicken ? [0.28, 0.28, 0.28] : [0.44, 0.42, 0.42], chicken ? [0, 0.78, -0.28] : [0, 0.9, -0.52], accent);
    addBox(group, [0.07, 0.06, 0.03], [-0.08, chicken ? 0.82 : 0.96, chicken ? -0.44 : -0.75], eye);
    addBox(group, [0.07, 0.06, 0.03], [0.08, chicken ? 0.82 : 0.96, chicken ? -0.44 : -0.75], eye);

    const legHeight = chicken ? 0.32 : 0.52;
    for (const [i, x] of [-0.28, 0.28].entries()) {
      addBox(group, [0.13, legHeight, 0.13], [x, legHeight * 0.5, -0.18], legs, i === 0 ? "leg-a" : "leg-b");
      if (!chicken) {
        addBox(group, [0.13, legHeight, 0.13], [x, legHeight * 0.5, 0.24], legs, i === 0 ? "leg-b" : "leg-a");
      }
    }

    return group;
  }
}

function isMobType(value: string): value is MobType {
  return value in DEFINITIONS;
}

function mat(color: string): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.88 });
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
    for (const entry of material) {
      entry.dispose();
    }
    return;
  }

  material.dispose();
}
