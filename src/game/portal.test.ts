import { describe, expect, it } from "vitest";
import { BlockType } from "./blocks";
import { tryIgnitePortal } from "./portal";
import { World } from "./world";

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
});
