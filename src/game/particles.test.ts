import * as THREE from "three";
import { describe, expect, it } from "vitest";
import { ParticleSystem } from "./particles";

describe("ParticleSystem", () => {
  it("expires particles after their lifetime", () => {
    const particles = new ParticleSystem();
    particles.spawnBlockPlace(new THREE.Vector3(0, 0, 0), "#ffffff");

    expect(particles.count).toBeGreaterThan(0);
    particles.update(2);
    expect(particles.count).toBe(0);
  });
});
