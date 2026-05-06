import { BLOCKS, BlockType } from "../game/blocks";
import { HOTBAR_START, InventoryState } from "../game/inventory";
import { ITEM_DEFINITIONS, ItemId, ItemStack } from "../game/items";
import { Recipe } from "../game/recipes";
import { SmeltingRecipe } from "../game/smelting";
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
  | "furnace"
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
  onCraftSlot: (index: number, button: 0 | 2, shift: boolean) => void;
  onCraftResult: (shift: boolean) => void;
  onSlotDrop: (fromRef: string, toRef: string) => void;
  onHotbarKeySwap: (index: number, hotbarSlot: number) => void;
  onCraftRecipe: (recipeId: string, craftAll: boolean, gridSize: 2 | 3) => void;
  onSmeltRecipe: (recipeId: string, smeltAll: boolean) => void;
  onRegenerateWorld: (id: string) => void;
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
  craftingGrid: Array<ItemStack | null>;
  craftingResult: ItemStack | null;
  smeltingRecipes: Array<{ recipe: SmeltingRecipe; smeltable: boolean }>;
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
  private panelSignature = "";
  private toastTimer = 0;
  private catalogQuery = "";
  private catalogPage = 0;
  private catalogSelectedItem: ItemId | null = null;

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

    if (this.mode === "playing" || this.mode === "inventory" || this.mode === "craftingTable" || this.mode === "furnace") {
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
      const regen = document.createElement("button");
      regen.className = "menu-button mini";
      regen.type = "button";
      regen.textContent = "Regenerate Caves Copy";
      regen.addEventListener("click", () => this.callbacks.onRegenerateWorld(world.id));
      row.append(regen);
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
    const tooltip = document.createElement("div");
    tooltip.className = "inventory-tooltip";
    tooltip.hidden = true;
    panel.addEventListener("mousemove", (event) => {
      panel.style.setProperty("--cursor-x", `${event.clientX}px`);
      panel.style.setProperty("--cursor-y", `${event.clientY}px`);

      const slot = (event.target as HTMLElement).closest<HTMLButtonElement>(
        ".inventory-slot, .craft-slot, .craft-result-slot"
      );
      const stack = this.stackFromSlotElement(slot);
      if (!stack) {
        tooltip.hidden = true;
        return;
      }

      tooltip.textContent = ITEM_DEFINITIONS[stack.item].name;
      tooltip.style.setProperty("--tooltip-x", `${event.clientX}px`);
      tooltip.style.setProperty("--tooltip-y", `${event.clientY}px`);
      tooltip.hidden = false;
    });
    panel.addEventListener("mouseleave", () => {
      tooltip.hidden = true;
    });

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

    const catalog = this.makeItemCatalog(gridSize);

    const playerPaper = document.createElement("div");
    playerPaper.className = "player-paper";
    playerPaper.textContent = "VF";

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
      result.title = ITEM_DEFINITIONS[stats.craftingResult.item].name;
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

    panel.append(title, recipeBook, playerPaper, craftingArea, storage, hotbar, catalog, cursor, tooltip);
    return panel;
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
      title.textContent = "Furnace";
    }

    const recipeBook = panel.querySelector(".recipe-book");
    if (recipeBook) {
      recipeBook.innerHTML = "";
      const recipeTitle = document.createElement("div");
      recipeTitle.className = "recipe-title";
      recipeTitle.textContent = "Smelting";
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
    title.textContent = "Item Browser";
    const count = document.createElement("span");
    count.textContent = `${filtered.length}/${allItems.length}`;
    header.append(title, count);

    const search = document.createElement("input");
    search.className = "catalog-search";
    search.placeholder = "Search items";
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
      empty.textContent = "Select an item to inspect recipes.";
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
      this.makeCatalogChip("Implemented"),
      this.makeCatalogChip(item.placeBlock ? "Block" : item.toolKind ? "Tool" : item.food ? "Food" : "Item")
    );
    if (item.toolKind) {
      meta.append(this.makeCatalogChip(`${item.toolTier ?? "hand"} ${item.toolKind}`));
    }

    const recipes = stats.recipes.filter((entry) => entry.recipe.result.item === item.id);
    const smelting = stats.smeltingRecipes.filter((entry) => entry.recipe.result.item === item.id);
    const sources = this.dropSources(item.id);

    detail.append(head, meta);

    if (recipes.length > 0) {
      detail.append(this.makeCatalogSectionTitle("Crafting"));
      for (const view of recipes) {
        detail.append(this.makeRecipePreview(view, gridSize));
      }
    }

    if (smelting.length > 0) {
      detail.append(this.makeCatalogSectionTitle("Smelting"));
      for (const view of smelting) {
        detail.append(this.makeSmeltingPreview(view));
      }
    }

    if (sources.length > 0) {
      detail.append(this.makeCatalogSectionTitle("Obtained From"));
      const sourceRow = document.createElement("div");
      sourceRow.className = "source-list";
      for (const source of sources) {
        sourceRow.append(this.makeCatalogChip(source));
      }
      detail.append(sourceRow);
    }

    if (recipes.length === 0 && smelting.length === 0 && sources.length === 0) {
      const noRecipe = document.createElement("div");
      noRecipe.className = "catalog-empty";
      noRecipe.textContent = "No recipe yet. This item exists in data but is found through play or future systems.";
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
    action.textContent = view.craftable && recipe.size <= gridSize ? "Fill" : "Missing";
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
    action.textContent = view.smeltable ? "Smelt" : "Missing";
    action.disabled = !view.smeltable;
    action.addEventListener("click", () => this.callbacks.onSmeltRecipe(recipe.id, false));
    card.append(input, fuel, arrow, result, action);
    return card;
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
    return Object.values(BLOCKS)
      .filter((block) => block.drops === item)
      .map((block) => block.displayName);
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
      const name = ITEM_DEFINITIONS[stack.item].name;
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
      const name = ITEM_DEFINITIONS[stack.item].name;
      button.title = name;
      button.setAttribute("aria-label", name);
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

  private makePanelSignature(stats: HudStats): string {
    const slots = stats.inventory.slots
      .map((slot) => (slot ? `${slot.item}:${slot.count}:${slot.durability ?? ""}` : "-"))
      .join("|");
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
    return `${this.mode}|${slots}|${cursor}|${crafting}|${result}|${recipes}|${smelting}`;
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
