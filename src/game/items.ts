import { BlockType } from "./blocks";

export type ToolKind = "none" | "pickaxe" | "axe" | "shovel" | "sword" | "bow" | "shield" | "shears";
export type ToolTier = "hand" | "wood" | "stone" | "copper" | "iron" | "gold" | "diamond";
export type EquipmentSlot = "head" | "chest" | "legs" | "feet";

export type ItemId =
  | "grass_block"
  | "dirt"
  | "stone"
  | "sand"
  | "gravel"
  | "water"
  | "obsidian"
  | "netherrack"
  | "nether_brick"
  | "soul_sand"
  | "basalt"
  | "log"
  | "leaves"
  | "ore"
  | "brick"
  | "planks"
  | "stick"
  | "crafting_table"
  | "coal_ore"
  | "copper_ore"
  | "iron_ore"
  | "gold_ore"
  | "redstone_ore"
  | "lapis_ore"
  | "diamond_ore"
  | "emerald_ore"
  | "quartz_ore"
  | "nether_gold_ore"
  | "coal"
  | "raw_copper"
  | "raw_iron"
  | "raw_gold"
  | "copper_ingot"
  | "iron_ingot"
  | "gold_ingot"
  | "redstone_dust"
  | "lapis_lazuli"
  | "diamond"
  | "emerald"
  | "nether_quartz"
  | "gold_nugget"
  | "furnace"
  | "chest"
  | "torch"
  | "bed"
  | "bucket"
  | "water_bucket"
  | "lava_bucket"
  | "flint_and_steel"
  | "blaze_rod"
  | "blaze_powder"
  | "ender_pearl"
  | "eye_of_ender"
  | "wooden_pickaxe"
  | "stone_pickaxe"
  | "iron_pickaxe"
  | "diamond_pickaxe"
  | "wooden_axe"
  | "stone_axe"
  | "wooden_shovel"
  | "stone_shovel"
  | "wooden_sword"
  | "stone_sword"
  | "copper_sword"
  | "iron_sword"
  | "golden_sword"
  | "diamond_sword"
  | "bow"
  | "arrow"
  | "shield"
  | "shears"
  | "leather_helmet"
  | "leather_chestplate"
  | "leather_leggings"
  | "leather_boots"
  | "copper_helmet"
  | "copper_chestplate"
  | "copper_leggings"
  | "copper_boots"
  | "chainmail_helmet"
  | "chainmail_chestplate"
  | "chainmail_leggings"
  | "chainmail_boots"
  | "iron_helmet"
  | "iron_chestplate"
  | "iron_leggings"
  | "iron_boots"
  | "golden_helmet"
  | "golden_chestplate"
  | "golden_leggings"
  | "golden_boots"
  | "diamond_helmet"
  | "diamond_chestplate"
  | "diamond_leggings"
  | "diamond_boots"
  | "leather"
  | "wool"
  | "raw_beef"
  | "steak"
  | "raw_porkchop"
  | "cooked_porkchop"
  | "raw_mutton"
  | "cooked_mutton"
  | "raw_chicken"
  | "cooked_chicken"
  | "feather"
  | "egg"
  | "bone"
  | "string"
  | "spider_eye"
  | "gunpowder"
  | "rotten_flesh"
  | "flint"
  | "apple"
  | "bread";

export interface ItemStack {
  item: ItemId;
  count: number;
  durability?: number;
}

export interface ItemDefinition {
  id: ItemId;
  name: string;
  maxStack: number;
  color: string;
  placeBlock?: BlockType;
  toolKind?: ToolKind;
  toolTier?: ToolTier;
  miningSpeed?: number;
  durability?: number;
  combat?: {
    damage: number;
    cooldown: number;
    range?: number;
  };
  armor?: {
    points: number;
    toughness: number;
  };
  equipSlot?: EquipmentSlot | "offhand";
  projectile?: {
    damage: number;
  };
  food?: {
    hunger: number;
    saturation: number;
  };
}

export const ITEM_DEFINITIONS: Record<ItemId, ItemDefinition> = {
  grass_block: { id: "grass_block", name: "잔디 블록", maxStack: 64, color: "#67ad58", placeBlock: BlockType.Grass },
  dirt: { id: "dirt", name: "흙", maxStack: 64, color: "#7b5237", placeBlock: BlockType.Dirt },
  stone: { id: "stone", name: "돌", maxStack: 64, color: "#858d8a", placeBlock: BlockType.Stone },
  sand: { id: "sand", name: "모래", maxStack: 64, color: "#d4c682", placeBlock: BlockType.Sand },
  gravel: { id: "gravel", name: "자갈", maxStack: 64, color: "#7a7c7a", placeBlock: BlockType.Gravel },
  water: { id: "water", name: "물", maxStack: 64, color: "#2e9bc9", placeBlock: BlockType.Water },
  obsidian: { id: "obsidian", name: "흑요석", maxStack: 64, color: "#211a31", placeBlock: BlockType.Obsidian },
  netherrack: { id: "netherrack", name: "네더랙", maxStack: 64, color: "#7f2f2d", placeBlock: BlockType.Netherrack },
  nether_brick: {
    id: "nether_brick",
    name: "네더 벽돌",
    maxStack: 64,
    color: "#3c1b24",
    placeBlock: BlockType.NetherBrick
  },
  soul_sand: { id: "soul_sand", name: "영혼 모래", maxStack: 64, color: "#6e5042", placeBlock: BlockType.SoulSand },
  basalt: { id: "basalt", name: "현무암", maxStack: 64, color: "#4a4648", placeBlock: BlockType.Basalt },
  log: { id: "log", name: "원목", maxStack: 64, color: "#805331", placeBlock: BlockType.Log },
  leaves: { id: "leaves", name: "나뭇잎", maxStack: 64, color: "#448f50", placeBlock: BlockType.Leaves },
  ore: { id: "ore", name: "구형 광석", maxStack: 64, color: "#59bdc4", placeBlock: BlockType.Ore },
  brick: { id: "brick", name: "벽돌 블록", maxStack: 64, color: "#a65049", placeBlock: BlockType.Brick },
  planks: { id: "planks", name: "나무 판자", maxStack: 64, color: "#b9854b", placeBlock: BlockType.Planks },
  stick: { id: "stick", name: "막대기", maxStack: 64, color: "#b98a55" },
  crafting_table: {
    id: "crafting_table",
    name: "제작대",
    maxStack: 64,
    color: "#a46d3d",
    placeBlock: BlockType.CraftingTable
  },
  coal_ore: { id: "coal_ore", name: "석탄 광석", maxStack: 64, color: "#4b4d4b", placeBlock: BlockType.CoalOre },
  copper_ore: {
    id: "copper_ore",
    name: "구리 광석",
    maxStack: 64,
    color: "#a76846",
    placeBlock: BlockType.CopperOre
  },
  iron_ore: { id: "iron_ore", name: "철 광석", maxStack: 64, color: "#b08f75", placeBlock: BlockType.IronOre },
  gold_ore: { id: "gold_ore", name: "금 광석", maxStack: 64, color: "#d6aa35", placeBlock: BlockType.GoldOre },
  redstone_ore: {
    id: "redstone_ore",
    name: "레드스톤 광석",
    maxStack: 64,
    color: "#b53634",
    placeBlock: BlockType.RedstoneOre
  },
  lapis_ore: {
    id: "lapis_ore",
    name: "청금석 광석",
    maxStack: 64,
    color: "#345dbc",
    placeBlock: BlockType.LapisOre
  },
  diamond_ore: {
    id: "diamond_ore",
    name: "다이아몬드 광석",
    maxStack: 64,
    color: "#58d6d0",
    placeBlock: BlockType.DiamondOre
  },
  emerald_ore: {
    id: "emerald_ore",
    name: "에메랄드 광석",
    maxStack: 64,
    color: "#45bf62",
    placeBlock: BlockType.EmeraldOre
  },
  quartz_ore: {
    id: "quartz_ore",
    name: "네더 석영 광석",
    maxStack: 64,
    color: "#b36f67",
    placeBlock: BlockType.QuartzOre
  },
  nether_gold_ore: {
    id: "nether_gold_ore",
    name: "네더 금 광석",
    maxStack: 64,
    color: "#ad5b35",
    placeBlock: BlockType.NetherGoldOre
  },
  coal: { id: "coal", name: "석탄", maxStack: 64, color: "#2e3130" },
  raw_copper: { id: "raw_copper", name: "구리 원석", maxStack: 64, color: "#c9794a" },
  raw_iron: { id: "raw_iron", name: "철 원석", maxStack: 64, color: "#c2a38d" },
  raw_gold: { id: "raw_gold", name: "금 원석", maxStack: 64, color: "#e1b845" },
  copper_ingot: { id: "copper_ingot", name: "구리 주괴", maxStack: 64, color: "#d98b5a" },
  iron_ingot: { id: "iron_ingot", name: "철 주괴", maxStack: 64, color: "#c9d1d1" },
  gold_ingot: { id: "gold_ingot", name: "금 주괴", maxStack: 64, color: "#f0c747" },
  redstone_dust: { id: "redstone_dust", name: "레드스톤 가루", maxStack: 64, color: "#d8423a" },
  lapis_lazuli: { id: "lapis_lazuli", name: "청금석", maxStack: 64, color: "#365bc8" },
  diamond: { id: "diamond", name: "다이아몬드", maxStack: 64, color: "#65e0dc" },
  emerald: { id: "emerald", name: "에메랄드", maxStack: 64, color: "#4bd66d" },
  nether_quartz: { id: "nether_quartz", name: "네더 석영", maxStack: 64, color: "#e8dfcf" },
  gold_nugget: { id: "gold_nugget", name: "금 조각", maxStack: 64, color: "#f0c747" },
  furnace: { id: "furnace", name: "화로", maxStack: 64, color: "#686e6b", placeBlock: BlockType.Furnace },
  chest: { id: "chest", name: "상자", maxStack: 64, color: "#9b642f", placeBlock: BlockType.Chest },
  torch: { id: "torch", name: "횃불", maxStack: 64, color: "#f0a83c", placeBlock: BlockType.Torch },
  bed: { id: "bed", name: "침대", maxStack: 1, color: "#c94646", placeBlock: BlockType.Bed },
  bucket: { id: "bucket", name: "양동이", maxStack: 1, color: "#bfc8c8" },
  water_bucket: { id: "water_bucket", name: "물 양동이", maxStack: 1, color: "#4bb5e3" },
  lava_bucket: { id: "lava_bucket", name: "용암 양동이", maxStack: 1, color: "#e86a2b" },
  flint_and_steel: {
    id: "flint_and_steel",
    name: "부싯돌과 부시",
    maxStack: 1,
    color: "#c9d1d1",
    durability: 64
  },
  blaze_rod: { id: "blaze_rod", name: "블레이즈 막대", maxStack: 64, color: "#f0a83c" },
  blaze_powder: { id: "blaze_powder", name: "블레이즈 가루", maxStack: 64, color: "#f4c35a" },
  ender_pearl: { id: "ender_pearl", name: "엔더 진주", maxStack: 16, color: "#1f8c7d" },
  eye_of_ender: { id: "eye_of_ender", name: "엔더의 눈", maxStack: 64, color: "#79d6a8" },

  wooden_pickaxe: {
    id: "wooden_pickaxe",
    name: "나무 곡괭이",
    maxStack: 1,
    color: "#c28a4e",
    toolKind: "pickaxe",
    toolTier: "wood",
    miningSpeed: 2.2,
    durability: 59,
    combat: { damage: 3, cooldown: 0.9 }
  },
  stone_pickaxe: {
    id: "stone_pickaxe",
    name: "돌 곡괭이",
    maxStack: 1,
    color: "#9aa09d",
    toolKind: "pickaxe",
    toolTier: "stone",
    miningSpeed: 4,
    durability: 131,
    combat: { damage: 4, cooldown: 0.9 }
  },
  iron_pickaxe: {
    id: "iron_pickaxe",
    name: "철 곡괭이",
    maxStack: 1,
    color: "#c7d0cf",
    toolKind: "pickaxe",
    toolTier: "iron",
    miningSpeed: 6,
    durability: 250,
    combat: { damage: 5, cooldown: 0.9 }
  },
  diamond_pickaxe: {
    id: "diamond_pickaxe",
    name: "다이아몬드 곡괭이",
    maxStack: 1,
    color: "#65e0dc",
    toolKind: "pickaxe",
    toolTier: "diamond",
    miningSpeed: 8,
    durability: 1561,
    combat: { damage: 6, cooldown: 0.9 }
  },
  wooden_axe: {
    id: "wooden_axe",
    name: "나무 도끼",
    maxStack: 1,
    color: "#c28a4e",
    toolKind: "axe",
    toolTier: "wood",
    miningSpeed: 2,
    durability: 59,
    combat: { damage: 7, cooldown: 1.25 }
  },
  stone_axe: {
    id: "stone_axe",
    name: "돌 도끼",
    maxStack: 1,
    color: "#9aa09d",
    toolKind: "axe",
    toolTier: "stone",
    miningSpeed: 4,
    durability: 131,
    combat: { damage: 8, cooldown: 1.3 }
  },
  wooden_shovel: {
    id: "wooden_shovel",
    name: "나무 삽",
    maxStack: 1,
    color: "#c28a4e",
    toolKind: "shovel",
    toolTier: "wood",
    miningSpeed: 2,
    durability: 59,
    combat: { damage: 2.5, cooldown: 0.85 }
  },
  stone_shovel: {
    id: "stone_shovel",
    name: "돌 삽",
    maxStack: 1,
    color: "#9aa09d",
    toolKind: "shovel",
    toolTier: "stone",
    miningSpeed: 4,
    durability: 131,
    combat: { damage: 3.5, cooldown: 0.85 }
  },

  wooden_sword: {
    id: "wooden_sword",
    name: "나무 검",
    maxStack: 1,
    color: "#b9854b",
    toolKind: "sword",
    toolTier: "wood",
    durability: 59,
    combat: { damage: 4, cooldown: 0.62, range: 4.8 }
  },
  stone_sword: {
    id: "stone_sword",
    name: "돌 검",
    maxStack: 1,
    color: "#9aa09d",
    toolKind: "sword",
    toolTier: "stone",
    durability: 131,
    combat: { damage: 5, cooldown: 0.62, range: 4.8 }
  },
  copper_sword: {
    id: "copper_sword",
    name: "구리 검",
    maxStack: 1,
    color: "#d98b5a",
    toolKind: "sword",
    toolTier: "copper",
    durability: 191,
    combat: { damage: 5, cooldown: 0.6, range: 4.8 }
  },
  iron_sword: {
    id: "iron_sword",
    name: "철 검",
    maxStack: 1,
    color: "#c9d1d1",
    toolKind: "sword",
    toolTier: "iron",
    durability: 250,
    combat: { damage: 6, cooldown: 0.6, range: 4.8 }
  },
  golden_sword: {
    id: "golden_sword",
    name: "금 검",
    maxStack: 1,
    color: "#f0c747",
    toolKind: "sword",
    toolTier: "gold",
    durability: 32,
    combat: { damage: 4, cooldown: 0.52, range: 4.8 }
  },
  diamond_sword: {
    id: "diamond_sword",
    name: "다이아몬드 검",
    maxStack: 1,
    color: "#65e0dc",
    toolKind: "sword",
    toolTier: "diamond",
    durability: 1561,
    combat: { damage: 7, cooldown: 0.56, range: 5 }
  },
  bow: {
    id: "bow",
    name: "활",
    maxStack: 1,
    color: "#9b6638",
    toolKind: "bow",
    durability: 384,
    combat: { damage: 5, cooldown: 0.9, range: 30 }
  },
  arrow: { id: "arrow", name: "화살", maxStack: 64, color: "#d8d3c0", projectile: { damage: 5 } },
  shield: {
    id: "shield",
    name: "방패",
    maxStack: 1,
    color: "#a9763d",
    toolKind: "shield",
    durability: 336,
    equipSlot: "offhand"
  },
  shears: {
    id: "shears",
    name: "가위",
    maxStack: 1,
    color: "#c9d1d1",
    toolKind: "shears",
    toolTier: "iron",
    durability: 238,
    combat: { damage: 2, cooldown: 0.75 }
  },

  leather_helmet: armorItem("leather_helmet", "가죽 모자", "#8f5b3c", "head", 1, 0, 55),
  leather_chestplate: armorItem("leather_chestplate", "가죽 튜닉", "#8f5b3c", "chest", 3, 0, 80),
  leather_leggings: armorItem("leather_leggings", "가죽 바지", "#8f5b3c", "legs", 2, 0, 75),
  leather_boots: armorItem("leather_boots", "가죽 장화", "#8f5b3c", "feet", 1, 0, 65),
  copper_helmet: armorItem("copper_helmet", "구리 투구", "#d98b5a", "head", 2, 0, 121),
  copper_chestplate: armorItem("copper_chestplate", "구리 흉갑", "#d98b5a", "chest", 5, 0, 176),
  copper_leggings: armorItem("copper_leggings", "구리 각반", "#d98b5a", "legs", 4, 0, 165),
  copper_boots: armorItem("copper_boots", "구리 부츠", "#d98b5a", "feet", 2, 0, 143),
  chainmail_helmet: armorItem("chainmail_helmet", "사슬 투구", "#aab1ad", "head", 2, 0, 165),
  chainmail_chestplate: armorItem("chainmail_chestplate", "사슬 흉갑", "#aab1ad", "chest", 5, 0, 240),
  chainmail_leggings: armorItem("chainmail_leggings", "사슬 각반", "#aab1ad", "legs", 4, 0, 225),
  chainmail_boots: armorItem("chainmail_boots", "사슬 부츠", "#aab1ad", "feet", 1, 0, 195),
  iron_helmet: armorItem("iron_helmet", "철 투구", "#c9d1d1", "head", 2, 0, 165),
  iron_chestplate: armorItem("iron_chestplate", "철 흉갑", "#c9d1d1", "chest", 6, 0, 240),
  iron_leggings: armorItem("iron_leggings", "철 각반", "#c9d1d1", "legs", 5, 0, 225),
  iron_boots: armorItem("iron_boots", "철 부츠", "#c9d1d1", "feet", 2, 0, 195),
  golden_helmet: armorItem("golden_helmet", "금 투구", "#f0c747", "head", 2, 0, 77),
  golden_chestplate: armorItem("golden_chestplate", "금 흉갑", "#f0c747", "chest", 5, 0, 112),
  golden_leggings: armorItem("golden_leggings", "금 각반", "#f0c747", "legs", 3, 0, 105),
  golden_boots: armorItem("golden_boots", "금 부츠", "#f0c747", "feet", 1, 0, 91),
  diamond_helmet: armorItem("diamond_helmet", "다이아몬드 투구", "#65e0dc", "head", 3, 2, 363),
  diamond_chestplate: armorItem("diamond_chestplate", "다이아몬드 흉갑", "#65e0dc", "chest", 8, 2, 528),
  diamond_leggings: armorItem("diamond_leggings", "다이아몬드 각반", "#65e0dc", "legs", 6, 2, 495),
  diamond_boots: armorItem("diamond_boots", "다이아몬드 부츠", "#65e0dc", "feet", 3, 2, 429),

  leather: { id: "leather", name: "가죽", maxStack: 64, color: "#8f5b3c" },
  wool: { id: "wool", name: "양털", maxStack: 64, color: "#e9e6d7" },
  raw_beef: foodItem("raw_beef", "익히지 않은 소고기", "#c5524b", 3, 1.8),
  steak: foodItem("steak", "스테이크", "#8e402d", 8, 12.8),
  raw_porkchop: foodItem("raw_porkchop", "익히지 않은 돼지고기", "#d47676", 3, 1.8),
  cooked_porkchop: foodItem("cooked_porkchop", "익힌 돼지고기", "#b15d38", 8, 12.8),
  raw_mutton: foodItem("raw_mutton", "익히지 않은 양고기", "#b84d53", 2, 1.2),
  cooked_mutton: foodItem("cooked_mutton", "익힌 양고기", "#9c4d34", 6, 9.6),
  raw_chicken: foodItem("raw_chicken", "익히지 않은 닭고기", "#d9b6a0", 2, 1.2),
  cooked_chicken: foodItem("cooked_chicken", "익힌 닭고기", "#d5a35d", 6, 7.2),
  feather: { id: "feather", name: "깃털", maxStack: 64, color: "#e8e2d2" },
  egg: { id: "egg", name: "달걀", maxStack: 16, color: "#eee8cf" },
  bone: { id: "bone", name: "뼈", maxStack: 64, color: "#e4dfc8" },
  string: { id: "string", name: "실", maxStack: 64, color: "#d9d9d9" },
  spider_eye: foodItem("spider_eye", "거미 눈", "#8b2e6f", 2, 3.2),
  gunpowder: { id: "gunpowder", name: "화약", maxStack: 64, color: "#525252" },
  rotten_flesh: foodItem("rotten_flesh", "썩은 살점", "#796036", 4, 0.8),
  flint: { id: "flint", name: "부싯돌", maxStack: 64, color: "#3e4548" },
  apple: foodItem("apple", "사과", "#cf3c38", 4, 2.4),
  bread: foodItem("bread", "빵", "#d7a85a", 5, 6)
};

function armorItem(
  id: ItemId,
  name: string,
  color: string,
  equipSlot: EquipmentSlot,
  points: number,
  toughness: number,
  durability: number
): ItemDefinition {
  return {
    id,
    name,
    maxStack: 1,
    color,
    equipSlot,
    durability,
    armor: { points, toughness }
  };
}

function foodItem(id: ItemId, name: string, color: string, hunger: number, saturation: number): ItemDefinition {
  return {
    id,
    name,
    maxStack: 64,
    color,
    food: { hunger, saturation }
  };
}

export function cloneStack(stack: ItemStack | null): ItemStack | null {
  return stack ? { ...stack } : null;
}

export function stacksMatch(a: ItemStack | null, b: ItemStack | null): boolean {
  return Boolean(a && b && a.item === b.item && a.durability === b.durability);
}

export function maxStackFor(item: ItemId): number {
  return ITEM_DEFINITIONS[item].maxStack;
}

export function itemFromBlock(block: BlockType): ItemId | null {
  switch (block) {
    case BlockType.Grass:
      return "grass_block";
    case BlockType.Dirt:
      return "dirt";
    case BlockType.Stone:
      return "stone";
    case BlockType.Sand:
      return "sand";
    case BlockType.Gravel:
      return "gravel";
    case BlockType.Water:
      return "water";
    case BlockType.Obsidian:
    case BlockType.RuinedPortalDebris:
      return "obsidian";
    case BlockType.Netherrack:
      return "netherrack";
    case BlockType.NetherBrick:
      return "nether_brick";
    case BlockType.SoulSand:
      return "soul_sand";
    case BlockType.Basalt:
      return "basalt";
    case BlockType.QuartzOre:
      return "quartz_ore";
    case BlockType.NetherGoldOre:
      return "nether_gold_ore";
    case BlockType.Log:
      return "log";
    case BlockType.Leaves:
      return "leaves";
    case BlockType.Ore:
      return "ore";
    case BlockType.Brick:
      return "brick";
    case BlockType.Planks:
      return "planks";
    case BlockType.CraftingTable:
      return "crafting_table";
    case BlockType.CoalOre:
      return "coal_ore";
    case BlockType.CopperOre:
      return "copper_ore";
    case BlockType.IronOre:
      return "iron_ore";
    case BlockType.GoldOre:
      return "gold_ore";
    case BlockType.RedstoneOre:
      return "redstone_ore";
    case BlockType.LapisOre:
      return "lapis_ore";
    case BlockType.DiamondOre:
      return "diamond_ore";
    case BlockType.EmeraldOre:
      return "emerald_ore";
    case BlockType.Furnace:
      return "furnace";
    case BlockType.Chest:
      return "chest";
    case BlockType.Torch:
      return "torch";
    case BlockType.Bed:
      return "bed";
    default:
      return null;
  }
}

export function blockFromItem(item: ItemId): BlockType | null {
  return ITEM_DEFINITIONS[item].placeBlock ?? null;
}
