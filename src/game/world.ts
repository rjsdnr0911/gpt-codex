import { createNoise2D, createNoise3D, type NoiseFunction2D, type NoiseFunction3D } from "simplex-noise";
import * as THREE from "three";
import {
  BLOCKS,
  BlockType,
  CHUNK_SIZE,
  FaceName,
  LOAD_RADIUS,
  TileId,
  WATER_LEVEL,
  WORLD_HEIGHT,
  blockKey,
  parseBlockKey
} from "./blocks";
import { clamp, chunkCoord, hash3, localCoord, mulberry32, seedToInt } from "./math";
import { type DimensionId } from "./quests";
import { type SavedBlock } from "./saveSystem";
import { pushTileUvs, type VoxelMaterials } from "./textureAtlas";

export const WORLDGEN_VERSION = 5;

interface FaceDefinition {
  name: FaceName;
  normal: [number, number, number];
  shade: number;
  corners: [number, number, number][];
}

interface MeshData {
  positions: number[];
  normals: number[];
  uvs: number[];
  colors: number[];
  indices: number[];
}

const FACES: FaceDefinition[] = [
  {
    name: "top",
    normal: [0, 1, 0],
    shade: 1.12,
    corners: [
      [0, 1, 0],
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0]
    ]
  },
  {
    name: "bottom",
    normal: [0, -1, 0],
    shade: 0.52,
    corners: [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [0, 0, 1]
    ]
  },
  {
    name: "east",
    normal: [1, 0, 0],
    shade: 0.9,
    corners: [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
      [1, 0, 1]
    ]
  },
  {
    name: "west",
    normal: [-1, 0, 0],
    shade: 0.7,
    corners: [
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
    ]
  },
  {
    name: "south",
    normal: [0, 0, 1],
    shade: 0.82,
    corners: [
      [0, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1]
    ]
  },
  {
    name: "north",
    normal: [0, 0, -1],
    shade: 0.76,
    corners: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0]
    ]
  }
];

export interface WorldStats {
  chunks: number;
}

export class World {
  readonly group = new THREE.Group();
  readonly seed: string;
  readonly seedInt: number;
  readonly worldgenVersion: number;
  readonly dimension: DimensionId;

  private readonly chunks = new Map<string, Chunk>();
  private readonly modified = new Map<string, BlockType>();
  private readonly continentalNoise: NoiseFunction2D;
  private readonly hillNoise: NoiseFunction2D;
  private readonly detailNoise: NoiseFunction2D;
  private readonly caveNoise: NoiseFunction3D;
  private readonly caveRoomNoise: NoiseFunction3D;
  private readonly materials: VoxelMaterials;

  constructor(seed: string, materials: VoxelMaterials, worldgenVersion = WORLDGEN_VERSION, dimension: DimensionId = "overworld") {
    this.seed = seed;
    this.seedInt = seedToInt(seed);
    this.worldgenVersion = worldgenVersion;
    this.dimension = dimension;
    this.materials = materials;
    this.continentalNoise = createNoise2D(mulberry32(this.seedInt ^ 0xa53a9e1d));
    this.hillNoise = createNoise2D(mulberry32(this.seedInt ^ 0x51f15e2d));
    this.detailNoise = createNoise2D(mulberry32(this.seedInt ^ 0x8c3c6f43));
    this.caveNoise = createNoise3D(mulberry32(this.seedInt ^ 0x2f63d4a1));
    this.caveRoomNoise = createNoise3D(mulberry32(this.seedInt ^ 0x9a1c77e3));
    this.group.name = `Codex Craft ${dimension} world`;
  }

  setModifiedBlocks(blocks: SavedBlock[]): void {
    this.modified.clear();

    for (const block of blocks) {
      if (block.y >= 0 && block.y < WORLD_HEIGHT) {
        this.modified.set(blockKey(block.x, block.y, block.z), block.block);
      }
    }
  }

  forEachModifiedBlockInBounds(
    minX: number,
    minZ: number,
    maxX: number,
    maxZ: number,
    callback: (x: number, y: number, z: number, block: BlockType) => void
  ): void {
    for (const [key, block] of this.modified) {
      const [x, y, z] = parseBlockKey(key);

      if (x >= minX && x < maxX && z >= minZ && z < maxZ && y >= 0 && y < WORLD_HEIGHT) {
        callback(x, y, z, block);
      }
    }
  }

  exportModifiedBlocks(): SavedBlock[] {
    const blocks: SavedBlock[] = [];

    for (const [key, block] of this.modified) {
      const [x, y, z] = parseBlockKey(key);
      blocks.push({ x, y, z, block });
    }

    return blocks;
  }

  getStats(): WorldStats {
    return {
      chunks: this.chunks.size
    };
  }

  getBlock(x: number, y: number, z: number): BlockType {
    if (y < 0) {
      return this.dimension === "nether" ? BlockType.Basalt : BlockType.Stone;
    }

    if (y >= WORLD_HEIGHT) {
      return BlockType.Air;
    }

    const modified = this.modified.get(blockKey(x, y, z));
    if (modified !== undefined) {
      return modified;
    }

    const cx = chunkCoord(x, CHUNK_SIZE);
    const cz = chunkCoord(z, CHUNK_SIZE);
    const chunk = this.chunks.get(chunkKey(cx, cz));

    if (chunk) {
      return chunk.getLocal(localCoord(x, CHUNK_SIZE), y, localCoord(z, CHUNK_SIZE));
    }

    return this.getNaturalBlock(x, y, z);
  }

  setBlock(x: number, y: number, z: number, block: BlockType): boolean {
    if (y < 0 || y >= WORLD_HEIGHT) {
      return false;
    }

    const current = this.getBlock(x, y, z);
    if (current === block) {
      return false;
    }

    this.modified.set(blockKey(x, y, z), block);

    const cx = chunkCoord(x, CHUNK_SIZE);
    const cz = chunkCoord(z, CHUNK_SIZE);
    const chunk = this.chunks.get(chunkKey(cx, cz));

    if (chunk) {
      chunk.setLocal(localCoord(x, CHUNK_SIZE), y, localCoord(z, CHUNK_SIZE), block);
    }

    this.markDirtyAround(x, z);
    return true;
  }

  ensureChunksAround(position: THREE.Vector3, radius = LOAD_RADIUS): void {
    const centerX = chunkCoord(position.x, CHUNK_SIZE);
    const centerZ = chunkCoord(position.z, CHUNK_SIZE);
    const needed = new Set<string>();

    for (let dz = -radius; dz <= radius; dz += 1) {
      for (let dx = -radius; dx <= radius; dx += 1) {
        const cx = centerX + dx;
        const cz = centerZ + dz;
        const key = chunkKey(cx, cz);
        needed.add(key);

        if (!this.chunks.has(key)) {
          const chunk = new Chunk(this, cx, cz);
          this.chunks.set(key, chunk);
        }
      }
    }

    for (const [key, chunk] of this.chunks) {
      if (Math.max(Math.abs(chunk.cx - centerX), Math.abs(chunk.cz - centerZ)) > radius + 1) {
        chunk.dispose(this.group);
        this.chunks.delete(key);
      }
    }

    for (const key of needed) {
      this.chunks.get(key)?.rebuild(this.group, this.materials);
    }
  }

  terrainHeight(x: number, z: number): number {
    if (this.dimension === "nether") {
      return this.netherTerrainHeight(x, z);
    }

    const continent = (this.continentalNoise(x * 0.0048, z * 0.0048) + 1) * 0.5;
    const hills = this.hillNoise(x * 0.028, z * 0.028);
    const detail = this.detailNoise(x * 0.092, z * 0.092);
    const shoreline = (continent - 0.42) * 30;
    const height = Math.floor(WATER_LEVEL + shoreline + hills * 8 + detail * 3);
    return clamp(height, 8, WORLD_HEIGHT - 12);
  }

  getNaturalBlock(x: number, y: number, z: number): BlockType {
    if (this.dimension === "nether") {
      return this.getNetherNaturalBlock(x, y, z);
    }

    const height = this.terrainHeight(x, z);

    if (y > height) {
      return y <= WATER_LEVEL ? BlockType.Water : BlockType.Air;
    }

    if (y === height) {
      if (height <= WATER_LEVEL + 1) {
        return hash3(this.seedInt ^ 0x6b7a, x, y, z) < 0.18 ? BlockType.Gravel : BlockType.Sand;
      }

      if (height > WORLD_HEIGHT - 18 && hash3(this.seedInt, x, y, z) > 0.62) {
        return BlockType.Stone;
      }

      return BlockType.Grass;
    }

    if (y > height - 4) {
      if (height <= WATER_LEVEL + 1) {
        return hash3(this.seedInt ^ 0x67a71, x, y, z) < 0.22 ? BlockType.Gravel : BlockType.Sand;
      }

      return BlockType.Dirt;
    }

    if (this.worldgenVersion < WORLDGEN_VERSION) {
      if (y < height - 8 && y < 45 && hash3(this.seedInt, x, y, z) < 0.018) {
        return BlockType.Ore;
      }

      return BlockType.Stone;
    }

    if (this.isCave(x, y, z, height)) {
      if (y < 12 && hash3(this.seedInt ^ 0x1a7a, x, y, z) < 0.12) {
        return BlockType.Lava;
      }

      return y < WATER_LEVEL - 10 && hash3(this.seedInt ^ 0x3a0a, x, y, z) < 0.075 ? BlockType.Water : BlockType.Air;
    }

    return this.oreAt(x, y, z, height) ?? BlockType.Stone;
  }

  private isCave(x: number, y: number, z: number, height: number): boolean {
    if (y < 5 || y > height - 5) {
      return false;
    }

    const spawnProtection = Math.max(0, 1 - Math.hypot(x, z) / 20);
    const depth = clamp((height - y) / 42, 0, 1);
    const tunnel = Math.abs(this.caveNoise(x * 0.055, y * 0.078, z * 0.055));
    const room = this.caveRoomNoise(x * 0.027, y * 0.038, z * 0.027);
    const tunnelThreshold = 0.055 + depth * 0.055 - spawnProtection * 0.04;
    const roomThreshold = 0.73 + spawnProtection * 0.08;
    return tunnel < tunnelThreshold || room > roomThreshold;
  }

  private oreAt(x: number, y: number, z: number, height: number): BlockType | null {
    const specs: Array<{
      block: BlockType;
      min: number;
      max: number;
      peaks: number[];
      chance: number;
      salt: number;
      mountainOnly?: boolean;
    }> = [
      { block: BlockType.DiamondOre, min: 2, max: 16, peaks: [5], chance: 0.018, salt: 0xd1a },
      { block: BlockType.RedstoneOre, min: 4, max: 18, peaks: [7], chance: 0.028, salt: 0xeda },
      { block: BlockType.GoldOre, min: 4, max: 24, peaks: [12], chance: 0.018, salt: 0x601d },
      { block: BlockType.LapisOre, min: 8, max: 30, peaks: [18], chance: 0.018, salt: 0x1a915 },
      { block: BlockType.EmeraldOre, min: 28, max: 60, peaks: [44], chance: 0.012, salt: 0xe2e, mountainOnly: true },
      { block: BlockType.IronOre, min: 8, max: 54, peaks: [16, 44], chance: 0.055, salt: 0x1f0a },
      { block: BlockType.CopperOre, min: 16, max: 44, peaks: [32], chance: 0.045, salt: 0xc099 },
      { block: BlockType.CoalOre, min: 20, max: 60, peaks: [46], chance: 0.075, salt: 0xc0a1 }
    ];

    for (const spec of specs) {
      if (y < spec.min || y > spec.max) {
        continue;
      }

      if (spec.mountainOnly && height < WATER_LEVEL + 24) {
        continue;
      }

      const vertical = Math.max(...spec.peaks.map((peak) => 1 - Math.abs(y - peak) / Math.max(1, spec.max - spec.min)));
      const vein = hash3(this.seedInt ^ spec.salt, Math.floor(x / 2), Math.floor(y / 2), Math.floor(z / 2));
      const fleck = hash3(this.seedInt ^ (spec.salt << 1), x, y, z);
      if (vein < spec.chance * vertical && fleck < 0.74) {
        return spec.block;
      }
    }

    return null;
  }

  private netherTerrainHeight(x: number, z: number): number {
    const shelf = this.hillNoise(x * 0.018 + 90, z * 0.018 - 140);
    const detail = this.detailNoise(x * 0.067 - 40, z * 0.067 + 20);
    return clamp(Math.floor(44 + shelf * 8 + detail * 3), 28, WORLD_HEIGHT - 8);
  }

  private getNetherNaturalBlock(x: number, y: number, z: number): BlockType {
    if (y <= 1 || y >= WORLD_HEIGHT - 2) {
      return BlockType.Basalt;
    }

    if (this.isNetherOpen(x, y, z)) {
      return y <= 16 ? BlockType.Lava : BlockType.Air;
    }

    if (y <= 15 && hash3(this.seedInt ^ 0x1a6a, x, y, z) < 0.12) {
      return BlockType.Lava;
    }

    const ore = this.netherOreAt(x, y, z);
    if (ore) {
      return ore;
    }

    const patch = hash3(this.seedInt ^ 0x50a1, Math.floor(x / 4), Math.floor(y / 3), Math.floor(z / 4));
    if (y < 25 && patch < 0.055) {
      return BlockType.SoulSand;
    }

    if (y > 44 && patch > 0.955) {
      return BlockType.Basalt;
    }

    return BlockType.Netherrack;
  }

  private isNetherOpen(x: number, y: number, z: number): boolean {
    if (y < 8 || y > WORLD_HEIGHT - 7) {
      return false;
    }

    const midBand = clamp(1 - Math.abs(y - 37) / 31, 0, 1);
    const tunnel = Math.abs(this.caveNoise(x * 0.045, y * 0.064, z * 0.045));
    const room = this.caveRoomNoise(x * 0.024, y * 0.032, z * 0.024);
    const lavaCavern = y < 21 && room > 0.58 && tunnel < 0.22;
    return tunnel < 0.055 + midBand * 0.07 || room > 0.69 || lavaCavern;
  }

  private netherOreAt(x: number, y: number, z: number): BlockType | null {
    const quartzBand = clamp(1 - Math.abs(y - 36) / 24, 0, 1);
    const goldBand = clamp(1 - Math.abs(y - 28) / 20, 0, 1);
    const quartzVein = hash3(this.seedInt ^ 0x9a44, Math.floor(x / 2), Math.floor(y / 2), Math.floor(z / 2));
    const goldVein = hash3(this.seedInt ^ 0xa071d, Math.floor(x / 2), Math.floor(y / 2), Math.floor(z / 2));
    const fleck = hash3(this.seedInt ^ 0x714a, x, y, z);

    if (quartzVein < 0.045 * quartzBand && fleck < 0.72) {
      return BlockType.QuartzOre;
    }

    if (goldVein < 0.024 * goldBand && fleck > 0.24 && fleck < 0.78) {
      return BlockType.NetherGoldOre;
    }

    return null;
  }

  shouldTree(x: number, z: number): boolean {
    if (this.dimension !== "overworld") {
      return false;
    }

    const height = this.terrainHeight(x, z);

    if (height <= WATER_LEVEL + 2 || height > WORLD_HEIGHT - 18) {
      return false;
    }

    const forest = (this.detailNoise(x * 0.018 + 200, z * 0.018 - 100) + 1) * 0.5;
    return forest > 0.44 && hash3(this.seedInt, x, 91, z) < 0.025;
  }

  treeHeight(x: number, z: number): number {
    return 4 + Math.floor(hash3(this.seedInt, x, 123, z) * 3);
  }

  findSpawn(): THREE.Vector3 {
    if (this.dimension === "nether") {
      return this.findNetherSpawn();
    }

    let best: THREE.Vector3 | null = null;
    let bestScore = -Infinity;

    for (let z = -48; z <= 48; z += 3) {
      for (let x = -48; x <= 48; x += 3) {
        const height = this.terrainHeight(x, z);
        const idealHeight = WATER_LEVEL + 10;
        const heightScore = 32 - Math.abs(height - idealHeight) * 2.4;
        const shorelineBonus = height <= WATER_LEVEL + 14 ? 7 : 0;
        const distancePenalty = Math.hypot(x, z) * 0.08;
        const treePenalty = this.nearbyTreePenalty(x, z);
        const score =
          heightScore + shorelineBonus - distancePenalty - treePenalty * 2 + this.hillNoise(x * 0.04, z * 0.04);

        if (height > WATER_LEVEL + 2 && treePenalty < 4 && score > bestScore) {
          bestScore = score;
          best = new THREE.Vector3(x + 0.5, height + 2, z + 0.5);
        }
      }
    }

    return best ?? new THREE.Vector3(0.5, this.terrainHeight(0, 0) + 4, 0.5);
  }

  findScenicYaw(position: THREE.Vector3): number {
    if (this.dimension === "nether") {
      return this.findOpenYaw(position);
    }

    let bestYaw = 0;
    let bestScore = -Infinity;
    const eyeHeight = position.y + 1.6;

    for (let index = 0; index < 40; index += 1) {
      const yaw = (index / 40) * Math.PI * 2;
      const dirX = -Math.sin(yaw);
      const dirZ = -Math.cos(yaw);
      let score = 0;

      for (let distance = 6; distance <= 60; distance += 4) {
        const sampleX = Math.round(position.x + dirX * distance);
        const sampleZ = Math.round(position.z + dirZ * distance);
        const height = this.terrainHeight(sampleX, sampleZ);
        const clearance = eyeHeight - height;
        score += clamp(clearance, -12, 22) * (1 / (1 + distance * 0.035));

        if (height <= WATER_LEVEL + 1) {
          score += 8;
        }

        if (height > eyeHeight - 1 && distance < 16) {
          score -= 34;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestYaw = yaw;
      }
    }

    return bestYaw;
  }

  private markDirtyAround(x: number, z: number): void {
    const cx = chunkCoord(x, CHUNK_SIZE);
    const cz = chunkCoord(z, CHUNK_SIZE);
    const lx = localCoord(x, CHUNK_SIZE);
    const lz = localCoord(z, CHUNK_SIZE);

    this.chunks.get(chunkKey(cx, cz))?.markDirty();

    if (lx === 0) {
      this.chunks.get(chunkKey(cx - 1, cz))?.markDirty();
    }

    if (lx === CHUNK_SIZE - 1) {
      this.chunks.get(chunkKey(cx + 1, cz))?.markDirty();
    }

    if (lz === 0) {
      this.chunks.get(chunkKey(cx, cz - 1))?.markDirty();
    }

    if (lz === CHUNK_SIZE - 1) {
      this.chunks.get(chunkKey(cx, cz + 1))?.markDirty();
    }
  }

  private nearbyTreePenalty(x: number, z: number): number {
    let penalty = 0;

    for (let dz = -8; dz <= 8; dz += 1) {
      for (let dx = -8; dx <= 8; dx += 1) {
        if (this.shouldTree(x + dx, z + dz)) {
          penalty += 9 - Math.min(8, Math.max(Math.abs(dx), Math.abs(dz)));
        }
      }
    }

    return penalty;
  }

  private findNetherSpawn(): THREE.Vector3 {
    let best: THREE.Vector3 | null = null;
    let bestScore = -Infinity;

    for (let z = -48; z <= 48; z += 2) {
      for (let x = -48; x <= 48; x += 2) {
        for (let y = 24; y <= 52; y += 1) {
          if (!this.isAirPocketForPlayer(x, y, z)) {
            continue;
          }

          const floor = this.getNaturalBlock(x, y - 1, z);
          if (floor === BlockType.Lava || !BLOCKS[floor].solid) {
            continue;
          }

          const lavaPenalty = this.nearbyBlockPenalty(x, y, z, BlockType.Lava, 5) * 4.5;
          const fortressBonus = this.nearbyBlockPenalty(x, y, z, BlockType.NetherBrick, 18) > 0 ? 9 : 0;
          const score = 42 - Math.hypot(x, z) * 0.22 - Math.abs(y - 36) * 1.6 + fortressBonus - lavaPenalty;
          if (score > bestScore) {
            bestScore = score;
            best = new THREE.Vector3(x + 0.5, y, z + 0.5);
          }
        }
      }
    }

    return best ?? new THREE.Vector3(0.5, 36, 0.5);
  }

  private isAirPocketForPlayer(x: number, y: number, z: number): boolean {
    return (
      this.getNaturalBlock(x, y, z) === BlockType.Air &&
      this.getNaturalBlock(x, y + 1, z) === BlockType.Air &&
      this.getNaturalBlock(x, y + 2, z) === BlockType.Air
    );
  }

  private nearbyBlockPenalty(x: number, y: number, z: number, block: BlockType, radius: number): number {
    let count = 0;
    for (let dz = -radius; dz <= radius; dz += 2) {
      for (let dx = -radius; dx <= radius; dx += 2) {
        for (let dy = -3; dy <= 3; dy += 2) {
          if (this.getNaturalBlock(x + dx, y + dy, z + dz) === block) {
            count += 1;
          }
        }
      }
    }
    return count;
  }

  private findOpenYaw(position: THREE.Vector3): number {
    let bestYaw = 0;
    let bestScore = -Infinity;

    for (let index = 0; index < 32; index += 1) {
      const yaw = (index / 32) * Math.PI * 2;
      const dirX = -Math.sin(yaw);
      const dirZ = -Math.cos(yaw);
      let score = 0;

      for (let distance = 3; distance <= 34; distance += 3) {
        const x = Math.floor(position.x + dirX * distance);
        const y = Math.floor(position.y + 1.2);
        const z = Math.floor(position.z + dirZ * distance);
        score += this.getBlock(x, y, z) === BlockType.Air ? 2 : -3;
      }

      if (score > bestScore) {
        bestScore = score;
        bestYaw = yaw;
      }
    }

    return bestYaw;
  }
}

class Chunk {
  readonly cx: number;
  readonly cz: number;
  private readonly blocks = new Uint8Array(CHUNK_SIZE * WORLD_HEIGHT * CHUNK_SIZE);
  private readonly world: World;
  private dirty = true;
  private solidMesh: THREE.Mesh | null = null;
  private waterMesh: THREE.Mesh | null = null;

  constructor(world: World, cx: number, cz: number) {
    this.world = world;
    this.cx = cx;
    this.cz = cz;
    this.generate();
  }

  getLocal(x: number, y: number, z: number): BlockType {
    if (y < 0) {
      return this.world.dimension === "nether" ? BlockType.Basalt : BlockType.Stone;
    }

    if (y >= WORLD_HEIGHT) {
      return BlockType.Air;
    }

    return this.blocks[this.index(x, y, z)] as BlockType;
  }

  setLocal(x: number, y: number, z: number, block: BlockType): void {
    if (y < 0 || y >= WORLD_HEIGHT) {
      return;
    }

    this.blocks[this.index(x, y, z)] = block;
    this.markDirty();
  }

  markDirty(): void {
    this.dirty = true;
  }

  rebuild(parent: THREE.Group, materials: VoxelMaterials): void {
    if (!this.dirty) {
      return;
    }

    this.dispose(parent);

    const solid = createMeshData();
    const water = createMeshData();
    const startX = this.cx * CHUNK_SIZE;
    const startZ = this.cz * CHUNK_SIZE;

    for (let z = 0; z < CHUNK_SIZE; z += 1) {
      for (let x = 0; x < CHUNK_SIZE; x += 1) {
        for (let y = 0; y < WORLD_HEIGHT; y += 1) {
          const block = this.getLocal(x, y, z);

          if (block === BlockType.Air) {
            continue;
          }

          const globalX = startX + x;
          const globalZ = startZ + z;
          const blockDefinition = BLOCKS[block];

          for (const face of FACES) {
            const neighbor = this.world.getBlock(
              globalX + face.normal[0],
              y + face.normal[1],
              globalZ + face.normal[2]
            );

            if (blockDefinition.fluid) {
              if (neighbor !== BlockType.Air) {
                continue;
              }
            } else if (neighbor !== BlockType.Air && !BLOCKS[neighbor].transparent) {
              continue;
            }

            pushFace(blockDefinition.fluid ? water : solid, globalX, y, globalZ, face, block);
          }
        }
      }
    }

    this.solidMesh = meshFromData(solid, materials.solid, "solid");
    this.waterMesh = meshFromData(water, materials.water, "water");

    if (this.solidMesh) {
      parent.add(this.solidMesh);
    }

    if (this.waterMesh) {
      this.waterMesh.renderOrder = 3;
      parent.add(this.waterMesh);
    }

    this.dirty = false;
  }

  dispose(parent: THREE.Group): void {
    if (this.solidMesh) {
      parent.remove(this.solidMesh);
      this.solidMesh.geometry.dispose();
      this.solidMesh = null;
    }

    if (this.waterMesh) {
      parent.remove(this.waterMesh);
      this.waterMesh.geometry.dispose();
      this.waterMesh = null;
    }
  }

  private generate(): void {
    const startX = this.cx * CHUNK_SIZE;
    const startZ = this.cz * CHUNK_SIZE;

    for (let z = 0; z < CHUNK_SIZE; z += 1) {
      for (let x = 0; x < CHUNK_SIZE; x += 1) {
        const globalX = startX + x;
        const globalZ = startZ + z;

        for (let y = 0; y < WORLD_HEIGHT; y += 1) {
          this.blocks[this.index(x, y, z)] = this.world.getNaturalBlock(globalX, y, globalZ);
        }
      }
    }

    this.placeTrees();
    this.placeStructures();
    this.applyModifiedBlocks();
  }

  private placeStructures(): void {
    if (this.world.worldgenVersion < WORLDGEN_VERSION) {
      return;
    }

    if (this.world.dimension === "nether") {
      this.placeNetherStructures();
      return;
    }

    const startX = this.cx * CHUNK_SIZE;
    const startZ = this.cz * CHUNK_SIZE;
    const centerX = startX + 4 + Math.floor(hash3(this.world.seedInt ^ 0x5cab1, this.cx, 20, this.cz) * 8);
    const centerZ = startZ + 4 + Math.floor(hash3(this.world.seedInt ^ 0x5cab2, this.cx, 21, this.cz) * 8);
    const surfaceRoll = hash3(this.world.seedInt ^ 0x7811, this.cx, 0, this.cz);
    const undergroundRoll = hash3(this.world.seedInt ^ 0x91d6, this.cx, 7, this.cz);

    if (surfaceRoll < 0.018) {
      this.placeCabin(centerX, centerZ);
    } else if (surfaceRoll < 0.04) {
      this.placeRuinedCamp(centerX, centerZ);
    } else if (surfaceRoll < 0.052) {
      this.placeLavaPool(centerX, centerZ);
    } else if (surfaceRoll < 0.064) {
      this.placeRuinedPortal(centerX, centerZ);
    }

    if (undergroundRoll < 0.035) {
      this.placeMineshaft(centerX, 10 + Math.floor(hash3(this.world.seedInt ^ 0xa11e, this.cx, 4, this.cz) * 22), centerZ);
    } else if (undergroundRoll < 0.047) {
      this.placeDungeon(centerX, 8 + Math.floor(hash3(this.world.seedInt ^ 0xd06e, this.cx, 5, this.cz) * 18), centerZ);
    }
  }

  private placeNetherStructures(): void {
    const guaranteedBridge = this.cz === -4 && this.cx >= -2 && this.cx <= 2;
    const guaranteedCross = this.cx === 0 && this.cz >= -5 && this.cz <= -3;
    const randomFortress = hash3(this.world.seedInt ^ 0xf047, Math.floor(this.cx / 7), 0, Math.floor(this.cz / 7)) < 0.035;

    if (guaranteedBridge || guaranteedCross || randomFortress) {
      const orientation = guaranteedBridge || (!guaranteedCross && hash3(this.world.seedInt ^ 0xf048, this.cx, 1, this.cz) < 0.5)
        ? "x"
        : "z";
      this.placeNetherFortressCorridor(orientation);
    }
  }

  private placeNetherFortressCorridor(orientation: "x" | "z"): void {
    const startX = this.cx * CHUNK_SIZE;
    const startZ = this.cz * CHUNK_SIZE;
    const baseY = 37;
    const centerA = 7;
    const sideMin = centerA - 2;
    const sideMax = centerA + 2;

    for (let a = 0; a < CHUNK_SIZE; a += 1) {
      for (let b = sideMin; b <= sideMax; b += 1) {
        const x = orientation === "x" ? startX + a : startX + b;
        const z = orientation === "x" ? startZ + b : startZ + a;

        this.placeGlobal(x, baseY - 1, z, BlockType.NetherBrick, true);
        for (let y = baseY; y <= baseY + 4; y += 1) {
          this.placeGlobal(x, y, z, BlockType.Air, true);
        }

        if (b === sideMin || b === sideMax) {
          this.placeGlobal(x, baseY, z, BlockType.NetherBrick, true);
          this.placeGlobal(x, baseY + 1, z, BlockType.NetherBrick, true);
        }
      }
    }

    if (this.cx === 0 && this.cz === -4) {
      this.placeNetherFortressHub(startX + 7, baseY, startZ + 7);
    }
  }

  private placeNetherFortressHub(x: number, y: number, z: number): void {
    for (let dz = -5; dz <= 5; dz += 1) {
      for (let dx = -5; dx <= 5; dx += 1) {
        this.placeGlobal(x + dx, y - 1, z + dz, BlockType.NetherBrick, true);
        for (let dy = 0; dy <= 5; dy += 1) {
          const wall = Math.abs(dx) === 5 || Math.abs(dz) === 5 || dy === 5;
          this.placeGlobal(x + dx, y + dy, z + dz, wall ? BlockType.NetherBrick : BlockType.Air, true);
        }
      }
    }

    this.placeGlobal(x, y, z, BlockType.Fire, true);
    this.placeGlobal(x - 3, y, z + 3, BlockType.Chest, true);
    this.placeGlobal(x + 3, y, z - 3, BlockType.QuartzOre, true);
    this.placeGlobal(x, y + 1, z - 5, BlockType.Air, true);
    this.placeGlobal(x + 1, y + 1, z - 5, BlockType.Air, true);
  }

  private placeCabin(x: number, z: number): void {
    const baseY = this.world.terrainHeight(x, z) + 1;
    if (baseY <= WATER_LEVEL + 1 || baseY >= WORLD_HEIGHT - 12) {
      return;
    }

    for (let dz = -3; dz <= 3; dz += 1) {
      for (let dx = -3; dx <= 3; dx += 1) {
        this.placeGlobal(x + dx, baseY - 1, z + dz, BlockType.Planks, true);
        for (let y = baseY; y <= baseY + 3; y += 1) {
          this.placeGlobal(x + dx, y, z + dz, BlockType.Air, true);
        }

        const edge = Math.abs(dx) === 3 || Math.abs(dz) === 3;
        const corner = Math.abs(dx) === 3 && Math.abs(dz) === 3;
        if (edge && !(dz === -3 && dx >= -1 && dx <= 1 && baseY < WORLD_HEIGHT - 4)) {
          this.placeGlobal(x + dx, baseY, z + dz, corner ? BlockType.Log : BlockType.Planks, true);
          this.placeGlobal(x + dx, baseY + 1, z + dz, corner ? BlockType.Log : BlockType.Planks, true);
        }

        if (edge || Math.abs(dx) <= 2 || Math.abs(dz) <= 2) {
          this.placeGlobal(x + dx, baseY + 3, z + dz, BlockType.Planks, true);
        }
      }
    }

    this.placeGlobal(x - 1, baseY, z - 3, BlockType.Air, true);
    this.placeGlobal(x, baseY, z - 3, BlockType.Air, true);
    this.placeGlobal(x + 2, baseY, z + 1, BlockType.CraftingTable, true);
    this.placeGlobal(x - 2, baseY, z + 1, BlockType.Chest, true);
    this.placeGlobal(x, baseY, z + 2, BlockType.Furnace, true);
    this.placeGlobal(x - 2, baseY, z - 1, BlockType.Bed, true);
    this.placeGlobal(x + 1, baseY + 1, z - 2, BlockType.Torch, true);
  }

  private placeRuinedCamp(x: number, z: number): void {
    const baseY = this.world.terrainHeight(x, z) + 1;
    if (baseY <= WATER_LEVEL + 1 || baseY >= WORLD_HEIGHT - 8) {
      return;
    }

    for (let dz = -2; dz <= 2; dz += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        if (Math.abs(dx) === 2 || Math.abs(dz) === 2 || hash3(this.world.seedInt, x + dx, baseY, z + dz) < 0.3) {
          this.placeGlobal(x + dx, baseY - 1, z + dz, BlockType.Planks, true);
        }
      }
    }

    this.placeGlobal(x - 2, baseY, z - 2, BlockType.Log, true);
    this.placeGlobal(x + 2, baseY, z - 2, BlockType.Log, true);
    this.placeGlobal(x - 1, baseY, z + 1, BlockType.Chest, true);
    this.placeGlobal(x + 1, baseY, z, BlockType.Furnace, true);
    this.placeGlobal(x, baseY, z, BlockType.Torch, true);
  }

  private placeLavaPool(x: number, z: number): void {
    const baseY = this.world.terrainHeight(x, z) + 1;
    if (baseY <= WATER_LEVEL + 3 || baseY >= WORLD_HEIGHT - 8) {
      return;
    }

    for (let dz = -3; dz <= 3; dz += 1) {
      for (let dx = -3; dx <= 3; dx += 1) {
        const distance = Math.hypot(dx, dz);
        if (distance > 3.2) {
          continue;
        }

        this.placeGlobal(x + dx, baseY - 1, z + dz, distance < 2.1 ? BlockType.Obsidian : BlockType.Stone, true);
        this.placeGlobal(x + dx, baseY, z + dz, distance < 1.9 ? BlockType.Lava : BlockType.Gravel, true);
        if (distance < 2.4) {
          this.placeGlobal(x + dx, baseY + 1, z + dz, BlockType.Air, true);
        }
      }
    }
  }

  private placeRuinedPortal(x: number, z: number): void {
    const baseY = this.world.terrainHeight(x, z) + 1;
    if (baseY <= WATER_LEVEL + 2 || baseY >= WORLD_HEIGHT - 9) {
      return;
    }

    for (let dz = -2; dz <= 2; dz += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        const block = Math.abs(dx) === 2 || Math.abs(dz) === 2 ? BlockType.RuinedPortalDebris : BlockType.Gravel;
        this.placeGlobal(x + dx, baseY - 1, z + dz, block, true);
        this.placeGlobal(x + dx, baseY, z + dz, BlockType.Air, true);
      }
    }

    for (let y = 0; y <= 4; y += 1) {
      this.placeGlobal(x - 1, baseY + y, z, y === 2 ? BlockType.RuinedPortalDebris : BlockType.Obsidian, true);
      if (y !== 3) {
        this.placeGlobal(x + 2, baseY + y, z, y === 1 ? BlockType.RuinedPortalDebris : BlockType.Obsidian, true);
      }
    }

    for (let dx = -1; dx <= 2; dx += 1) {
      if (dx !== 1) {
        this.placeGlobal(x + dx, baseY, z, BlockType.Obsidian, true);
      }
      if (dx !== 0) {
        this.placeGlobal(x + dx, baseY + 4, z, BlockType.Obsidian, true);
      }
    }

    this.placeGlobal(x + 1, baseY, z - 1, BlockType.Chest, true);
    this.placeGlobal(x - 2, baseY, z + 1, BlockType.Lava, true);
    this.placeGlobal(x + 2, baseY + 1, z + 1, BlockType.Torch, true);
  }

  private placeMineshaft(x: number, y: number, z: number): void {
    for (let offset = -8; offset <= 8; offset += 1) {
      for (let dy = 0; dy <= 2; dy += 1) {
        for (let dz = -1; dz <= 1; dz += 1) {
          this.placeGlobal(x + offset, y + dy, z + dz, BlockType.Air, true);
        }
      }

      if (offset % 4 === 0) {
        this.placeGlobal(x + offset, y, z - 1, BlockType.Log, true);
        this.placeGlobal(x + offset, y + 1, z - 1, BlockType.Log, true);
        this.placeGlobal(x + offset, y, z + 1, BlockType.Log, true);
        this.placeGlobal(x + offset, y + 1, z + 1, BlockType.Log, true);
        this.placeGlobal(x + offset, y + 2, z, BlockType.Planks, true);
      }
    }

    this.placeGlobal(x - 4, y, z, BlockType.Chest, true);
    this.placeGlobal(x + 4, y + 1, z - 1, BlockType.Torch, true);
  }

  private placeDungeon(x: number, y: number, z: number): void {
    for (let dz = -4; dz <= 4; dz += 1) {
      for (let dx = -4; dx <= 4; dx += 1) {
        for (let dy = -1; dy <= 3; dy += 1) {
          const wall = Math.abs(dx) === 4 || Math.abs(dz) === 4 || dy === -1 || dy === 3;
          this.placeGlobal(x + dx, y + dy, z + dz, wall ? BlockType.Brick : BlockType.Air, true);
        }
      }
    }

    this.placeGlobal(x, y, z, BlockType.Chest, true);
    this.placeGlobal(x - 2, y, z + 2, BlockType.GoldOre, true);
    this.placeGlobal(x + 2, y, z - 2, BlockType.RedstoneOre, true);
    this.placeGlobal(x, y + 1, z - 3, BlockType.Torch, true);
  }

  private placeTrees(): void {
    if (this.world.dimension !== "overworld") {
      return;
    }

    const startX = this.cx * CHUNK_SIZE;
    const startZ = this.cz * CHUNK_SIZE;
    const margin = 4;

    for (let z = startZ - margin; z < startZ + CHUNK_SIZE + margin; z += 1) {
      for (let x = startX - margin; x < startX + CHUNK_SIZE + margin; x += 1) {
        if (!this.world.shouldTree(x, z)) {
          continue;
        }

        const baseY = this.world.terrainHeight(x, z);
        const trunkHeight = this.world.treeHeight(x, z);

        for (let y = baseY + 1; y <= baseY + trunkHeight; y += 1) {
          this.placeGlobal(x, y, z, BlockType.Log, true);
        }

        const leafStart = baseY + trunkHeight - 2;
        const leafEnd = baseY + trunkHeight + 2;

        for (let ly = leafStart; ly <= leafEnd; ly += 1) {
          const layerRadius = ly >= leafEnd ? 1 : 2;

          for (let lz = -layerRadius; lz <= layerRadius; lz += 1) {
            for (let lx = -layerRadius; lx <= layerRadius; lx += 1) {
              const corner = Math.abs(lx) === layerRadius && Math.abs(lz) === layerRadius;
              const keepCorner = hash3(this.world.seedInt, x + lx, ly, z + lz) > 0.42;

              if (corner && !keepCorner) {
                continue;
              }

              this.placeGlobal(x + lx, ly, z + lz, BlockType.Leaves, false);
            }
          }
        }
      }
    }
  }

  private placeGlobal(x: number, y: number, z: number, block: BlockType, replaceSolid: boolean): void {
    const startX = this.cx * CHUNK_SIZE;
    const startZ = this.cz * CHUNK_SIZE;

    if (x < startX || x >= startX + CHUNK_SIZE || z < startZ || z >= startZ + CHUNK_SIZE) {
      return;
    }

    if (y < 0 || y >= WORLD_HEIGHT) {
      return;
    }

    const lx = x - startX;
    const lz = z - startZ;
    const current = this.getLocal(lx, y, lz);

    if (!replaceSolid && current !== BlockType.Air && current !== BlockType.Water) {
      return;
    }

    this.blocks[this.index(lx, y, lz)] = block;
  }

  private applyModifiedBlocks(): void {
    const startX = this.cx * CHUNK_SIZE;
    const startZ = this.cz * CHUNK_SIZE;
    const endX = startX + CHUNK_SIZE;
    const endZ = startZ + CHUNK_SIZE;

    this.world.forEachModifiedBlockInBounds(startX, startZ, endX, endZ, (x, y, z, block) => {
      this.blocks[this.index(x - startX, y, z - startZ)] = block;
    });
  }

  private index(x: number, y: number, z: number): number {
    return y * CHUNK_SIZE * CHUNK_SIZE + z * CHUNK_SIZE + x;
  }
}

function createMeshData(): MeshData {
  return {
    positions: [],
    normals: [],
    uvs: [],
    colors: [],
    indices: []
  };
}

function pushFace(
  data: MeshData,
  x: number,
  y: number,
  z: number,
  face: FaceDefinition,
  block: BlockType
): void {
  const baseIndex = data.positions.length / 3;
  const tile = BLOCKS[block].tiles[face.name];
  const skyFactor = clamp(0.82 + y / WORLD_HEIGHT * 0.24, 0.7, 1.14);
  const shade = clamp(face.shade * skyFactor, 0.42, 1.18);
  const waterBoost = block === BlockType.Water ? 1.14 : 1;

  for (const corner of face.corners) {
    data.positions.push(x + corner[0], y + corner[1], z + corner[2]);
    data.normals.push(...face.normal);
    data.colors.push(shade * waterBoost, shade * waterBoost, shade * waterBoost);
  }

  pushTileUvs(data.uvs, tile);
  data.indices.push(baseIndex, baseIndex + 1, baseIndex + 2, baseIndex, baseIndex + 2, baseIndex + 3);
}

function meshFromData(
  data: MeshData,
  material: THREE.Material,
  name: string
): THREE.Mesh | null {
  if (data.positions.length === 0) {
    return null;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(data.positions, 3));
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(data.normals, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(data.uvs, 2));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(data.colors, 3));
  geometry.setIndex(data.indices);
  geometry.computeBoundingSphere();

  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = `chunk-${name}`;
  mesh.castShadow = name === "solid";
  mesh.receiveShadow = true;
  return mesh;
}

export function chunkKey(cx: number, cz: number): string {
  return `${cx},${cz}`;
}
