import { BLOCKS, BlockType } from "../game/blocks";
import { HOTBAR_START, InventoryState } from "../game/inventory";
import { ITEM_DEFINITIONS, ItemStack } from "../game/items";
import { Recipe } from "../game/recipes";
import { SurvivalState } from "../game/survival";

export type HudMode =
  | "title"
  | "worldSelect"
  | "createWorld"
  | "loading"
  | "playing"
  | "paused"
  | "inventory"
  | "craftingTable"
  | "gameOver";

export interface WorldSummary {
  id: string;
  name: string;
  seed: string;
  updatedAt: number;
}

export interface RecipeView {
  recipe: Recipe;
  craftable: boolean;
  unlocked: boolean;
}

export interface HudCallbacks {
  onSingleplayer: () => void;
  onCreateWorldMenu: () => void;
  onCreateWorld: (name: string, seed: string) => void;
  onSelectWorld: (id: string) => void;
  onDeleteWorld: (id: string) => void;
  onBackToTitle: () => void;
  onResume: () => void;
  onQuitToTitle: () => void;
  onRespawn: () => void;
  onInventorySlot: (index: number, button: 0 | 2, shift: boolean) => void;
  onHotbarKeySwap: (index: number, hotbarSlot: number) => void;
  onCraftRecipe: (recipeId: string, craftAll: boolean, gridSize: 2 | 3) => void;
  onResetAll: () => void;
}

export interface HudStats {
  position: string;
  chunks: number;
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
  private readonly hungerRow: HTMLDivElement;
  private readonly airRow: HTMLDivElement;
  private readonly hotbar: HTMLDivElement;
  private readonly toast: HTMLDivElement;

  private mode: HudMode = "title";
  private worlds: WorldSummary[] = [];
  private stats: HudStats | null = null;
  private toastTimer = 0;

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
    title.textContent = "Voxel Frontier";

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
    this.heartRow = document.createElement("div");
    this.heartRow.className = "icon-row hearts";
    this.hungerRow = document.createElement("div");
    this.hungerRow.className = "icon-row hunger";
    this.airRow = document.createElement("div");
    this.airRow.className = "icon-row air";
    statusBars.append(this.heartRow, this.hungerRow, this.airRow);

    this.hotbar = document.createElement("div");
    this.hotbar.className = "hotbar survival-hotbar";

    this.toast = document.createElement("div");
    this.toast.className = "toast";

    this.hudLayer.append(topBar, this.reticle, mining, this.itemName, statusBars, this.hotbar, this.toast);

    this.menuLayer = document.createElement("div");
    this.menuLayer.className = "menu-layer";

    this.panelLayer = document.createElement("div");
    this.panelLayer.className = "panel-layer";

    this.element.append(this.hudLayer, this.menuLayer, this.panelLayer);
    parent.append(this.element);
    this.render();
  }

  setMode(mode: HudMode): void {
    this.mode = mode;
    this.render();
  }

  setWorlds(worlds: WorldSummary[]): void {
    this.worlds = worlds;
    this.render();
  }

  update(stats: HudStats): void {
    this.stats = stats;
    this.renderHud();

    if (this.mode === "inventory" || this.mode === "craftingTable") {
      this.renderPanel();
    }
  }

  showToast(message: string): void {
    window.clearTimeout(this.toastTimer);
    this.toast.textContent = message;
    this.toast.classList.add("visible");
    this.toastTimer = window.setTimeout(() => {
      this.toast.classList.remove("visible");
    }, 1800);
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
    this.debugChip.innerHTML = "";
    this.debugChip.append(
      this.makeMetric("World", this.stats.activeWorldName),
      this.makeMetric("FPS", String(this.stats.fps)),
      this.makeMetric("Chunks", String(this.stats.chunks)),
      this.makeMetric("Save", this.stats.saveState)
    );

    this.itemName.textContent = selected ? ITEM_DEFINITIONS[selected.item].name : "";
    this.miningFill.style.width = `${Math.round(this.stats.miningProgress * 100)}%`;
    this.renderIconRow(this.heartRow, "heart", this.stats.survival.health);
    this.renderIconRow(this.hungerRow, "hunger", this.stats.survival.hunger);
    this.renderIconRow(this.airRow, "air", this.stats.survival.air);
    this.renderHotbar();
  }

  private renderMenu(): void {
    this.menuLayer.innerHTML = "";

    if (this.mode === "playing" || this.mode === "inventory" || this.mode === "craftingTable") {
      this.menuLayer.hidden = true;
      return;
    }

    this.menuLayer.hidden = false;

    if (this.mode === "title") {
      this.menuLayer.append(this.makeTitleMenu());
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
      this.menuLayer.append(this.makeMenuPanel("Loading terrain", "Building chunks and warming the sky.", []));
    }
  }

  private renderPanel(): void {
    this.panelLayer.innerHTML = "";

    if (!this.stats || (this.mode !== "inventory" && this.mode !== "craftingTable")) {
      this.panelLayer.hidden = true;
      return;
    }

    this.panelLayer.hidden = false;
    this.panelLayer.append(this.makeInventoryPanel(this.mode === "craftingTable" ? 3 : 2));
  }

  private makeTitleMenu(): HTMLElement {
    const actions = [
      this.makeMenuButton("Singleplayer", this.callbacks.onSingleplayer),
      this.makeMenuButton("Create New World", this.callbacks.onCreateWorldMenu),
      this.makeMenuButton("Options", () => this.showToast("Options are folded into this survival build.")),
      this.makeMenuButton("Quit to Title", () => this.showToast("Singleplayer build is already local."))
    ];
    return this.makeMenuPanel("Voxel Frontier", "Java survival style, handmade for this world.", actions, true);
  }

  private makeWorldSelect(): HTMLElement {
    const panel = this.makeMenuPanel("Select World", "Choose a local singleplayer save.", [], false);
    const list = document.createElement("div");
    list.className = "world-list";

    if (this.worlds.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-worlds";
      empty.textContent = "No worlds yet.";
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
      meta.textContent = `${world.seed} | ${new Date(world.updatedAt).toLocaleString()}`;
      main.append(title, meta);

      const del = document.createElement("button");
      del.className = "menu-button danger mini";
      del.type = "button";
      del.textContent = "Delete";
      del.addEventListener("click", () => this.callbacks.onDeleteWorld(world.id));

      row.append(main, del);
      list.append(row);
    }

    const actions = document.createElement("div");
    actions.className = "menu-actions";
    actions.append(
      this.makeMenuButton("Create New World", this.callbacks.onCreateWorldMenu),
      this.makeMenuButton("Back", this.callbacks.onBackToTitle)
    );
    panel.append(list, actions);
    return panel;
  }

  private makeCreateWorld(): HTMLElement {
    const panel = this.makeMenuPanel("Create New World", "Survival | Normal | Local save", [], false);
    const form = document.createElement("form");
    form.className = "create-form";

    const name = document.createElement("input");
    name.className = "pixel-input";
    name.name = "worldName";
    name.maxLength = 28;
    name.placeholder = "World Name";
    name.value = `New World ${this.worlds.length + 1}`;

    const seed = document.createElement("input");
    seed.className = "pixel-input";
    seed.name = "seed";
    seed.maxLength = 36;
    seed.placeholder = "Seed";
    seed.value = `frontier-${Math.floor(Date.now() / 1000).toString(36)}`;

    const actions = document.createElement("div");
    actions.className = "menu-actions";
    const create = this.makeMenuButton("Create", () => undefined);
    create.type = "submit";
    actions.append(create, this.makeMenuButton("Cancel", this.callbacks.onBackToTitle));
    form.append(name, seed, actions);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.callbacks.onCreateWorld(name.value.trim() || "New World", seed.value.trim() || "frontier-aurora");
    });
    panel.append(form);
    return panel;
  }

  private makePauseMenu(): HTMLElement {
    return this.makeMenuPanel("Game Menu", "World paused.", [
      this.makeMenuButton("Back to Game", this.callbacks.onResume),
      this.makeMenuButton("Save and Quit to Title", this.callbacks.onQuitToTitle),
      this.makeMenuButton("Reset All Local Worlds", this.callbacks.onResetAll, "danger")
    ]);
  }

  private makeGameOver(): HTMLElement {
    return this.makeMenuPanel("You Died", "Respawn at your world spawn point.", [
      this.makeMenuButton("Respawn", this.callbacks.onRespawn),
      this.makeMenuButton("Title Screen", this.callbacks.onQuitToTitle)
    ], true);
  }

  private makeInventoryPanel(gridSize: 2 | 3): HTMLElement {
    const stats = this.stats;
    if (!stats) {
      return document.createElement("div");
    }

    const panel = document.createElement("div");
    panel.className = `inventory-panel grid-${gridSize}`;

    const title = document.createElement("div");
    title.className = "inventory-title";
    title.textContent = gridSize === 3 ? "Crafting Table" : "Inventory";

    const recipeBook = document.createElement("div");
    recipeBook.className = "recipe-book";

    const recipeTitle = document.createElement("div");
    recipeTitle.className = "recipe-title";
    recipeTitle.textContent = "Recipe Book";
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

    const playerPaper = document.createElement("div");
    playerPaper.className = "player-paper";
    playerPaper.textContent = "VF";

    const craftGrid = document.createElement("div");
    craftGrid.className = `craft-grid cells-${gridSize}`;
    for (let index = 0; index < gridSize * gridSize; index += 1) {
      const cell = document.createElement("div");
      cell.className = "craft-cell ghost-cell";
      craftGrid.append(cell);
    }

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

    panel.append(title, recipeBook, playerPaper, craftGrid, storage, hotbar, cursor);
    return panel;
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

    const stack = stats?.inventory.slots[index] ?? null;
    if (stack) {
      button.append(this.makeItemIcon(stack), this.makeCount(stack.count));
    }

    return button;
  }

  private makeItemIcon(stack: ItemStack): HTMLSpanElement {
    const def = ITEM_DEFINITIONS[stack.item];
    const icon = document.createElement("span");
    icon.className = `item-icon item-${stack.item}`;
    icon.style.setProperty("--item-color", def.color);
    return icon;
  }

  private makeCount(count: number): HTMLSpanElement {
    const label = document.createElement("span");
    label.className = "item-count";
    label.textContent = count > 1 ? String(count) : "";
    return label;
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
