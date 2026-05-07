import { describe, expect, it } from "vitest";
import { BlockType } from "./blocks";
import { applyFluidInteractions } from "./fluids";
import { World } from "./world";

describe("fluid interactions", () => {
  it("hardens lava into obsidian when water touches it", () => {
    const world = new World("fluid-test", {} as never);
    world.setBlock(0, 8, 0, BlockType.Lava);
    world.setBlock(1, 8, 0, BlockType.Water);

    const changed = applyFluidInteractions(world, [{ x: 0, y: 8, z: 0 }]);

    expect(changed).toBe(1);
    expect(world.getBlock(0, 8, 0)).toBe(BlockType.Obsidian);
  });
});
