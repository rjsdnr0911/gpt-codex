import * as THREE from "three";
import { BlockType, WORLD_HEIGHT, isSolid } from "./blocks";
import { clamp } from "./math";
import { World } from "./world";

interface HostileMob {
  id: number;
  health: number;
  attackCooldown: number;
  age: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  mesh: THREE.Group;
}

export interface MobHitResult {
  killed: boolean;
}

const MOB_RADIUS = 0.34;
const MOB_HEIGHT = 1.74;

export class MobManager {
  readonly group = new THREE.Group();

  private readonly mobs: HostileMob[] = [];
  private spawnTimer = 1.5;
  private nextId = 1;

  constructor() {
    this.group.name = "Hostile mobs";
  }

  clear(): void {
    for (const mob of this.mobs) {
      this.group.remove(mob.mesh);
      this.disposeMob(mob.mesh);
    }
    this.mobs.length = 0;
    this.spawnTimer = 1.5;
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
  ): number {
    this.spawnTimer -= delta;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 5 + Math.random() * 4;
      this.trySpawn(world, playerPosition, dayFactor, undergroundFactor);
    }

    let damage = 0;

    for (let index = this.mobs.length - 1; index >= 0; index -= 1) {
      const mob = this.mobs[index];
      mob.age += delta;
      mob.attackCooldown = Math.max(0, mob.attackCooldown - delta);

      const toPlayer = playerPosition.clone().sub(mob.position);
      const horizontalDistance = Math.hypot(toPlayer.x, toPlayer.z);
      const verticalDistance = Math.abs(toPlayer.y);

      if (horizontalDistance > 72 || mob.position.y < -12 || mob.age > 420) {
        this.removeMob(index);
        continue;
      }

      const desired = new THREE.Vector3();
      if (horizontalDistance < 34) {
        desired.set(toPlayer.x, 0, toPlayer.z).normalize().multiplyScalar(1.75);
      } else {
        desired.set(Math.sin(elapsed * 0.7 + mob.id), 0, Math.cos(elapsed * 0.5 + mob.id)).multiplyScalar(0.45);
      }

      mob.velocity.x += (desired.x - mob.velocity.x) * clamp(delta * 4, 0, 1);
      mob.velocity.z += (desired.z - mob.velocity.z) * clamp(delta * 4, 0, 1);
      mob.velocity.y -= 18 * delta;

      this.moveMob(mob, world, delta);

      if (horizontalDistance > 0.001) {
        mob.mesh.rotation.y = Math.atan2(toPlayer.x, toPlayer.z);
      }

      const bob = Math.sin((elapsed + mob.id) * 7.5) * Math.min(1, horizontalDistance / 8) * 0.05;
      mob.mesh.children[2].rotation.x = bob * 3.5;
      mob.mesh.children[3].rotation.x = -bob * 3.5;
      mob.mesh.position.copy(mob.position);

      if (horizontalDistance < 1.15 && verticalDistance < 1.8 && mob.attackCooldown <= 0) {
        damage += 2;
        mob.attackCooldown = 1.25;
      }
    }

    return damage;
  }

  hitByRay(origin: THREE.Vector3, direction: THREE.Vector3, maxDistance: number, damage: number): MobHitResult | null {
    let bestIndex = -1;
    let bestDistance = Infinity;

    for (let index = 0; index < this.mobs.length; index += 1) {
      const mob = this.mobs[index];
      const center = mob.position.clone();
      center.y += 0.9;
      const toCenter = center.clone().sub(origin);
      const projection = toCenter.dot(direction);

      if (projection < 0 || projection > maxDistance) {
        continue;
      }

      const closest = origin.clone().add(direction.clone().multiplyScalar(projection));
      const distance = closest.distanceTo(center);
      if (distance < 0.68 && projection < bestDistance) {
        bestDistance = projection;
        bestIndex = index;
      }
    }

    if (bestIndex < 0) {
      return null;
    }

    const mob = this.mobs[bestIndex];
    mob.health -= damage;
    mob.velocity.add(direction.clone().multiplyScalar(3.2));
    mob.velocity.y = 3;

    if (mob.health <= 0) {
      this.removeMob(bestIndex);
      return { killed: true };
    }

    return { killed: false };
  }

  private trySpawn(world: World, playerPosition: THREE.Vector3, dayFactor: number, undergroundFactor: number): void {
    if (this.mobs.length >= 8) {
      return;
    }

    const night = dayFactor < 0.34;
    const cave = undergroundFactor > 0.48;
    if (!night && !cave) {
      return;
    }

    for (let attempt = 0; attempt < 18; attempt += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 18 + Math.random() * 18;
      const x = Math.floor(playerPosition.x + Math.cos(angle) * distance) + 0.5;
      const z = Math.floor(playerPosition.z + Math.sin(angle) * distance) + 0.5;
      const y = cave
        ? this.findCaveSpawnY(world, Math.floor(x), Math.floor(playerPosition.y), Math.floor(z))
        : world.terrainHeight(Math.floor(x), Math.floor(z)) + 1;

      if (y === null || y < 3 || y > WORLD_HEIGHT - 3) {
        continue;
      }

      if (this.isSpawnSpace(world, Math.floor(x), y, Math.floor(z))) {
        this.spawnAt(x, y, z);
        return;
      }
    }
  }

  private findCaveSpawnY(world: World, x: number, centerY: number, z: number): number | null {
    for (let offset = 0; offset <= 9; offset += 1) {
      for (const sign of [-1, 1]) {
        const y = centerY + offset * sign;
        if (this.isSpawnSpace(world, x, y, z)) {
          return y;
        }
      }
    }

    return null;
  }

  private spawnAt(x: number, y: number, z: number): void {
    const mob: HostileMob = {
      id: this.nextId,
      health: 12,
      attackCooldown: 1.1,
      age: 0,
      position: new THREE.Vector3(x, y, z),
      velocity: new THREE.Vector3(),
      mesh: this.createMobMesh()
    };
    this.nextId += 1;
    mob.mesh.position.copy(mob.position);
    this.mobs.push(mob);
    this.group.add(mob.mesh);
  }

  private removeMob(index: number): void {
    const mob = this.mobs[index];
    this.group.remove(mob.mesh);
    this.disposeMob(mob.mesh);
    this.mobs.splice(index, 1);
  }

  private disposeMob(mesh: THREE.Group): void {
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

  private moveMob(mob: HostileMob, world: World, delta: number): void {
    const next = mob.position.clone();
    next.x += mob.velocity.x * delta;
    if (this.collidesAt(next, world)) {
      next.x = mob.position.x;
      mob.velocity.x = 0;
    }

    next.z += mob.velocity.z * delta;
    if (this.collidesAt(next, world)) {
      next.z = mob.position.z;
      mob.velocity.z = 0;
    }

    next.y += mob.velocity.y * delta;
    if (this.collidesAt(next, world)) {
      next.y = mob.position.y;
      if (mob.velocity.y < -4 && Math.hypot(mob.velocity.x, mob.velocity.z) > 0.4) {
        mob.velocity.y = 5.8;
      } else {
        mob.velocity.y = 0;
      }
    }

    mob.position.copy(next);
  }

  private collidesAt(position: THREE.Vector3, world: World): boolean {
    const minX = Math.floor(position.x - MOB_RADIUS);
    const maxX = Math.floor(position.x + MOB_RADIUS);
    const minY = Math.floor(position.y);
    const maxY = Math.floor(position.y + MOB_HEIGHT);
    const minZ = Math.floor(position.z - MOB_RADIUS);
    const maxZ = Math.floor(position.z + MOB_RADIUS);

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

  private isSpawnSpace(world: World, x: number, y: number, z: number): boolean {
    return (
      world.getBlock(x, y - 1, z) !== BlockType.Water &&
      isSolid(world.getBlock(x, y - 1, z)) &&
      world.getBlock(x, y, z) === BlockType.Air &&
      world.getBlock(x, y + 1, z) === BlockType.Air
    );
  }

  private createMobMesh(): THREE.Group {
    const group = new THREE.Group();
    const skin = new THREE.MeshStandardMaterial({ color: "#517b55", roughness: 0.88 });
    const shirt = new THREE.MeshStandardMaterial({ color: "#3f6680", roughness: 0.9 });
    const pants = new THREE.MeshStandardMaterial({ color: "#374255", roughness: 0.9 });
    const eye = new THREE.MeshBasicMaterial({ color: "#ffdf67" });

    const addBox = (
      size: [number, number, number],
      position: [number, number, number],
      material: THREE.Material
    ): THREE.Mesh => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
      mesh.position.set(...position);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      return mesh;
    };

    addBox([0.58, 0.58, 0.58], [0, 1.52, 0], skin);
    addBox([0.62, 0.7, 0.34], [0, 0.94, 0], shirt);
    addBox([0.22, 0.72, 0.22], [-0.42, 0.92, 0.02], skin);
    addBox([0.22, 0.72, 0.22], [0.42, 0.92, 0.02], skin);
    addBox([0.24, 0.78, 0.24], [-0.16, 0.32, 0], pants);
    addBox([0.24, 0.78, 0.24], [0.16, 0.32, 0], pants);
    addBox([0.08, 0.08, 0.03], [-0.12, 1.58, -0.31], eye);
    addBox([0.08, 0.08, 0.03], [0.12, 1.58, -0.31], eye);

    return group;
  }
}
