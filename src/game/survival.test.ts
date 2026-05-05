import { describe, expect, it } from "vitest";
import * as THREE from "three";
import { createSurvivalState, SurvivalController } from "./survival";

describe("survival", () => {
  it("blocks sprinting at low hunger", () => {
    const survival = new SurvivalController(createSurvivalState(new THREE.Vector3()));
    survival.state.hunger = 6;

    expect(survival.canSprint()).toBe(false);
  });

  it("restores hunger and saturation when eating", () => {
    const survival = new SurvivalController(createSurvivalState(new THREE.Vector3()));
    survival.state.hunger = 10;
    survival.state.saturation = 0;

    survival.eat(5, 6);

    expect(survival.state.hunger).toBe(15);
    expect(survival.state.saturation).toBe(6);
  });
});
