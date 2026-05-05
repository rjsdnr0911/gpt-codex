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
    id: "wooden_axe",
    name: "Wooden Axe",
    size: 3,
    type: "shaped",
    pattern: ["PP", "PS", " S"],
    key: { P: "planks", S: "stick" },
    result: { item: "wooden_axe", count: 1, durability: 59 },
    category: "equipment",
    unlocksBy: ["planks", "stick"]
  },
  {
    id: "wooden_shovel",
    name: "Wooden Shovel",
    size: 2,
    type: "shaped",
    pattern: ["P", "S"],
    key: { P: "planks", S: "stick" },
    result: { item: "wooden_shovel", count: 1, durability: 59 },
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
    id: "stone_axe",
    name: "Stone Axe",
    size: 3,
    type: "shaped",
    pattern: ["CC", "CS", " S"],
    key: { C: "stone", S: "stick" },
    result: { item: "stone_axe", count: 1, durability: 131 },
    category: "equipment",
    unlocksBy: ["stone", "stick"]
  },
  {
    id: "stone_shovel",
    name: "Stone Shovel",
    size: 2,
    type: "shaped",
    pattern: ["C", "S"],
    key: { C: "stone", S: "stick" },
    result: { item: "stone_shovel", count: 1, durability: 131 },
    category: "equipment",
    unlocksBy: ["stone", "stick"]
  },
  {
    id: "iron_pickaxe",
    name: "Iron Pickaxe",
    size: 3,
    type: "shaped",
    pattern: ["III", " S ", " S "],
    key: { I: "iron_ingot", S: "stick" },
    result: { item: "iron_pickaxe", count: 1, durability: 250 },
    category: "equipment",
    unlocksBy: ["iron_ingot", "stick"]
  },
  {
    id: "diamond_pickaxe",
    name: "Diamond Pickaxe",
    size: 3,
    type: "shaped",
    pattern: ["DDD", " S ", " S "],
    key: { D: "diamond", S: "stick" },
    result: { item: "diamond_pickaxe", count: 1, durability: 1561 },
    category: "equipment",
    unlocksBy: ["diamond", "stick"]
  },
  {
    id: "torch",
    name: "Torch",
    size: 2,
    type: "shaped",
    pattern: ["C", "S"],
    key: { C: "coal", S: "stick" },
    result: { item: "torch", count: 4 },
    category: "items",
    unlocksBy: ["coal", "stick"]
  },
  {
    id: "furnace",
    name: "Furnace",
    size: 3,
    type: "shaped",
    pattern: ["SSS", "S S", "SSS"],
    key: { S: "stone" },
    result: { item: "furnace", count: 1 },
    category: "items",
    unlocksBy: ["stone"]
  },
  {
    id: "chest",
    name: "Chest",
    size: 3,
    type: "shaped",
    pattern: ["PPP", "P P", "PPP"],
    key: { P: "planks" },
    result: { item: "chest", count: 1 },
    category: "items",
    unlocksBy: ["planks"]
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

export function matchRecipeFromGrid(grid: Array<ItemStack | null>, gridSize: 2 | 3): Recipe | null {
  for (const recipe of RECIPES) {
    if (recipe.size > gridSize) {
      continue;
    }

    if (recipe.type === "shapeless" && shapelessMatches(recipe, grid)) {
      return recipe;
    }

    if (recipe.type === "shaped" && shapedMatches(recipe, grid, gridSize)) {
      return recipe;
    }
  }

  return null;
}

export function consumeRecipeGrid(grid: Array<ItemStack | null>, recipe: Recipe, gridSize: 2 | 3): void {
  if (!matchSpecificRecipeFromGrid(recipe, grid, gridSize)) {
    return;
  }

  for (let index = 0; index < grid.length; index += 1) {
    const stack = grid[index];
    if (!stack) {
      continue;
    }

    stack.count -= 1;
    if (stack.count <= 0) {
      grid[index] = null;
    }
  }
}

export function recipeLayout(recipe: Recipe, gridSize: 2 | 3): Array<ItemId | null> | null {
  if (recipe.size > gridSize) {
    return null;
  }

  const layout: Array<ItemId | null> = Array.from({ length: gridSize * gridSize }, () => null);

  if (recipe.type === "shapeless") {
    let cursor = 0;
    for (const [item, count] of Object.entries(recipe.ingredients ?? {})) {
      for (let index = 0; index < count; index += 1) {
        if (cursor >= layout.length) {
          return null;
        }
        layout[cursor] = item as ItemId;
        cursor += 1;
      }
    }
    return layout;
  }

  const shape = compactPattern(recipe);
  if (!shape || shape.width > gridSize || shape.height > gridSize) {
    return null;
  }

  for (let y = 0; y < shape.height; y += 1) {
    for (let x = 0; x < shape.width; x += 1) {
      const char = shape.rows[y][x];
      const item = recipe.key?.[char];
      if (item) {
        layout[y * gridSize + x] = item;
      }
    }
  }

  return layout;
}

function matchSpecificRecipeFromGrid(recipe: Recipe, grid: Array<ItemStack | null>, gridSize: 2 | 3): boolean {
  if (recipe.size > gridSize) {
    return false;
  }

  return recipe.type === "shapeless" ? shapelessMatches(recipe, grid) : shapedMatches(recipe, grid, gridSize);
}

function shapelessMatches(recipe: Recipe, grid: Array<ItemStack | null>): boolean {
  const expected = recipe.ingredients ?? {};
  const actual: Partial<Record<ItemId, number>> = {};

  for (const stack of grid) {
    if (!stack) {
      continue;
    }
    actual[stack.item] = (actual[stack.item] ?? 0) + 1;
  }

  const expectedEntries = Object.entries(expected);
  const actualEntries = Object.entries(actual);
  return (
    expectedEntries.length === actualEntries.length &&
    expectedEntries.every(([item, count]) => actual[item as ItemId] === count)
  );
}

function shapedMatches(recipe: Recipe, grid: Array<ItemStack | null>, gridSize: 2 | 3): boolean {
  const shape = compactPattern(recipe);
  if (!shape || shape.width > gridSize || shape.height > gridSize) {
    return false;
  }

  for (let offsetY = 0; offsetY <= gridSize - shape.height; offsetY += 1) {
    for (let offsetX = 0; offsetX <= gridSize - shape.width; offsetX += 1) {
      if (shapeMatchesAt(recipe, shape.rows, shape.width, shape.height, grid, gridSize, offsetX, offsetY)) {
        return true;
      }
    }
  }

  return false;
}

function shapeMatchesAt(
  recipe: Recipe,
  rows: string[],
  width: number,
  height: number,
  grid: Array<ItemStack | null>,
  gridSize: 2 | 3,
  offsetX: number,
  offsetY: number
): boolean {
  for (let gy = 0; gy < gridSize; gy += 1) {
    for (let gx = 0; gx < gridSize; gx += 1) {
      const stack = grid[gy * gridSize + gx];
      const rx = gx - offsetX;
      const ry = gy - offsetY;
      const char = rx >= 0 && rx < width && ry >= 0 && ry < height ? rows[ry][rx] : " ";
      const expected = recipe.key?.[char] ?? null;

      if ((stack?.item ?? null) !== expected) {
        return false;
      }
    }
  }

  return true;
}

function compactPattern(recipe: Recipe): { rows: string[]; width: number; height: number } | null {
  const source = recipe.pattern ?? [];
  if (source.length === 0) {
    return null;
  }

  const width = Math.max(...source.map((row) => row.length));
  const padded = source.map((row) => row.padEnd(width, " "));
  let minX = width;
  let maxX = -1;
  let minY = padded.length;
  let maxY = -1;

  for (let y = 0; y < padded.length; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (padded[y][x] === " ") {
        continue;
      }

      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }

  if (maxX < minX || maxY < minY) {
    return null;
  }

  const rows = padded.slice(minY, maxY + 1).map((row) => row.slice(minX, maxX + 1));
  return {
    rows,
    width: maxX - minX + 1,
    height: maxY - minY + 1
  };
}
