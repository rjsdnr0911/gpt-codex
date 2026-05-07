import { BlockType, WORLD_HEIGHT } from "./blocks";
import { World } from "./world";

export interface PortalIgniteResult {
  success: boolean;
  changed: number;
  orientation?: "x" | "z";
}

export function tryIgnitePortal(world: World, x: number, y: number, z: number): PortalIgniteResult {
  const fromInterior = world.getBlock(x, y, z) === BlockType.Air || world.getBlock(x, y, z) === BlockType.Fire;
  const candidates = fromInterior
    ? [
        { x, y, z },
        { x: x - 1, y, z },
        { x, y, z: z - 1 }
      ]
    : [
        { x: x + 1, y, z },
        { x: x - 2, y, z },
        { x, y, z: z + 1 },
        { x, y, z: z - 2 }
      ];

  for (const candidate of candidates) {
    const xFrame = validateFrame(world, candidate.x, candidate.y, candidate.z, "x");
    if (xFrame) {
      return fillPortal(world, xFrame.x, xFrame.y, xFrame.z, "x");
    }

    const zFrame = validateFrame(world, candidate.x, candidate.y, candidate.z, "z");
    if (zFrame) {
      return fillPortal(world, zFrame.x, zFrame.y, zFrame.z, "z");
    }
  }

  return { success: false, changed: 0 };
}

export function isInPortal(world: World, x: number, y: number, z: number): boolean {
  return (
    world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z)) === BlockType.NetherPortal ||
    world.getBlock(Math.floor(x), Math.floor(y + 1), Math.floor(z)) === BlockType.NetherPortal
  );
}

function validateFrame(
  world: World,
  interiorX: number,
  interiorY: number,
  interiorZ: number,
  orientation: "x" | "z"
): { x: number; y: number; z: number } | null {
  const minY = interiorY;
  if (minY < 1 || minY + 3 >= WORLD_HEIGHT) {
    return null;
  }

  for (let h = 0; h < 3; h += 1) {
    for (let w = 0; w < 2; w += 1) {
      const { x, z } = portalCoord(interiorX, interiorZ, w, orientation);
      if (!isInterior(world.getBlock(x, minY + h, z))) {
        return null;
      }
    }
  }

  for (let w = 0; w < 2; w += 1) {
    const bottom = portalCoord(interiorX, interiorZ, w, orientation);
    const top = portalCoord(interiorX, interiorZ, w, orientation);
    if (world.getBlock(bottom.x, minY - 1, bottom.z) !== BlockType.Obsidian) {
      return null;
    }
    if (world.getBlock(top.x, minY + 3, top.z) !== BlockType.Obsidian) {
      return null;
    }
  }

  for (let h = -1; h <= 3; h += 1) {
    const left = portalCoord(interiorX, interiorZ, -1, orientation);
    const right = portalCoord(interiorX, interiorZ, 2, orientation);
    if (world.getBlock(left.x, minY + h, left.z) !== BlockType.Obsidian) {
      return null;
    }
    if (world.getBlock(right.x, minY + h, right.z) !== BlockType.Obsidian) {
      return null;
    }
  }

  return { x: interiorX, y: minY, z: interiorZ };
}

function fillPortal(world: World, interiorX: number, interiorY: number, interiorZ: number, orientation: "x" | "z"): PortalIgniteResult {
  let changed = 0;
  for (let h = 0; h < 3; h += 1) {
    for (let w = 0; w < 2; w += 1) {
      const { x, z } = portalCoord(interiorX, interiorZ, w, orientation);
      if (world.setBlock(x, interiorY + h, z, BlockType.NetherPortal)) {
        changed += 1;
      }
    }
  }

  return { success: changed > 0, changed, orientation };
}

function portalCoord(interiorX: number, interiorZ: number, width: number, orientation: "x" | "z"): { x: number; z: number } {
  return orientation === "x" ? { x: interiorX + width, z: interiorZ } : { x: interiorX, z: interiorZ + width };
}

function isInterior(block: BlockType): boolean {
  return block === BlockType.Air || block === BlockType.Fire || block === BlockType.NetherPortal;
}
