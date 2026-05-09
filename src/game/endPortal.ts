import { BlockType } from "./blocks";
import { World } from "./world";

export interface EndPortalActivationResult {
  inserted: boolean;
  activated: boolean;
}

export function insertEyeAndTryActivate(world: World, x: number, y: number, z: number): EndPortalActivationResult {
  if (world.getBlock(x, y, z) !== BlockType.EndPortalFrame) {
    return { inserted: false, activated: false };
  }

  world.setBlock(x, y, z, BlockType.EndPortalFrameEye);
  return { inserted: true, activated: tryActivateEndPortal(world, x, y, z) };
}

export function tryActivateEndPortal(world: World, frameX: number, frameY: number, frameZ: number): boolean {
  for (let centerX = frameX - 2; centerX <= frameX + 2; centerX += 1) {
    for (let centerZ = frameZ - 2; centerZ <= frameZ + 2; centerZ += 1) {
      if (isCompletePortalRing(world, centerX, frameY, centerZ)) {
        fillEndPortal(world, centerX, frameY, centerZ);
        return true;
      }
    }
  }

  return false;
}

export function isInEndPortal(world: World, x: number, y: number, z: number): boolean {
  const minX = Math.floor(x - 0.28);
  const maxX = Math.floor(x + 0.28);
  const minY = Math.floor(y);
  const maxY = Math.floor(y + 1.55);
  const minZ = Math.floor(z - 0.28);
  const maxZ = Math.floor(z + 0.28);

  for (let bz = minZ; bz <= maxZ; bz += 1) {
    for (let by = minY; by <= maxY; by += 1) {
      for (let bx = minX; bx <= maxX; bx += 1) {
        if (world.getBlock(bx, by, bz) === BlockType.EndPortal) {
          return true;
        }
      }
    }
  }

  return false;
}

function isCompletePortalRing(world: World, centerX: number, y: number, centerZ: number): boolean {
  for (let dz = -2; dz <= 2; dz += 1) {
    for (let dx = -2; dx <= 2; dx += 1) {
      const edge = Math.abs(dx) === 2 || Math.abs(dz) === 2;
      const corner = Math.abs(dx) === 2 && Math.abs(dz) === 2;

      if (!edge || corner) {
        continue;
      }

      if (world.getBlock(centerX + dx, y, centerZ + dz) !== BlockType.EndPortalFrameEye) {
        return false;
      }
    }
  }

  return true;
}

function fillEndPortal(world: World, centerX: number, y: number, centerZ: number): void {
  for (let dz = -1; dz <= 1; dz += 1) {
    for (let dx = -1; dx <= 1; dx += 1) {
      world.setBlock(centerX + dx, y, centerZ + dz, BlockType.EndPortal);
    }
  }
}
