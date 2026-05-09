import * as THREE from "three";
import { TileId } from "./blocks";

const TILE_SIZE = 32;
const COLUMNS = 6;
const ROWS = 9;
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

function drawLava(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Lava, { r: 214, g: 76, b: 28 }, 42, 2);
  const [ox, oy] = tileOrigin(TileId.Lava);
  ctx.strokeStyle = "rgba(255, 220, 88, 0.72)";
  ctx.lineWidth = 3;

  for (let y = 5; y < TILE_SIZE; y += 8) {
    ctx.beginPath();
    ctx.moveTo(ox + 1, oy + y);
    for (let x = 1; x <= TILE_SIZE; x += 5) {
      ctx.lineTo(ox + x, oy + y + Math.sin((x + y) * 0.42) * 2.5);
    }
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(255, 237, 117, 0.65)";
  ctx.fillRect(ox + 8, oy + 9, 5, 5);
  ctx.fillRect(ox + 21, oy + 20, 4, 4);
}

function drawObsidian(ctx: CanvasRenderingContext2D, tile: TileId): void {
  drawDitheredTile(ctx, tile, { r: 34, g: 27, b: 50 }, 32, 2);
  const [ox, oy] = tileOrigin(tile);
  ctx.strokeStyle = "rgba(128, 86, 190, 0.36)";
  ctx.lineWidth = 1;

  for (let line = 0; line < 9; line += 1) {
    const startX = Math.floor(pseudoNoise(tile, line, 19) * TILE_SIZE);
    const startY = Math.floor(pseudoNoise(tile, line, 31) * TILE_SIZE);
    ctx.beginPath();
    ctx.moveTo(ox + startX, oy + startY);
    ctx.lineTo(ox + startX + (pseudoNoise(tile, line, 7) - 0.5) * 22, oy + startY + 10);
    ctx.stroke();
  }
}

function drawFire(ctx: CanvasRenderingContext2D): void {
  const [ox, oy] = tileOrigin(TileId.Fire);
  ctx.clearRect(ox, oy, TILE_SIZE, TILE_SIZE);
  ctx.fillStyle = "rgba(255, 220, 66, 0.82)";
  ctx.beginPath();
  ctx.moveTo(ox + 7, oy + 28);
  ctx.lineTo(ox + 13, oy + 8);
  ctx.lineTo(ox + 18, oy + 18);
  ctx.lineTo(ox + 23, oy + 4);
  ctx.lineTo(ox + 27, oy + 28);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgba(255, 102, 36, 0.86)";
  ctx.beginPath();
  ctx.moveTo(ox + 4, oy + 30);
  ctx.lineTo(ox + 10, oy + 12);
  ctx.lineTo(ox + 16, oy + 24);
  ctx.lineTo(ox + 21, oy + 10);
  ctx.lineTo(ox + 29, oy + 30);
  ctx.closePath();
  ctx.fill();
}

function drawPortal(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.NetherPortal, { r: 83, g: 45, b: 176 }, 50, 2);
  const [ox, oy] = tileOrigin(TileId.NetherPortal);
  ctx.strokeStyle = "rgba(230, 196, 255, 0.54)";
  ctx.lineWidth = 2;

  for (let x = 4; x < TILE_SIZE; x += 8) {
    ctx.beginPath();
    ctx.moveTo(ox + x, oy + 2);
    for (let y = 2; y < TILE_SIZE; y += 5) {
      ctx.lineTo(ox + x + Math.sin((y + x) * 0.35) * 3, oy + y);
    }
    ctx.stroke();
  }
}

function drawNetherrack(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Netherrack, { r: 126, g: 47, b: 45 }, 42, 2);
  const [ox, oy] = tileOrigin(TileId.Netherrack);
  ctx.strokeStyle = "rgba(50, 16, 20, 0.42)";
  ctx.lineWidth = 1;

  for (let line = 0; line < 10; line += 1) {
    const x = Math.floor(pseudoNoise(TileId.Netherrack, line, 5) * TILE_SIZE);
    const y = Math.floor(pseudoNoise(TileId.Netherrack, line, 11) * TILE_SIZE);
    ctx.beginPath();
    ctx.moveTo(ox + x, oy + y);
    ctx.lineTo(ox + x + (pseudoNoise(TileId.Netherrack, line, 19) - 0.5) * 18, oy + y + 8);
    ctx.stroke();
  }
}

function drawNetherBrick(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.NetherBrick, { r: 61, g: 27, b: 36 }, 24, 2);
  const [ox, oy] = tileOrigin(TileId.NetherBrick);
  ctx.fillStyle = "rgba(18, 9, 13, 0.62)";
  for (let y = 7; y < TILE_SIZE; y += 8) {
    ctx.fillRect(ox, oy + y, TILE_SIZE, 2);
  }
  for (let row = 0; row < 4; row += 1) {
    const offset = row % 2 === 0 ? 0 : 10;
    for (let x = offset; x < TILE_SIZE; x += 16) {
      ctx.fillRect(ox + x, oy + row * 8, 2, 8);
    }
  }
}

function drawStoneBrickVariant(ctx: CanvasRenderingContext2D, tile: TileId, moss = false, cracked = false): void {
  drawDitheredTile(ctx, tile, moss ? { r: 104, g: 120, b: 98 } : { r: 116, g: 124, b: 121 }, 26, 2);
  const [ox, oy] = tileOrigin(tile);
  ctx.fillStyle = "rgba(34, 40, 39, 0.42)";

  for (let y = 7; y < TILE_SIZE; y += 8) {
    ctx.fillRect(ox, oy + y, TILE_SIZE, 2);
  }

  for (let row = 0; row < 4; row += 1) {
    const offset = row % 2 === 0 ? 0 : 10;
    for (let x = offset; x < TILE_SIZE; x += 16) {
      ctx.fillRect(ox + x, oy + row * 8, 2, 8);
    }
  }

  if (moss) {
    ctx.fillStyle = "rgba(57, 113, 56, 0.52)";
    for (let index = 0; index < 9; index += 1) {
      const x = Math.floor(pseudoNoise(tile, index, 17) * 28) + 1;
      const y = Math.floor(pseudoNoise(tile, index, 23) * 28) + 1;
      ctx.fillRect(ox + x, oy + y, 3 + (index % 3), 5);
    }
  }

  if (cracked) {
    drawStoneCracks(ctx, tile);
    ctx.strokeStyle = "rgba(12, 15, 15, 0.58)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ox + 9, oy + 3);
    ctx.lineTo(ox + 15, oy + 12);
    ctx.lineTo(ox + 12, oy + 19);
    ctx.lineTo(ox + 20, oy + 30);
    ctx.stroke();
  }
}

function drawBookshelf(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Bookshelf, { r: 132, g: 82, b: 40 }, 18, 2);
  const [ox, oy] = tileOrigin(TileId.Bookshelf);
  ctx.fillStyle = "rgba(45, 24, 12, 0.6)";
  ctx.fillRect(ox + 2, oy + 7, 28, 2);
  ctx.fillRect(ox + 2, oy + 16, 28, 2);
  ctx.fillRect(ox + 2, oy + 25, 28, 2);

  const colors = ["#a94b40", "#e2c35f", "#4f75bf", "#6aa35f", "#d8d2b7"];
  for (let shelf = 0; shelf < 3; shelf += 1) {
    for (let book = 0; book < 6; book += 1) {
      ctx.fillStyle = colors[(shelf + book) % colors.length];
      ctx.fillRect(ox + 4 + book * 4, oy + 2 + shelf * 9, 3, 6);
    }
  }
}

function drawIronBars(ctx: CanvasRenderingContext2D): void {
  const [ox, oy] = tileOrigin(TileId.IronBars);
  ctx.clearRect(ox, oy, TILE_SIZE, TILE_SIZE);
  ctx.fillStyle = "rgba(190, 200, 198, 0.88)";
  for (let x = 6; x < TILE_SIZE; x += 8) {
    ctx.fillRect(ox + x, oy + 1, 3, 30);
  }
  ctx.fillStyle = "rgba(78, 86, 86, 0.78)";
  ctx.fillRect(ox + 2, oy + 8, 28, 3);
  ctx.fillRect(ox + 2, oy + 21, 28, 3);
  ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
  ctx.fillRect(ox + 7, oy + 2, 1, 28);
  ctx.fillRect(ox + 23, oy + 2, 1, 28);
}

function drawEndPortalFrame(ctx: CanvasRenderingContext2D, tile: TileId, withEye: boolean): void {
  drawDitheredTile(ctx, tile, { r: 102, g: 138, b: 98 }, 26, 2);
  const [ox, oy] = tileOrigin(tile);
  ctx.fillStyle = "rgba(35, 55, 44, 0.72)";
  ctx.fillRect(ox + 3, oy + 3, 26, 26);
  ctx.fillStyle = "#b9d070";
  ctx.fillRect(ox + 6, oy + 6, 20, 4);
  ctx.fillRect(ox + 6, oy + 22, 20, 4);
  ctx.fillRect(ox + 6, oy + 6, 4, 20);
  ctx.fillRect(ox + 22, oy + 6, 4, 20);

  if (withEye) {
    ctx.fillStyle = "#83e3ac";
    ctx.fillRect(ox + 11, oy + 11, 10, 10);
    ctx.fillStyle = "#24443a";
    ctx.fillRect(ox + 14, oy + 14, 4, 4);
    ctx.fillStyle = "rgba(240, 255, 210, 0.7)";
    ctx.fillRect(ox + 12, oy + 12, 3, 2);
  }
}

function drawEndPortal(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.EndPortal, { r: 4, g: 10, b: 12 }, 18, 2);
  const [ox, oy] = tileOrigin(TileId.EndPortal);
  for (let index = 0; index < 22; index += 1) {
    const x = Math.floor(pseudoNoise(TileId.EndPortal, index, 5) * 30) + 1;
    const y = Math.floor(pseudoNoise(TileId.EndPortal, index, 11) * 30) + 1;
    ctx.fillStyle = index % 4 === 0 ? "rgba(137, 255, 195, 0.82)" : "rgba(235, 255, 255, 0.68)";
    ctx.fillRect(ox + x, oy + y, 1 + (index % 2), 1 + (index % 2));
  }
}

function drawEndStone(ctx: CanvasRenderingContext2D, tile: TileId): void {
  drawDitheredTile(ctx, tile, { r: 214, g: 210, b: 162 }, 30, 2);
  const [ox, oy] = tileOrigin(tile);
  ctx.fillStyle = "rgba(91, 83, 55, 0.22)";
  for (let index = 0; index < 16; index += 1) {
    const x = Math.floor(pseudoNoise(tile, index, 13) * 28) + 2;
    const y = Math.floor(pseudoNoise(tile, index, 29) * 28) + 2;
    ctx.fillRect(ox + x, oy + y, 3 + (index % 3), 2 + (index % 2));
  }
}

function drawEndStoneBricks(ctx: CanvasRenderingContext2D): void {
  drawEndStone(ctx, TileId.EndStoneBricks);
  const [ox, oy] = tileOrigin(TileId.EndStoneBricks);
  ctx.fillStyle = "rgba(97, 87, 54, 0.35)";
  for (let y = 7; y < TILE_SIZE; y += 8) {
    ctx.fillRect(ox, oy + y, TILE_SIZE, 2);
  }
  for (let row = 0; row < 4; row += 1) {
    const offset = row % 2 === 0 ? 0 : 10;
    for (let x = offset; x < TILE_SIZE; x += 16) {
      ctx.fillRect(ox + x, oy + row * 8, 2, 8);
    }
  }
}

function drawBedrock(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Bedrock, { r: 54, g: 58, b: 60 }, 42, 2);
  const [ox, oy] = tileOrigin(TileId.Bedrock);
  ctx.fillStyle = "rgba(0, 0, 0, 0.34)";
  for (let index = 0; index < 18; index += 1) {
    const x = Math.floor(pseudoNoise(TileId.Bedrock, index, 31) * 28) + 1;
    const y = Math.floor(pseudoNoise(TileId.Bedrock, index, 37) * 28) + 1;
    ctx.fillRect(ox + x, oy + y, 4 + (index % 3), 4);
  }
  ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
  ctx.fillRect(ox + 4, oy + 5, 6, 3);
  ctx.fillRect(ox + 21, oy + 18, 7, 2);
}

function drawEndCrystal(ctx: CanvasRenderingContext2D): void {
  const [ox, oy] = tileOrigin(TileId.EndCrystal);
  ctx.clearRect(ox, oy, TILE_SIZE, TILE_SIZE);
  ctx.fillStyle = "rgba(132, 97, 165, 0.5)";
  ctx.fillRect(ox + 8, oy + 23, 16, 5);
  ctx.fillStyle = "rgba(255, 218, 255, 0.9)";
  ctx.fillRect(ox + 11, oy + 7, 10, 10);
  ctx.fillStyle = "rgba(133, 255, 203, 0.78)";
  ctx.fillRect(ox + 14, oy + 10, 4, 4);
  ctx.strokeStyle = "rgba(246, 232, 255, 0.7)";
  ctx.lineWidth = 2;
  ctx.strokeRect(ox + 9, oy + 5, 14, 14);
  ctx.strokeStyle = "rgba(167, 92, 220, 0.78)";
  ctx.beginPath();
  ctx.moveTo(ox + 16, oy + 2);
  ctx.lineTo(ox + 26, oy + 12);
  ctx.lineTo(ox + 16, oy + 22);
  ctx.lineTo(ox + 6, oy + 12);
  ctx.closePath();
  ctx.stroke();
}

function drawDragonEgg(ctx: CanvasRenderingContext2D): void {
  const [ox, oy] = tileOrigin(TileId.DragonEgg);
  ctx.clearRect(ox, oy, TILE_SIZE, TILE_SIZE);
  ctx.fillStyle = "#17121d";
  ctx.beginPath();
  ctx.ellipse(ox + 16, oy + 18, 10, 13, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(177, 92, 255, 0.62)";
  ctx.fillRect(ox + 12, oy + 9, 3, 4);
  ctx.fillRect(ox + 19, oy + 15, 3, 3);
  ctx.fillRect(ox + 14, oy + 23, 4, 3);
  ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
  ctx.fillRect(ox + 10, oy + 12, 3, 8);
}

function drawSoulSand(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.SoulSand, { r: 110, g: 80, b: 66 }, 34, 2);
  const [ox, oy] = tileOrigin(TileId.SoulSand);
  ctx.fillStyle = "rgba(38, 29, 27, 0.44)";
  for (let index = 0; index < 5; index += 1) {
    const x = 5 + Math.floor(pseudoNoise(TileId.SoulSand, index, 3) * 18);
    const y = 5 + Math.floor(pseudoNoise(TileId.SoulSand, index, 9) * 18);
    ctx.fillRect(ox + x, oy + y, 4, 7);
    ctx.fillRect(ox + x + 8, oy + y, 4, 7);
    ctx.fillRect(ox + x + 4, oy + y + 8, 5, 3);
  }
}

function drawBasalt(ctx: CanvasRenderingContext2D): void {
  drawDitheredTile(ctx, TileId.Basalt, { r: 72, g: 68, b: 70 }, 26, 2);
  const [ox, oy] = tileOrigin(TileId.Basalt);
  ctx.fillStyle = "rgba(23, 22, 24, 0.36)";
  for (let x = 4; x < TILE_SIZE; x += 7) {
    ctx.fillRect(ox + x, oy, 2, TILE_SIZE);
  }
  ctx.fillStyle = "rgba(190, 184, 178, 0.18)";
  ctx.fillRect(ox + 8, oy + 2, 2, 28);
  ctx.fillRect(ox + 22, oy + 2, 2, 28);
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
  drawLava(ctx);
  drawObsidian(ctx, TileId.Obsidian);
  drawFire(ctx);
  drawPortal(ctx);
  drawObsidian(ctx, TileId.RuinedPortalDebris);
  drawNetherrack(ctx);
  drawNetherBrick(ctx);
  drawSoulSand(ctx);
  drawBasalt(ctx);
  drawOre(ctx, TileId.QuartzOre, "#e8dfcf", "#fff8e8");
  drawOre(ctx, TileId.NetherGoldOre, "#f2c84b", "#ffe899");
  drawStoneBrickVariant(ctx, TileId.StoneBricks);
  drawStoneBrickVariant(ctx, TileId.CrackedStoneBricks, false, true);
  drawStoneBrickVariant(ctx, TileId.MossyStoneBricks, true);
  drawBookshelf(ctx);
  drawIronBars(ctx);
  drawEndPortalFrame(ctx, TileId.EndPortalFrame, false);
  drawEndPortalFrame(ctx, TileId.EndPortalFrameEye, true);
  drawEndPortal(ctx);
  drawEndStone(ctx, TileId.EndStone);
  drawEndStoneBricks(ctx);
  drawBedrock(ctx);
  drawEndCrystal(ctx);
  drawDragonEgg(ctx);

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
