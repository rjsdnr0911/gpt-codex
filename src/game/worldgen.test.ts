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

  it("places a deterministic stronghold with an end portal room", () => {
    const world = new World("stronghold-seed", {} as never, WORLDGEN_VERSION);
    const location = world.strongholdLocation();
    const secondWorld = new World("stronghold-seed", {} as never, WORLDGEN_VERSION);

    expect(secondWorld.strongholdLocation().x).toBe(location.x);
    expect(secondWorld.strongholdLocation().z).toBe(location.z);

    world.ensureChunksAround(location, 3);

    let portalFrames = 0;
    let bricks = 0;
    let bookshelves = 0;

    for (let z = Math.floor(location.z) - 28; z <= Math.floor(location.z) + 32; z += 1) {
      for (let x = Math.floor(location.x) - 34; x <= Math.floor(location.x) + 34; x += 1) {
        for (let y = 12; y <= 26; y += 1) {
          const block = world.getBlock(x, y, z);
          if (block === BlockType.EndPortalFrame || block === BlockType.EndPortalFrameEye) {
            portalFrames += 1;
          }
          if (
            block === BlockType.StoneBricks ||
            block === BlockType.CrackedStoneBricks ||
            block === BlockType.MossyStoneBricks
          ) {
            bricks += 1;
          }
          if (block === BlockType.Bookshelf) {
            bookshelves += 1;
          }
        }
      }
    }

    expect(portalFrames).toBe(12);
    expect(bricks).toBeGreaterThan(250);
    expect(bookshelves).toBeGreaterThan(30);
  });
});
