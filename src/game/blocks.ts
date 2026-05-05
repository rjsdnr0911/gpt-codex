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
  CraftingTable = 11
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
  | "crafting_table";

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
  CraftingTable = 12
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
  placeableItem?: string;
  interactable?: "crafting_table";
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
  BlockType.Ore,
  BlockType.Brick
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
