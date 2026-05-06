import { InventoryState, addStack, countItems, removeItems } from "./inventory";
import { ItemId, ItemStack } from "./items";

export interface SmeltingRecipe {
  id: string;
  name: string;
  input: ItemId;
  fuel: ItemId;
  result: ItemStack;
  seconds: number;
}

export const SMELTING_RECIPES: SmeltingRecipe[] = [
  {
    id: "smelt_copper",
    name: "구리 주괴 제련",
    input: "raw_copper",
    fuel: "coal",
    result: { item: "copper_ingot", count: 1 },
    seconds: 10
  },
  {
    id: "smelt_iron",
    name: "철 주괴 제련",
    input: "raw_iron",
    fuel: "coal",
    result: { item: "iron_ingot", count: 1 },
    seconds: 10
  },
  {
    id: "smelt_gold",
    name: "금 주괴 제련",
    input: "raw_gold",
    fuel: "coal",
    result: { item: "gold_ingot", count: 1 },
    seconds: 10
  }
];

export function canSmelt(recipe: SmeltingRecipe, inventory: InventoryState): boolean {
  return countItems(inventory, recipe.input) > 0 && countItems(inventory, recipe.fuel) > 0;
}

export function smelt(recipe: SmeltingRecipe, inventory: InventoryState, smeltAll = false): number {
  let made = 0;

  while (canSmelt(recipe, inventory)) {
    removeItems(inventory, recipe.input, 1);
    removeItems(inventory, recipe.fuel, 1);
    const leftover = addStack(inventory, { ...recipe.result });

    if (leftover) {
      addStack(inventory, { item: recipe.input, count: 1 });
      addStack(inventory, { item: recipe.fuel, count: 1 });
      break;
    }

    made += recipe.result.count;

    if (!smeltAll || made >= 64) {
      break;
    }
  }

  return made;
}
