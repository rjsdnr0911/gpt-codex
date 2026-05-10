export type GraphicsQuality = "quality" | "balanced" | "performance";

export interface GameSettings {
  mouseSensitivity: number;
  fov: number;
  renderDistance: number;
  graphicsQuality: GraphicsQuality;
  showQuestTracker: boolean;
  showDebug: boolean;
  soundVolume: number;
}

const SETTINGS_KEY = "codex-craft:settings:v1";

export const DEFAULT_SETTINGS: GameSettings = {
  mouseSensitivity: 1,
  fov: 74,
  renderDistance: 3,
  graphicsQuality: "balanced",
  showQuestTracker: true,
  showDebug: true,
  soundVolume: 0.7
};

export function loadGameSettings(): GameSettings {
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (!raw) {
      return { ...DEFAULT_SETTINGS };
    }

    return normalizeGameSettings(JSON.parse(raw) as Partial<GameSettings>);
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveGameSettings(settings: GameSettings): void {
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(normalizeGameSettings(settings)));
}

export function normalizeGameSettings(settings: Partial<GameSettings> | null | undefined): GameSettings {
  const quality = settings?.graphicsQuality;
  return {
    mouseSensitivity: clampNumber(settings?.mouseSensitivity, 0.25, 2.5, DEFAULT_SETTINGS.mouseSensitivity),
    fov: clampNumber(settings?.fov, 60, 95, DEFAULT_SETTINGS.fov),
    renderDistance: Math.round(clampNumber(settings?.renderDistance, 2, 5, DEFAULT_SETTINGS.renderDistance)),
    graphicsQuality: quality === "quality" || quality === "balanced" || quality === "performance" ? quality : DEFAULT_SETTINGS.graphicsQuality,
    showQuestTracker: settings?.showQuestTracker ?? DEFAULT_SETTINGS.showQuestTracker,
    showDebug: settings?.showDebug ?? DEFAULT_SETTINGS.showDebug,
    soundVolume: clampNumber(settings?.soundVolume, 0, 1, DEFAULT_SETTINGS.soundVolume)
  };
}

function clampNumber(value: unknown, min: number, max: number, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? Math.max(min, Math.min(max, value)) : fallback;
}
