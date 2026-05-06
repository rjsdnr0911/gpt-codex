import { BlockType } from "./blocks";

export type ToolKind = "none" | "pickaxe" | "axe" | "shovel";
export type ToolTier = "hand" | "wood" | "stone" | "iron" | "diamond";

export type ItemId =
  | "grass_block"
  | "dirt"
  | "stone"
  | "sand"
  | "water"
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
  | "furnace"
  | "chest"
  | "torch"
  | "wooden_pickaxe"
  | "stone_pickaxe"
  | "iron_pickaxe"
  | "diamond_pickaxe"
  | "wooden_axe"
  | "stone_axe"
  | "wooden_shovel"
  | "stone_shovel"
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
  food?: {
    hunger: number;
    saturation: number;
  };
}

export const ITEM_DEFINITIONS: Record<ItemId, ItemDefinition> = {
  grass_block: {
    id: "grass_block",
    name: "잔디 블록",
    maxStack: 64,
    color: "#67ad58",
    placeBlock: BlockType.Grass
  },
  dirt: {
    id: "dirt",
    name: "흙",
    maxStack: 64,
    color: "#7b5237",
    placeBlock: BlockType.Dirt
  },
  stone: {
    id: "stone",
    name: "돌",
    maxStack: 64,
    color: "#858d8a",
    placeBlock: BlockType.Stone
  },
  sand: {
    id: "sand",
    name: "모래",
    maxStack: 64,
    color: "#d4c682",
    placeBlock: BlockType.Sand
  },
  water: {
    id: "water",
    name: "물",
    maxStack: 64,
    color: "#2e9bc9",
    placeBlock: BlockType.Water
  },
  log: {
    id: "log",
    name: "원목",
    maxStack: 64,
    color: "#805331",
    placeBlock: BlockType.Log
  },
  leaves: {
    id: "leaves",
    name: "나뭇잎",
    maxStack: 64,
    color: "#448f50",
    placeBlock: BlockType.Leaves
  },
  ore: {
    id: "ore",
    name: "구형 광석",
    maxStack: 64,
    color: "#59bdc4",
    placeBlock: BlockType.Ore
  },
  brick: {
    id: "brick",
    name: "벽돌 블록",
    maxStack: 64,
    color: "#a65049",
    placeBlock: BlockType.Brick
  },
  planks: {
    id: "planks",
    name: "나무 판자",
    maxStack: 64,
    color: "#b9854b",
    placeBlock: BlockType.Planks
  },
  stick: {
    id: "stick",
    name: "막대기",
    maxStack: 64,
    color: "#b98a55"
  },
  crafting_table: {
    id: "crafting_table",
    name: "제작대",
    maxStack: 64,
    color: "#a46d3d",
    placeBlock: BlockType.CraftingTable
  },
  coal_ore: {
    id: "coal_ore",
    name: "석탄 광석",
    maxStack: 64,
    color: "#4b4d4b",
    placeBlock: BlockType.CoalOre
  },
  copper_ore: {
    id: "copper_ore",
    name: "구리 광석",
    maxStack: 64,
    color: "#a76846",
    placeBlock: BlockType.CopperOre
  },
  iron_ore: {
    id: "iron_ore",
    name: "철 광석",
    maxStack: 64,
    color: "#b08f75",
    placeBlock: BlockType.IronOre
  },
  gold_ore: {
    id: "gold_ore",
    name: "금 광석",
    maxStack: 64,
    color: "#d6aa35",
    placeBlock: BlockType.GoldOre
  },
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
  coal: {
    id: "coal",
    name: "석탄",
    maxStack: 64,
    color: "#2e3130"
  },
  raw_copper: {
    id: "raw_copper",
    name: "구리 원석",
    maxStack: 64,
    color: "#c9794a"
  },
  raw_iron: {
    id: "raw_iron",
    name: "철 원석",
    maxStack: 64,
    color: "#c2a38d"
  },
  raw_gold: {
    id: "raw_gold",
    name: "금 원석",
    maxStack: 64,
    color: "#e1b845"
  },
  copper_ingot: {
    id: "copper_ingot",
    name: "구리 주괴",
    maxStack: 64,
    color: "#d98b5a"
  },
  iron_ingot: {
    id: "iron_ingot",
    name: "철 주괴",
    maxStack: 64,
    color: "#c9d1d1"
  },
  gold_ingot: {
    id: "gold_ingot",
    name: "금 주괴",
    maxStack: 64,
    color: "#f0c747"
  },
  redstone_dust: {
    id: "redstone_dust",
    name: "레드스톤 가루",
    maxStack: 64,
    color: "#d8423a"
  },
  lapis_lazuli: {
    id: "lapis_lazuli",
    name: "청금석",
    maxStack: 64,
    color: "#365bc8"
  },
  diamond: {
    id: "diamond",
    name: "다이아몬드",
    maxStack: 64,
    color: "#65e0dc"
  },
  emerald: {
    id: "emerald",
    name: "에메랄드",
    maxStack: 64,
    color: "#4bd66d"
  },
  furnace: {
    id: "furnace",
    name: "화로",
    maxStack: 64,
    color: "#686e6b",
    placeBlock: BlockType.Furnace
  },
  chest: {
    id: "chest",
    name: "상자",
    maxStack: 64,
    color: "#9b642f",
    placeBlock: BlockType.Chest
  },
  torch: {
    id: "torch",
    name: "횃불",
    maxStack: 64,
    color: "#f0a83c",
    placeBlock: BlockType.Torch
  },
  wooden_pickaxe: {
    id: "wooden_pickaxe",
    name: "나무 곡괭이",
    maxStack: 1,
    color: "#c28a4e",
    toolKind: "pickaxe",
    toolTier: "wood",
    miningSpeed: 2.2,
    durability: 59
  },
  stone_pickaxe: {
    id: "stone_pickaxe",
    name: "돌 곡괭이",
    maxStack: 1,
    color: "#9aa09d",
    toolKind: "pickaxe",
    toolTier: "stone",
    miningSpeed: 4.0,
    durability: 131
  },
  iron_pickaxe: {
    id: "iron_pickaxe",
    name: "철 곡괭이",
    maxStack: 1,
    color: "#c7d0cf",
    toolKind: "pickaxe",
    toolTier: "iron",
    miningSpeed: 6.0,
    durability: 250
  },
  diamond_pickaxe: {
    id: "diamond_pickaxe",
    name: "다이아몬드 곡괭이",
    maxStack: 1,
    color: "#65e0dc",
    toolKind: "pickaxe",
    toolTier: "diamond",
    miningSpeed: 8.0,
    durability: 1561
  },
  wooden_axe: {
    id: "wooden_axe",
    name: "나무 도끼",
    maxStack: 1,
    color: "#c28a4e",
    toolKind: "axe",
    toolTier: "wood",
    miningSpeed: 2.0,
    durability: 59
  },
  stone_axe: {
    id: "stone_axe",
    name: "돌 도끼",
    maxStack: 1,
    color: "#9aa09d",
    toolKind: "axe",
    toolTier: "stone",
    miningSpeed: 4.0,
    durability: 131
  },
  wooden_shovel: {
    id: "wooden_shovel",
    name: "나무 삽",
    maxStack: 1,
    color: "#c28a4e",
    toolKind: "shovel",
    toolTier: "wood",
    miningSpeed: 2.0,
    durability: 59
  },
  stone_shovel: {
    id: "stone_shovel",
    name: "돌 삽",
    maxStack: 1,
    color: "#9aa09d",
    toolKind: "shovel",
    toolTier: "stone",
    miningSpeed: 4.0,
    durability: 131
  },
  apple: {
    id: "apple",
    name: "사과",
    maxStack: 64,
    color: "#cf3c38",
    food: {
      hunger: 4,
      saturation: 2.4
    }
  },
  bread: {
    id: "bread",
    name: "빵",
    maxStack: 64,
    color: "#d7a85a",
    food: {
      hunger: 5,
      saturation: 6
    }
  }
};

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
    case BlockType.Water:
      return "water";
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
    default:
      return null;
  }
}

export function blockFromItem(item: ItemId): BlockType | null {
  return ITEM_DEFINITIONS[item].placeBlock ?? null;
}
