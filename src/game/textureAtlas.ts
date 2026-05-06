import * as THREE from "three";
import { TileId } from "./blocks";

const TILE_SIZE = 32;
const COLUMNS = 6;
const ROWS = 5;
const ATLAS_WIDTH = COLUMNS * TILE_SIZE;
const ATLAS_HEIGHT = ROWS * TILE_SIZE;

export interface VoxelMaterials {
  solid: THREE.MeshStandardMaterial;
  water: THREE.MeshPhysicalMaterial;
}

interface Rgb {
  r: number;
  g: number;
  b: number;
}

function color({ r, g, b }: Rgb): string {
  return `rgb(${r}, ${g}, ${b})`;
}

function mix(base: Rgb, amount: number): Rgb {
  return {
    r: Math.round(Math.max(0, Math.min(255, base.r + amount))),
    g: Math.round(Math.max(0, Math.min(255, base.g + amount))),
    b: Math.round(Math.max(0, Math.min(255, base.b + amount)))
  };
}

function tileOrigin(tile: TileId): [number, number] {
  return [(tile % COLUMNS) * TILE_SIZE, Math.floor(tile / COLUMNS) * TILE_SIZE];
}

function pseudoNoise(tile: TileId, x: number, y: number): number {
  let value = Math.imul(x + tile * 31, 1103515245) ^ Math.imul(y + 17, 12345);
  value ^= value >>> 13;
  value = Math.imul(value, 1274126177);
  return ((value ^ (value >>> 16)) >>> 0) / 4294967296;
}

function drawDitheredTile(
  ctx: CanvasRenderingContext2D,
  tile: TileId,
  base: Rgb,
  variance: number,
  pixel = 2
): void {
  const [ox, oy] = tileOrigin(tile);

  for (let y = 0; y < TILE_SIZE; y += pixel) {
    for (let x = 0; x < TILE_SIZE; x += pixel) {
      const noise = (pseudoNoise(tile, x, y) - 0.5) * variance;
      ctx.fillStyle = color(mix(base, noise));
      ctx.fillRect(ox + x, oy + y, pixel, pixel);
    }
  }
}

function drawGrassSide(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.GrassSide, { r: 120, g: 87, b: 54 }, 34, 2);
  const [ox, oy] = tileOrigin(TileId.GrassSide);

  for (let y = 0; y < 11; y += 1) {
    for (let x = 0; x < TILE_SIZE; x += 2) {
      const droop = Math.floor(pseudoNoise(TileId.GrassSide, x, y) * 5);
      ctx.fillStyle = color(mix({ r: 82, g: 145, b: 65 }, pseudoNoise(TileId.GrassTop, x, y) * 22));
      ctx.fillRect(ox + x, oy + y, 2, Math.max(1, 7 - y + droop));
    }
  }
}

function drawStoneCracks(ctx: CanvasRenderingContext2D, tile: TileId): void {
  const [ox, oy] = tileOrigin(tile);
  ctx.strokeStyle = "rgba(38, 45, 45, 0.4)";
  ctx.lineWidth = 1;

  for (let line = 0; line < 7; line += 1) {
    const startX = Math.floor(pseudoNoise(tile, line, 2) * TILE_SIZE);
    const startY = Math.floor(pseudoNoise(tile, line, 7) * TILE_SIZE);
    ctx.beginPath();
    ctx.moveTo(ox + startX, oy + startY);

    for (let step = 0; step < 4; step += 1) {
      const nextX = startX + (pseudoNoise(tile, line, step) - 0.5) * 22;
      const nextY = startY + step * 6 + (pseudoNoise(tile, step, line) - 0.5) * 12;
      ctx.lineTo(ox + nextX, oy + nextY);
    }

    ctx.stroke();
  }
}

function drawLogTop(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.LogTop, { r: 154, g: 111, b: 62 }, 28, 2);
  const [ox, oy] = tileOrigin(TileId.LogTop);
  ctx.strokeStyle = "rgba(82, 48, 27, 0.55)";
  ctx.lineWidth = 2;

  for (let radius = 4; radius < 16; radius += 5) {
    ctx.beginPath();
    ctx.ellipse(ox + 16, oy + 16, radius, radius * 0.82, 0.18, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawLogSide(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.LogSide, { r: 116, g: 74, b: 38 }, 30, 2);
  const [ox, oy] = tileOrigin(TileId.LogSide);

  for (let x = 2; x < TILE_SIZE; x += 6) {
    ctx.fillStyle = x % 12 === 2 ? "rgba(65, 38, 23, 0.38)" : "rgba(181, 118, 60, 0.2)";
    ctx.fillRect(ox + x, oy, 2, TILE_SIZE);
  }
}

function drawWater(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Water, { r: 52, g: 139, b: 194 }, 26, 2);
  const [ox, oy] = tileOrigin(TileId.Water);
  ctx.strokeStyle = "rgba(204, 241, 255, 0.42)";
  ctx.lineWidth = 2;

  for (let y = 4; y < TILE_SIZE; y += 9) {
    ctx.beginPath();
    ctx.moveTo(ox + 1, oy + y);

    for (let x = 1; x <= TILE_SIZE; x += 6) {
      ctx.lineTo(ox + x, oy + y + Math.sin((x + y) * 0.4) * 2);
    }

    ctx.stroke();
  }
}

function drawBrick(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Brick, { r: 153, g: 74, b: 67 }, 26, 2);
  const [ox, oy] = tileOrigin(TileId.Brick);
  ctx.fillStyle = "rgba(71, 35, 33, 0.5)";

  for (let y = 8; y < TILE_SIZE; y += 10) {
    ctx.fillRect(ox, oy + y, TILE_SIZE, 2);
  }

  for (let row = 0; row < 4; row += 1) {
    const offset = row % 2 === 0 ? 0 : 8;
    for (let x = offset; x < TILE_SIZE; x += 16) {
      ctx.fillRect(ox + x, oy + row * 10, 2, 10);
    }
  }
}

function drawPlanks(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Planks, { r: 178, g: 126, b: 69 }, 30, 2);
  const [ox, oy] = tileOrigin(TileId.Planks);
  ctx.fillStyle = "rgba(71, 40, 22, 0.42)";

  for (let y = 8; y < TILE_SIZE; y += 8) {
    ctx.fillRect(ox, oy + y, TILE_SIZE, 2);
  }

  for (let x = 7; x < TILE_SIZE; x += 11) {
    ctx.fillRect(ox + x, oy, 2, TILE_SIZE);
  }
}

function drawCraftingTable(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.CraftingTable, { r: 149, g: 91, b: 48 }, 28, 2);
  const [ox, oy] = tileOrigin(TileId.CraftingTable);

  ctx.fillStyle = "rgba(49, 29, 18, 0.68)";
  ctx.fillRect(ox + 4, oy + 4, 24, 3);
  ctx.fillRect(ox + 4, oy + 25, 24, 3);
  ctx.fillRect(ox + 4, oy + 4, 3, 24);
  ctx.fillRect(ox + 25, oy + 4, 3, 24);

  ctx.fillStyle = "rgba(224, 180, 96, 0.54)";
  ctx.fillRect(ox + 10, oy + 10, 12, 3);
  ctx.fillRect(ox + 10, oy + 19, 12, 3);
  ctx.fillRect(ox + 10, oy + 10, 3, 12);
  ctx.fillRect(ox + 19, oy + 10, 3, 12);

  ctx.fillStyle = "rgba(224, 224, 202, 0.35)";
  ctx.fillRect(ox + 6, oy + 14, 20, 2);
}

function drawOre(ctx: CanvasRenderingContext2D, tile: TileId, gemA: string, gemB: string): void {
  drawDitheredTile(ctx, tile, { r: 111, g: 118, b: 118 }, 28, 2);
  drawStoneCracks(ctx, tile);
  const [oreX, oreY] = tileOrigin(tile);

  for (let index = 0; index < 14; index += 1) {
    const x = Math.floor(pseudoNoise(tile, index, 3) * 28) + 2;
    const y = Math.floor(pseudoNoise(tile, index, 11) * 28) + 2;
    ctx.fillStyle = index % 2 === 0 ? gemA : gemB;
    ctx.fillRect(oreX + x, oreY + y, index % 3 === 0 ? 4 : 3, 3);
  }
}

function drawFurnace(ctx: CanvasRenderingContext2D, tile: TileId, front: boolean): void {
  drawDitheredTile(ctx, tile, { r: 104, g: 111, b: 108 }, 28, 2);
  drawStoneCracks(ctx, tile);
  if (!front) {
    return;
  }

  const [ox, oy] = tileOrigin(tile);
  ctx.fillStyle = "rgba(20, 22, 22, 0.72)";
  ctx.fillRect(ox + 7, oy + 8, 18, 12);
  ctx.fillStyle = "rgba(255, 143, 44, 0.82)";
  ctx.fillRect(ox + 10, oy + 22, 12, 4);
}

function drawChest(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Chest, { r: 156, g: 98, b: 44 }, 30, 2);
  const [ox, oy] = tileOrigin(TileId.Chest);
  ctx.fillStyle = "rgba(62, 35, 17, 0.58)";
  ctx.fillRect(ox, oy + 14, TILE_SIZE, 3);
  ctx.fillRect(ox + 4, oy + 4, 3, 24);
  ctx.fillRect(ox + 25, oy + 4, 3, 24);
  ctx.fillStyle = "#d7c16a";
  ctx.fillRect(ox + 14, oy + 13, 5, 7);
}

function drawTorch(ctx: CanvasRenderingContext2D): void {
  const [ox, oy] = tileOrigin(TileId.Torch);
  ctx.clearRect(ox, oy, TILE_SIZE, TILE_SIZE);
  ctx.fillStyle = "#80502a";
  ctx.fillRect(ox + 14, oy + 12, 5, 18);
  ctx.fillStyle = "#ff9c2e";
  ctx.fillRect(ox + 10, oy + 4, 13, 10);
  ctx.fillStyle = "#ffe06a";
  ctx.fillRect(ox + 13, oy + 2, 7, 7);
}

function drawGravel(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Gravel, { r: 120, g: 122, b: 120 }, 44, 2);
  const [ox, oy] = tileOrigin(TileId.Gravel);

  for (let index = 0; index < 18; index += 1) {
    const x = Math.floor(pseudoNoise(TileId.Gravel, index, 5) * 28) + 2;
    const y = Math.floor(pseudoNoise(TileId.Gravel, index, 13) * 28) + 2;
    const bright = index % 3 === 0 ? "rgba(210, 210, 198, 0.38)" : "rgba(38, 38, 38, 0.34)";
    ctx.fillStyle = bright;
    ctx.fillRect(ox + x, oy + y, 3 + (index % 2), 3);
  }
}

function drawBed(ctx: CanvasRenderingContext2D): void {
  const [ox, oy] = tileOrigin(TileId.Bed);
  drawDitheredTile(ctx, TileId.Bed, { r: 178, g: 74, b: 67 }, 20, 2);
  ctx.fillStyle = "#e8e0d2";
  ctx.fillRect(ox + 4, oy + 4, 24, 9);
  ctx.fillStyle = "#8b2d2d";
  ctx.fillRect(ox + 4, oy + 13, 24, 13);
  ctx.fillStyle = "rgba(45, 20, 18, 0.45)";
  ctx.fillRect(ox + 4, oy + 25, 24, 3);
  ctx.fillStyle = "rgba(255, 255, 255, 0.24)";
  ctx.fillRect(ox + 8, oy + 16, 14, 2);
}

export function createTextureAtlas(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = ATLAS_WIDTH;
  canvas.height = ATLAS_HEIGHT;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not create texture atlas canvas.");
  }

  ctx.imageSmoothingEnabled = false;
  drawDitheredTile(ctx, TileId.GrassTop, { r: 83, g: 151, b: 67 }, 34, 2);
  drawGrassSide(ctx);
  drawDitheredTile(ctx, TileId.Dirt, { r: 119, g: 83, b: 52 }, 38, 2);
  drawDitheredTile(ctx, TileId.Stone, { r: 129, g: 137, b: 135 }, 34, 2);
  drawStoneCracks(ctx, TileId.Stone);
  drawDitheredTile(ctx, TileId.Sand, { r: 214, g: 199, b: 132 }, 24, 2);
  drawWater(ctx);
  drawLogSide(ctx);
  drawLogTop(ctx);
  drawDitheredTile(ctx, TileId.Leaves, { r: 64, g: 137, b: 75 }, 42, 2);
  drawOre(ctx, TileId.Ore, "#66d3d8", "#d8fff8");
  drawBrick(ctx);
  drawPlanks(ctx);
  drawCraftingTable(ctx);
  drawOre(ctx, TileId.CoalOre, "#242827", "#585f5c");
  drawOre(ctx, TileId.CopperOre, "#c9794a", "#6ecf9a");
  drawOre(ctx, TileId.IronOre, "#d3aa8e", "#f0d8b8");
  drawOre(ctx, TileId.GoldOre, "#f2c84b", "#ffe899");
  drawOre(ctx, TileId.RedstoneOre, "#d8423a", "#ff7a69");
  drawOre(ctx, TileId.LapisOre, "#345bd2", "#5d8cff");
  drawOre(ctx, TileId.DiamondOre, "#65e0dc", "#d8fff8");
  drawOre(ctx, TileId.EmeraldOre, "#4bd66d", "#a6ffc0");
  drawFurnace(ctx, TileId.FurnaceFront, true);
  drawFurnace(ctx, TileId.FurnaceSide, false);
  drawChest(ctx);
  drawTorch(ctx);
  drawGravel(ctx);
  drawBed(ctx);

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapLinearFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;

  return texture;
}

export function createVoxelMaterials(maxAnisotropy: number): VoxelMaterials {
  const atlas = createTextureAtlas();
  atlas.anisotropy = maxAnisotropy;

  return {
    solid: new THREE.MeshStandardMaterial({
      map: atlas,
      vertexColors: true,
      roughness: 0.92,
      metalness: 0,
      side: THREE.FrontSide
    }),
    water: new THREE.MeshPhysicalMaterial({
      map: atlas,
      color: new THREE.Color("#82d7ff"),
      vertexColors: true,
      roughness: 0.12,
      metalness: 0,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
      side: THREE.FrontSide
    })
  };
}

export function pushTileUvs(target: number[], tile: TileId): void {
  const column = tile % COLUMNS;
  const row = Math.floor(tile / COLUMNS);
  const gutter = 0.65 / TILE_SIZE;
  const u0 = (column + gutter) / COLUMNS;
  const u1 = (column + 1 - gutter) / COLUMNS;
  const v0 = 1 - (row + 1 - gutter) / ROWS;
  const v1 = 1 - (row + gutter) / ROWS;

  target.push(u0, v0, u1, v0, u1, v1, u0, v1);
}
