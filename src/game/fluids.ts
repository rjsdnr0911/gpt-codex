import { BlockType, WORLD_HEIGHT } from "./blocks";
import { World } from "./world";

export interface FluidOrigin {
  x: number;
  y: number;
  z: number;
}

const NEIGHBORS: Array<[number, number, number]> = [
  [0, 0, 0],
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1]
];

export function applyFluidInteractions(world: World, origins: FluidOrigin[]): number {
  const candidates = new Set<string>();

  for (const origin of origins) {
    for (const [dx, dy, dz] of NEIGHBORS) {
      const y = origin.y + dy;
      if (y < 0 || y >= WORLD_HEIGHT) {
        continue;
      }
      candidates.add(`${origin.x + dx},${y},${origin.z + dz}`);
    }
  }

  let changed = 0;
  for (const key of candidates) {
    const [x, y, z] = key.split(",").map(Number);
    const block = world.getBlock(x, y, z);

    if (block === BlockType.Lava && touches(world, x, y, z, BlockType.Water)) {
      if (world.setBlock(x, y, z, BlockType.Obsidian)) {
        changed += 1;
      }
      continue;
    }

    if (block === BlockType.Water) {
      const lava = touchingPosition(world, x, y, z, BlockType.Lava);
      if (lava && world.setBlock(lava.x, lava.y, lava.z, BlockType.Obsidian)) {
        changed += 1;
      }
    }
  }

  return changed;
}

function touches(world: World, x: number, y: number, z: number, target: BlockType): boolean {
  return Boolean(touchingPosition(world, x, y, z, target));
}

function touchingPosition(
  world: World,
  x: number,
  y: number,
  z: number,
  target: BlockType
): FluidOrigin | null {
  for (const [dx, dy, dz] of NEIGHBORS.slice(1)) {
    const ny = y + dy;
    if (ny < 0 || ny >= WORLD_HEIGHT) {
      continue;
    }

    if (world.getBlock(x + dx, ny, z + dz) === target) {
      return { x: x + dx, y: ny, z: z + dz };
    }
  }

  return null;
}
