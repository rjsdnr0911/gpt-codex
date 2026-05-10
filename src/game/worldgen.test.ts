import { describe, expect, it } from "vitest";
import * as THREE from "three";
import { BlockType, WORLD_HEIGHT } from "./blocks";
import { WORLDGEN_VERSION, World } from "./world";

function countBlocks(
  world: World,
  centerX: number,
  centerZ: number,
  radius: number,
  minY: number,
  maxY: number,
  blocks: BlockType[]
): Map<BlockType, number> {
  const targets = new Set(blocks);
  const counts = new Map<BlockType, number>();

  for (let z = centerZ - radius; z <= centerZ + radius; z += 1) {
    for (let x = centerX - radius; x <= centerX + radius; x += 1) {
      for (let y = minY; y <= maxY; y += 1) {
        const block = world.getBlock(x, y, z);
        if (targets.has(block)) {
          counts.set(block, (counts.get(block) ?? 0) + 1);
        }
      }
    }
  }

  return counts;
}

function addCounts(target: Map<BlockType, number>, source: Map<BlockType, number>): void {
  for (const [block, count] of source) {
    target.set(block, (target.get(block) ?? 0) + count);
  }
}

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

  it("generates the end island with obsidian pillars and crystals", () => {
    const world = new World("end-seed", {} as never, WORLDGEN_VERSION, "end");
    const spawn = world.findSpawn();

    world.ensureChunksAround(new THREE.Vector3(0, spawn.y, 0), 4);

    expect(world.getBlock(0, 38, -58)).toBe(BlockType.Obsidian);
    expect(world.getBlock(0, 38, -45)).toBe(BlockType.EndStoneBricks);
    expect(world.getNaturalBlock(0, world.terrainHeight(0, 0), 0)).toBe(BlockType.EndStone);
    expect(world.getBlock(0, -1, 0)).toBe(BlockType.Air);

    const crystals = world.endCrystalLocations().filter((position) =>
      world.getBlock(Math.floor(position.x), Math.floor(position.y), Math.floor(position.z)) === BlockType.EndCrystal
    );

    expect(crystals.length).toBe(8);
  });

  it("places deterministic overworld landmark structures", () => {
    const world = new World("landmark-seed", {} as never, WORLDGEN_VERSION);

    const trackedBlocks = [
      BlockType.Bed,
      BlockType.Chest,
      BlockType.Bookshelf,
      BlockType.Obsidian,
      BlockType.RuinedPortalDebris,
      BlockType.Basalt,
      BlockType.StoneBricks,
      BlockType.Planks,
      BlockType.Log
    ];
    const surfaceCounts = new Map<BlockType, number>();
    for (const [x, y, z, radius] of [
      [48, 36, 48, 34],
      [-72, 24, 20, 20],
      [64, 36, -64, 14],
      [-96, 10, -96, 36],
      [128, 40, -96, 36],
      [96, 18, 96, 30]
    ] as const) {
      world.ensureChunksAround(new THREE.Vector3(x, y, z), 4);
      addCounts(surfaceCounts, countBlocks(world, x, z, radius, 2, WORLD_HEIGHT - 1, trackedBlocks));
    }

    expect(surfaceCounts.get(BlockType.Bed) ?? 0).toBeGreaterThanOrEqual(4);
    expect(surfaceCounts.get(BlockType.Chest) ?? 0).toBeGreaterThanOrEqual(6);
    expect(surfaceCounts.get(BlockType.Bookshelf) ?? 0).toBeGreaterThan(10);
    expect((surfaceCounts.get(BlockType.Obsidian) ?? 0) + (surfaceCounts.get(BlockType.RuinedPortalDebris) ?? 0)).toBeGreaterThan(12);
    expect(surfaceCounts.get(BlockType.Basalt) ?? 0).toBeGreaterThan(40);
    expect(surfaceCounts.get(BlockType.Planks) ?? 0).toBeGreaterThan(400);
  }, 20000);

  it("places nether fortress, bastion, and end city landmarks", () => {
    const nether = new World("landmark-seed", {} as never, WORLDGEN_VERSION, "nether");
    const netherCounts = new Map<BlockType, number>();
    nether.ensureChunksAround(new THREE.Vector3(0, 37, -64), 3);
    addCounts(netherCounts, countBlocks(nether, 0, -64, 45, 20, 55, [
      BlockType.NetherBrick,
      BlockType.Basalt,
      BlockType.NetherGoldOre,
      BlockType.Chest
    ]));
    nether.ensureChunksAround(new THREE.Vector3(72, 34, 24), 3);
    addCounts(netherCounts, countBlocks(nether, 72, 24, 40, 20, 55, [
      BlockType.NetherBrick,
      BlockType.Basalt,
      BlockType.NetherGoldOre,
      BlockType.Chest
    ]));
    expect(netherCounts.get(BlockType.NetherBrick) ?? 0).toBeGreaterThan(300);
    expect(netherCounts.get(BlockType.Basalt) ?? 0).toBeGreaterThan(80);
    expect(netherCounts.get(BlockType.NetherGoldOre) ?? 0).toBeGreaterThanOrEqual(2);
    expect(netherCounts.get(BlockType.Chest) ?? 0).toBeGreaterThanOrEqual(2);

    const end = new World("landmark-seed", {} as never, WORLDGEN_VERSION, "end");
    end.ensureChunksAround(new THREE.Vector3(54, 45, 30), 3);
    const endCounts = countBlocks(end, 54, 30, 30, 35, 68, [
      BlockType.EndStoneBricks,
      BlockType.IronBars,
      BlockType.Chest,
      BlockType.EndCrystal
    ]);
    expect(endCounts.get(BlockType.EndStoneBricks) ?? 0).toBeGreaterThan(160);
    expect(endCounts.get(BlockType.IronBars) ?? 0).toBeGreaterThan(8);
    expect(endCounts.get(BlockType.Chest) ?? 0).toBeGreaterThanOrEqual(1);
    expect(endCounts.get(BlockType.EndCrystal) ?? 0).toBeGreaterThanOrEqual(1);
  }, 20000);
});
