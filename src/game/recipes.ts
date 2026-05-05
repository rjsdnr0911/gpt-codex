import { InventoryState, addStack, countItems, removeItems } from "./inventory";
import { ItemId, ItemStack } from "./items";

export interface Recipe {
  id: string;
  name: string;
  size: 2 | 3;
  type: "shaped" | "shapeless";
  pattern?: string[];
  key?: Record<string, ItemId>;
  ingredients?: Partial<Record<ItemId, number>>;
  result: ItemStack;
  category: "building" | "equipment" | "items" | "food";
  unlocksBy: ItemId[];
}

export const RECIPES: Recipe[] = [
  {
    id: "planks",
    name: "Planks",
    size: 2,
    type: "shapeless",
    ingredients: { log: 1 },
    result: { item: "planks", count: 4 },
    category: "building",
    unlocksBy: ["log"]
  },
  {
    id: "sticks",
    name: "Sticks",
    size: 2,
    type: "shaped",
    pattern: ["P", "P"],
    key: { P: "planks" },
    result: { item: "stick", count: 4 },
    category: "items",
    unlocksBy: ["planks"]
  },
  {
    id: "crafting_table",
    name: "Crafting Table",
    size: 2,
    type: "shaped",
    pattern: ["PP", "PP"],
    key: { P: "planks" },
    result: { item: "crafting_table", count: 1 },
    category: "building",
    unlocksBy: ["planks"]
  },
  {
    id: "wooden_pickaxe",
    name: "Wooden Pickaxe",
    size: 3,
    type: "shaped",
    pattern: ["PPP", " S ", " S "],
    key: { P: "planks", S: "stick" },
    result: { item: "wooden_pickaxe", count: 1, durability: 59 },
    category: "equipment",
    unlocksBy: ["planks", "stick"]
  },
  {
    id: "stone_pickaxe",
    name: "Stone Pickaxe",
    size: 3,
    type: "shaped",
    pattern: ["CCC", " S ", " S "],
    key: { C: "stone", S: "stick" },
    result: { item: "stone_pickaxe", count: 1, durability: 131 },
    category: "equipment",
    unlocksBy: ["stone", "stick"]
  },
  {
    id: "brick_block",
    name: "Brick Block",
    size: 2,
    type: "shaped",
    pattern: ["OO", "OO"],
    key: { O: "ore" },
    result: { item: "brick", count: 4 },
    category: "building",
    unlocksBy: ["ore"]
  },
  {
    id: "bread",
    name: "Trail Bread",
    size: 3,
    type: "shapeless",
    ingredients: { planks: 1, apple: 1 },
    result: { item: "bread", count: 1 },
    category: "food",
    unlocksBy: ["apple"]
  }
];

export function recipeIsUnlocked(recipe: Recipe, unlocked: Set<string>, inventory: InventoryState): boolean {
  if (unlocked.has(recipe.id)) {
    return true;
  }

  return recipe.unlocksBy.some((item) => countItems(inventory, item) > 0);
}

export function canCraft(recipe: Recipe, inventory: InventoryState, gridSize: 2 | 3): boolean {
  if (recipe.size > gridSize) {
    return false;
  }

  const ingredients = recipeIngredients(recipe);
  return Object.entries(ingredients).every(([item, count]) => countItems(inventory, item as ItemId) >= count);
}

export function craft(recipe: Recipe, inventory: InventoryState, gridSize: 2 | 3, craftAll = false): number {
  if (recipe.size > gridSize) {
    return 0;
  }

  let made = 0;

  while (canCraft(recipe, inventory, gridSize)) {
    const ingredients = recipeIngredients(recipe);

    for (const [item, count] of Object.entries(ingredients)) {
      removeItems(inventory, item as ItemId, count);
    }

    const leftover = addStack(inventory, { ...recipe.result });

    if (leftover) {
      addStack(inventory, leftover);
      break;
    }

    made += recipe.result.count;

    if (!craftAll || recipe.result.count >= 64 || made >= 64) {
      break;
    }
  }

  return made;
}

export function recipeIngredients(recipe: Recipe): Partial<Record<ItemId, number>> {
  if (recipe.type === "shapeless") {
    return recipe.ingredients ?? {};
  }

  const ingredients: Partial<Record<ItemId, number>> = {};

  for (const row of recipe.pattern ?? []) {
    for (const char of row) {
      const item = recipe.key?.[char];
      if (!item) {
        continue;
      }
      ingredients[item] = (ingredients[item] ?? 0) + 1;
    }
  }

  return ingredients;
}
