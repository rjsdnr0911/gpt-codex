import { del, get, set } from "idb-keyval";
import { BlockType } from "./blocks";
import { InventoryState } from "./inventory";
import { SurvivalState } from "./survival";

const LEGACY_SAVE_KEY = "voxel-frontier:save:v1";
const SAVE_INDEX_KEY = "voxel-frontier:saves:v2";

export interface SavedBlock {
  x: number;
  y: number;
  z: number;
  block: BlockType;
}

export interface SavedPlayer {
  position: [number, number, number];
  yaw: number;
  pitch: number;
  selectedSlot: number;
}

export interface SavedEntity {
  id: number;
  type: string;
  position: [number, number, number];
  health: number;
  age: number;
}

export interface GameRules {
  mobGriefing: boolean;
}

export interface SavedGameV1 {
  version: 1;
  seed: string;
  modified: SavedBlock[];
  player: SavedPlayer;
}

export interface WorldSaveV2 {
  version: 2 | 3;
  worldgenVersion?: number;
  id: string;
  name: string;
  seed: string;
  createdAt: number;
  updatedAt: number;
  modified: SavedBlock[];
  player: SavedPlayer;
  inventory: InventoryState;
  survival: SurvivalState;
  unlockedRecipes: string[];
  lootedChests?: string[];
  entities?: SavedEntity[];
  gameRules?: GameRules;
}

export type WorldSaveV3 = WorldSaveV2 & {
  version: 3;
  lootedChests: string[];
  entities: SavedEntity[];
  gameRules: GameRules;
};

export interface SaveIndexV2 {
  version: 2 | 3;
  activeWorldId: string | null;
  worlds: WorldSaveV2[];
}

export class SaveSystem {
  async loadIndex(): Promise<SaveIndexV2> {
    const index = await get<SaveIndexV2>(SAVE_INDEX_KEY);

    if (index?.version === 2 || index?.version === 3) {
      return index;
    }

    const legacy = await get<SavedGameV1>(LEGACY_SAVE_KEY);

    if (legacy?.version === 1) {
      return {
        version: 3,
        activeWorldId: "legacy-world",
        worlds: []
      };
    }

    return {
      version: 3,
      activeWorldId: null,
      worlds: []
    };
  }

  async loadLegacy(): Promise<SavedGameV1 | null> {
    const legacy = await get<SavedGameV1>(LEGACY_SAVE_KEY);
    return legacy?.version === 1 ? legacy : null;
  }

  async saveIndex(index: SaveIndexV2): Promise<void> {
    await set(SAVE_INDEX_KEY, index);
  }

  async upsertWorld(world: WorldSaveV2): Promise<SaveIndexV2> {
    const index = await this.loadIndex();
    const existing = index.worlds.findIndex((entry) => entry.id === world.id);

    if (existing >= 0) {
      index.worlds[existing] = world;
    } else {
      index.worlds.unshift(world);
    }

    index.version = 3;
    index.activeWorldId = world.id;
    index.worlds.sort((a, b) => b.updatedAt - a.updatedAt);
    await this.saveIndex(index);
    return index;
  }

  async deleteWorld(id: string): Promise<SaveIndexV2> {
    const index = await this.loadIndex();
    index.worlds = index.worlds.filter((world) => world.id !== id);

    if (index.activeWorldId === id) {
      index.activeWorldId = index.worlds[0]?.id ?? null;
    }

    await this.saveIndex(index);
    return index;
  }

  async clearAll(): Promise<void> {
    await del(LEGACY_SAVE_KEY);
    await del(SAVE_INDEX_KEY);
  }
}
