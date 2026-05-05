import { describe, expect, it } from "vitest";
import { addStack, createInventoryState } from "./inventory";
import { canSmelt, smelt, SMELTING_RECIPES } from "./smelting";

describe("smelting", () => {
  it("smelts raw iron with coal into an iron ingot", () => {
    const inventory = createInventoryState();
    addStack(inventory, { item: "raw_iron", count: 1 });
    addStack(inventory, { item: "coal", count: 1 });
    const recipe = SMELTING_RECIPES.find((entry) => entry.id === "smelt_iron");

    expect(recipe).toBeDefined();
    expect(canSmelt(recipe!, inventory)).toBe(true);
    expect(smelt(recipe!, inventory)).toBe(1);
    expect(inventory.slots.some((slot) => slot?.item === "iron_ingot" && slot.count === 1)).toBe(true);
    expect(inventory.slots.some((slot) => slot?.item === "raw_iron")).toBe(false);
    expect(inventory.slots.some((slot) => slot?.item === "coal")).toBe(false);
  });
});
