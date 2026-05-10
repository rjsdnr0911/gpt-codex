import { BLOCKS, BlockType } from "../game/blocks";
import { HOTBAR_START, InventoryState } from "../game/inventory";
import { EquipmentSlot, ITEM_DEFINITIONS, ItemId, ItemStack, ToolKind, ToolTier } from "../game/items";
import { Recipe } from "../game/recipes";
import { EndBossStats } from "../game/endBoss";
import { itemIconDataUrl } from "./itemIcon";
import {
  DimensionId,
  getActiveMainQuest,
  getTrackedSideQuests,
  QUESTS,
  QuestDefinition,
  QuestState,
  questItemUsage,
  questProgressText
} from "../game/quests";
import { SmeltingRecipe } from "../game/smelting";
import { SurvivalState } from "../game/survival";
import { DEFAULT_SETTINGS, GameSettings, GraphicsQuality } from "../game/settings";
import { GameMode } from "../game/saveSystem";

export type HudMode =
  | "title"
  | "options"
  | "worldSelect"
  | "createWorld"
  | "loading"
  | "playing"
  | "paused"
  | "inventory"
  | "craftingTable"
  | "furnace"
  | "gameOver";

export interface WorldSummary {
  id: string;
  name: string;
  seed: string;
  updatedAt: number;
  allowCheats?: boolean;
}

export interface RecipeView {
  recipe: Recipe;
  craftable: boolean;
  unlocked: boolean;
}

export interface HudCallbacks {
  onSingleplayer: () => void;
  onCreateWorldMenu: () => void;
  onOptions: (target: "title" | "paused") => void;
  onOptionsBack: (target: "title" | "paused") => void;
  onUiAction: (action: "click" | "hover") => void;
  onSettingsChange: (settings: Partial<GameSettings>) => void;
  onCreateWorld: (name: string, seed: string, allowCheats: boolean) => void;
  onSelectWorld: (id: string) => void;
  onDeleteWorld: (id: string) => void;
  onBackToTitle: () => void;
  onResume: () => void;
  onQuitToTitle: () => void;
  onRespawn: () => void;
  onInventorySlot: (index: number, button: 0 | 2, shift: boolean) => void;
  onEquipmentSlot: (slot: EquipmentSlot, button: 0 | 2) => void;
  onOffhandSlot: (button: 0 | 2) => void;
  onCraftSlot: (index: number, button: 0 | 2, shift: boolean) => void;
  onCraftResult: (shift: boolean) => void;
  onSlotDrop: (fromRef: string, toRef: string) => void;
  onHotbarKeySwap: (index: number, hotbarSlot: number) => void;
  onCraftRecipe: (recipeId: string, craftAll: boolean, gridSize: 2 | 3) => void;
  onSmeltRecipe: (recipeId: string, smeltAll: boolean) => void;
  onToggleGameMode: () => void;
  onGiveCreativeItem: (item: ItemId) => void;
  onRegenerateWorld: (id: string) => void;
  onResetAll: () => void;
}

export interface HudStats {
  position: string;
  chunks: number;
  mobs: number;
  fps: number;
  selectedStack: ItemStack | null;
  inventory: InventoryState;
  survival: SurvivalState;
  day: number;
  saveState: string;
  miningProgress: number;
  selectedBlock: BlockType | null;
  activeWorldName: string;
  recipes: RecipeView[];
  craftingGrid: Array<ItemStack | null>;
  craftingResult: ItemStack | null;
  questState: QuestState;
  dimension: DimensionId;
  smeltingRecipes: Array<{ recipe: SmeltingRecipe; smeltable: boolean }>;
  boss: EndBossStats | null;
  allowCheats: boolean;
  gameMode: GameMode;
  settings: GameSettings;
}

export class Hud {
  readonly element: HTMLDivElement;

  private readonly callbacks: HudCallbacks;
  private readonly menuLayer: HTMLDivElement;
  private readonly panelLayer: HTMLDivElement;
  private readonly hudLayer: HTMLDivElement;
  private readonly statusLine: HTMLDivElement;
  private readonly debugChip: HTMLDivElement;
  private readonly reticle: HTMLDivElement;
  private readonly itemName: HTMLDivElement;
  private readonly miningFill: HTMLSpanElement;
  private readonly heartRow: HTMLDivElement;
  private readonly armorRow: HTMLDivElement;
  private readonly hungerRow: HTMLDivElement;
  private readonly airRow: HTMLDivElement;
  private readonly hotbar: HTMLDivElement;
  private readonly questTracker: HTMLDivElement;
  private readonly bossBar: HTMLDivElement;
  private readonly toast: HTMLDivElement;
  private readonly damageIndicator: HTMLDivElement;

  private mode: HudMode = "title";
  private worlds: WorldSummary[] = [];
  private stats: HudStats | null = null;
  private panelSignature = "";
  private toastTimer = 0;
  private catalogQuery = "";
  private catalogPage = 0;
  private catalogSelectedItem: ItemId | null = null;
  private optionsReturnMode: "title" | "paused" = "title";

  constructor(parent: HTMLElement, callbacks: HudCallbacks) {
    this.callbacks = callbacks;
    this.element = document.createElement("div");
    this.element.className = "hud";

    this.hudLayer = document.createElement("div");
    this.hudLayer.className = "play-hud";

    const topBar = document.createElement("div");
    topBar.className = "top-bar compact";

    const brand = document.createElement("div");
    brand.className = "brand-stack";

    const title = document.createElement("div");
    title.className = "brand-title pixel-title-small";
    title.textContent = "Codex Craft";

    this.statusLine = document.createElement("div");
    this.statusLine.className = "status-line";

    brand.append(title, this.statusLine);
    this.debugChip = document.createElement("div");
    this.debugChip.className = "world-chip debug-chip";
    topBar.append(brand, this.debugChip);

    this.reticle = document.createElement("div");
    this.reticle.className = "reticle";

    const mining = document.createElement("div");
    mining.className = "mining-progress";
    this.miningFill = document.createElement("span");
    mining.append(this.miningFill);

    this.itemName = document.createElement("div");
    this.itemName.className = "selected-item-name";

    const statusBars = document.createElement("div");
    statusBars.className = "survival-bars";
    this.armorRow = document.createElement("div");
    this.armorRow.className = "icon-row armor";
    this.heartRow = document.createElement("div");
    this.heartRow.className = "icon-row hearts";
    this.hungerRow = document.createElement("div");
    this.hungerRow.className = "icon-row hunger";
    this.airRow = document.createElement("div");
    this.airRow.className = "icon-row air";
    statusBars.append(this.armorRow, this.heartRow, this.hungerRow, this.airRow);

    this.hotbar = document.createElement("div");
    this.hotbar.className = "hotbar survival-hotbar";

    this.questTracker = document.createElement("div");
    this.questTracker.className = "quest-tracker";

    this.bossBar = document.createElement("div");
    this.bossBar.className = "boss-bar";

    this.toast = document.createElement("div");
    this.toast.className = "toast";

    this.damageIndicator = document.createElement("div");
    this.damageIndicator.className = "damage-indicator";

    this.hudLayer.append(
      topBar,
      this.bossBar,
      this.damageIndicator,
      this.reticle,
      mining,
      this.itemName,
      statusBars,
      this.hotbar,
      this.questTracker,
      this.toast
    );

    this.menuLayer = document.createElement("div");
    this.menuLayer.className = "menu-layer";

    this.panelLayer = document.createElement("div");
    this.panelLayer.className = "panel-layer";

    this.element.append(this.hudLayer, this.menuLayer, this.panelLayer);
    this.element.addEventListener(
      "pointerdown",
      (event) => {
        const target = event.target as HTMLElement | null;
        if (target?.closest("button, input, select")) {
          this.callbacks.onUiAction("click");
        }
      },
      true
    );
    this.element.addEventListener(
      "mouseover",
      (event) => {
        const target = event.target as HTMLElement | null;
        if (target?.closest("button")) {
          this.callbacks.onUiAction("hover");
        }
      },
      true
    );
    parent.append(this.element);
    this.render();
  }

  setMode(mode: HudMode): void {
    this.mode = mode;
    this.panelSignature = "";
    this.render();
  }

  setWorlds(worlds: WorldSummary[]): void {
    this.worlds = worlds;
    this.render();
  }

  update(stats: HudStats): void {
    this.stats = stats;
    this.renderHud();

    if (this.mode === "inventory" || this.mode === "craftingTable" || this.mode === "furnace") {
      const signature = this.makePanelSignature(stats);
      if (signature === this.panelSignature) {
        return;
      }
      this.panelSignature = signature;
      this.renderPanel();
    }
  }

  showToast(message: string): void {
    window.clearTimeout(this.toastTimer);
    this.toast.textContent = message;
    this.toast.classList.remove("quest-toast");
    this.toast.classList.add("visible");
    this.toastTimer = window.setTimeout(() => {
      this.toast.classList.remove("visible");
    }, 1800);
  }

  showQuestToast(title: string, description: string, reward: string): void {
    window.clearTimeout(this.toastTimer);
    const titleEl = document.createElement("strong");
    titleEl.textContent = title;
    const descEl = document.createElement("span");
    descEl.textContent = description;
    const rewardEl = document.createElement("em");
    rewardEl.textContent = reward;
    this.toast.replaceChildren(titleEl, descEl, rewardEl);
    this.toast.classList.add("visible", "quest-toast");
    this.toastTimer = window.setTimeout(() => {
      this.toast.classList.remove("visible", "quest-toast");
    }, 3200);
  }

  showDamageIndicator(direction: "front" | "back" | "left" | "right"): void {
    this.damageIndicator.className = `damage-indicator visible ${direction}`;
    window.setTimeout(() => {
      this.damageIndicator.classList.remove("visible");
    }, 420);
  }

  private render(): void {
    this.element.dataset.mode = this.mode;
    this.renderMenu();
    this.renderPanel();
    this.renderHud();
  }

  private renderHud(): void {
    if (!this.stats) {
      return;
    }

    const selected = this.stats.selectedStack;
    this.statusLine.textContent = this.stats.position;
    this.debugChip.hidden = !this.stats.settings.showDebug;
    this.debugChip.innerHTML = "";
    this.debugChip.append(
      this.makeMetric("월드", this.stats.activeWorldName),
      this.makeMetric("FPS", String(this.stats.fps)),
      this.makeMetric("청크", String(this.stats.chunks)),
      this.makeMetric("몹", String(this.stats.mobs)),
      this.makeMetric("저장", this.stats.saveState)
    );

    this.itemName.textContent = selected ? ITEM_DEFINITIONS[selected.item].name : "";
    this.miningFill.style.width = `${Math.round(this.stats.miningProgress * 100)}%`;
    this.renderIconRow(this.armorRow, "armor", this.armorPoints());
    this.renderIconRow(this.heartRow, "heart", this.stats.survival.health);
    this.renderIconRow(this.hungerRow, "hunger", this.stats.survival.hunger);
    this.renderIconRow(this.airRow, "air", this.stats.survival.air);
    this.renderHotbar();
    this.renderBossBar();
    this.renderQuestTracker();
  }

  private renderBossBar(): void {
    const boss = this.stats?.boss ?? null;
    if (!boss || this.mode !== "playing") {
      this.bossBar.hidden = true;
      this.bossBar.innerHTML = "";
      return;
    }

    this.bossBar.hidden = false;
    this.bossBar.innerHTML = "";
    const title = document.createElement("div");
    title.className = "boss-title";
    title.textContent = `${boss.name} · ${boss.phaseKo} · 수정 ${boss.crystals}개`;
    const meter = document.createElement("div");
    meter.className = "boss-meter";
    const fill = document.createElement("span");
    fill.style.width = `${Math.max(0, Math.min(100, (boss.health / boss.maxHealth) * 100))}%`;
    meter.append(fill);
    this.bossBar.append(title, meter);
  }

  private renderQuestTracker(): void {
    if (!this.stats || this.mode !== "playing") {
      this.questTracker.hidden = true;
      return;
    }

    if (!this.stats.settings.showQuestTracker) {
      this.questTracker.hidden = true;
      return;
    }

    const mainQuest = getActiveMainQuest(this.stats.questState);
    const sideQuests = getTrackedSideQuests(this.stats.questState);
    this.questTracker.hidden = !mainQuest && sideQuests.length === 0;
    this.questTracker.innerHTML = "";

    const title = document.createElement("div");
    title.className = "quest-tracker-title";
    title.textContent = "현재 목표";
    this.questTracker.append(title);

    if (mainQuest) {
      this.questTracker.append(this.makeQuestTrackerLine(mainQuest, true));
    }

    for (const quest of sideQuests) {
      this.questTracker.append(this.makeQuestTrackerLine(quest, false));
    }
  }

  private makeQuestTrackerLine(quest: QuestDefinition, main: boolean): HTMLElement {
    const line = document.createElement("div");
    line.className = `quest-tracker-line ${main ? "main" : ""}`;
    const label = document.createElement("strong");
    label.textContent = quest.titleKo;
    const progress = document.createElement("span");
    progress.textContent = questProgressText(quest, this.stats!.questState);
    line.append(label, progress);
    if (main) {
      const guide = document.createElement("em");
      guide.textContent = quest.descriptionKo;
      line.append(guide);
    }
    return line;
  }

  private renderMenu(): void {
    this.menuLayer.innerHTML = "";

    if (this.mode === "playing" || this.mode === "inventory" || this.mode === "craftingTable" || this.mode === "furnace") {
      this.menuLayer.hidden = true;
      return;
    }

    this.menuLayer.hidden = false;

    if (this.mode === "title") {
      this.menuLayer.append(this.makeTitleMenu());
      return;
    }

    if (this.mode === "options") {
      this.menuLayer.append(this.makeOptionsMenu());
      return;
    }

    if (this.mode === "worldSelect") {
      this.menuLayer.append(this.makeWorldSelect());
      return;
    }

    if (this.mode === "createWorld") {
      this.menuLayer.append(this.makeCreateWorld());
      return;
    }

    if (this.mode === "paused") {
      this.menuLayer.append(this.makePauseMenu());
      return;
    }

    if (this.mode === "gameOver") {
      this.menuLayer.append(this.makeGameOver());
      return;
    }

    if (this.mode === "loading") {
      this.menuLayer.append(this.makeMenuPanel("지형 불러오는 중", "청크를 만들고 하늘을 준비하고 있습니다.", []));
    }
  }

  private renderPanel(): void {
    this.panelLayer.innerHTML = "";

    if (!this.stats || (this.mode !== "inventory" && this.mode !== "craftingTable" && this.mode !== "furnace")) {
      this.panelLayer.hidden = true;
      return;
    }

    this.panelLayer.hidden = false;
    this.panelLayer.append(
      this.mode === "furnace" ? this.makeFurnacePanel() : this.makeInventoryPanel(this.mode === "craftingTable" ? 3 : 2)
    );
  }

  private makeTitleMenu(): HTMLElement {
    const panel = document.createElement("div");
    panel.className = "title-menu";

    const brand = document.createElement("section");
    brand.className = "title-brand";

    const badge = document.createElement("div");
    badge.className = "title-badge";
    badge.textContent = "로컬 싱글플레이 생존";

    const title = document.createElement("h1");
    title.className = "title-logo";
    title.textContent = "Codex Craft";

    const copy = document.createElement("p");
    copy.className = "title-copy";
    copy.textContent = "나무에서 드래곤까지 이어지는 한국어 복셀 생존 샌드박스.";

    const features = document.createElement("div");
    features.className = "title-feature-grid";
    for (const [label, value] of [
      ["진행", "퀘스트 기반"],
      ["월드", "동굴·지옥·엔드"],
      ["전투", "몹·장비·드래곤"]
    ]) {
      const item = document.createElement("div");
      const strong = document.createElement("strong");
      strong.textContent = value;
      const span = document.createElement("span");
      span.textContent = label;
      item.append(strong, span);
      features.append(item);
    }

    brand.append(badge, title, copy, features);

    const actions = document.createElement("nav");
    actions.className = "title-actions";
    actions.append(
      this.makeMenuButton("싱글플레이", this.callbacks.onSingleplayer, "primary"),
      this.makeMenuButton("새 월드 만들기", this.callbacks.onCreateWorldMenu),
      this.makeMenuButton("설정", () => {
        this.optionsReturnMode = "title";
        this.callbacks.onOptions("title");
      }),
      this.makeMenuButton("로컬 빌드 정보", () => this.showToast("Codex Craft는 이 컴퓨터에 저장되는 싱글플레이 빌드입니다."))
    );

    const note = document.createElement("div");
    note.className = "title-note";
    note.textContent = "WASD 이동 · E 인벤토리 · 우클릭 상호작용 · Esc 메뉴";

    panel.append(brand, actions, note);
    return panel;
  }

  private makeOptionsMenu(): HTMLElement {
    const settings = this.stats?.settings ?? DEFAULT_SETTINGS;
    const panel = this.makeMenuPanel("설정", "조작감, 화면, HUD 표시를 조정합니다.", [], false);
    panel.classList.add("options-panel");

    const form = document.createElement("div");
    form.className = "settings-grid";
    form.append(
      this.makeSliderSetting("마우스 감도", `${Math.round(settings.mouseSensitivity * 100)}%`, 0.25, 2.5, 0.05, settings.mouseSensitivity, (value) =>
        this.callbacks.onSettingsChange({ mouseSensitivity: value })
      ),
      this.makeSliderSetting("시야각", `${settings.fov}°`, 60, 95, 1, settings.fov, (value) =>
        this.callbacks.onSettingsChange({ fov: Math.round(value) })
      ),
      this.makeSliderSetting("렌더 거리", `${settings.renderDistance} 청크`, 2, 5, 1, settings.renderDistance, (value) =>
        this.callbacks.onSettingsChange({ renderDistance: Math.round(value) })
      ),
      this.makeSelectSetting("그래픽 품질", settings.graphicsQuality, [
        ["quality", "고품질"],
        ["balanced", "균형"],
        ["performance", "성능"]
      ], (value) => this.callbacks.onSettingsChange({ graphicsQuality: value })),
      this.makeToggleSetting("퀘스트 목표 표시", settings.showQuestTracker, (value) =>
        this.callbacks.onSettingsChange({ showQuestTracker: value })
      ),
      this.makeToggleSetting("좌표/FPS 표시", settings.showDebug, (value) =>
        this.callbacks.onSettingsChange({ showDebug: value })
      ),
      this.makeSliderSetting("사운드 볼륨", `${Math.round(settings.soundVolume * 100)}%`, 0, 1, 0.05, settings.soundVolume, (value) =>
        this.callbacks.onSettingsChange({ soundVolume: value })
      )
    );

    const actions = document.createElement("div");
    actions.className = "menu-actions";
    actions.append(
      this.makeMenuButton("기본값으로 복원", () => this.callbacks.onSettingsChange(DEFAULT_SETTINGS)),
      this.makeMenuButton("뒤로", () => this.callbacks.onOptionsBack(this.optionsReturnMode))
    );

    panel.append(form, actions);
    return panel;
  }

  private makeWorldSelect(): HTMLElement {
    const panel = this.makeMenuPanel("월드 선택", "로컬 싱글플레이 저장을 선택하세요.", [], false);
    const list = document.createElement("div");
    list.className = "world-list";

    if (this.worlds.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-worlds";
      empty.textContent = "아직 만든 월드가 없습니다.";
      list.append(empty);
    }

    for (const world of this.worlds) {
      const row = document.createElement("div");
      row.className = "world-row";

      const main = document.createElement("button");
      main.className = "world-main";
      main.type = "button";
      main.addEventListener("click", () => this.callbacks.onSelectWorld(world.id));

      const title = document.createElement("strong");
      title.textContent = world.name;
      const meta = document.createElement("span");
      meta.textContent = `${world.seed} | ${world.allowCheats ? "치트 허용 | " : ""}${new Date(world.updatedAt).toLocaleString()}`;
      main.append(title, meta);

      const del = document.createElement("button");
      del.className = "menu-button danger mini";
      del.type = "button";
      del.textContent = "삭제";
      del.addEventListener("click", () => this.callbacks.onDeleteWorld(world.id));

      row.append(main, del);
      const regen = document.createElement("button");
      regen.className = "menu-button mini";
      regen.type = "button";
      regen.textContent = "동굴 월드 복사 재생성";
      regen.addEventListener("click", () => this.callbacks.onRegenerateWorld(world.id));
      row.append(regen);
      list.append(row);
    }

    const actions = document.createElement("div");
    actions.className = "menu-actions";
    actions.append(
      this.makeMenuButton("새 월드 만들기", this.callbacks.onCreateWorldMenu),
      this.makeMenuButton("뒤로", this.callbacks.onBackToTitle)
    );
    panel.append(list, actions);
    return panel;
  }

  private makeCreateWorld(): HTMLElement {
    const panel = this.makeMenuPanel("새 월드 만들기", "생존 | 보통 | 로컬 저장", [], false);
    const form = document.createElement("form");
    form.className = "create-form";

    const name = document.createElement("input");
    name.className = "pixel-input";
    name.name = "worldName";
    name.maxLength = 28;
    name.placeholder = "월드 이름";
    name.value = `새 월드 ${this.worlds.length + 1}`;

    const seed = document.createElement("input");
    seed.className = "pixel-input";
    seed.name = "seed";
    seed.maxLength = 36;
    seed.placeholder = "시드";
    seed.value = `codex-${Math.floor(Date.now() / 1000).toString(36)}`;

    const cheats = document.createElement("label");
    cheats.className = "create-cheats-row";
    const cheatsText = document.createElement("span");
    cheatsText.textContent = "치트 허용";
    const cheatsHelp = document.createElement("em");
    cheatsHelp.textContent = "이 월드는 인벤토리에서 크리에이티브/서바이벌 전환 가능";
    const cheatsInput = document.createElement("input");
    cheatsInput.type = "checkbox";
    cheats.append(cheatsText, cheatsHelp, cheatsInput);

    const actions = document.createElement("div");
    actions.className = "menu-actions";
    const create = this.makeMenuButton("생성", () => undefined);
    create.type = "submit";
    actions.append(create, this.makeMenuButton("취소", this.callbacks.onBackToTitle));
    form.append(name, seed, cheats, actions);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.callbacks.onCreateWorld(name.value.trim() || "새 월드", seed.value.trim() || "codex-aurora", cheatsInput.checked);
    });
    panel.append(form);
    return panel;
  }

  private makePauseMenu(): HTMLElement {
    return this.makeMenuPanel("게임 메뉴", "월드가 일시정지되었습니다.", [
      this.makeMenuButton("게임으로 돌아가기", this.callbacks.onResume),
      this.makeMenuButton("설정", () => {
        this.optionsReturnMode = "paused";
        this.callbacks.onOptions("paused");
      }),
      this.makeMenuButton("저장하고 타이틀로", this.callbacks.onQuitToTitle),
      this.makeMenuButton("모든 로컬 월드 초기화", this.callbacks.onResetAll, "danger")
    ]);
  }

  private makeGameOver(): HTMLElement {
    return this.makeMenuPanel("사망했습니다", "월드 스폰 지점에서 다시 시작합니다.", [
      this.makeMenuButton("리스폰", this.callbacks.onRespawn),
      this.makeMenuButton("타이틀 화면", this.callbacks.onQuitToTitle)
    ], true);
  }

  private makeInventoryPanel(gridSize: 2 | 3): HTMLElement {
    const stats = this.stats;
    if (!stats) {
      return document.createElement("div");
    }

    const panel = document.createElement("div");
    panel.className = `inventory-panel grid-${gridSize}`;
    const tooltip = document.createElement("div");
    tooltip.className = "inventory-tooltip";
    tooltip.hidden = true;
    panel.addEventListener("mousemove", (event) => {
      panel.style.setProperty("--cursor-x", `${event.clientX}px`);
      panel.style.setProperty("--cursor-y", `${event.clientY}px`);

      const slot = (event.target as HTMLElement).closest<HTMLButtonElement>(
        ".inventory-slot, .craft-slot, .craft-result-slot, .equipment-slot"
      );
      const stack = this.stackFromSlotElement(slot);
      if (!stack) {
        tooltip.hidden = true;
        return;
      }

      tooltip.textContent = this.stackTooltip(stack);
      tooltip.style.setProperty("--tooltip-x", `${event.clientX}px`);
      tooltip.style.setProperty("--tooltip-y", `${event.clientY}px`);
      tooltip.hidden = false;
    });
    panel.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });

    const title = document.createElement("div");
    title.className = "inventory-title";
    const titleText = document.createElement("strong");
    titleText.textContent = gridSize === 3 ? "제작대" : "인벤토리";
    title.append(titleText);
    if (stats.allowCheats) {
      const modeBadge = document.createElement("span");
      modeBadge.className = "mode-badge";
      modeBadge.textContent = stats.gameMode === "creative" ? "치트 · 크리에이티브" : "치트 · 서바이벌";
      const modeButton = document.createElement("button");
      modeButton.className = "mode-toggle-button";
      modeButton.type = "button";
      modeButton.textContent = stats.gameMode === "creative" ? "서바이벌 전환" : "크리에이티브 전환";
      modeButton.addEventListener("click", this.callbacks.onToggleGameMode);
      title.append(modeBadge, modeButton);
    }

    const recipeBook = document.createElement("div");
    recipeBook.className = "recipe-book";

    const recipeTitle = document.createElement("div");
    recipeTitle.className = "recipe-title";
    recipeTitle.textContent = "제작법 책";
    recipeBook.append(recipeTitle);

    for (const view of stats.recipes.filter((entry) => entry.unlocked && entry.recipe.size <= gridSize)) {
      const button = document.createElement("button");
      button.className = `recipe-card ${view.craftable ? "craftable" : ""}`;
      button.type = "button";
      button.disabled = !view.craftable;
      button.addEventListener("click", (event) => {
        this.callbacks.onCraftRecipe(view.recipe.id, (event as MouseEvent).shiftKey, gridSize);
      });
      button.append(this.makeItemIcon(view.recipe.result), document.createTextNode(view.recipe.name));
      recipeBook.append(button);
    }

    const questJournal = this.makeQuestJournal();
    const catalog = this.makeItemCatalog(gridSize);

    const playerPaper = document.createElement("div");
    playerPaper.className = "player-paper";
    const avatar = document.createElement("div");
    avatar.className = "player-avatar";
    avatar.textContent = "CC";
    const equipment = document.createElement("div");
    equipment.className = "equipment-slots";
    equipment.append(
      this.makeEquipmentSlot("head", "투구"),
      this.makeEquipmentSlot("chest", "흉갑"),
      this.makeEquipmentSlot("legs", "각반"),
      this.makeEquipmentSlot("feet", "부츠"),
      this.makeOffhandSlot()
    );
    playerPaper.append(avatar, equipment);

    const craftingArea = document.createElement("div");
    craftingArea.className = "crafting-area";

    const craftGrid = document.createElement("div");
    craftGrid.className = `craft-grid cells-${gridSize}`;
    for (let index = 0; index < gridSize * gridSize; index += 1) {
      craftGrid.append(this.makeCraftSlot(index));
    }

    const arrow = document.createElement("div");
    arrow.className = "craft-arrow";
    arrow.textContent = ">";

    const result = document.createElement("button");
    result.className = "craft-result-slot";
    result.type = "button";
    result.dataset.slotRef = "result";
    result.disabled = !stats.craftingResult;
    result.addEventListener("click", (event) => this.callbacks.onCraftResult((event as MouseEvent).shiftKey));
    if (stats.craftingResult) {
      result.title = this.stackTooltip(stats.craftingResult);
      result.append(this.makeItemIcon(stats.craftingResult), this.makeCount(stats.craftingResult.count));
    }

    craftingArea.append(craftGrid, arrow, result);

    const storage = document.createElement("div");
    storage.className = "storage-grid";
    for (let index = 0; index < 27; index += 1) {
      storage.append(this.makeSlot(index));
    }

    const hotbar = document.createElement("div");
    hotbar.className = "inventory-hotbar-grid";
    for (let index = HOTBAR_START; index < HOTBAR_START + 9; index += 1) {
      hotbar.append(this.makeSlot(index));
    }

    const cursor = document.createElement("div");
    cursor.className = "cursor-stack";
    if (stats.inventory.cursor) {
      cursor.append(this.makeItemIcon(stats.inventory.cursor), this.makeCount(stats.inventory.cursor.count));
    }

    panel.append(title, questJournal, recipeBook, playerPaper, craftingArea, storage, hotbar, catalog, cursor, tooltip);
    return panel;
  }

  private makeQuestJournal(): HTMLElement {
    const wrap = document.createElement("div");
    wrap.className = "quest-journal";
    const title = document.createElement("div");
    title.className = "quest-journal-title";
    title.textContent = "모험 일지";
    wrap.append(title);

    if (!this.stats) {
      return wrap;
    }

    const main = getActiveMainQuest(this.stats.questState);
    if (main) {
      wrap.append(this.makeJournalQuest(main, "메인"));
    }

    for (const quest of getTrackedSideQuests(this.stats.questState)) {
      wrap.append(this.makeJournalQuest(quest, this.categoryLabel(quest)));
    }

    const roadmap = QUESTS.filter((quest) => quest.future).slice(0, 4);
    const roadmapTitle = document.createElement("div");
    roadmapTitle.className = "quest-roadmap-title";
    roadmapTitle.textContent = "이후 로드맵";
    wrap.append(roadmapTitle);
    for (const quest of roadmap) {
      wrap.append(this.makeJournalQuest(quest, "예고"));
    }

    return wrap;
  }

  private makeJournalQuest(quest: QuestDefinition, labelText: string): HTMLElement {
    const entry = document.createElement("div");
    entry.className = `quest-journal-entry ${quest.future ? "future" : ""}`;
    const head = document.createElement("div");
    const label = document.createElement("span");
    label.className = "quest-label";
    label.textContent = labelText;
    const title = document.createElement("strong");
    title.textContent = quest.titleKo;
    head.append(label, title);
    const desc = document.createElement("p");
    desc.textContent = quest.descriptionKo;
    const progress = document.createElement("span");
    progress.className = "quest-progress-text";
    progress.textContent = quest.future ? "다음 대형 업데이트에서 실제 콘텐츠 확장 예정" : questProgressText(quest, this.stats!.questState);
    entry.append(head, desc, progress);
    return entry;
  }

  private categoryLabel(quest: QuestDefinition): string {
    const labels: Record<string, string> = {
      side: "사이드",
      combat: "전투",
      exploration: "탐험",
      crafting: "제작",
      main: "메인"
    };
    return labels[quest.category] ?? "사이드";
  }

  private makeFurnacePanel(): HTMLElement {
    const stats = this.stats;
    if (!stats) {
      return document.createElement("div");
    }

    const panel = this.makeInventoryPanel(3);
    panel.classList.add("furnace-panel");
    const title = panel.querySelector(".inventory-title");
    if (title) {
      title.textContent = "화로";
    }

    const recipeBook = panel.querySelector(".recipe-book");
    if (recipeBook) {
      recipeBook.innerHTML = "";
      const recipeTitle = document.createElement("div");
      recipeTitle.className = "recipe-title";
      recipeTitle.textContent = "제련";
      recipeBook.append(recipeTitle);

      for (const view of stats.smeltingRecipes) {
        const button = document.createElement("button");
        button.className = `recipe-card ${view.smeltable ? "craftable" : ""}`;
        button.type = "button";
        button.disabled = !view.smeltable;
        button.addEventListener("click", (event) => {
          this.callbacks.onSmeltRecipe(view.recipe.id, (event as MouseEvent).shiftKey);
        });
        button.append(this.makeItemIcon(view.recipe.result), document.createTextNode(view.recipe.name));
        recipeBook.append(button);
      }
    }

    return panel;
  }

  private makeItemCatalog(gridSize: 2 | 3): HTMLElement {
    const stats = this.stats;
    const wrap = document.createElement("div");
    wrap.className = "item-catalog";

    const allItems = Object.values(ITEM_DEFINITIONS);
    const query = this.catalogQuery.trim().toLowerCase();
    const filtered = allItems.filter((item) => {
      if (!query) {
        return true;
      }

      return item.name.toLowerCase().includes(query) || item.id.toLowerCase().includes(query);
    });
    if (this.catalogSelectedItem && !filtered.some((item) => item.id === this.catalogSelectedItem)) {
      this.catalogSelectedItem = filtered[0]?.id ?? null;
    }
    const pageSize = 48;
    const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
    this.catalogPage = Math.max(0, Math.min(this.catalogPage, pages - 1));
    const visible = filtered.slice(this.catalogPage * pageSize, this.catalogPage * pageSize + pageSize);

    const header = document.createElement("div");
    header.className = "catalog-header";
    const title = document.createElement("strong");
    title.textContent = "아이템 목록";
    const count = document.createElement("span");
    count.textContent = `${filtered.length}/${allItems.length}`;
    header.append(title, count);

    const search = document.createElement("input");
    search.className = "catalog-search";
    search.placeholder = "아이템 검색";
    search.value = this.catalogQuery;
    search.addEventListener("input", () => {
      this.catalogQuery = search.value;
      this.catalogPage = 0;
      this.renderPanel();
      const next = this.panelLayer.querySelector<HTMLInputElement>(".catalog-search");
      next?.focus();
      next?.setSelectionRange(next.value.length, next.value.length);
    });

    const pager = document.createElement("div");
    pager.className = "catalog-pager";
    const previous = this.makeCatalogButton("<", () => {
      this.catalogPage = (this.catalogPage - 1 + pages) % pages;
      this.renderPanel();
    });
    const pageLabel = document.createElement("span");
    pageLabel.textContent = `${this.catalogPage + 1}/${pages}`;
    const next = this.makeCatalogButton(">", () => {
      this.catalogPage = (this.catalogPage + 1) % pages;
      this.renderPanel();
    });
    pager.append(previous, pageLabel, next);

    const grid = document.createElement("div");
    grid.className = "catalog-grid";
    for (const item of visible) {
      const button = document.createElement("button");
      button.className = `catalog-item ${this.catalogSelectedItem === item.id ? "selected" : ""}`;
      button.type = "button";
      button.dataset.item = item.id;
      button.title = item.name;
      button.setAttribute("aria-label", item.name);
      button.addEventListener("click", () => {
        this.catalogSelectedItem = item.id;
        this.renderPanel();
      });
      button.append(this.makeItemIcon({ item: item.id, count: 1 }));
      grid.append(button);
    }

    const detail = this.makeCatalogDetail(gridSize, stats);
    wrap.append(header, search, pager, grid, detail);
    return wrap;
  }

  private makeCatalogButton(label: string, onClick: () => void): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = "catalog-page-button";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  private makeCatalogDetail(gridSize: 2 | 3, stats: HudStats | null): HTMLElement {
    const detail = document.createElement("div");
    detail.className = "catalog-detail";

    if (!stats || !this.catalogSelectedItem) {
      const empty = document.createElement("div");
      empty.className = "catalog-empty";
      empty.textContent = "아이템을 선택하면 제작법과 획득처가 표시됩니다.";
      detail.append(empty);
      return detail;
    }

    const item = ITEM_DEFINITIONS[this.catalogSelectedItem];
    const head = document.createElement("div");
    head.className = "catalog-detail-head";
    head.append(this.makeItemIcon({ item: item.id, count: 1 }));
    const labels = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = item.name;
    const id = document.createElement("span");
    id.textContent = item.id;
    labels.append(name, id);
    head.append(labels);

    const meta = document.createElement("div");
    meta.className = "catalog-meta";
    meta.append(
      this.makeCatalogChip("구현됨"),
      this.makeCatalogChip(item.placeBlock ? "블록" : item.toolKind ? "도구" : item.food ? "음식" : "아이템")
    );
    if (item.toolKind) {
      meta.append(this.makeCatalogChip(this.toolChip(item.toolTier ?? "hand", item.toolKind)));
    }

    const recipes = stats.recipes.filter((entry) => entry.recipe.result.item === item.id);
    const smelting = stats.smeltingRecipes.filter((entry) => entry.recipe.result.item === item.id);
    const sources = this.dropSources(item.id);

    detail.append(head, meta);

    if (stats.allowCheats && stats.gameMode === "creative") {
      const give = document.createElement("button");
      give.className = "recipe-fill-button creative-give-button";
      give.type = "button";
      give.textContent = "지급";
      give.addEventListener("click", () => this.callbacks.onGiveCreativeItem(item.id));
      detail.append(give);
    }

    if (recipes.length > 0) {
      detail.append(this.makeCatalogSectionTitle("제작법"));
      for (const view of recipes) {
        detail.append(this.makeRecipePreview(view, gridSize));
      }
    }

    if (smelting.length > 0) {
      detail.append(this.makeCatalogSectionTitle("제련법"));
      for (const view of smelting) {
        detail.append(this.makeSmeltingPreview(view));
      }
    }

    if (sources.length > 0) {
      detail.append(this.makeCatalogSectionTitle("획득처"));
      const sourceRow = document.createElement("div");
      sourceRow.className = "source-list";
      for (const source of sources) {
        sourceRow.append(this.makeCatalogChip(source));
      }
      detail.append(sourceRow);
    }

    const relatedQuests = questItemUsage(item.id);
    const progressionTip = this.progressionTip(item.id);
    if (relatedQuests.length > 0) {
      detail.append(this.makeCatalogSectionTitle("관련 퀘스트"));
      const questList = document.createElement("div");
      questList.className = "catalog-quest-list";
      for (const quest of relatedQuests.slice(0, 4)) {
        const chip = this.makeCatalogChip(`${quest.future ? "예고" : this.categoryLabel(quest)} · ${quest.titleKo}`);
        questList.append(chip);
      }
      detail.append(questList);

      const nextUse = document.createElement("div");
      nextUse.className = "catalog-next-use";
      nextUse.textContent = relatedQuests[0].future
        ? "다음 사용처: 이후 엔딩 루프 콘텐츠에서 이어집니다."
        : `다음 사용처: ${relatedQuests[0].descriptionKo}`;
      detail.append(nextUse);
    }

    if (progressionTip) {
      detail.append(this.makeCatalogSectionTitle("추천 행동"));
      const tip = document.createElement("div");
      tip.className = "catalog-next-use";
      tip.textContent = progressionTip;
      detail.append(tip);
    }

    if (recipes.length === 0 && smelting.length === 0 && sources.length === 0 && relatedQuests.length === 0 && !progressionTip) {
      const noRecipe = document.createElement("div");
      noRecipe.className = "catalog-empty";
      noRecipe.textContent = "아직 제작법은 없지만, 월드 탐험이나 다음 시스템에서 쓰일 수 있는 구현된 아이템입니다.";
      detail.append(noRecipe);
    }

    return detail;
  }

  private makeRecipePreview(view: RecipeView, gridSize: 2 | 3): HTMLElement {
    const recipe = view.recipe;
    const card = document.createElement("div");
    card.className = "catalog-recipe-card";

    const mini = document.createElement("div");
    mini.className = `recipe-mini-grid cells-${recipe.size}`;
    const layout = this.recipePreviewLayout(recipe);
    for (let index = 0; index < recipe.size * recipe.size; index += 1) {
      const cell = document.createElement("span");
      cell.className = "recipe-mini-cell";
      const item = layout[index];
      if (item) {
        cell.append(this.makeItemIcon({ item, count: 1 }));
      }
      mini.append(cell);
    }

    const arrow = document.createElement("span");
    arrow.className = "recipe-mini-arrow";
    arrow.textContent = ">";

    const result = document.createElement("span");
    result.className = "recipe-mini-result";
    result.append(this.makeItemIcon(recipe.result), this.makeCount(recipe.result.count));

    const action = document.createElement("button");
    action.className = "recipe-fill-button";
    action.type = "button";
    action.textContent = view.craftable && recipe.size <= gridSize ? "배치" : "부족";
    action.disabled = !view.craftable || recipe.size > gridSize;
    action.addEventListener("click", () => this.callbacks.onCraftRecipe(recipe.id, false, gridSize));

    card.append(mini, arrow, result, action);
    return card;
  }

  private makeSmeltingPreview(view: { recipe: SmeltingRecipe; smeltable: boolean }): HTMLElement {
    const recipe = view.recipe;
    const card = document.createElement("div");
    card.className = "catalog-recipe-card smelting-preview";
    const input = document.createElement("span");
    input.className = "recipe-mini-result";
    input.append(this.makeItemIcon({ item: recipe.input, count: 1 }));
    const fuel = document.createElement("span");
    fuel.className = "recipe-mini-result";
    fuel.append(this.makeItemIcon({ item: recipe.fuel, count: 1 }));
    const arrow = document.createElement("span");
    arrow.className = "recipe-mini-arrow";
    arrow.textContent = ">";
    const result = document.createElement("span");
    result.className = "recipe-mini-result";
    result.append(this.makeItemIcon(recipe.result), this.makeCount(recipe.result.count));
    const action = document.createElement("button");
    action.className = "recipe-fill-button";
    action.type = "button";
    action.textContent = view.smeltable ? "제련" : "부족";
    action.disabled = !view.smeltable;
    action.addEventListener("click", () => this.callbacks.onSmeltRecipe(recipe.id, false));
    card.append(input, fuel, arrow, result, action);
    return card;
  }

  private toolChip(tier: ToolTier, kind: ToolKind): string {
    const tiers: Record<ToolTier, string> = {
      hand: "손",
      wood: "나무",
      stone: "돌",
      copper: "구리",
      iron: "철",
      gold: "금",
      diamond: "다이아"
    };
    const kinds: Record<ToolKind, string> = {
      none: "도구 없음",
      pickaxe: "곡괭이",
      axe: "도끼",
      shovel: "삽",
      sword: "검",
      bow: "활",
      shield: "방패",
      shears: "가위"
    };
    return `${tiers[tier]} ${kinds[kind]}`;
  }

  private makeCatalogSectionTitle(text: string): HTMLElement {
    const title = document.createElement("div");
    title.className = "catalog-section-title";
    title.textContent = text;
    return title;
  }

  private makeCatalogChip(text: string): HTMLElement {
    const chip = document.createElement("span");
    chip.className = "catalog-chip";
    chip.textContent = text;
    return chip;
  }

  private recipePreviewLayout(recipe: Recipe): Array<ItemId | null> {
    const size = recipe.size;
    const layout: Array<ItemId | null> = Array.from({ length: size * size }, () => null);
    if (recipe.type === "shapeless") {
      let cursor = 0;
      for (const [item, count] of Object.entries(recipe.ingredients ?? {})) {
        for (let index = 0; index < count; index += 1) {
          if (cursor < layout.length) {
            layout[cursor] = item as ItemId;
            cursor += 1;
          }
        }
      }
      return layout;
    }

    for (let y = 0; y < (recipe.pattern?.length ?? 0); y += 1) {
      const row = recipe.pattern?.[y] ?? "";
      for (let x = 0; x < Math.min(row.length, size); x += 1) {
        const item = recipe.key?.[row[x]];
        if (item) {
          layout[y * size + x] = item;
        }
      }
    }

    return layout;
  }

  private dropSources(item: ItemId): string[] {
    const blockSources = Object.values(BLOCKS)
      .filter((block) => block.drops === item)
      .map((block) => block.displayName);
    const mobSources: Partial<Record<ItemId, string[]>> = {
      rotten_flesh: ["좀비"],
      bone: ["스켈레톤"],
      arrow: ["스켈레톤", "제작"],
      string: ["거미"],
      spider_eye: ["거미"],
      gunpowder: ["크리퍼"],
      raw_beef: ["소"],
      leather: ["소"],
      raw_porkchop: ["돼지"],
      raw_mutton: ["양"],
      wool: ["양"],
      raw_chicken: ["닭"],
      feather: ["닭"],
      egg: ["닭"],
      flint: ["자갈"],
      bucket: ["제작", "상자 보급"],
      water_bucket: ["양동이로 물 담기"],
      lava_bucket: ["양동이로 용암 담기"],
      flint_and_steel: ["제작"],
      blaze_rod: ["블레이즈"],
      blaze_powder: ["블레이즈 막대 제작", "지옥 요새 상자"],
      ender_pearl: ["엔더맨", "지옥 요새 상자", "요새 상자"],
      eye_of_ender: ["제작", "요새 상자"],
      paper: ["제작", "요새 상자"],
      book: ["책장", "제작", "요새 상자"],
      end_portal_frame: ["요새 포털 방"],
      stone_bricks: ["제작", "요새"],
      cracked_stone_bricks: ["요새"],
      mossy_stone_bricks: ["제작", "요새"],
      bookshelf: ["제작", "요새 도서관"],
      iron_bars: ["제작", "요새 포털 방"],
      end_stone: ["엔드 중앙 섬"],
      end_stone_bricks: ["제작", "엔드 스폰 다리", "귀환 포털 주변"],
      end_crystal: ["엔드 흑요석 기둥"],
      dragon_egg: ["엔더 드래곤 처치 보상"],
      gold_nugget: ["네더 금 광석", "지옥 요새 상자"],
      nether_quartz: ["네더 석영 광석"]
    };
    return [...blockSources, ...(mobSources[item] ?? [])];
  }

  private progressionTip(item: ItemId): string | null {
    const tips: Partial<Record<ItemId, string>> = {
      log: "첫 진행은 원목을 판자로 바꾸고, 제작대와 나무 곡괭이를 만드는 것입니다.",
      stone: "돌 곡괭이와 화로의 기본 재료입니다. 철을 캐기 전 반드시 충분히 챙겨 두세요.",
      coal: "횃불과 제련 연료입니다. 동굴 탐험 전에 횃불 16개 이상을 목표로 하세요.",
      iron_ingot: "양동이, 방패, 철 곡괭이로 이어집니다. 다이아/포털 준비의 중심 재료입니다.",
      diamond: "다이아 곡괭이를 만들면 흑요석을 캐서 지옥문과 엔딩 루프를 열 수 있습니다.",
      obsidian: "4x5 이상 프레임을 만들고 부싯돌과 부시로 점화하면 지옥문이 열립니다.",
      blaze_rod: "블레이즈 가루로 바꿔 엔더의 눈 제작에 사용하세요.",
      blaze_powder: "엔더 진주와 조합하면 엔더의 눈이 됩니다. 요새 추적의 핵심입니다.",
      ender_pearl: "블레이즈 가루와 합쳐 엔더의 눈을 만들거나, 이동 보조용으로 사용할 수 있습니다.",
      eye_of_ender: "우클릭으로 던지면 요새 방향을 알려줍니다. 요새 포털 방에서 프레임에 꽂으세요.",
      end_portal_frame: "12개 프레임에 눈이 모두 들어가면 엔드 포털이 열립니다.",
      end_crystal: "드래곤을 회복시킵니다. 활로 먼저 깨면 보스전이 훨씬 쉬워집니다.",
      dragon_egg: "엔딩 루프 완료 보상입니다. 이후 업데이트에서는 전리품/장식 진행으로 확장할 수 있습니다.",
      bow: "엔드 수정과 스켈레톤 견제에 필수입니다. 드래곤전 전에 화살을 충분히 준비하세요.",
      arrow: "엔드 수정과 드래곤에게 쓰는 원거리 자원입니다. 드래곤전 전 32개 이상을 권장합니다.",
      shield: "스켈레톤과 크리퍼 대응용입니다. 요새/엔드 준비 전에 하나 들고 가면 안정적입니다.",
      bread: "초반 회복용 식량입니다. 동굴과 지옥 탐험 전 10개 이상을 챙기면 좋습니다."
    };
    return tips[item] ?? null;
  }

  private renderHotbar(): void {
    if (!this.stats) {
      return;
    }

    this.hotbar.innerHTML = "";
    const inventory = this.stats.inventory;
    for (let index = 0; index < 9; index += 1) {
      const slot = document.createElement("div");
      slot.className = `slot ${index === inventory.selectedHotbarSlot ? "selected" : ""}`;

      const label = document.createElement("span");
      label.className = "slot-index";
      label.textContent = String(index + 1);
      slot.append(label);

      const stack = inventory.slots[HOTBAR_START + index];
      if (stack) {
        slot.append(this.makeItemIcon(stack), this.makeCount(stack.count));
      }

      this.hotbar.append(slot);
    }
  }

  private makeSlot(index: number): HTMLButtonElement {
    const stats = this.stats;
    const button = document.createElement("button");
    button.className = "inventory-slot";
    button.type = "button";
    button.dataset.slot = String(index);
    button.dataset.slotRef = `inventory:${index}`;
    button.draggable = Boolean(stats?.inventory.slots[index]);
    button.addEventListener("click", (event) => {
      const hotbar = this.numberFromEvent(event as MouseEvent);
      if (hotbar !== null) {
        this.callbacks.onHotbarKeySwap(index, hotbar);
        return;
      }
      this.callbacks.onInventorySlot(index, 0, (event as MouseEvent).shiftKey);
    });
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.callbacks.onInventorySlot(index, 2, event.shiftKey);
    });
    button.addEventListener("dragstart", (event) => {
      const stack = this.stats?.inventory.slots[index] ?? null;
      if (!stack || !event.dataTransfer) {
        event.preventDefault();
        return;
      }

      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", `inventory:${index}`);
      button.classList.add("dragging");
    });
    button.addEventListener("dragend", () => {
      button.classList.remove("dragging");
    });
    button.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
      }
    });
    button.addEventListener("drop", (event) => {
      event.preventDefault();
      const from = event.dataTransfer?.getData("text/plain");
      if (from) {
        this.callbacks.onSlotDrop(from, `inventory:${index}`);
      }
    });

    const stack = stats?.inventory.slots[index] ?? null;
    if (stack) {
      const name = this.stackTooltip(stack);
      button.title = name;
      button.setAttribute("aria-label", name);
      button.append(this.makeItemIcon(stack), this.makeCount(stack.count));
    }

    return button;
  }

  private makeCraftSlot(index: number): HTMLButtonElement {
    const stats = this.stats;
    const button = document.createElement("button");
    button.className = "craft-slot";
    button.type = "button";
    button.dataset.craftSlot = String(index);
    button.dataset.slotRef = `craft:${index}`;
    const stack = stats?.craftingGrid[index] ?? null;
    button.draggable = Boolean(stack);
    button.addEventListener("click", (event) => {
      this.callbacks.onCraftSlot(index, 0, (event as MouseEvent).shiftKey);
    });
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.callbacks.onCraftSlot(index, 2, event.shiftKey);
    });
    button.addEventListener("dragstart", (event) => {
      if (!stack || !event.dataTransfer) {
        event.preventDefault();
        return;
      }

      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", `craft:${index}`);
      button.classList.add("dragging");
    });
    button.addEventListener("dragend", () => {
      button.classList.remove("dragging");
    });
    button.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
      }
    });
    button.addEventListener("drop", (event) => {
      event.preventDefault();
      const from = event.dataTransfer?.getData("text/plain");
      if (from) {
        this.callbacks.onSlotDrop(from, `craft:${index}`);
      }
    });

    if (stack) {
      const name = this.stackTooltip(stack);
      button.title = name;
      button.setAttribute("aria-label", name);
      button.append(this.makeItemIcon(stack), this.makeCount(stack.count));
    }

    return button;
  }

  private makeEquipmentSlot(slot: EquipmentSlot, label: string): HTMLButtonElement {
    const stack = this.stats?.inventory.armorSlots[slot] ?? null;
    const button = this.makeEquipmentButton(`equip:${slot}`, label, stack);
    button.addEventListener("click", () => this.callbacks.onEquipmentSlot(slot, 0));
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.callbacks.onEquipmentSlot(slot, 2);
    });
    return button;
  }

  private makeOffhandSlot(): HTMLButtonElement {
    const stack = this.stats?.inventory.offhand ?? null;
    const button = this.makeEquipmentButton("offhand", "보조", stack);
    button.classList.add("offhand-slot");
    button.addEventListener("click", () => this.callbacks.onOffhandSlot(0));
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.callbacks.onOffhandSlot(2);
    });
    return button;
  }

  private makeEquipmentButton(ref: string, label: string, stack: ItemStack | null): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = "equipment-slot";
    button.type = "button";
    button.dataset.slotRef = ref;
    button.dataset.emptyLabel = label;
    button.draggable = Boolean(stack);
    button.setAttribute("aria-label", stack ? ITEM_DEFINITIONS[stack.item].name : label);
    button.title = stack ? this.stackTooltip(stack) : label;
    button.addEventListener("dragstart", (event) => {
      if (!stack || !event.dataTransfer) {
        event.preventDefault();
        return;
      }
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", ref);
      button.classList.add("dragging");
    });
    button.addEventListener("dragend", () => {
      button.classList.remove("dragging");
    });
    button.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
      }
    });
    button.addEventListener("drop", (event) => {
      event.preventDefault();
      const from = event.dataTransfer?.getData("text/plain");
      if (from) {
        this.callbacks.onSlotDrop(from, ref);
      }
    });

    if (stack) {
      button.append(this.makeItemIcon(stack), this.makeCount(stack.count));
    } else {
      const empty = document.createElement("span");
      empty.className = "equipment-empty-label";
      empty.textContent = label;
      button.append(empty);
    }

    return button;
  }

  private makeItemIcon(stack: ItemStack): HTMLSpanElement {
    const def = ITEM_DEFINITIONS[stack.item];
    const icon = document.createElement("span");
    icon.className = `item-icon pixel-art item-${stack.item}`;
    icon.style.setProperty("--item-color", def.color);
    icon.style.backgroundImage = `url("${itemIconDataUrl(stack.item)}")`;
    return icon;
  }

  private makeCount(count: number): HTMLSpanElement {
    const label = document.createElement("span");
    label.className = "item-count";
    label.textContent = count > 1 ? String(count) : "";
    return label;
  }

  private stackTooltip(stack: ItemStack): string {
    const def = ITEM_DEFINITIONS[stack.item];
    const lines = [def.name, `수량 ${stack.count}/${def.maxStack}`];
    if (stack.durability !== undefined) {
      lines.push(`내구도 ${stack.durability}`);
    }
    if (def.combat) {
      lines.push(`공격력 ${def.combat.damage} · 재사용 ${def.combat.cooldown.toFixed(1)}초`);
    }
    if (def.armor) {
      lines.push(`방어 ${def.armor.points} · 강인함 ${def.armor.toughness}`);
    }
    if (def.food) {
      lines.push(`허기 +${def.food.hunger} · 포만감 +${def.food.saturation}`);
    }
    if (def.placeBlock) {
      lines.push("우클릭으로 설치");
    }
    return lines.join("\n");
  }

  private stackFromSlotElement(slot: HTMLButtonElement | null): ItemStack | null {
    if (!slot || !this.stats) {
      return null;
    }

    const ref = slot.dataset.slotRef;
    if (ref?.startsWith("inventory:")) {
      return this.stats.inventory.slots[Number(ref.replace("inventory:", ""))] ?? null;
    }

    if (ref?.startsWith("craft:")) {
      return this.stats.craftingGrid[Number(ref.replace("craft:", ""))] ?? null;
    }

    if (ref?.startsWith("equip:")) {
      return this.stats.inventory.armorSlots[ref.replace("equip:", "") as EquipmentSlot] ?? null;
    }

    if (ref === "offhand") {
      return this.stats.inventory.offhand;
    }

    if (ref === "result") {
      return this.stats.craftingResult;
    }

    return null;
  }

  private renderIconRow(parent: HTMLDivElement, kind: string, value: number): void {
    parent.innerHTML = "";
    for (let index = 0; index < 10; index += 1) {
      const icon = document.createElement("span");
      const points = value - index * 2;
      icon.className = `${kind}-icon ${points >= 2 ? "full" : points >= 1 ? "half" : "empty"}`;
      parent.append(icon);
    }
  }

  private armorPoints(): number {
    if (!this.stats) {
      return 0;
    }

    return Object.values(this.stats.inventory.armorSlots).reduce(
      (sum, stack) => sum + (stack ? ITEM_DEFINITIONS[stack.item].armor?.points ?? 0 : 0),
      0
    );
  }

  private makeMenuPanel(titleText: string, copy: string, actions: HTMLElement[], giant = false): HTMLDivElement {
    const panel = document.createElement("div");
    panel.className = `menu-panel ${giant ? "giant" : ""}`;

    const title = document.createElement("h1");
    title.className = "menu-title";
    title.textContent = titleText;

    const subtitle = document.createElement("p");
    subtitle.className = "menu-copy";
    subtitle.textContent = copy;

    const actionWrap = document.createElement("div");
    actionWrap.className = "menu-actions";
    actionWrap.append(...actions);
    panel.append(title, subtitle, actionWrap);
    return panel;
  }

  private makeMenuButton(label: string, onClick: () => void, variant = ""): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = `menu-button ${variant}`;
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  private makeSliderSetting(
    labelText: string,
    valueText: string,
    min: number,
    max: number,
    step: number,
    value: number,
    onChange: (value: number) => void
  ): HTMLElement {
    const row = document.createElement("label");
    row.className = "setting-row";
    const text = document.createElement("span");
    text.textContent = labelText;
    const valueLabel = document.createElement("strong");
    valueLabel.textContent = valueText;
    const input = document.createElement("input");
    input.type = "range";
    input.min = String(min);
    input.max = String(max);
    input.step = String(step);
    input.value = String(value);
    input.addEventListener("input", () => {
      const next = Number(input.value);
      valueLabel.textContent = this.formatSettingValue(labelText, next);
      onChange(next);
    });
    row.append(text, valueLabel, input);
    return row;
  }

  private makeSelectSetting(
    labelText: string,
    value: GraphicsQuality,
    options: Array<[GraphicsQuality, string]>,
    onChange: (value: GraphicsQuality) => void
  ): HTMLElement {
    const row = document.createElement("label");
    row.className = "setting-row";
    const text = document.createElement("span");
    text.textContent = labelText;
    const valueLabel = document.createElement("strong");
    valueLabel.textContent = options.find(([option]) => option === value)?.[1] ?? value;
    const select = document.createElement("select");
    select.className = "pixel-select";
    for (const [optionValue, optionLabel] of options) {
      const option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionLabel;
      option.selected = optionValue === value;
      select.append(option);
    }
    select.addEventListener("change", () => {
      valueLabel.textContent = options.find(([option]) => option === select.value)?.[1] ?? select.value;
      onChange(select.value as GraphicsQuality);
    });
    row.append(text, valueLabel, select);
    return row;
  }

  private makeToggleSetting(labelText: string, value: boolean, onChange: (value: boolean) => void): HTMLElement {
    const row = document.createElement("label");
    row.className = "setting-row toggle";
    const text = document.createElement("span");
    text.textContent = labelText;
    const valueLabel = document.createElement("strong");
    valueLabel.textContent = value ? "켜짐" : "꺼짐";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = value;
    input.addEventListener("change", () => {
      valueLabel.textContent = input.checked ? "켜짐" : "꺼짐";
      onChange(input.checked);
    });
    row.append(text, valueLabel, input);
    return row;
  }

  private formatSettingValue(labelText: string, value: number): string {
    if (labelText.includes("감도") || labelText.includes("볼륨")) {
      return `${Math.round(value * 100)}%`;
    }
    if (labelText.includes("시야각")) {
      return `${Math.round(value)}°`;
    }
    if (labelText.includes("렌더")) {
      return `${Math.round(value)} 청크`;
    }
    return String(value);
  }

  private makeMetric(labelText: string, valueText: string): HTMLDivElement {
    const row = document.createElement("div");
    row.className = "meter-row";
    const label = document.createElement("span");
    label.textContent = labelText;
    const value = document.createElement("span");
    value.textContent = valueText;
    row.append(label, value);
    return row;
  }

  private makePanelSignature(stats: HudStats): string {
    const slots = stats.inventory.slots
      .map((slot) => (slot ? `${slot.item}:${slot.count}:${slot.durability ?? ""}` : "-"))
      .join("|");
    const armor = (["head", "chest", "legs", "feet"] as EquipmentSlot[])
      .map((slot) => {
        const stack = stats.inventory.armorSlots[slot];
        return stack ? `${slot}:${stack.item}:${stack.count}:${stack.durability ?? ""}` : `${slot}:-`;
      })
      .join("|");
    const offhand = stats.inventory.offhand
      ? `${stats.inventory.offhand.item}:${stats.inventory.offhand.count}:${stats.inventory.offhand.durability ?? ""}`
      : "-";
    const cursor = stats.inventory.cursor
      ? `${stats.inventory.cursor.item}:${stats.inventory.cursor.count}:${stats.inventory.cursor.durability ?? ""}`
      : "-";
    const recipes = stats.recipes
      .map((entry) => `${entry.recipe.id}:${entry.craftable ? 1 : 0}:${entry.unlocked ? 1 : 0}`)
      .join("|");
    const crafting = stats.craftingGrid
      .map((slot) => (slot ? `${slot.item}:${slot.count}:${slot.durability ?? ""}` : "-"))
      .join("|");
    const result = stats.craftingResult
      ? `${stats.craftingResult.item}:${stats.craftingResult.count}:${stats.craftingResult.durability ?? ""}`
      : "-";
    const smelting = stats.smeltingRecipes
      .map((entry) => `${entry.recipe.id}:${entry.smeltable ? 1 : 0}`)
      .join("|");
    const boss = stats.boss ? `${stats.boss.health}:${stats.boss.crystals}:${stats.boss.phaseKo}` : "-";
    const settings = `${stats.settings.mouseSensitivity}:${stats.settings.fov}:${stats.settings.renderDistance}:${stats.settings.graphicsQuality}:${stats.settings.showQuestTracker}:${stats.settings.showDebug}:${stats.settings.soundVolume}`;
    const quests = `${stats.dimension}|${stats.questState.activeMainQuestId ?? "-"}|${stats.questState.trackedSideQuestIds.join(",")}|${stats.questState.completed.join(",")}|${Object.entries(stats.questState.progress)
      .map(([key, value]) => `${key}:${value}`)
      .join(",")}`;
    return `${this.mode}|${stats.allowCheats ? 1 : 0}|${stats.gameMode}|${slots}|${armor}|${offhand}|${cursor}|${crafting}|${result}|${recipes}|${smelting}|${boss}|${settings}|${quests}`;
  }

  private numberFromEvent(event: MouseEvent): number | null {
    const anyEvent = event as MouseEvent & { code?: string };
    const code = anyEvent.code;
    if (!code?.startsWith("Digit")) {
      return null;
    }
    const number = Number(code.replace("Digit", ""));
    return number >= 1 && number <= 9 ? number - 1 : null;
  }
}
