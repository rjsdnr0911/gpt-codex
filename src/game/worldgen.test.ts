import { describe, expect, it } from "vitest";
import { BlockType } from "./blocks";
import { WORLDGEN_VERSION, World } from "./world";

describe("world generation", () => {
  it("generates deterministic caves and ore families in v3 worlds", () => {
    const world = new World("ore-test-seed", {} as never, WORLDGEN_VERSION);
    const counts = new Map<BlockType, number>();

    for (let z = -48; z <= 48; z += 1) {
      for (let x = -48; x <= 48; x += 1) {
        const height = world.terrainHeight(x, z);
        for (let y = 2; y < Math.min(height - 5, 62); y += 1) {
          const block = world.getNaturalBlock(x, y, z);
          counts.set(block, (counts.get(block) ?? 0) + 1);
        }
      }
    }

    expect(counts.get(BlockType.Air) ?? 0).toBeGreaterThan(100);
    expect(counts.get(BlockType.CoalOre) ?? 0).toBeGreaterThan(20);
    expect(counts.get(BlockType.IronOre) ?? 0).toBeGreaterThan(8);
    expect(counts.get(BlockType.DiamondOre) ?? 0).toBeGreaterThan(0);
  });

  it("generates a distinct nether with lava seas and nether ore", () => {
    const world = new World("nether-test-seed", {} as never, WORLDGEN_VERSION, "nether");
    const counts = new Map<BlockType, number>();

    for (let z = -40; z <= 40; z += 1) {
      for (let x = -40; x <= 40; x += 1) {
        for (let y = 4; y < 62; y += 1) {
          const block = world.getNaturalBlock(x, y, z);
          counts.set(block, (counts.get(block) ?? 0) + 1);
        }
      }
    }

    expect(counts.get(BlockType.Netherrack) ?? 0).toBeGreaterThan(1000);
    expect(counts.get(BlockType.Lava) ?? 0).toBeGreaterThan(50);
    expect(counts.get(BlockType.Air) ?? 0).toBeGreaterThan(100);
    expect((counts.get(BlockType.QuartzOre) ?? 0) + (counts.get(BlockType.NetherGoldOre) ?? 0)).toBeGreaterThan(5);
  });
});
