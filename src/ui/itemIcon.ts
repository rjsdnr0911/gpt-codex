import { BlockType } from "../game/blocks";
import { ITEM_DEFINITIONS, ItemId, ToolKind, ToolTier } from "../game/items";

interface Rgb {
  r: number;
  g: number;
  b: number;
}

const ICON_SIZE = 32;
const cache = new Map<ItemId, string>();

export function itemIconDataUrl(itemId: ItemId): string {
  const cached = cache.get(itemId);
  if (cached) {
    return cached;
  }

  const canvas = document.createElement("canvas");
  canvas.width = ICON_SIZE;
  canvas.height = ICON_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return "";
  }

  ctx.imageSmoothingEnabled = false;
  drawItemIcon(ctx, itemId);
  const dataUrl = canvas.toDataURL("image/png");
  cache.set(itemId, dataUrl);
  return dataUrl;
}

function drawItemIcon(ctx: CanvasRenderingContext2D, itemId: ItemId): void {
  const definition = ITEM_DEFINITIONS[itemId];
  const base = parseColor(definition.color);
  ctx.clearRect(0, 0, ICON_SIZE, ICON_SIZE);

  if (definition.placeBlock || itemId === "end_portal_frame" || itemId === "end_crystal" || itemId === "dragon_egg") {
    drawBlock(ctx, itemId, base, definition.placeBlock ?? null);
    return;
  }

  if (definition.toolKind && definition.toolKind !== "none") {
    drawTool(ctx, definition.toolKind, definition.toolTier ?? "hand", base, itemId);
    return;
  }

  if (itemId.includes("helmet") || itemId.includes("chestplate") || itemId.includes("leggings") || itemId.includes("boots")) {
    drawArmor(ctx, itemId, base);
    return;
  }

  if (definition.food || itemId === "apple" || itemId === "bread" || itemId.startsWith("raw_") || itemId.startsWith("cooked_")) {
    drawFood(ctx, itemId, base);
    return;
  }

  drawMaterial(ctx, itemId, base);
}

function drawBlock(ctx: CanvasRenderingContext2D, itemId: ItemId, base: Rgb, block: BlockType | null): void {
  const top = shade(base, 35);
  let left = shade(base, -28);
  let right = shade(base, -8);

  if (itemId === "grass_block") {
    left = parseColor("#8a5a37");
    right = parseColor("#7a4d31");
  } else if (itemId === "log") {
    left = parseColor("#70401f");
    right = parseColor("#875229");
  }

  poly(ctx, [[16, 2], [29, 9], [16, 16], [3, 9]], color(top));
  poly(ctx, [[3, 9], [16, 16], [16, 30], [3, 22]], color(left));
  poly(ctx, [[29, 9], [16, 16], [16, 30], [29, 22]], color(right));
  strokePoly(ctx, [[16, 2], [29, 9], [29, 22], [16, 30], [3, 22], [3, 9]], "rgba(0,0,0,0.72)", 2);

  if (itemId === "grass_block") {
    rect(ctx, 5, 10, 22, 3, "#5daa43");
    rect(ctx, 7, 13, 3, 4, "#4d9a3a");
    rect(ctx, 18, 13, 2, 3, "#4d9a3a");
  }

  if (block === BlockType.Log) {
    ctx.strokeStyle = "rgba(58,31,13,0.55)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(16, 9, 6, 3, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  const ore = oreColor(itemId);
  if (ore) {
    rect(ctx, 10, 8, 4, 3, ore);
    rect(ctx, 19, 13, 3, 4, ore);
    rect(ctx, 9, 22, 3, 3, ore);
    rect(ctx, 22, 23, 4, 3, shadeHex(ore, 35));
  }

  if (itemId === "crafting_table") {
    rect(ctx, 8, 8, 16, 2, "#e0b45f");
    rect(ctx, 14, 5, 2, 9, "#4b2a16");
    rect(ctx, 7, 18, 9, 2, "#4b2a16");
  } else if (itemId === "chest") {
    rect(ctx, 7, 14, 19, 3, "#4a2c15");
    rect(ctx, 14, 13, 4, 5, "#d7c16a");
  } else if (itemId === "end_crystal") {
    rect(ctx, 12, 6, 8, 8, "#ffe8ff");
    strokePoly(ctx, [[16, 2], [25, 11], [16, 20], [7, 11]], "#b861ff", 2);
  } else if (itemId === "dragon_egg") {
    rect(ctx, 12, 8, 8, 16, "#17121d");
    rect(ctx, 10, 13, 12, 10, "#17121d");
    rect(ctx, 13, 11, 2, 3, "#a85cff");
    rect(ctx, 18, 18, 3, 2, "#a85cff");
  }
}

function drawTool(ctx: CanvasRenderingContext2D, kind: ToolKind, tier: ToolTier, base: Rgb, itemId: ItemId): void {
  const metal = color(base);
  const bright = color(shade(base, 45));
  const dark = color(shade(base, -45));
  const wood = tier === "wood" ? "#9b6739" : "#7a4c28";

  if (kind === "pickaxe") {
    withRotation(ctx, 16, 17, -0.78, () => {
      rect(ctx, 14, 10, 4, 19, wood);
      rect(ctx, 7, 6, 18, 4, dark);
      rect(ctx, 5, 8, 7, 4, metal);
      rect(ctx, 20, 8, 7, 4, metal);
      rect(ctx, 9, 5, 14, 2, bright);
      rect(ctx, 13, 27, 6, 2, "#4d2e16");
    });
    return;
  }

  if (kind === "axe") {
    withRotation(ctx, 16, 17, -0.72, () => {
      rect(ctx, 14, 9, 4, 20, wood);
      poly(ctx, [[9, 7], [23, 7], [25, 15], [17, 18], [10, 14]], metal);
      rect(ctx, 12, 8, 10, 2, bright);
      rect(ctx, 13, 27, 6, 2, "#4d2e16");
    });
    return;
  }

  if (kind === "shovel") {
    withRotation(ctx, 16, 17, -0.72, () => {
      rect(ctx, 14, 10, 4, 18, wood);
      poly(ctx, [[11, 5], [21, 5], [23, 12], [16, 18], [9, 12]], metal);
      rect(ctx, 13, 6, 6, 2, bright);
    });
    return;
  }

  if (kind === "sword") {
    withRotation(ctx, 16, 17, -0.78, () => {
      rect(ctx, 14, 5, 4, 18, metal);
      rect(ctx, 15, 4, 2, 2, bright);
      rect(ctx, 9, 21, 14, 3, "#6d4b31");
      rect(ctx, 14, 23, 4, 6, wood);
      rect(ctx, 18, 6, 2, 16, bright);
    });
    return;
  }

  if (kind === "bow") {
    ctx.strokeStyle = "#9b6638";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(12, 16, 11, -1.15, 1.15);
    ctx.stroke();
    ctx.strokeStyle = "#eee4ce";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(15, 6);
    ctx.lineTo(15, 26);
    ctx.stroke();
    rect(ctx, 14, 14, 5, 4, "#70421f");
    return;
  }

  if (kind === "shield") {
    poly(ctx, [[7, 4], [25, 4], [24, 22], [16, 30], [8, 22]], metal);
    strokePoly(ctx, [[7, 4], [25, 4], [24, 22], [16, 30], [8, 22]], "#161616", 2);
    rect(ctx, 15, 5, 2, 21, shadeHex(metal, 45));
    rect(ctx, 9, 13, 14, 3, "#d0d6d4");
    return;
  }

  if (kind === "shears") {
    ctx.strokeStyle = metal;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(10, 21, 5, 0, Math.PI * 2);
    ctx.arc(22, 21, 5, 0, Math.PI * 2);
    ctx.stroke();
    rect(ctx, 14, 7, 3, 15, metal);
    rect(ctx, 17, 8, 3, 14, bright);
    return;
  }

  if (itemId === "arrow") {
    withRotation(ctx, 16, 16, -0.7, () => {
      rect(ctx, 6, 15, 18, 2, "#e6dec9");
      poly(ctx, [[24, 12], [30, 16], [24, 20]], "#d5d8d4");
      poly(ctx, [[5, 12], [9, 16], [5, 20]], "#6a8f6a");
    });
  }
}

function drawArmor(ctx: CanvasRenderingContext2D, itemId: ItemId, base: Rgb): void {
  const fill = color(base);
  const light = color(shade(base, 50));
  const shadow = color(shade(base, -42));

  if (itemId.includes("helmet")) {
    poly(ctx, [[7, 12], [12, 6], [20, 6], [25, 12], [24, 20], [8, 20]], fill);
    rect(ctx, 10, 16, 12, 3, shadow);
  } else if (itemId.includes("chestplate")) {
    poly(ctx, [[9, 5], [14, 8], [18, 8], [23, 5], [27, 16], [22, 28], [10, 28], [5, 16]], fill);
    rect(ctx, 15, 9, 2, 17, light);
  } else if (itemId.includes("leggings")) {
    poly(ctx, [[9, 6], [23, 6], [22, 14], [19, 28], [14, 28], [13, 16], [10, 28], [5, 28], [8, 14]], fill);
    rect(ctx, 15, 9, 2, 18, shadow);
  } else {
    rect(ctx, 7, 18, 8, 9, fill);
    rect(ctx, 18, 18, 8, 9, fill);
    rect(ctx, 7, 25, 19, 3, shadow);
  }

  rect(ctx, 9, 8, 10, 2, light);
  strokePoly(ctx, [[8, 5], [24, 5], [28, 16], [23, 29], [9, 29], [4, 16]], "rgba(0,0,0,0.34)", 1);
}

function drawFood(ctx: CanvasRenderingContext2D, itemId: ItemId, base: Rgb): void {
  if (itemId === "apple") {
    rect(ctx, 15, 5, 3, 5, "#5b3319");
    poly(ctx, [[18, 7], [25, 6], [21, 11]], "#68bf62");
    rect(ctx, 9, 11, 15, 14, "#cf3c38");
    rect(ctx, 7, 15, 19, 8, "#cf3c38");
    rect(ctx, 11, 12, 4, 3, "#ff817a");
    return;
  }

  if (itemId === "bread") {
    rect(ctx, 6, 12, 21, 12, "#c98c3d");
    rect(ctx, 8, 8, 7, 8, "#dba85a");
    rect(ctx, 15, 7, 7, 8, "#e0b96b");
    rect(ctx, 21, 10, 6, 8, "#c98c3d");
    rect(ctx, 10, 12, 3, 3, "#ffe096");
    return;
  }

  const cooked = itemId.startsWith("cooked_") || itemId === "steak";
  const meat = cooked ? "#9a4c2d" : color(base);
  rect(ctx, 9, 11, 15, 12, meat);
  rect(ctx, 6, 16, 22, 7, meat);
  rect(ctx, 11, 13, 5, 3, cooked ? "#d07a42" : "#f0a0a0");
  rect(ctx, 21, 20, 6, 4, "#f0dfc4");
}

function drawMaterial(ctx: CanvasRenderingContext2D, itemId: ItemId, base: Rgb): void {
  const fill = color(base);
  const light = color(shade(base, 50));
  const dark = color(shade(base, -45));

  if (itemId === "stick") {
    withRotation(ctx, 16, 16, -0.72, () => {
      rect(ctx, 14, 5, 4, 23, "#9b6739");
      rect(ctx, 17, 6, 1, 20, "#d0a06a");
    });
    return;
  }

  if (itemId === "torch") {
    rect(ctx, 14, 12, 5, 17, "#80502a");
    rect(ctx, 11, 5, 11, 8, "#ff9c2e");
    rect(ctx, 14, 3, 6, 6, "#ffe06a");
    return;
  }

  if (itemId === "arrow") {
    withRotation(ctx, 16, 16, -0.7, () => {
      rect(ctx, 6, 15, 18, 2, "#e6dec9");
      poly(ctx, [[24, 12], [30, 16], [24, 20]], "#d5d8d4");
      poly(ctx, [[5, 12], [9, 16], [5, 20]], "#6a8f6a");
    });
    return;
  }

  if (itemId === "bucket" || itemId === "water_bucket" || itemId === "lava_bucket") {
    poly(ctx, [[8, 7], [24, 7], [22, 28], [10, 28]], "#aab4b3");
    rect(ctx, 10, 10, 12, 3, "#e0e5e2");
    if (itemId !== "bucket") {
      rect(ctx, 10, 17, 12, 8, itemId === "water_bucket" ? "#34a8de" : "#e86a2b");
    }
    strokePoly(ctx, [[8, 7], [24, 7], [22, 28], [10, 28]], "#343a3a", 2);
    return;
  }

  if (itemId === "eye_of_ender" || itemId === "ender_pearl") {
    rect(ctx, 8, 11, 17, 11, "#1f7f78");
    rect(ctx, 11, 8, 11, 17, "#2fada0");
    rect(ctx, 14, 12, 5, 5, itemId === "eye_of_ender" ? "#283c35" : "#b4ffdb");
    rect(ctx, 15, 13, 2, 2, "#eaffd7");
    return;
  }

  if (itemId === "blaze_rod" || itemId === "blaze_powder") {
    rect(ctx, 12, 6, 8, 22, "#f0b13d");
    rect(ctx, 10, 10, 12, 3, "#ffe06a");
    rect(ctx, 13, 18, 10, 3, "#e36b2e");
    return;
  }

  if (itemId === "paper" || itemId === "book") {
    rect(ctx, 8, 7, 17, 20, itemId === "book" ? "#7a4a2a" : "#eadfbd");
    rect(ctx, 11, 9, 11, 16, itemId === "book" ? "#d9c58f" : "#fff2ce");
    rect(ctx, 22, 8, 2, 18, "#2e1a10");
    return;
  }

  if (itemId === "egg") {
    rect(ctx, 12, 8, 8, 17, "#eee7d7");
    rect(ctx, 10, 13, 12, 10, "#eee7d7");
    rect(ctx, 12, 10, 4, 3, "#fff8ea");
    return;
  }

  rect(ctx, 9, 9, 14, 14, fill);
  rect(ctx, 7, 13, 18, 8, fill);
  rect(ctx, 11, 10, 5, 3, light);
  rect(ctx, 19, 19, 5, 4, dark);
}

function oreColor(itemId: ItemId): string | null {
  if (itemId.includes("coal")) return "#242827";
  if (itemId.includes("copper")) return "#c9794a";
  if (itemId.includes("iron")) return "#d3aa8e";
  if (itemId.includes("gold")) return "#f2c84b";
  if (itemId.includes("redstone")) return "#ff4a3f";
  if (itemId.includes("lapis")) return "#4d76ff";
  if (itemId.includes("diamond")) return "#8df8f0";
  if (itemId.includes("emerald")) return "#5cff82";
  if (itemId.includes("quartz")) return "#fff8e8";
  return null;
}

function rect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, fill: string): void {
  ctx.fillStyle = fill;
  ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

function poly(ctx: CanvasRenderingContext2D, points: Array<[number, number]>, fill: string): void {
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (const [x, y] of points.slice(1)) {
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

function strokePoly(ctx: CanvasRenderingContext2D, points: Array<[number, number]>, stroke: string, width: number): void {
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (const [x, y] of points.slice(1)) {
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
}

function withRotation(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, draw: () => void): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.translate(-x, -y);
  draw();
  ctx.restore();
}

function parseColor(value: string): Rgb {
  const normalized = value.replace("#", "");
  const full = normalized.length === 3 ? normalized.split("").map((entry) => entry + entry).join("") : normalized;
  const parsed = Number.parseInt(full, 16);
  return {
    r: (parsed >> 16) & 255,
    g: (parsed >> 8) & 255,
    b: parsed & 255
  };
}

function shade(base: Rgb, amount: number): Rgb {
  return {
    r: clamp(base.r + amount, 0, 255),
    g: clamp(base.g + amount, 0, 255),
    b: clamp(base.b + amount, 0, 255)
  };
}

function shadeHex(hex: string, amount: number): string {
  return color(shade(parseColor(hex), amount));
}

function color(rgb: Rgb): string {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.round(value)));
}
