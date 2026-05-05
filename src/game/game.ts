import * as THREE from "three";
import { BLOCKS, BlockType, isVisibleTarget } from "./blocks";
import {
  HOTBAR_START,
  InventoryState,
  addStack,
  clickSlot,
  createInventoryState,
  normalizeInventory,
  selectedStack,
  shiftClickSlot,
  swapWithHotbar
} from "./inventory";
import { InputController, MouseActions } from "./input";
import { blockFromItem, ITEM_DEFINITIONS, ItemId } from "./items";
import { clamp } from "./math";
import { Player } from "./player";
import { canCraft, craft, RECIPES, recipeIsUnlocked } from "./recipes";
import {
  SaveIndexV2,
  SaveSystem,
  SavedGameV1,
  WorldSaveV2
} from "./saveSystem";
import { createSurvivalState, SurvivalController, SurvivalState } from "./survival";
import { SkySystem } from "./sky";
import { createVoxelMaterials, VoxelMaterials } from "./textureAtlas";
import { World } from "./world";
import { Hud, HudMode, RecipeView, WorldSummary } from "../ui/hud";

interface VoxelHit {
  x: number;
  y: number;
  z: number;
  normal: THREE.Vector3;
  block: BlockType;
}

interface MiningState {
  key: string;
  progress: number;
  block: BlockType;
}

export class Game {
  private readonly root: HTMLElement;
  private readonly saveSystem = new SaveSystem();
  private readonly clock = new THREE.Clock();
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(74, 1, 0.05, 520);

  private shell!: HTMLDivElement;
  private renderer!: THREE.WebGLRenderer;
  private input!: InputController;
  private hud!: Hud;
  private materials!: VoxelMaterials;
  private world!: World;
  private player!: Player;
  private sky!: SkySystem;
  private sunLight!: THREE.DirectionalLight;
  private sunTarget!: THREE.Object3D;
  private hemisphereLight!: THREE.HemisphereLight;
  private highlight!: THREE.LineSegments;
  private selectedHit: VoxelHit | null = null;
  private animationFrame = 0;
  private elapsed = 0;
  private fps = 60;
  private saveRequested = false;
  private saveDue = 0;
  private saving = false;
  private saveState = "Ready";
  private mode: HudMode = "title";
  private saveIndex: SaveIndexV2 = { version: 2, activeWorldId: null, worlds: [] };
  private activeWorld: WorldSaveV2 | null = null;
  private inventory: InventoryState = createInventoryState();
  private survival!: SurvivalController;
  private unlockedRecipes = new Set<string>();
  private mining: MiningState | null = null;
  private selectedItemTimer = 0;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  async boot(): Promise<void> {
    this.shell = document.createElement("div");
    this.shell.className = "game-shell";
    this.root.replaceChildren(this.shell);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });
    this.renderer.domElement.className = "game-canvas";
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.shell.append(this.renderer.domElement);

    this.input = new InputController(this.renderer.domElement);
    this.input.onPointerLockChange = ({ locked }) => {
      if (!locked && this.mode === "playing") {
        this.setMode("paused");
      }
    };
    this.input.onSelectedSlotChange = (slot) => {
      this.inventory.selectedHotbarSlot = slot;
      this.selectedItemTimer = 1.4;
      this.queueSave();
    };

    this.hud = new Hud(this.shell, {
      onSingleplayer: () => this.showWorldSelect(),
      onCreateWorldMenu: () => this.setMode("createWorld"),
      onCreateWorld: (name, seed) => {
        void this.createWorld(name, seed);
      },
      onSelectWorld: (id) => {
        void this.loadWorldById(id);
      },
      onDeleteWorld: (id) => {
        void this.deleteWorld(id);
      },
      onBackToTitle: () => this.setMode("title"),
      onResume: () => this.resumeGame(),
      onQuitToTitle: () => {
        void this.quitToTitle();
      },
      onRespawn: () => this.respawn(),
      onInventorySlot: (index, button, shift) => this.handleInventoryClick(index, button, shift),
      onHotbarKeySwap: (index, hotbarSlot) => this.handleHotbarSwap(index, hotbarSlot),
      onCraftRecipe: (recipeId, craftAll, gridSize) => this.handleCraft(recipeId, craftAll, gridSize),
      onResetAll: () => {
        void this.resetAll();
      }
    });

    const maxAnisotropy = this.renderer.capabilities.getMaxAnisotropy();
    this.materials = createVoxelMaterials(maxAnisotropy);
    this.setupEnvironment();
    this.setupHighlight();

    this.saveIndex = await this.loadIndexWithMigration();
    this.hud.setWorlds(this.worldSummaries());

    const active = this.saveIndex.worlds.find((world) => world.id === this.saveIndex.activeWorldId);
    if (active) {
      this.loadWorld(active, false);
    } else {
      this.loadPreviewWorld();
    }

    this.resize();
    window.addEventListener("resize", this.resize);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
    this.setMode("title");
    this.animationFrame = window.requestAnimationFrame(this.frame);
  }

  private async loadIndexWithMigration(): Promise<SaveIndexV2> {
    const index = await this.saveSystem.loadIndex();

    if (index.worlds.length > 0) {
      return index;
    }

    const legacy = await this.saveSystem.loadLegacy();
    if (!legacy) {
      return index;
    }

    const migrated = this.convertLegacy(legacy);
    const next: SaveIndexV2 = {
      version: 2,
      activeWorldId: migrated.id,
      worlds: [migrated]
    };
    await this.saveSystem.saveIndex(next);
    return next;
  }

  private convertLegacy(legacy: SavedGameV1): WorldSaveV2 {
    const now = Date.now();
    const inventory = createInventoryState();
    const spawn = new THREE.Vector3().fromArray(legacy.player.position);
    return {
      version: 2,
      id: "legacy-world",
      name: "Migrated World",
      seed: legacy.seed,
      createdAt: now,
      updatedAt: now,
      modified: legacy.modified,
      player: legacy.player,
      inventory,
      survival: createSurvivalState(spawn),
      unlockedRecipes: []
    };
  }

  private loadPreviewWorld(): void {
    const seed = "frontier-aurora";
    this.replaceWorld(seed, []);
    const spawn = this.world.findSpawn();
    this.player = new Player(this.camera, spawn);
    this.player.yaw = this.world.findScenicYaw(spawn);
    this.player.pitch = -0.08;
    this.inventory = createInventoryState();
    this.survival = new SurvivalController(createSurvivalState(spawn));
    this.world.ensureChunksAround(this.player.position);
  }

  private loadWorld(save: WorldSaveV2, startPlaying: boolean): void {
    this.activeWorld = save;
    this.replaceWorld(save.seed, save.modified);
    this.player = new Player(this.camera, this.world.findSpawn());
    this.player.restore(save.player);
    this.inventory = normalizeInventory(save.inventory);
    this.input.selectedSlot = this.inventory.selectedHotbarSlot;
    this.survival = new SurvivalController({ ...save.survival });
    this.unlockedRecipes = new Set(save.unlockedRecipes);
    this.world.ensureChunksAround(this.player.position);
    this.saveState = "Ready";
    this.hud.setWorlds(this.worldSummaries());
    if (startPlaying) {
      this.resumeGame();
    }
  }

  private replaceWorld(seed: string, modified: WorldSaveV2["modified"]): void {
    if (this.world) {
      this.scene.remove(this.world.group);
    }

    this.world = new World(seed, this.materials);
    this.world.setModifiedBlocks(modified);
    this.scene.add(this.world.group);
  }

  private async createWorld(name: string, seed: string): Promise<void> {
    this.setMode("loading");
    const now = Date.now();
    const id = `world-${now.toString(36)}`;
    this.replaceWorld(seed, []);
    const spawn = this.world.findSpawn();
    const player = new Player(this.camera, spawn);
    player.yaw = this.world.findScenicYaw(spawn);
    player.pitch = -0.08;
    const survival = createSurvivalState(spawn);
    const save: WorldSaveV2 = {
      version: 2,
      id,
      name,
      seed,
      createdAt: now,
      updatedAt: now,
      modified: [],
      player: player.snapshot(0),
      inventory: createInventoryState(),
      survival,
      unlockedRecipes: []
    };
    await this.saveSystem.upsertWorld(save);
    this.saveIndex = await this.saveSystem.loadIndex();
    this.loadWorld(save, true);
    this.queueSave();
  }

  private async loadWorldById(id: string): Promise<void> {
    const world = this.saveIndex.worlds.find((entry) => entry.id === id);
    if (!world) {
      this.hud.showToast("World not found");
      return;
    }

    this.loadWorld(world, true);
  }

  private async deleteWorld(id: string): Promise<void> {
    this.saveIndex = await this.saveSystem.deleteWorld(id);
    this.hud.setWorlds(this.worldSummaries());
    if (this.activeWorld?.id === id) {
      this.activeWorld = null;
      this.loadPreviewWorld();
    }
    this.setMode("worldSelect");
  }

  private showWorldSelect(): void {
    this.hud.setWorlds(this.worldSummaries());
    this.setMode("worldSelect");
  }

  private resumeGame(): void {
    if (!this.activeWorld) {
      const first = this.saveIndex.worlds[0];
      if (first) {
        this.loadWorld(first, true);
        return;
      }
      void this.createWorld("New World", "frontier-aurora");
      return;
    }

    if (!this.survival.state.alive) {
      this.setMode("gameOver");
      return;
    }

    this.setMode("playing");
    this.input.requestPointerLock();
  }

  private async quitToTitle(): Promise<void> {
    await this.saveNow(true);
    if (document.pointerLockElement) {
      void document.exitPointerLock();
    }
    this.setMode("title");
  }

  private setMode(mode: HudMode): void {
    this.mode = mode;
    this.hud.setMode(mode);
  }

  private setupEnvironment(): void {
    this.scene.fog = new THREE.FogExp2(new THREE.Color("#bfd7df"), 0.011);
    this.sky = new SkySystem(this.scene);
    this.hemisphereLight = new THREE.HemisphereLight("#cce8ff", "#2b3b35", 0.62);
    this.scene.add(this.hemisphereLight);

    this.sunTarget = new THREE.Object3D();
    this.scene.add(this.sunTarget);

    this.sunLight = new THREE.DirectionalLight("#fff1bd", 2.3);
    this.sunLight.castShadow = true;
    this.sunLight.target = this.sunTarget;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 220;
    this.sunLight.shadow.camera.left = -92;
    this.sunLight.shadow.camera.right = 92;
    this.sunLight.shadow.camera.top = 92;
    this.sunLight.shadow.camera.bottom = -92;
    this.sunLight.shadow.normalBias = 0.025;
    this.scene.add(this.sunLight);
  }

  private setupHighlight(): void {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.012, 1.012, 1.012));
    const material = new THREE.LineBasicMaterial({
      color: "#fff0ad",
      transparent: true,
      opacity: 0.96,
      depthTest: false
    });
    this.highlight = new THREE.LineSegments(geometry, material);
    this.highlight.renderOrder = 10;
    this.highlight.visible = false;
    this.scene.add(this.highlight);
  }

  private readonly frame = (): void => {
    const delta = Math.min(this.clock.getDelta(), 0.05);
    this.elapsed += delta;
    this.fps = this.fps * 0.92 + (1 / Math.max(delta, 0.001)) * 0.08;
    this.selectedItemTimer = Math.max(0, this.selectedItemTimer - delta);

    this.handleKeyboard();

    if (this.mode === "playing" && this.survival.state.alive) {
      this.updatePlaying(delta);
    } else {
      this.selectedHit = this.raycastBlock();
      this.updateHighlight();
      this.input.consumeActions();
    }

    this.updateEnvironment();
    this.updateSave(delta);
    this.updateHud();
    this.renderer.render(this.scene, this.camera);
    this.animationFrame = window.requestAnimationFrame(this.frame);
  };

  private handleKeyboard(): void {
    if (this.input.consumePressed("Escape")) {
      if (this.mode === "playing") {
        this.setMode("paused");
        if (document.pointerLockElement) {
          void document.exitPointerLock();
        }
      } else if (this.mode === "inventory" || this.mode === "craftingTable") {
        this.resumeGame();
      } else if (this.mode === "paused") {
        this.resumeGame();
      } else if (this.mode === "worldSelect" || this.mode === "createWorld") {
        this.setMode("title");
      }
    }

    if (this.input.consumePressed("KeyE")) {
      if (this.mode === "playing") {
        this.setMode("inventory");
        if (document.pointerLockElement) {
          void document.exitPointerLock();
        }
      } else if (this.mode === "inventory") {
        this.resumeGame();
      }
    }
  }

  private updatePlaying(delta: number): void {
    const look = this.input.consumeLook();
    this.player.applyLook(look.movementX, look.movementY);

    const moving =
      this.input.isDown("KeyW") ||
      this.input.isDown("KeyA") ||
      this.input.isDown("KeyS") ||
      this.input.isDown("KeyD");
    const wantsSprint = this.input.isDown("ControlLeft") || this.input.isDown("ControlRight");
    const sneaking = this.input.isDown("ShiftLeft") || this.input.isDown("ShiftRight");

    this.player.update(delta, this.input, this.world, this.survival.canSprint(), sneaking);
    if (this.player.lastLandingSpeed > 13) {
      this.survival.damage(Math.ceil((this.player.lastLandingSpeed - 12) * 0.8));
    }

    this.world.ensureChunksAround(this.player.position);
    this.selectedHit = this.raycastBlock();
    this.updateHighlight();

    const actions = this.input.consumeActions();
    this.handleMining(delta, actions);
    this.handleUse(actions, sneaking);

    this.survival.update(delta, this.player.isInWater(this.world), moving, wantsSprint && this.survival.canSprint());

    if (!this.survival.state.alive) {
      if (document.pointerLockElement) {
        void document.exitPointerLock();
      }
      this.setMode("gameOver");
    }
  }

  private handleMining(delta: number, actions: MouseActions): void {
    if (!actions.primaryHeld || !this.selectedHit) {
      this.mining = null;
      return;
    }

    const hit = this.selectedHit;
    const key = `${hit.x},${hit.y},${hit.z}`;

    if (!this.mining || this.mining.key !== key) {
      this.mining = {
        key,
        progress: 0,
        block: hit.block
      };
    }

    const breakTime = this.breakTime(hit.block);
    this.mining.progress += delta / breakTime;

    if (this.mining.progress >= 1) {
      this.breakBlock(hit);
      this.mining = null;
    }
  }

  private handleUse(actions: MouseActions, sneaking: boolean): void {
    if (!actions.secondary) {
      return;
    }

    const held = selectedStack(this.inventory);
    const heldDef = held ? ITEM_DEFINITIONS[held.item] : null;

    if (this.selectedHit && BLOCKS[this.selectedHit.block].interactable === "crafting_table" && !sneaking) {
      if (document.pointerLockElement) {
        void document.exitPointerLock();
      }
      this.setMode("craftingTable");
      return;
    }

    if (held && heldDef?.food && this.survival.state.hunger < 20) {
      this.survival.eat(heldDef.food.hunger, heldDef.food.saturation);
      this.consumeSelected(1);
      this.queueSave();
      return;
    }

    if (!this.selectedHit || !held) {
      return;
    }

    const block = blockFromItem(held.item);
    if (block === null) {
      return;
    }

    const x = this.selectedHit.x + this.selectedHit.normal.x;
    const y = this.selectedHit.y + this.selectedHit.normal.y;
    const z = this.selectedHit.z + this.selectedHit.normal.z;
    const current = this.world.getBlock(x, y, z);
    const canReplace = current === BlockType.Air || current === BlockType.Water;

    if (canReplace && !this.player.intersectsBlock(x, y, z)) {
      const changed = this.world.setBlock(x, y, z, block);
      if (changed) {
        this.consumeSelected(1);
        this.queueSave();
      }
    }
  }

  private breakTime(block: BlockType): number {
    const definition = BLOCKS[block];
    const held = selectedStack(this.inventory);
    const itemDefinition = held ? ITEM_DEFINITIONS[held.item] : null;
    const toolMatches = itemDefinition?.toolKind && itemDefinition.toolKind === definition.preferredTool;
    const requiredMatches = !definition.requiredTool || itemDefinition?.toolKind === definition.requiredTool;
    const speed = toolMatches ? itemDefinition?.miningSpeed ?? 1 : 1;
    const penalty = requiredMatches ? 1 : 4.2;
    return Math.max(0.18, definition.hardness * 0.85 * penalty / speed);
  }

  private breakBlock(hit: VoxelHit): void {
    const definition = BLOCKS[hit.block];
    const held = selectedStack(this.inventory);
    const itemDefinition = held ? ITEM_DEFINITIONS[held.item] : null;
    const canDrop = !definition.requiredTool || itemDefinition?.toolKind === definition.requiredTool;
    const changed = this.world.setBlock(hit.x, hit.y, hit.z, BlockType.Air);

    if (!changed) {
      return;
    }

    let drop = canDrop ? (definition.drops as ItemId | null) : null;

    if (hit.block === BlockType.Leaves && Math.random() < 0.12) {
      drop = "apple";
    }

    if (drop) {
      const remaining = addStack(this.inventory, { item: drop, count: 1 });
      this.hud.showToast(remaining ? "Inventory full" : `Picked up ${ITEM_DEFINITIONS[drop].name}`);
    }

    this.damageHeldTool();
    this.survival.addExhaustion(0.005);
    this.unlockRecipesFromInventory();
    this.queueSave();
  }

  private damageHeldTool(): void {
    const index = HOTBAR_START + this.inventory.selectedHotbarSlot;
    const stack = this.inventory.slots[index];
    if (!stack || stack.durability === undefined) {
      return;
    }
    stack.durability -= 1;
    if (stack.durability <= 0) {
      this.inventory.slots[index] = null;
      this.hud.showToast("Tool broke");
    }
  }

  private consumeSelected(count: number): void {
    const index = HOTBAR_START + this.inventory.selectedHotbarSlot;
    const stack = this.inventory.slots[index];
    if (!stack) {
      return;
    }
    stack.count -= count;
    if (stack.count <= 0) {
      this.inventory.slots[index] = null;
    }
  }

  private handleInventoryClick(index: number, button: 0 | 2, shift: boolean): void {
    if (shift) {
      shiftClickSlot(this.inventory, index);
    } else {
      clickSlot(this.inventory, index, button);
    }
    this.unlockRecipesFromInventory();
    this.queueSave();
  }

  private handleHotbarSwap(index: number, hotbarSlot: number): void {
    swapWithHotbar(this.inventory, index, hotbarSlot);
    this.queueSave();
  }

  private handleCraft(recipeId: string, craftAll: boolean, gridSize: 2 | 3): void {
    const recipe = RECIPES.find((entry) => entry.id === recipeId);
    if (!recipe || !canCraft(recipe, this.inventory, gridSize)) {
      return;
    }
    const made = craft(recipe, this.inventory, gridSize, craftAll);
    if (made > 0) {
      this.unlockedRecipes.add(recipe.id);
      this.unlockRecipesFromInventory();
      this.queueSave();
    }
  }

  private unlockRecipesFromInventory(): void {
    for (const recipe of RECIPES) {
      if (recipeIsUnlocked(recipe, this.unlockedRecipes, this.inventory)) {
        this.unlockedRecipes.add(recipe.id);
      }
    }
  }

  private updateHighlight(): void {
    if (!this.selectedHit) {
      this.highlight.visible = false;
      return;
    }

    this.highlight.visible = true;
    this.highlight.position.set(this.selectedHit.x + 0.5, this.selectedHit.y + 0.5, this.selectedHit.z + 0.5);
  }

  private raycastBlock(): VoxelHit | null {
    const origin = this.player.getEyePosition();
    const direction = this.player.getViewDirection();
    const maxDistance = 4.5;
    let x = Math.floor(origin.x);
    let y = Math.floor(origin.y);
    let z = Math.floor(origin.z);
    const stepX = direction.x >= 0 ? 1 : -1;
    const stepY = direction.y >= 0 ? 1 : -1;
    const stepZ = direction.z >= 0 ? 1 : -1;
    const tDeltaX = direction.x === 0 ? Infinity : Math.abs(1 / direction.x);
    const tDeltaY = direction.y === 0 ? Infinity : Math.abs(1 / direction.y);
    const tDeltaZ = direction.z === 0 ? Infinity : Math.abs(1 / direction.z);
    let tMaxX = intBound(origin.x, direction.x);
    let tMaxY = intBound(origin.y, direction.y);
    let tMaxZ = intBound(origin.z, direction.z);
    let distance = 0;
    const normal = new THREE.Vector3();

    while (distance <= maxDistance) {
      const block = this.world.getBlock(x, y, z);

      if (isVisibleTarget(block)) {
        return { x, y, z, normal: normal.clone(), block };
      }

      if (tMaxX < tMaxY && tMaxX < tMaxZ) {
        x += stepX;
        distance = tMaxX;
        tMaxX += tDeltaX;
        normal.set(-stepX, 0, 0);
      } else if (tMaxY < tMaxZ) {
        y += stepY;
        distance = tMaxY;
        tMaxY += tDeltaY;
        normal.set(0, -stepY, 0);
      } else {
        z += stepZ;
        distance = tMaxZ;
        tMaxZ += tDeltaZ;
        normal.set(0, 0, -stepZ);
      }
    }

    return null;
  }

  private updateEnvironment(): void {
    const skyState = this.sky.update(this.elapsed, this.camera.position);
    const day = skyState.dayFactor;
    const sunOffset = skyState.sunDirection.clone().multiplyScalar(88);

    this.sunTarget.position.copy(this.player.position);
    this.sunLight.position.copy(this.player.position).add(sunOffset);
    this.sunLight.intensity = 0.12 + day * 2.25;
    this.hemisphereLight.intensity = 0.22 + day * 0.58;

    const fog = this.scene.fog;
    if (fog instanceof THREE.FogExp2) {
      fog.color.copy(new THREE.Color("#131e29").lerp(new THREE.Color("#c8dde2"), day));
      fog.density = 0.017 - day * 0.005;
    }
  }

  private updateSave(delta: number): void {
    if (!this.saveRequested || this.saving || !this.activeWorld) {
      return;
    }

    this.saveDue -= delta;
    if (this.saveDue <= 0) {
      void this.saveNow();
    }
  }

  private queueSave(): void {
    if (!this.activeWorld) {
      return;
    }
    this.saveRequested = true;
    this.saveDue = 0.8;
    this.saveState = "Pending";
  }

  private async saveNow(force = false): Promise<void> {
    if (!this.activeWorld || this.saving || (!force && !this.saveRequested)) {
      return;
    }

    this.saving = true;
    this.saveRequested = false;
    this.saveState = "Saving";

    try {
      const now = Date.now();
      const save: WorldSaveV2 = {
        ...this.activeWorld,
        updatedAt: now,
        modified: this.world.exportModifiedBlocks(),
        player: this.player.snapshot(this.inventory.selectedHotbarSlot),
        inventory: normalizeInventory(this.inventory),
        survival: { ...this.survival.state },
        unlockedRecipes: [...this.unlockedRecipes]
      };
      this.activeWorld = save;
      this.saveIndex = await this.saveSystem.upsertWorld(save);
      this.hud.setWorlds(this.worldSummaries());
      this.saveState = this.saveRequested ? "Pending" : "Saved";
    } catch {
      this.saveState = "Save error";
      this.hud.showToast("Save failed");
    } finally {
      this.saving = false;
    }
  }

  private updateHud(): void {
    const position = this.player.position;
    const stats = this.world.getStats();
    const selected = selectedStack(this.inventory);
    const recipeViews: RecipeView[] = RECIPES.map((recipe) => ({
      recipe,
      craftable: canCraft(recipe, this.inventory, this.mode === "craftingTable" ? 3 : 2),
      unlocked: recipeIsUnlocked(recipe, this.unlockedRecipes, this.inventory)
    }));

    this.hud.update({
      position: `XYZ ${Math.floor(position.x)} ${Math.floor(position.y)} ${Math.floor(position.z)} | ${this.world.seed}`,
      chunks: stats.chunks,
      fps: Math.round(this.fps),
      selectedStack: selected,
      inventory: this.inventory,
      survival: this.survival.state,
      day: clamp(this.sunLight.intensity / 2.37, 0, 1),
      saveState: this.saveState,
      miningProgress: this.mining?.progress ?? 0,
      selectedBlock: this.selectedHit?.block ?? null,
      activeWorldName: this.activeWorld?.name ?? "Preview",
      recipes: recipeViews
    });
  }

  private respawn(): void {
    const spawn = new THREE.Vector3().fromArray(this.survival.state.spawn);
    this.player.position.copy(spawn);
    this.player.velocity.set(0, 0, 0);
    this.survival.respawn();
    this.setMode("playing");
    this.input.requestPointerLock();
    this.queueSave();
  }

  private async resetAll(): Promise<void> {
    await this.saveSystem.clearAll();
    window.location.reload();
  }

  private worldSummaries(): WorldSummary[] {
    return this.saveIndex.worlds.map((world) => ({
      id: world.id,
      name: world.name,
      seed: world.seed,
      updatedAt: world.updatedAt
    }));
  }

  private readonly resize = (): void => {
    const width = this.shell.clientWidth || window.innerWidth;
    const height = this.shell.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
    this.renderer.setSize(width, height, false);
  };

  private readonly handleVisibilityChange = (): void => {
    if (document.visibilityState === "hidden") {
      void this.saveNow(true);
    }
  };
}

function intBound(origin: number, direction: number): number {
  if (direction > 0) {
    return (Math.floor(origin + 1) - origin) / direction;
  }

  if (direction < 0) {
    return (origin - Math.floor(origin)) / -direction;
  }

  return Infinity;
}
