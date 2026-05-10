import { describe, expect, it } from "vitest";
import { AudioSystem } from "./audioSystem";

describe("AudioSystem", () => {
  it("clamps volume and stays safe in non-browser tests", () => {
    const audio = new AudioSystem("/");

    audio.setVolume(2);
    expect(audio.volume).toBe(1);

    audio.setVolume(-1);
    expect(audio.volume).toBe(0);
    expect(audio.playSfx("ui_click")).toBe(false);
  });
});
