import { describe, expect, it } from "vitest";
import { BlockType, WORLD_HEIGHT } from "./blocks";
import { buildEndExitPortal } from "./endBoss";
import { insertEyeAndTryActivate } from "./endPortal";
import { tryIgnitePortal } from "./portal";
import { WORLDGEN_VERSION, World } from "./world";

describe("portal system", () => {
  it("fills a complete 4x5 obsidian frame with portal blocks", () => {
    const world = new World("portal-test", {} as never);
    const baseX = 0;
    const baseY = 8;
    const z = 0;

    for (let y = 0; y <= 4; y += 1) {
      world.setBlock(baseX - 1, baseY + y, z, BlockType.Obsidian);
      world.setBlock(baseX + 2, baseY + y, z, BlockType.Obsidian);
    }

    for (let x = -1; x <= 2; x += 1) {
      world.setBlock(baseX + x, baseY - 1, z, BlockType.Obsidian);
      world.setBlock(baseX + x, baseY + 3, z, BlockType.Obsidian);
    }

    for (let y = 0; y <= 2; y += 1) {
      world.setBlock(baseX, baseY + y, z, BlockType.Air);
      world.setBlock(baseX + 1, baseY + y, z, BlockType.Air);
    }

    const result = tryIgnitePortal(world, baseX, baseY, z);

    expect(result.success).toBe(true);
    expect(world.getBlock(baseX, baseY, z)).toBe(BlockType.NetherPortal);
    expect(world.getBlock(baseX + 1, baseY + 2, z)).toBe(BlockType.NetherPortal);
  });

  it("activates a 12-frame end portal ring after the final eye is inserted", () => {
    const world = new World("end-portal-test", {} as never);
    const centerX = 4;
    const y = 12;
    const centerZ = -2;

    for (let dz = -2; dz <= 2; dz += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        const edge = Math.abs(dx) === 2 || Math.abs(dz) === 2;
        const corner = Math.abs(dx) === 2 && Math.abs(dz) === 2;
        if (edge && !corner) {
          world.setBlock(centerX + dx, y, centerZ + dz, BlockType.EndPortalFrameEye);
        }
      }
    }

    world.setBlock(centerX, y, centerZ - 2, BlockType.EndPortalFrame);
    const result = insertEyeAndTryActivate(world, centerX, y, centerZ - 2);

    expect(result.inserted).toBe(true);
    expect(result.activated).toBe(true);
    expect(world.getBlock(centerX, y, centerZ)).toBe(BlockType.EndPortal);
    expect(world.getBlock(centerX + 1, y, centerZ + 1)).toBe(BlockType.EndPortal);
  });

  it("builds the end exit portal and dragon egg after the boss is defeated", () => {
    const world = new World("end-exit-test", {} as never, WORLDGEN_VERSION, "end");

    buildEndExitPortal(world);

    let portalBlocks = 0;
    let dragonEggs = 0;
    for (let y = 0; y < WORLD_HEIGHT; y += 1) {
      for (let z = -3; z <= 3; z += 1) {
        for (let x = -3; x <= 3; x += 1) {
          const block = world.getBlock(x, y, z);
          if (block === BlockType.EndPortal) {
            portalBlocks += 1;
          }
          if (block === BlockType.DragonEgg) {
            dragonEggs += 1;
          }
        }
      }
    }

    expect(portalBlocks).toBe(9);
    expect(dragonEggs).toBe(1);
  });
});
