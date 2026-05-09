import * as THREE from "three";
import { describe, expect, it } from "vitest";
import { BlockType } from "./blocks";
import { EndBossController } from "./endBoss";
import { WORLDGEN_VERSION, World } from "./world";

describe("end boss", () => {
  it("tracks crystals and can be defeated by a high damage ray hit", () => {
    const world = new World("boss-test", {} as never, WORLDGEN_VERSION, "end");
    world.ensureChunksAround(new THREE.Vector3(0, 48, 0), 4);
    const boss = new EndBossController();

    boss.setWorld(world, false);
    boss.update(0.1, new THREE.Vector3(0, 40, -20), 4);

    expect(boss.stats?.crystals).toBe(8);
    expect(boss.stats?.phaseKo).toBeTruthy();

    const crystal = world.endCrystalLocations()[0];
    const destroyed = boss.destroyCrystalAt(Math.floor(crystal.x), Math.floor(crystal.y), Math.floor(crystal.z));

    expect(destroyed.destroyed).toBe(true);
    expect(world.getBlock(Math.floor(crystal.x), Math.floor(crystal.y), Math.floor(crystal.z))).toBe(BlockType.Air);
    expect(boss.stats?.crystals).toBe(7);

    const hit = boss.hitDragonByRay(new THREE.Vector3(0, 54, -30), new THREE.Vector3(0, 0, 1), 64, 999);
    expect(hit.killed).toBe(true);
  });
});
