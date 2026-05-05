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
});
