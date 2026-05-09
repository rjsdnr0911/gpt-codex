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
  Torch = 22,
  Gravel = 23,
  Bed = 24,
  Lava = 25,
  Obsidian = 26,
  Fire = 27,
  NetherPortal = 28,
  RuinedPortalDebris = 29,
  Netherrack = 30,
  NetherBrick = 31,
  SoulSand = 32,
  Basalt = 33,
  QuartzOre = 34,
  NetherGoldOre = 35,
  StoneBricks = 36,
  CrackedStoneBricks = 37,
  MossyStoneBricks = 38,
  Bookshelf = 39,
  IronBars = 40,
  EndPortalFrame = 41,
  EndPortalFrameEye = 42,
  EndPortal = 43
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
  | "torch"
  | "gravel"
  | "bed"
  | "lava"
  | "obsidian"
  | "fire"
  | "nether_portal"
  | "ruined_portal_debris"
  | "netherrack"
  | "nether_brick"
  | "soul_sand"
  | "basalt"
  | "quartz_ore"
  | "nether_gold_ore"
  | "stone_bricks"
  | "cracked_stone_bricks"
  | "mossy_stone_bricks"
  | "bookshelf"
  | "iron_bars"
  | "end_portal_frame"
  | "end_portal_frame_eye"
  | "end_portal";

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
  Torch = 24,
  Gravel = 25,
  Bed = 26,
  Lava = 27,
  Obsidian = 28,
  Fire = 29,
  NetherPortal = 30,
  RuinedPortalDebris = 31,
  Netherrack = 32,
  NetherBrick = 33,
  SoulSand = 34,
  Basalt = 35,
  QuartzOre = 36,
  NetherGoldOre = 37,
  StoneBricks = 38,
  CrackedStoneBricks = 39,
  MossyStoneBricks = 40,
  Bookshelf = 41,
  IronBars = 42,
  EndPortalFrame = 43,
  EndPortalFrameEye = 44,
  EndPortal = 45
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
  requiredTier?: "wood" | "stone" | "copper" | "iron" | "gold" | "diamond";
  placeableItem?: string;
  interactable?: "crafting_table" | "furnace" | "chest" | "bed";
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
    displayName: "공기",
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
    displayName: "잔디",
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
    displayName: "흙",
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
    displayName: "돌",
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
    displayName: "모래",
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
    displayName: "물",
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
    displayName: "원목",
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
    displayName: "나뭇잎",
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
    displayName: "구형 광석",
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
    displayName: "벽돌 블록",
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
    displayName: "나무 판자",
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
    displayName: "제작대",
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
    displayName: "석탄 광석",
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
    displayName: "구리 광석",
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
    displayName: "철 광석",
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
    displayName: "금 광석",
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
    displayName: "레드스톤 광석",
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
    displayName: "청금석 광석",
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
    displayName: "다이아몬드 광석",
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
    displayName: "에메랄드 광석",
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
    displayName: "화로",
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
    displayName: "상자",
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
    displayName: "횃불",
    solid: false,
    transparent: true,
    fluid: false,
    swatch: "#f0a83c",
    tiles: allFaces(TileId.Torch),
    hardness: 0.1,
    drops: "torch",
    placeableItem: "torch"
  },
  [BlockType.Gravel]: {
    id: "gravel",
    displayName: "자갈",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#7a7c7a",
    tiles: allFaces(TileId.Gravel),
    hardness: 0.6,
    drops: "gravel",
    preferredTool: "shovel",
    placeableItem: "gravel"
  },
  [BlockType.Bed]: {
    id: "bed",
    displayName: "침대",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#c94646",
    tiles: allFaces(TileId.Bed),
    hardness: 0.4,
    drops: "bed",
    preferredTool: "axe",
    placeableItem: "bed",
    interactable: "bed"
  },
  [BlockType.Lava]: {
    id: "lava",
    displayName: "용암",
    solid: false,
    transparent: true,
    fluid: false,
    swatch: "#e86a2b",
    tiles: allFaces(TileId.Lava),
    hardness: 100,
    drops: null
  },
  [BlockType.Obsidian]: {
    id: "obsidian",
    displayName: "흑요석",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#211a31",
    tiles: allFaces(TileId.Obsidian),
    hardness: 70,
    drops: "obsidian",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "diamond",
    placeableItem: "obsidian"
  },
  [BlockType.Fire]: {
    id: "fire",
    displayName: "불",
    solid: false,
    transparent: true,
    fluid: false,
    swatch: "#ff9c2e",
    tiles: allFaces(TileId.Fire),
    hardness: 0.1,
    drops: null
  },
  [BlockType.NetherPortal]: {
    id: "nether_portal",
    displayName: "지옥문",
    solid: false,
    transparent: true,
    fluid: false,
    swatch: "#7143d9",
    tiles: allFaces(TileId.NetherPortal),
    hardness: 100,
    drops: null
  },
  [BlockType.RuinedPortalDebris]: {
    id: "ruined_portal_debris",
    displayName: "폐허 포털 잔해",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#2f263a",
    tiles: allFaces(TileId.RuinedPortalDebris),
    hardness: 18,
    drops: "obsidian",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "diamond",
    placeableItem: "obsidian"
  },
  [BlockType.Netherrack]: {
    id: "netherrack",
    displayName: "네더랙",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#7f2f2d",
    tiles: allFaces(TileId.Netherrack),
    hardness: 0.55,
    drops: "netherrack",
    preferredTool: "pickaxe",
    placeableItem: "netherrack"
  },
  [BlockType.NetherBrick]: {
    id: "nether_brick",
    displayName: "네더 벽돌",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#3c1b24",
    tiles: allFaces(TileId.NetherBrick),
    hardness: 2,
    drops: "nether_brick",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "nether_brick"
  },
  [BlockType.SoulSand]: {
    id: "soul_sand",
    displayName: "영혼 모래",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#6e5042",
    tiles: allFaces(TileId.SoulSand),
    hardness: 0.5,
    drops: "soul_sand",
    preferredTool: "shovel",
    placeableItem: "soul_sand"
  },
  [BlockType.Basalt]: {
    id: "basalt",
    displayName: "현무암",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#4a4648",
    tiles: allFaces(TileId.Basalt),
    hardness: 1.25,
    drops: "basalt",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "basalt"
  },
  [BlockType.QuartzOre]: {
    id: "quartz_ore",
    displayName: "네더 석영 광석",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#b36f67",
    tiles: allFaces(TileId.QuartzOre),
    hardness: 3,
    drops: "nether_quartz",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "quartz_ore"
  },
  [BlockType.NetherGoldOre]: {
    id: "nether_gold_ore",
    displayName: "네더 금 광석",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#ad5b35",
    tiles: allFaces(TileId.NetherGoldOre),
    hardness: 3,
    drops: "gold_nugget",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "nether_gold_ore"
  },
  [BlockType.StoneBricks]: {
    id: "stone_bricks",
    displayName: "석재 벽돌",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#747b78",
    tiles: allFaces(TileId.StoneBricks),
    hardness: 1.5,
    drops: "stone_bricks",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "stone_bricks"
  },
  [BlockType.CrackedStoneBricks]: {
    id: "cracked_stone_bricks",
    displayName: "금 간 석재 벽돌",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#666d6a",
    tiles: allFaces(TileId.CrackedStoneBricks),
    hardness: 1.5,
    drops: "cracked_stone_bricks",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "cracked_stone_bricks"
  },
  [BlockType.MossyStoneBricks]: {
    id: "mossy_stone_bricks",
    displayName: "이끼 낀 석재 벽돌",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#6f8068",
    tiles: allFaces(TileId.MossyStoneBricks),
    hardness: 1.5,
    drops: "mossy_stone_bricks",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "mossy_stone_bricks"
  },
  [BlockType.Bookshelf]: {
    id: "bookshelf",
    displayName: "책장",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#8f5c32",
    tiles: allFaces(TileId.Bookshelf),
    hardness: 1.5,
    drops: "book",
    preferredTool: "axe",
    placeableItem: "bookshelf"
  },
  [BlockType.IronBars]: {
    id: "iron_bars",
    displayName: "철창",
    solid: true,
    transparent: true,
    fluid: false,
    swatch: "#b7c0bd",
    tiles: allFaces(TileId.IronBars),
    hardness: 5,
    drops: "iron_bars",
    preferredTool: "pickaxe",
    requiredTool: "pickaxe",
    requiredTier: "wood",
    placeableItem: "iron_bars"
  },
  [BlockType.EndPortalFrame]: {
    id: "end_portal_frame",
    displayName: "엔드 포털 프레임",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#6d8d68",
    tiles: allFaces(TileId.EndPortalFrame),
    hardness: 100,
    drops: null,
    requiredTool: "pickaxe",
    requiredTier: "diamond"
  },
  [BlockType.EndPortalFrameEye]: {
    id: "end_portal_frame_eye",
    displayName: "눈이 꽂힌 엔드 포털 프레임",
    solid: true,
    transparent: false,
    fluid: false,
    swatch: "#83c98b",
    tiles: allFaces(TileId.EndPortalFrameEye),
    hardness: 100,
    drops: null,
    requiredTool: "pickaxe",
    requiredTier: "diamond"
  },
  [BlockType.EndPortal]: {
    id: "end_portal",
    displayName: "엔드 포털",
    solid: false,
    transparent: true,
    fluid: false,
    swatch: "#07100f",
    tiles: allFaces(TileId.EndPortal),
    hardness: 100,
    drops: null
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
  BlockType.Furnace,
  BlockType.Netherrack
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
