export const CHUNK_SIZE = 16;
export const WORLD_HEIGHT = 72;
export const WATER_LEVEL = 24;
export const LOAD_RADIUS = 3;

export const enum BlockType {
  Air = 0,
  Grass = 1,
  Dirt = 2,
  Stone = 3,
  Sand = 4,
  Water = 5,
  Log = 6,
  Leaves = 7,
  Ore = 8,
  Brick = 9,
  Planks = 10,
  CraftingTable = 11,
  CoalOre = 12,
  CopperOre = 13,
  IronOre = 14,
  GoldOre = 15,
  RedstoneOre = 16,
  LapisOre = 17,
  DiamondOre = 18,
  EmeraldOre = 19,
  Furnace = 20,
  Chest = 21,
  Torch = 22
}

export type BlockId =
  | "air"
  | "grass"
  | "dirt"
  | "stone"
  | "sand"
  | "water"
  | "log"
  | "leaves"
  | "ore"
  | "brick"
  | "planks"
  | "crafting_table"
  | "coal_ore"
  | "copper_ore"
  | "iron_ore"
  | "gold_ore"
  | "redstone_ore"
  | "lapis_ore"
  | "diamond_ore"
  | "emerald_ore"
  | "furnace"
  | "chest"
  | "torch";

export const enum TileId {
  GrassTop = 0,
  GrassSide = 1,
  Dirt = 2,
  Stone = 3,
  Sand = 4,
  Water = 5,
  LogSide = 6,
  LogTop = 7,
  Leaves = 8,
  Ore = 9,
  Brick = 10,
  Planks = 11,
  CraftingTable = 12,
  CoalOre = 13,
  CopperOre = 14,
  IronOre = 15,
  GoldOre = 16,
  RedstoneOre = 17,
  LapisOre = 18,
  DiamondOre = 19,
  EmeraldOre = 20,
  FurnaceFront = 21,
  FurnaceSide = 22,
  Chest = 23,
  Torch = 24
}

export type FaceName = "top" | "bottom" | "north" | "south" | "east" | "west";

export interface BlockDefinition {
  id: BlockId;
  displayName: string;
  solid: boolean;
  transparent: boolean;
  fluid: boolean;
  swatch: string;
  tiles: Record<FaceName, TileId>;
  hardness: number;
  drops: string | null;
  preferredTool?: "pickaxe" | "axe" | "shovel";
  requiredTool?: "pickaxe" | "axe" | "shovel";
  requiredTier?: "wood" | "stone" | "iron" | "diamond";
  placeableItem?: string;
  interactable?: "crafting_table" | "furnace" | "chest";
}

const allFaces = (tile: TileId): Record<FaceName, TileId> => ({
  top: tile,
  bottom: tile,
  north: tile,
  south: tile,
  east: tile,
  west: tile
});

export const BLOCKS: Record<BlockType, BlockDefinition> = {
  [BlockType.Air]: {
    id: "air",
    displayName: "Air",
    solid: false,
    transparent: true,
    fluid: false,
    swatch: "#000000",
    tiles: allFaces(TileId.Dirt),
    hardness: 0,
    drops: null
  },
  [BlockType.Grass]: {
    id: "grass",
    displayName: "Grass",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#6eb45f",
    hardness: 0.6,
    drops: "dirt",
    preferredTool: "shovel",
    placeableItem: "grass_block",
    tiles: {
      top: TileId.GrassTop,
      bottom: TileId.Dirt,
      north: TileId.GrassSide,
      south: TileId.GrassSide,
      east: TileId.GrassSide,
      west: TileId.GrassSide
    }
  },
  [BlockType.Dirt]: {
    id: "dirt",
    displayName: "Dirt",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#8c6241",
    tiles: allFaces(TileId.Dirt),
    hardness: 0.5,
    drops: "dirt",
    preferredTool: "shovel",
    placeableItem: "dirt"
  },
  [BlockType.Stone]: {
    id: "stone",
    displayName: "Stone",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#8b9290",
    tiles: allFaces(TileId.Stone),
    hardness: 1.5,
    drops: "stone",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    placeableItem: "stone"
  },
  [BlockType.Sand]: {
    id: "sand",
    displayName: "Sand",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#d9c987",
    tiles: allFaces(TileId.Sand),
    hardness: 0.5,
    drops: "sand",
    preferredTool: "shovel",
    placeableItem: "sand"
  },
  [BlockType.Water]: {
    id: "water",
    displayName: "Water",
    solid: false,
    transparent: true,
    fluid: true,
    swatch: "#3f9fd0",
    tiles: allFaces(TileId.Water),
    hardness: 100,
    drops: "water",
    placeableItem: "water"
  },
  [BlockType.Log]: {
    id: "log",
    displayName: "Log",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#8a6038",
    hardness: 2,
    drops: "log",
    preferredTool: "axe",
    placeableItem: "log",
    tiles: {
      top: TileId.LogTop,
      bottom: TileId.LogTop,
      north: TileId.LogSide,
      south: TileId.LogSide,
      east: TileId.LogSide,
      west: TileId.LogSide
    }
  },
  [BlockType.Leaves]: {
    id: "leaves",
    displayName: "Leaves",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#4e9b5a",
    tiles: allFaces(TileId.Leaves),
    hardness: 0.2,
    drops: "leaves",
    placeableItem: "leaves"
  },
  [BlockType.Ore]: {
    id: "ore",
    displayName: "Ore",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#62c2c9",
    tiles: allFaces(TileId.Ore),
    hardness: 3,
    drops: "ore",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    placeableItem: "ore"
  },
  [BlockType.Brick]: {
    id: "brick",
    displayName: "Brick",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#a8574f",
    tiles: allFaces(TileId.Brick),
    hardness: 2,
    drops: "brick",
    preferredTool: "pickaxe",
    placeableItem: "brick"
  },
  [BlockType.Planks]: {
    id: "planks",
    displayName: "Planks",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#b9854b",
    tiles: allFaces(TileId.Planks),
    hardness: 2,
    drops: "planks",
    preferredTool: "axe",
    placeableItem: "planks"
  },
  [BlockType.CraftingTable]: {
    id: "crafting_table",
    displayName: "Crafting Table",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#a46d3d",
    tiles: {
      top: TileId.CraftingTable,
      bottom: TileId.Planks,
      north: TileId.CraftingTable,
      south: TileId.CraftingTable,
      east: TileId.CraftingTable,
      west: TileId.CraftingTable
    },
    hardness: 2.5,
    drops: "crafting_table",
    preferredTool: "axe",
    placeableItem: "crafting_table",
    interactable: "crafting_table"
  },
  [BlockType.CoalOre]: {
    id: "coal_ore",
    displayName: "Coal Ore",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#4b4d4b",
    tiles: allFaces(TileId.CoalOre),
    hardness: 3,
    drops: "coal",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "coal_ore"
  },
  [BlockType.CopperOre]: {
    id: "copper_ore",
    displayName: "Copper Ore",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#a76846",
    tiles: allFaces(TileId.CopperOre),
    hardness: 3,
    drops: "raw_copper",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "stone",
    placeableItem: "copper_ore"
  },
  [BlockType.IronOre]: {
    id: "iron_ore",
    displayName: "Iron Ore",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#b08f75",
    tiles: allFaces(TileId.IronOre),
    hardness: 3,
    drops: "raw_iron",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "stone",
    placeableItem: "iron_ore"
  },
  [BlockType.GoldOre]: {
    id: "gold_ore",
    displayName: "Gold Ore",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#d6aa35",
    tiles: allFaces(TileId.GoldOre),
    hardness: 3,
    drops: "raw_gold",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "iron",
    placeableItem: "gold_ore"
  },
  [BlockType.RedstoneOre]: {
    id: "redstone_ore",
    displayName: "Redstone Ore",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#b53634",
    tiles: allFaces(TileId.RedstoneOre),
    hardness: 3,
    drops: "redstone_dust",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "iron",
    placeableItem: "redstone_ore"
  },
  [BlockType.LapisOre]: {
    id: "lapis_ore",
    displayName: "Lapis Ore",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#345dbc",
    tiles: allFaces(TileId.LapisOre),
    hardness: 3,
    drops: "lapis_lazuli",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "stone",
    placeableItem: "lapis_ore"
  },
  [BlockType.DiamondOre]: {
    id: "diamond_ore",
    displayName: "Diamond Ore",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#58d6d0",
    tiles: allFaces(TileId.DiamondOre),
    hardness: 3,
    drops: "diamond",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "iron",
    placeableItem: "diamond_ore"
  },
  [BlockType.EmeraldOre]: {
    id: "emerald_ore",
    displayName: "Emerald Ore",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#45bf62",
    tiles: allFaces(TileId.EmeraldOre),
    hardness: 3,
    drops: "emerald",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "iron",
    placeableItem: "emerald_ore"
  },
  [BlockType.Furnace]: {
    id: "furnace",
    displayName: "Furnace",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#686e6b",
    tiles: {
      top: TileId.FurnaceSide,
      bottom: TileId.FurnaceSide,
      north: TileId.FurnaceFront,
      south: TileId.FurnaceFront,
      east: TileId.FurnaceSide,
      west: TileId.FurnaceSide
    },
    hardness: 3.5,
    drops: "furnace",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "furnace",
    interactable: "furnace"
  },
  [BlockType.Chest]: {
    id: "chest",
    displayName: "Chest",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#9b642f",
    tiles: allFaces(TileId.Chest),
    hardness: 2.5,
    drops: "chest",
    preferredTool: "axe",
    placeableItem: "chest",
    interactable: "chest"
  },
  [BlockType.Torch]: {
    id: "torch",
    displayName: "Torch",
    solid: false,
    transparent: true,
    fluid: false,
    swatch: "#f0a83c",
    tiles: allFaces(TileId.Torch),
    hardness: 0.1,
    drops: "torch",
    placeableItem: "torch"
  }
};

export const HOTBAR_BLOCKS: BlockType[] = [
  BlockType.Grass,
  BlockType.Dirt,
  BlockType.Stone,
  BlockType.Sand,
  BlockType.Water,
  BlockType.Log,
  BlockType.Leaves,
  BlockType.CoalOre,
  BlockType.Furnace
];

export function blockKey(x: number, y: number, z: number): string {
  return `${x},${y},${z}`;
}

export function parseBlockKey(key: string): [number, number, number] {
  const [x, y, z] = key.split(",").map(Number);
  return [x, y, z];
}

export function isVisibleTarget(block: BlockType): boolean {
  return block !== BlockType.Air;
}

export function isSolid(block: BlockType): boolean {
  return BLOCKS[block].solid;
}
