import { InventoryState, addStack, countItems, removeItems } from "./inventory";
import { ItemId, ItemStack, maxStackFor } from "./items";

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

const BASE_RECIPES: Recipe[] = [
  {
    id: "planks",
    name: "나무 판자",
    size: 2,
    type: "shapeless",
    ingredients: { log: 1 },
    result: { item: "planks", count: 4 },
    category: "building",
    unlocksBy: ["log"]
  },
  {
    id: "sticks",
    name: "막대기",
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
    name: "제작대",
    size: 2,
    type: "shaped",
    pattern: ["PP", "PP"],
    key: { P: "planks" },
    result: { item: "crafting_table", count: 1 },
    category: "building",
    unlocksBy: ["planks"]
  },
  toolRecipe("wooden_pickaxe", "나무 곡괭이", "planks", 59, ["PPP", " S ", " S "]),
  toolRecipe("wooden_axe", "나무 도끼", "planks", 59, ["PP", "PS", " S"]),
  toolRecipe("wooden_shovel", "나무 삽", "planks", 59, ["P", "S"], 2),
  toolRecipe("stone_pickaxe", "돌 곡괭이", "stone", 131, ["CCC", " S ", " S "]),
  toolRecipe("stone_axe", "돌 도끼", "stone", 131, ["CC", "CS", " S"]),
  toolRecipe("stone_shovel", "돌 삽", "stone", 131, ["C", "S"], 2),
  toolRecipe("iron_pickaxe", "철 곡괭이", "iron_ingot", 250, ["III", " S ", " S "]),
  toolRecipe("diamond_pickaxe", "다이아몬드 곡괭이", "diamond", 1561, ["DDD", " S ", " S "]),
  swordRecipe("wooden_sword", "나무 검", "planks", 59),
  swordRecipe("stone_sword", "돌 검", "stone", 131),
  swordRecipe("copper_sword", "구리 검", "copper_ingot", 191),
  swordRecipe("iron_sword", "철 검", "iron_ingot", 250),
  swordRecipe("golden_sword", "금 검", "gold_ingot", 32),
  swordRecipe("diamond_sword", "다이아몬드 검", "diamond", 1561),
  {
    id: "bow",
    name: "활",
    size: 3,
    type: "shaped",
    pattern: [" ST", "S T", " ST"],
    key: { S: "stick", T: "string" },
    result: { item: "bow", count: 1, durability: 384 },
    category: "equipment",
    unlocksBy: ["stick", "string"]
  },
  {
    id: "arrow",
    name: "화살",
    size: 3,
    type: "shaped",
    pattern: ["F", "S", "E"],
    key: { F: "flint", S: "stick", E: "feather" },
    result: { item: "arrow", count: 4 },
    category: "equipment",
    unlocksBy: ["flint", "feather"]
  },
  {
    id: "shield",
    name: "방패",
    size: 3,
    type: "shaped",
    pattern: ["PIP", "PPP", " P "],
    key: { P: "planks", I: "iron_ingot" },
    result: { item: "shield", count: 1, durability: 336 },
    category: "equipment",
    unlocksBy: ["iron_ingot", "planks"]
  },
  {
    id: "shears",
    name: "가위",
    size: 2,
    type: "shaped",
    pattern: [" I", "I "],
    key: { I: "iron_ingot" },
    result: { item: "shears", count: 1, durability: 238 },
    category: "equipment",
    unlocksBy: ["iron_ingot"]
  },
  {
    id: "bucket",
    name: "양동이",
    size: 3,
    type: "shaped",
    pattern: ["I I", " I "],
    key: { I: "iron_ingot" },
    result: { item: "bucket", count: 1 },
    category: "items",
    unlocksBy: ["iron_ingot"]
  },
  {
    id: "flint_and_steel",
    name: "부싯돌과 부시",
    size: 2,
    type: "shapeless",
    ingredients: { iron_ingot: 1, flint: 1 },
    result: { item: "flint_and_steel", count: 1, durability: 64 },
    category: "equipment",
    unlocksBy: ["iron_ingot", "flint"]
  },
  {
    id: "torch",
    name: "횃불",
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
    name: "화로",
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
    name: "상자",
    size: 3,
    type: "shaped",
    pattern: ["PPP", "P P", "PPP"],
    key: { P: "planks" },
    result: { item: "chest", count: 1 },
    category: "items",
    unlocksBy: ["planks"]
  },
  {
    id: "bed",
    name: "침대",
    size: 3,
    type: "shaped",
    pattern: ["WWW", "PPP"],
    key: { W: "wool", P: "planks" },
    result: { item: "bed", count: 1 },
    category: "items",
    unlocksBy: ["wool", "planks"]
  },
  {
    id: "brick_block",
    name: "벽돌 블록",
    size: 2,
    type: "shaped",
    pattern: ["OO", "OO"],
    key: { O: "ore" },
    result: { item: "brick", count: 4 },
    category: "building",
    unlocksBy: ["ore"]
  },
  {
    id: "stone_bricks",
    name: "석재 벽돌",
    size: 2,
    type: "shaped",
    pattern: ["SS", "SS"],
    key: { S: "stone" },
    result: { item: "stone_bricks", count: 4 },
    category: "building",
    unlocksBy: ["stone"]
  },
  {
    id: "mossy_stone_bricks",
    name: "이끼 낀 석재 벽돌",
    size: 2,
    type: "shapeless",
    ingredients: { stone_bricks: 1, leaves: 1 },
    result: { item: "mossy_stone_bricks", count: 1 },
    category: "building",
    unlocksBy: ["stone_bricks", "leaves"]
  },
  {
    id: "iron_bars",
    name: "철창",
    size: 3,
    type: "shaped",
    pattern: ["III", "III"],
    key: { I: "iron_ingot" },
    result: { item: "iron_bars", count: 16 },
    category: "building",
    unlocksBy: ["iron_ingot"]
  },
  {
    id: "paper",
    name: "종이",
    size: 3,
    type: "shaped",
    pattern: ["PPP"],
    key: { P: "planks" },
    result: { item: "paper", count: 3 },
    category: "items",
    unlocksBy: ["planks"]
  },
  {
    id: "book",
    name: "책",
    size: 2,
    type: "shapeless",
    ingredients: { paper: 3, leather: 1 },
    result: { item: "book", count: 1 },
    category: "items",
    unlocksBy: ["paper", "leather"]
  },
  {
    id: "bookshelf",
    name: "책장",
    size: 3,
    type: "shaped",
    pattern: ["PPP", "BBB", "PPP"],
    key: { P: "planks", B: "book" },
    result: { item: "bookshelf", count: 1 },
    category: "building",
    unlocksBy: ["book", "planks"]
  },
  {
    id: "end_stone_bricks",
    name: "엔드 스톤 벽돌",
    size: 2,
    type: "shaped",
    pattern: ["EE", "EE"],
    key: { E: "end_stone" },
    result: { item: "end_stone_bricks", count: 4 },
    category: "building",
    unlocksBy: ["end_stone"]
  },
  {
    id: "bread",
    name: "빵",
    size: 3,
    type: "shapeless",
    ingredients: { planks: 1, apple: 1 },
    result: { item: "bread", count: 1 },
    category: "food",
    unlocksBy: ["apple"]
  },
  {
    id: "blaze_powder",
    name: "블레이즈 가루",
    size: 2,
    type: "shapeless",
    ingredients: { blaze_rod: 1 },
    result: { item: "blaze_powder", count: 2 },
    category: "items",
    unlocksBy: ["blaze_rod"]
  },
  {
    id: "eye_of_ender",
    name: "엔더의 눈",
    size: 2,
    type: "shapeless",
    ingredients: { blaze_powder: 1, ender_pearl: 1 },
    result: { item: "eye_of_ender", count: 1 },
    category: "items",
    unlocksBy: ["blaze_powder", "ender_pearl"]
  },
  {
    id: "gold_ingot_from_nuggets",
    name: "금 주괴",
    size: 3,
    type: "shaped",
    pattern: ["NNN", "NNN", "NNN"],
    key: { N: "gold_nugget" },
    result: { item: "gold_ingot", count: 1 },
    category: "items",
    unlocksBy: ["gold_nugget"]
  }
];

export const RECIPES: Recipe[] = [
  ...BASE_RECIPES,
  ...armorSet("leather", "가죽", "leather"),
  ...armorSet("copper", "구리", "copper_ingot"),
  ...armorSet("iron", "철", "iron_ingot"),
  ...armorSet("golden", "금", "gold_ingot"),
  ...armorSet("diamond", "다이아몬드", "diamond")
];

function toolRecipe(
  id: ItemId,
  name: string,
  material: ItemId,
  durability: number,
  pattern: string[],
  size: 2 | 3 = 3
): Recipe {
  const keyLetter = pattern.join("").replace(/[ S]/g, "")[0] ?? "M";
  return {
    id,
    name,
    size,
    type: "shaped",
    pattern,
    key: { [keyLetter]: material, S: "stick" },
    result: { item: id, count: 1, durability },
    category: "equipment",
    unlocksBy: [material, "stick"]
  };
}

function swordRecipe(id: ItemId, name: string, material: ItemId, durability: number): Recipe {
  return {
    id,
    name,
    size: 3,
    type: "shaped",
    pattern: ["M", "M", "S"],
    key: { M: material, S: "stick" },
    result: { item: id, count: 1, durability },
    category: "equipment",
    unlocksBy: [material, "stick"]
  };
}

function armorSet(prefix: string, label: string, material: ItemId): Recipe[] {
  const ids = {
    helmet: `${prefix}_helmet` as ItemId,
    chestplate: `${prefix}_chestplate` as ItemId,
    leggings: `${prefix}_leggings` as ItemId,
    boots: `${prefix}_boots` as ItemId
  };

  return [
    armorRecipe(ids.helmet, `${label} 투구`, material, ["MMM", "M M"]),
    armorRecipe(ids.chestplate, `${label} 흉갑`, material, ["M M", "MMM", "MMM"]),
    armorRecipe(ids.leggings, `${label} 각반`, material, ["MMM", "M M", "M M"]),
    armorRecipe(ids.boots, `${label} 부츠`, material, ["M M", "M M"])
  ];
}

function armorRecipe(id: ItemId, name: string, material: ItemId, pattern: string[]): Recipe {
  return {
    id,
    name,
    size: 3,
    type: "shaped",
    pattern,
    key: { M: material },
    result: { item: id, count: 1 },
    category: "equipment",
    unlocksBy: [material]
  };
}

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

export function recipeGridMatches(recipe: Recipe, grid: Array<ItemStack | null>, gridSize: 2 | 3): boolean {
  return matchSpecificRecipeFromGrid(recipe, grid, gridSize);
}

export function canAddRecipeLayoutToGrid(
  grid: Array<ItemStack | null>,
  recipe: Recipe,
  gridSize: 2 | 3,
  amount = 1
): boolean {
  const layout = recipeLayout(recipe, gridSize);
  if (!layout || amount <= 0) {
    return false;
  }

  for (let index = 0; index < layout.length; index += 1) {
    const item = layout[index];
    const stack = grid[index] ?? null;
    if (!item) {
      if (stack) {
        return false;
      }
      continue;
    }

    if (stack && stack.item !== item) {
      return false;
    }

    if ((stack?.count ?? 0) + amount > maxStackFor(item)) {
      return false;
    }
  }

  return true;
}

export function addRecipeLayoutToGrid(
  grid: Array<ItemStack | null>,
  recipe: Recipe,
  gridSize: 2 | 3,
  amount = 1
): boolean {
  if (!canAddRecipeLayoutToGrid(grid, recipe, gridSize, amount)) {
    return false;
  }

  const layout = recipeLayout(recipe, gridSize);
  if (!layout) {
    return false;
  }

  for (let index = 0; index < layout.length; index += 1) {
    const item = layout[index];
    if (!item) {
      continue;
    }

    const stack = grid[index];
    if (stack) {
      stack.count += amount;
    } else {
      grid[index] = { item, count: amount };
    }
  }

  return true;
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
