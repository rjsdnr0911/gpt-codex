import * as THREE from "three";
import { BlockType, WORLD_HEIGHT, isSolid } from "./blocks";
import { InputController } from "./input";
import { clamp } from "./math";
import { SavedPlayer } from "./saveSystem";
import { World } from "./world";

const PLAYER_RADIUS = 0.32;
const PLAYER_HEIGHT = 1.78;
const EYE_HEIGHT = 1.58;

export class Player {
  readonly position: THREE.Vector3;
  readonly velocity = new THREE.Vector3();
  yaw = 0;
  pitch = 0;
  grounded = false;
  lastLandingSpeed = 0;

  private readonly camera: THREE.PerspectiveCamera;

  constructor(camera: THREE.PerspectiveCamera, position: THREE.Vector3) {
    this.camera = camera;
    this.position = position.clone();
    this.camera.rotation.order = "YXZ";
    this.syncCamera();
  }

  restore(saved: SavedPlayer): void {
    this.position.fromArray(saved.position);
    this.yaw = saved.yaw;
    this.pitch = saved.pitch;
    this.syncCamera();
  }

  snapshot(selectedSlot: number): SavedPlayer {
    return {
      position: [this.position.x, this.position.y, this.position.z],
      yaw: this.yaw,
      pitch: this.pitch,
      selectedSlot
    };
  }

  applyLook(movementX: number, movementY: number, sensitivityMultiplier = 1): void {
    const sensitivity = 0.0022 * sensitivityMultiplier;
    this.yaw -= movementX * sensitivity;
    this.pitch -= movementY * sensitivity;
    this.pitch = clamp(this.pitch, -Math.PI / 2 + 0.03, Math.PI / 2 - 0.03);
  }

  update(delta: number, input: InputController, world: World, canSprint = true, sneaking = false, creative = false): void {
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const wish = new THREE.Vector3();

    if (input.isDown("KeyW")) {
      wish.add(forward);
    }

    if (input.isDown("KeyS")) {
      wish.sub(forward);
    }

    if (input.isDown("KeyD")) {
      wish.add(right);
    }

    if (input.isDown("KeyA")) {
      wish.sub(right);
    }

    if (wish.lengthSq() > 0) {
      wish.normalize();
    }

    const wantsSprint = input.isDown("ControlLeft") || input.isDown("ControlRight") || input.isDown("KeyR");
    const inWater = this.isInWater(world);

    if (creative) {
      const speed = wantsSprint ? 9.2 : 6.2;
      this.velocity.x = wish.x * speed;
      this.velocity.z = wish.z * speed;
      this.velocity.y = input.isDown("Space") ? 5.6 : sneaking ? -5.6 : 0;
      this.moveWithCollision(delta, world);
      this.grounded = true;
      this.lastLandingSpeed = 0;
      this.syncCamera();
      return;
    }

    const speed = wantsSprint && canSprint && !inWater ? 7.1 : sneaking ? 2.1 : 4.6;
    this.velocity.x = wish.x * (inWater ? speed * 0.48 : speed);
    this.velocity.z = wish.z * (inWater ? speed * 0.48 : speed);

    if (inWater) {
      this.velocity.y = Math.max(this.velocity.y - 4.4 * delta, -2.4);

      if (input.isDown("Space")) {
        this.velocity.y = 3.0;
      }
    } else {
      this.velocity.y -= 22 * delta;

      if (input.isDown("Space") && this.grounded) {
        this.velocity.y = 7.4;
        this.grounded = false;
      }
    }

    this.moveWithCollision(delta, world);

    if (this.position.y < -12 || this.position.y > WORLD_HEIGHT + 18) {
      this.position.copy(world.findSpawn());
      this.velocity.set(0, 0, 0);
    }

    this.syncCamera();
  }

  private moveWithCollision(delta: number, world: World): void {
    const next = this.position.clone();
    next.x += this.velocity.x * delta;

    if (this.collidesAt(next, world)) {
      next.x = this.position.x;
      this.velocity.x = 0;
    }

    next.z += this.velocity.z * delta;

    if (this.collidesAt(next, world)) {
      next.z = this.position.z;
      this.velocity.z = 0;
    }

    this.grounded = false;
    this.lastLandingSpeed = 0;
    next.y += this.velocity.y * delta;

    if (this.collidesAt(next, world)) {
      if (this.velocity.y < 0) {
        this.grounded = true;
        this.lastLandingSpeed = -this.velocity.y;
      }

      next.y = this.position.y;
      this.velocity.y = 0;
    }

    this.position.copy(next);
  }

  collidesAt(position: THREE.Vector3, world: World): boolean {
    const minX = Math.floor(position.x - PLAYER_RADIUS);
    const maxX = Math.floor(position.x + PLAYER_RADIUS);
    const minY = Math.floor(position.y);
    const maxY = Math.floor(position.y + PLAYER_HEIGHT - 0.02);
    const minZ = Math.floor(position.z - PLAYER_RADIUS);
    const maxZ = Math.floor(position.z + PLAYER_RADIUS);

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

  intersectsBlock(x: number, y: number, z: number): boolean {
    const minX = this.position.x - PLAYER_RADIUS;
    const maxX = this.position.x + PLAYER_RADIUS;
    const minY = this.position.y;
    const maxY = this.position.y + PLAYER_HEIGHT;
    const minZ = this.position.z - PLAYER_RADIUS;
    const maxZ = this.position.z + PLAYER_RADIUS;

    return (
      maxX > x &&
      minX < x + 1 &&
      maxY > y &&
      minY < y + 1 &&
      maxZ > z &&
      minZ < z + 1
    );
  }

  getEyePosition(target = new THREE.Vector3()): THREE.Vector3 {
    return target.set(this.position.x, this.position.y + EYE_HEIGHT, this.position.z);
  }

  getViewDirection(target = new THREE.Vector3()): THREE.Vector3 {
    this.camera.getWorldDirection(target);
    return target.normalize();
  }

  isInWater(world: World): boolean {
    const feet = world.getBlock(Math.floor(this.position.x), Math.floor(this.position.y), Math.floor(this.position.z));
    const chest = world.getBlock(
      Math.floor(this.position.x),
      Math.floor(this.position.y + 1.1),
      Math.floor(this.position.z)
    );
    return feet === BlockType.Water || chest === BlockType.Water;
  }

  private syncCamera(): void {
    this.camera.position.set(this.position.x, this.position.y + EYE_HEIGHT, this.position.z);
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
    this.camera.rotation.z = 0;
  }
}
