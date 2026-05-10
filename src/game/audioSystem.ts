export type SfxId =
  | "ui_click"
  | "ui_confirm"
  | "ui_error"
  | "ui_open"
  | "ui_close"
  | "ui_select"
  | "block_hit"
  | "block_break"
  | "block_place"
  | "footstep"
  | "item_pickup"
  | "player_hurt"
  | "mob_hurt"
  | "mob_death"
  | "bow"
  | "metal"
  | "portal"
  | "explosion"
  | "dragon_hit"
  | "dragon_death"
  | "eat"
  | "chest";

export type MusicId = "dragon";

export interface SfxOptions {
  volume?: number;
  pitch?: number;
  throttleMs?: number;
}

const SAMPLE_FILES: Partial<Record<SfxId, string[]>> = {
  ui_click: ["ui_click.ogg"],
  ui_confirm: ["ui_confirm.ogg"],
  ui_error: ["ui_error.ogg"],
  ui_open: ["ui_open.ogg"],
  ui_close: ["ui_close.ogg"],
  ui_select: ["ui_select.ogg"],
  block_break: ["block_break.ogg"],
  block_place: ["block_place.ogg"],
  footstep: ["step_00.ogg", "step_01.ogg", "step_02.ogg", "step_03.ogg"],
  item_pickup: ["item_pickup.ogg"],
  player_hurt: ["mob_hurt.ogg"],
  mob_hurt: ["mob_hurt.ogg"],
  mob_death: ["mob_death.ogg"],
  bow: ["bow.ogg"],
  metal: ["metal.ogg"],
  eat: ["eat.ogg"],
  chest: ["chest.ogg"]
};

type BrowserAudioContext = AudioContext & {
  createOscillator: AudioContext["createOscillator"];
};

interface MusicHandle {
  id: MusicId;
  gain: GainNode;
  nodes: AudioNode[];
  oscillators: OscillatorNode[];
}

export class AudioSystem {
  private readonly baseUrl: string;
  private readonly samples = new Map<string, HTMLAudioElement>();
  private readonly lastPlayed = new Map<SfxId, number>();
  private context: BrowserAudioContext | null = null;
  private music: MusicHandle | null = null;
  private masterVolume = 0.7;

  constructor(baseUrl = "/") {
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    this.preloadSamples();
  }

  get volume(): number {
    return this.masterVolume;
  }

  setVolume(volume: number): void {
    this.masterVolume = clamp01(volume);
    if (this.music) {
      this.music.gain.gain.value = this.musicVolume(this.music.id);
    }
  }

  unlock(): void {
    const context = this.ensureContext();
    if (context?.state === "suspended") {
      void context.resume();
    }
  }

  playSfx(id: SfxId, options: SfxOptions = {}): boolean {
    const volume = clamp01((options.volume ?? 1) * this.masterVolume);
    if (volume <= 0) {
      return false;
    }

    const throttleMs = options.throttleMs ?? 0;
    if (throttleMs > 0) {
      const now = performanceNow();
      const last = this.lastPlayed.get(id) ?? 0;
      if (now - last < throttleMs) {
        return false;
      }
      this.lastPlayed.set(id, now);
    }

    const files = SAMPLE_FILES[id];
    if (files?.length) {
      const file = files[Math.floor(Math.random() * files.length)];
      const source = this.samples.get(file);
      if (source) {
        const audio = source.cloneNode(true) as HTMLAudioElement;
        audio.volume = volume;
        audio.playbackRate = clamp(options.pitch ?? randomPitch(), 0.55, 1.8);
        void audio.play().catch(() => undefined);
        return true;
      }
    }

    return this.playSynthetic(id, volume, options.pitch ?? randomPitch());
  }

  playMusic(id: MusicId): void {
    if (this.masterVolume <= 0) {
      this.stopMusic();
      return;
    }

    if (this.music?.id === id) {
      this.music.gain.gain.value = this.musicVolume(id);
      return;
    }

    this.stopMusic();
    const context = this.ensureContext();
    if (!context) {
      return;
    }

    const gain = context.createGain();
    gain.gain.value = this.musicVolume(id);
    gain.connect(context.destination);

    const filter = context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 760;
    filter.Q.value = 0.8;
    filter.connect(gain);

    const oscillators = [
      this.makeTone(context, "sawtooth", 55, filter),
      this.makeTone(context, "triangle", 82.41, filter),
      this.makeTone(context, "sine", 110, filter)
    ];

    const lfo = context.createOscillator();
    const lfoGain = context.createGain();
    lfo.type = "sine";
    lfo.frequency.value = 0.085;
    lfoGain.gain.value = 0.018;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);
    lfo.start();

    this.music = {
      id,
      gain,
      nodes: [filter, lfoGain, lfo],
      oscillators
    };
  }

  stopMusic(): void {
    if (!this.music) {
      return;
    }

    for (const oscillator of this.music.oscillators) {
      try {
        oscillator.stop();
      } catch {
        // Already stopped.
      }
      oscillator.disconnect();
    }

    for (const node of this.music.nodes) {
      node.disconnect();
    }
    this.music.gain.disconnect();
    this.music = null;
  }

  private preloadSamples(): void {
    if (typeof Audio === "undefined") {
      return;
    }

    const files = new Set(Object.values(SAMPLE_FILES).flat());
    for (const file of files) {
      const audio = new Audio(this.assetUrl(file));
      audio.preload = "auto";
      this.samples.set(file, audio);
    }
  }

  private assetUrl(file: string): string {
    return `${this.baseUrl}audio/${file}`;
  }

  private ensureContext(): BrowserAudioContext | null {
    if (this.context) {
      return this.context;
    }

    const AudioContextCtor =
      typeof AudioContext !== "undefined"
        ? AudioContext
        : typeof webkitAudioContext !== "undefined"
          ? webkitAudioContext
          : null;

    if (!AudioContextCtor) {
      return null;
    }

    this.context = new AudioContextCtor() as BrowserAudioContext;
    return this.context;
  }

  private playSynthetic(id: SfxId, volume: number, pitch: number): boolean {
    const context = this.ensureContext();
    if (!context) {
      return false;
    }

    if (id === "explosion") {
      this.noiseBurst(context, volume * 0.9, 0.55, 260);
      this.tone(context, "sine", 54, 0.3, volume * 0.34);
      return true;
    }

    if (id === "portal") {
      this.tone(context, "sawtooth", 92 * pitch, 0.42, volume * 0.36, 0.18);
      this.tone(context, "triangle", 184 * pitch, 0.58, volume * 0.24, 0.08);
      return true;
    }

    if (id === "dragon_death") {
      this.noiseBurst(context, volume * 0.55, 1.1, 980);
      this.tone(context, "sawtooth", 118, 1.35, volume * 0.28, -0.08);
      this.tone(context, "triangle", 236, 1, volume * 0.2, -0.15);
      return true;
    }

    if (id === "dragon_hit") {
      this.tone(context, "square", 146 * pitch, 0.16, volume * 0.24, -0.08);
      return true;
    }

    this.noiseBurst(context, volume * 0.25, 0.08, 1200);
    return true;
  }

  private makeTone(context: BrowserAudioContext, type: OscillatorType, frequency: number, destination: AudioNode): OscillatorNode {
    const oscillator = context.createOscillator();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    oscillator.connect(destination);
    oscillator.start();
    return oscillator;
  }

  private tone(
    context: BrowserAudioContext,
    type: OscillatorType,
    frequency: number,
    duration: number,
    volume: number,
    glide = 0
  ): void {
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    if (glide !== 0) {
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, frequency * (1 + glide)), now + duration);
    }
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume), now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.03);
    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
    };
  }

  private noiseBurst(context: BrowserAudioContext, volume: number, duration: number, filterFrequency: number): void {
    const now = context.currentTime;
    const buffer = context.createBuffer(1, Math.max(1, Math.floor(context.sampleRate * duration)), context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < data.length; index += 1) {
      const t = index / data.length;
      data[index] = (Math.random() * 2 - 1) * (1 - t);
    }

    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    source.buffer = buffer;
    filter.type = "lowpass";
    filter.frequency.value = filterFrequency;
    gain.gain.setValueAtTime(Math.max(0.0001, volume), now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    source.start(now);
    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  private musicVolume(id: MusicId): number {
    return id === "dragon" ? this.masterVolume * 0.12 : this.masterVolume * 0.08;
  }
}

function clamp01(value: number): number {
  return clamp(value, 0, 1);
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Number.isFinite(value) ? value : min));
}

function randomPitch(): number {
  return 0.94 + Math.random() * 0.12;
}

function performanceNow(): number {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}

declare const webkitAudioContext: typeof AudioContext | undefined;
