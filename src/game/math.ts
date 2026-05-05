export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function smoothstep(edge0: number, edge1: number, value: number): number {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export function seedToInt(seed: string): number {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

export function mulberry32(seed: number): () => number {
  return () => {
    let next = (seed += 0x6d2b79f5);
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

export function hash3(seed: number, x: number, y: number, z: number): number {
  let hash = seed ^ Math.imul(x, 374761393);
  hash = (hash ^ Math.imul(y, 668265263)) >>> 0;
  hash = (hash ^ Math.imul(z, 2147483647)) >>> 0;
  hash = Math.imul(hash ^ (hash >>> 13), 1274126177);
  return ((hash ^ (hash >>> 16)) >>> 0) / 4294967296;
}

export function chunkCoord(value: number, chunkSize: number): number {
  return Math.floor(value / chunkSize);
}

export function localCoord(value: number, chunkSize: number): number {
  return ((value % chunkSize) + chunkSize) % chunkSize;
}
