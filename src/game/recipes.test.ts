import { describe, expect, it } from "vitest";
import { addStack, createInventoryState } from "./inventory";
import { consumeRecipeGrid, canCraft, craft, matchRecipeFromGrid, RECIPES } from "./recipes";

describe("recipes", () => {
  it("crafts planks from one log in a 2x2 inventory grid", () => {
    const inventory = createInventoryState();
    addStack(inventory, { item: "log", count: 1 });
    const recipe = RECIPES.find((entry) => entry.id === "planks");

    expect(recipe).toBeDefined();
    expect(canCraft(recipe!, inventory, 2)).toBe(true);
    expect(craft(recipe!, inventory, 2)).toBe(4);
    expect(inventory.slots.some((slot) => slot?.item === "planks" && slot.count === 4)).toBe(true);
  });

  it("requires a 3x3 grid for pickaxes", () => {
    const inventory = createInventoryState();
    addStack(inventory, { item: "planks", count: 3 });
    addStack(inventory, { item: "stick", count: 2 });
    const recipe = RECIPES.find((entry) => entry.id === "wooden_pickaxe");

    expect(recipe).toBeDefined();
    expect(canCraft(recipe!, inventory, 2)).toBe(false);
    expect(canCraft(recipe!, inventory, 3)).toBe(true);
  });

  it("matches and consumes a manual 3x3 pickaxe grid", () => {
    const grid = [
      { item: "planks" as const, count: 1 },
      { item: "planks" as const, count: 1 },
      { item: "planks" as const, count: 1 },
      null,
      { item: "stick" as const, count: 1 },
      null,
      null,
      { item: "stick" as const, count: 1 },
      null
    ];

    const recipe = matchRecipeFromGrid(grid, 3);

    expect(recipe?.id).toBe("wooden_pickaxe");
    consumeRecipeGrid(grid, recipe!, 3);
    expect(grid.every((slot) => slot === null)).toBe(true);
  });

  it("adds portal preparation recipes", () => {
    const inventory = createInventoryState();
    addStack(inventory, { item: "iron_ingot", count: 4 });
    addStack(inventory, { item: "flint", count: 1 });
    const bucket = RECIPES.find((entry) => entry.id === "bucket");
    const flintAndSteel = RECIPES.find((entry) => entry.id === "flint_and_steel");

    expect(bucket).toBeDefined();
    expect(flintAndSteel).toBeDefined();
    expect(canCraft(bucket!, inventory, 3)).toBe(true);
    expect(canCraft(flintAndSteel!, inventory, 2)).toBe(true);
  });

  it("crafts blaze powder and an eye of ender from nether progression drops", () => {
    const inventory = createInventoryState();
    addStack(inventory, { item: "blaze_rod", count: 1 });
    addStack(inventory, { item: "ender_pearl", count: 1 });
    const powder = RECIPES.find((entry) => entry.id === "blaze_powder");
    const eye = RECIPES.find((entry) => entry.id === "eye_of_ender");

    expect(powder).toBeDefined();
    expect(eye).toBeDefined();
    expect(craft(powder!, inventory, 2)).toBe(2);
    expect(canCraft(eye!, inventory, 2)).toBe(true);
    expect(craft(eye!, inventory, 2)).toBe(1);
    expect(inventory.slots.some((slot) => slot?.item === "eye_of_ender")).toBe(true);
  });
});
