import { BlockType } from "./blocks";

export type ToolKind = "none" | "pickaxe" | "axe" | "shovel";
export type ToolTier = "hand" | "wood" | "stone";

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
  | "wooden_pickaxe"
  | "stone_pickaxe"
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
    name: "Grass Block",
    maxStack: 64,
    color: "#67ad58",
    placeBlock: BlockType.Grass
  },
  dirt: {
    id: "dirt",
    name: "Dirt",
    maxStack: 64,
    color: "#7b5237",
    placeBlock: BlockType.Dirt
  },
  stone: {
    id: "stone",
    name: "Stone",
    maxStack: 64,
    color: "#858d8a",
    placeBlock: BlockType.Stone
  },
  sand: {
    id: "sand",
    name: "Sand",
    maxStack: 64,
    color: "#d4c682",
    placeBlock: BlockType.Sand
  },
  water: {
    id: "water",
    name: "Water",
    maxStack: 64,
    color: "#2e9bc9",
    placeBlock: BlockType.Water
  },
  log: {
    id: "log",
    name: "Log",
    maxStack: 64,
    color: "#805331",
    placeBlock: BlockType.Log
  },
  leaves: {
    id: "leaves",
    name: "Leaves",
    maxStack: 64,
    color: "#448f50",
    placeBlock: BlockType.Leaves
  },
  ore: {
    id: "ore",
    name: "Ore",
    maxStack: 64,
    color: "#59bdc4",
    placeBlock: BlockType.Ore
  },
  brick: {
    id: "brick",
    name: "Brick",
    maxStack: 64,
    color: "#a65049",
    placeBlock: BlockType.Brick
  },
  planks: {
    id: "planks",
    name: "Planks",
    maxStack: 64,
    color: "#b9854b",
    placeBlock: BlockType.Planks
  },
  stick: {
    id: "stick",
    name: "Stick",
    maxStack: 64,
    color: "#b98a55"
  },
  crafting_table: {
    id: "crafting_table",
    name: "Crafting Table",
    maxStack: 64,
    color: "#a46d3d",
    placeBlock: BlockType.CraftingTable
  },
  wooden_pickaxe: {
    id: "wooden_pickaxe",
    name: "Wooden Pickaxe",
    maxStack: 1,
    color: "#c28a4e",
    toolKind: "pickaxe",
    toolTier: "wood",
    miningSpeed: 2.2,
    durability: 59
  },
  stone_pickaxe: {
    id: "stone_pickaxe",
    name: "Stone Pickaxe",
    maxStack: 1,
    color: "#9aa09d",
    toolKind: "pickaxe",
    toolTier: "stone",
    miningSpeed: 4.0,
    durability: 131
  },
  apple: {
    id: "apple",
    name: "Apple",
    maxStack: 64,
    color: "#cf3c38",
    food: {
      hunger: 4,
      saturation: 2.4
    }
  },
  bread: {
    id: "bread",
    name: "Bread",
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
    default:
      return null;
  }
}

export function blockFromItem(item: ItemId): BlockType | null {
  return ITEM_DEFINITIONS[item].placeBlock ?? null;
}
