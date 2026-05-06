import * as THREE from "three";
import { BLOCKS, BlockType, WORLD_HEIGHT, isVisibleTarget } from "./blocks";
import {
  HOTBAR_START,
  InventoryState,
  addStack,
  canEquip,
  clickArmorSlot,
  clickOffhandSlot,
  clickSlot,
  createInventoryState,
  normalizeInventory,
  removeItems,
  selectedStack,
  shiftClickSlot,
  swapWithHotbar
} from "./inventory";
import { InputController, MouseActions } from "./input";
import { blockFromItem, EquipmentSlot, ITEM_DEFINITIONS, ItemId, ItemStack, maxStackFor, stacksMatch, ToolTier } from "./items";
import { clamp, hash3 } from "./math";
import { MobManager } from "./mobs";
import { Player } from "./player";
import {
  canCraft,
  consumeRecipeGrid,
  matchRecipeFromGrid,
  RECIPES,
  recipeIngredients,
  recipeIsUnlocked,
  recipeLayout
} from "./recipes";
import { HandView } from "./handView";
import { canSmelt, smelt, SMELTING_RECIPES } from "./smelting";
import {
  SaveIndexV2,
  SaveSystem,
  SavedGameV1,
  WorldSaveV2
} from "./saveSystem";
import { armorPoints, createSurvivalState, SurvivalController, SurvivalState } from "./survival";
import { SkySystem } from "./sky";
import { createVoxelMaterials, VoxelMaterials } from "./textureAtlas";
import { WORLDGEN_VERSION, World } from "./world";
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
  private heldLight!: THREE.PointLight;
  private highlight!: THREE.LineSegments;
  private handView!: HandView;
  private mobs = new MobManager();
  private readonly torchLights: THREE.PointLight[] = [];
  private torchScanTimer = 0;
  private nearbyTorchGlow = 0;
  private dayFactor = 1;
  private undergroundFactor = 0;
  private selectedHit: VoxelHit | null = null;
  private animationFrame = 0;
  private elapsed = 0;
  private fps = 60;
  private saveRequested = false;
  private saveDue = 0;
  private saving = false;
  private saveState = "준비됨";
  private mode: HudMode = "title";
  private saveIndex: SaveIndexV2 = { version: 3, activeWorldId: null, worlds: [] };
  private activeWorld: WorldSaveV2 | null = null;
  private inventory: InventoryState = createInventoryState();
  private craftingGrid: Array<ItemStack | null> = Array.from({ length: 9 }, () => null);
  private craftingGridSize: 2 | 3 = 2;
  private survival!: SurvivalController;
  private unlockedRecipes = new Set<string>();
  private lootedChests = new Set<string>();
  private mining: MiningState | null = null;
  private selectedItemTimer = 0;
  private attackCooldown = 0;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  async boot(): Promise<void> {
    this.shell = document.createElement("div");
    this.shell.className = "game-shell";
    this.shell.addEventListener("contextmenu", this.preventGameContextMenu);
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
      onEquipmentSlot: (slot, button) => this.handleEquipmentClick(slot, button),
      onOffhandSlot: (button) => this.handleOffhandClick(button),
      onCraftSlot: (index, button, shift) => this.handleCraftingSlotClick(index, button, shift),
      onCraftResult: (shift) => this.handleCraftingResult(shift),
      onSlotDrop: (fromRef, toRef) => this.handleSlotDrop(fromRef, toRef),
      onHotbarKeySwap: (index, hotbarSlot) => this.handleHotbarSwap(index, hotbarSlot),
      onCraftRecipe: (recipeId, craftAll, gridSize) => this.handleRecipeFill(recipeId, craftAll, gridSize),
      onSmeltRecipe: (recipeId, smeltAll) => this.handleSmelt(recipeId, smeltAll),
      onRegenerateWorld: (id) => {
        void this.regenerateWorldCopy(id);
      },
      onResetAll: () => {
        void this.resetAll();
      }
    });

    const maxAnisotropy = this.renderer.capabilities.getMaxAnisotropy();
    this.materials = createVoxelMaterials(maxAnisotropy);
    this.setupEnvironment();
    this.scene.add(this.mobs.group);
    this.setupHighlight();
    this.scene.add(this.camera);
    this.handView = new HandView(this.camera);

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
      version: 3,
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
      version: 3,
      worldgenVersion: 2,
      id: "legacy-world",
      name: "이전 월드",
      seed: legacy.seed,
      createdAt: now,
      updatedAt: now,
      modified: legacy.modified,
      player: legacy.player,
      inventory,
      survival: createSurvivalState(spawn),
      unlockedRecipes: [],
      lootedChests: [],
      entities: [],
      gameRules: { mobGriefing: true }
    };
  }

  private loadPreviewWorld(): void {
    const seed = "codex-aurora";
    this.replaceWorld(seed, [], WORLDGEN_VERSION);
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
    this.replaceWorld(save.seed, save.modified, save.worldgenVersion ?? 2);
    this.player = new Player(this.camera, this.world.findSpawn());
    this.player.restore(save.player);
    this.inventory = normalizeInventory(save.inventory);
    this.input.selectedSlot = this.inventory.selectedHotbarSlot;
    this.survival = new SurvivalController({ ...save.survival });
    this.unlockedRecipes = new Set(save.unlockedRecipes);
    this.lootedChests = new Set(save.lootedChests ?? []);
    this.mobs.restore(save.entities ?? []);
    this.world.ensureChunksAround(this.player.position);
    this.saveState = "준비됨";
    this.hud.setWorlds(this.worldSummaries());
    if (startPlaying) {
      this.resumeGame();
    }
  }

  private replaceWorld(seed: string, modified: WorldSaveV2["modified"], worldgenVersion = WORLDGEN_VERSION): void {
    if (this.world) {
      this.scene.remove(this.world.group);
    }

    this.mobs.clear();
    this.lootedChests.clear();
    this.world = new World(seed, this.materials, worldgenVersion);
    this.world.setModifiedBlocks(modified);
    this.scene.add(this.world.group);
  }

  private async createWorld(name: string, seed: string): Promise<void> {
    this.setMode("loading");
    const now = Date.now();
    const id = `world-${now.toString(36)}`;
    this.replaceWorld(seed, [], WORLDGEN_VERSION);
    const spawn = this.world.findSpawn();
    const player = new Player(this.camera, spawn);
    player.yaw = this.world.findScenicYaw(spawn);
    player.pitch = -0.08;
    const survival = createSurvivalState(spawn);
    const save: WorldSaveV2 = {
      version: 3,
      worldgenVersion: WORLDGEN_VERSION,
      id,
      name,
      seed,
      createdAt: now,
      updatedAt: now,
      modified: [],
      player: player.snapshot(0),
      inventory: createInventoryState(),
      survival,
      unlockedRecipes: [],
      lootedChests: [],
      entities: [],
      gameRules: { mobGriefing: true }
    };
    await this.saveSystem.upsertWorld(save);
    this.saveIndex = await this.saveSystem.loadIndex();
    this.loadWorld(save, true);
    this.queueSave();
  }

  private async loadWorldById(id: string): Promise<void> {
    const world = this.saveIndex.worlds.find((entry) => entry.id === id);
    if (!world) {
      this.hud.showToast("월드를 찾을 수 없습니다");
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

  private async regenerateWorldCopy(id: string): Promise<void> {
    const source = this.saveIndex.worlds.find((entry) => entry.id === id);
    if (!source) {
      this.hud.showToast("월드를 찾을 수 없습니다");
      return;
    }

    const now = Date.now();
    const world = new World(source.seed, this.materials, WORLDGEN_VERSION);
    const spawn = world.findSpawn();
    const player = new Player(this.camera, spawn);
    player.yaw = world.findScenicYaw(spawn);
    player.pitch = -0.08;
    const save: WorldSaveV2 = {
      version: 3,
      worldgenVersion: WORLDGEN_VERSION,
      id: `world-${now.toString(36)}-caves`,
      name: `${source.name} 동굴 복사본`,
      seed: source.seed,
      createdAt: now,
      updatedAt: now,
      modified: [],
      player: player.snapshot(0),
      inventory: createInventoryState(),
      survival: createSurvivalState(spawn),
      unlockedRecipes: [],
      lootedChests: [],
      entities: [],
      gameRules: { mobGriefing: true }
    };

    this.saveIndex = await this.saveSystem.upsertWorld(save);
    this.hud.setWorlds(this.worldSummaries());
    this.hud.showToast("동굴 월드 복사본을 만들었습니다");
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
      void this.createWorld("새 월드", "codex-aurora");
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

  private readonly preventGameContextMenu = (event: MouseEvent): void => {
    if (this.isEditableTarget(event.target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  };

  private isEditableTarget(target: EventTarget | null): boolean {
    return (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      (target instanceof HTMLElement && target.isContentEditable)
    );
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

    for (let index = 0; index < 18; index += 1) {
      const light = new THREE.PointLight("#ffb24a", 1.25, 12, 1.7);
      light.visible = false;
      this.torchLights.push(light);
      this.scene.add(light);
    }

    this.heldLight = new THREE.PointLight("#ffba62", 0, 9, 1.6);
    this.heldLight.position.set(0.38, -0.28, -0.62);
    this.camera.add(this.heldLight);
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
    this.attackCooldown = Math.max(0, this.attackCooldown - delta);

    this.handleKeyboard();

    if (this.mode === "playing" && this.survival.state.alive) {
      this.updatePlaying(delta);
    } else {
      this.selectedHit = this.raycastBlock();
      this.updateHighlight();
      this.input.consumeActions();
    }

    this.updateEnvironment(delta);
    this.handView.update(
      delta,
      selectedStack(this.inventory),
      this.mode === "playing" && this.survival.state.alive,
      this.mining?.progress ?? 0
    );
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
      } else if (this.mode === "inventory" || this.mode === "craftingTable" || this.mode === "furnace") {
        this.closeOpenContainer(false);
      } else if (this.mode === "paused") {
        this.resumeGame();
      } else if (this.mode === "worldSelect" || this.mode === "createWorld") {
        this.setMode("title");
      }
    }

    if (this.input.consumePressed("KeyE")) {
      if (this.mode === "playing") {
        this.openCraftingPanel("inventory");
        if (document.pointerLockElement) {
          void document.exitPointerLock();
        }
      } else if (this.mode === "inventory" || this.mode === "craftingTable" || this.mode === "furnace") {
        this.closeOpenContainer(true);
      }
    }
  }

  private closeOpenContainer(lockPointer: boolean): void {
    if (!this.returnCraftingGridToInventory()) {
      this.hud.showToast("닫기 전에 인벤토리 공간을 비워주세요");
      return;
    }

    this.setMode("playing");
    if (lockPointer) {
      this.input.requestPointerLock();
    }
  }

  private openCraftingPanel(mode: "inventory" | "craftingTable" | "furnace"): void {
    if (!this.returnCraftingGridToInventory()) {
      this.hud.showToast("먼저 인벤토리 공간을 비워주세요");
      return;
    }

    this.craftingGridSize = mode === "inventory" ? 2 : 3;
    this.setMode(mode);
  }

  private updatePlaying(delta: number): void {
    const look = this.input.consumeLook();
    this.player.applyLook(look.movementX, look.movementY);

    const moving =
      this.input.isDown("KeyW") ||
      this.input.isDown("KeyA") ||
      this.input.isDown("KeyS") ||
      this.input.isDown("KeyD");
    const wantsSprint =
      this.input.isDown("ControlLeft") || this.input.isDown("ControlRight") || this.input.isDown("KeyR");
    const sneaking = this.input.isDown("ShiftLeft") || this.input.isDown("ShiftRight");

    this.player.update(delta, this.input, this.world, this.survival.canSprint(), sneaking);
    if (this.player.lastLandingSpeed > 13) {
      this.survival.damage(Math.ceil((this.player.lastLandingSpeed - 12) * 0.8));
    }

    this.world.ensureChunksAround(this.player.position);
    this.selectedHit = this.raycastBlock();
    this.updateHighlight();

    const actions = this.input.consumeActions();
    const mobEvents = this.mobs.update(
      delta,
      this.world,
      this.player.position,
      this.dayFactor,
      this.undergroundFactor,
      this.elapsed
    );
    if (mobEvents.damage > 0) {
      this.damagePlayer(mobEvents.damage, actions.secondaryHeld);
    }

    for (const drop of mobEvents.drops) {
      addStack(this.inventory, drop);
    }

    for (const explosion of mobEvents.explosions) {
      this.handleExplosion(explosion.x, explosion.y, explosion.z, explosion.radius, explosion.damage);
    }

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

  private damagePlayer(amount: number, blocking: boolean): number {
    return this.survival.damage(amount, {
      armorSlots: this.inventory.armorSlots,
      blocking: blocking && this.inventory.offhand?.item === "shield"
    });
  }

  private handleExplosion(x: number, y: number, z: number, radius: number, maxDamage: number): void {
    const playerDistance = this.player.position.distanceTo(new THREE.Vector3(x, y, z));
    if (playerDistance < radius + 2.2) {
      const exposure = clamp(1 - playerDistance / (radius + 2.2), 0, 1);
      this.damagePlayer(Math.ceil(maxDamage * exposure), false);
      const knock = this.player.position.clone().sub(new THREE.Vector3(x, y, z)).normalize().multiplyScalar(6 * exposure);
      this.player.velocity.add(knock);
      this.player.velocity.y += 4 * exposure;
    }

    let destroyed = 0;
    const r = Math.ceil(radius);
    for (let by = Math.floor(y) - r; by <= Math.floor(y) + r; by += 1) {
      for (let bz = Math.floor(z) - r; bz <= Math.floor(z) + r; bz += 1) {
        for (let bx = Math.floor(x) - r; bx <= Math.floor(x) + r; bx += 1) {
          const distance = Math.hypot(bx + 0.5 - x, by + 0.5 - y, bz + 0.5 - z);
          if (distance > radius || by <= 0 || by >= WORLD_HEIGHT - 1) {
            continue;
          }

          const block = this.world.getBlock(bx, by, bz);
          if (block === BlockType.Air || block === BlockType.Water) {
            continue;
          }

          const definition = BLOCKS[block];
          const resistance = definition.hardness * 0.55 + (definition.requiredTool ? 0.8 : 0);
          const power = (1 - distance / radius) * 3.4;
          const jitter = hash3(this.world.seedInt ^ 0xc4ee, bx, by, bz) * 0.65;
          if (power + jitter <= resistance) {
            continue;
          }

          if (this.world.setBlock(bx, by, bz, BlockType.Air)) {
            destroyed += 1;
            const drop = definition.drops as ItemId | null;
            if (drop && hash3(this.world.seedInt ^ 0xd20d, bx, by, bz) < 0.32) {
              addStack(this.inventory, { item: drop, count: 1 });
            }
          }
        }
      }
    }

    this.hud.showToast(destroyed > 0 ? `크리퍼 폭발: 블록 ${destroyed}개 파괴` : "크리퍼가 폭발했습니다");
    this.queueSave();
  }

  private handleMining(delta: number, actions: MouseActions): void {
    if (actions.primary) {
      if (this.attackCooldown > 0) {
        return;
      }

      const held = selectedStack(this.inventory);
      const heldDefinition = held ? ITEM_DEFINITIONS[held.item] : null;
      if (heldDefinition?.toolKind === "bow") {
        if (!removeItems(this.inventory, "arrow", 1)) {
          this.hud.showToast("화살이 필요합니다");
          return;
        }

        const hit = this.mobs.hitByRay(this.player.getEyePosition(), this.player.getViewDirection(), 30, 6);
        this.attackCooldown = heldDefinition.combat?.cooldown ?? 0.9;
        this.damageHeldTool();
        this.survival.addExhaustion(0.04);
        if (hit) {
          if (hit.killed) {
            for (const drop of hit.drops) {
              addStack(this.inventory, drop);
            }
            this.unlockRecipesFromInventory();
            this.hud.showToast(`화살로 ${hit.name} 처치`);
          } else {
            this.hud.showToast(`화살로 ${hit.name} 명중`);
          }
        }
        this.queueSave();
        return;
      }

      const damage = this.attackDamage();
      const hit = this.mobs.hitByRay(
        this.player.getEyePosition(),
        this.player.getViewDirection(),
        this.attackRange(),
        damage
      );
      if (hit) {
        this.mining = null;
        this.attackCooldown = this.attackDelay();
        this.damageHeldTool();
        this.survival.addExhaustion(0.08);
        if (hit.killed) {
          for (const drop of hit.drops) {
            addStack(this.inventory, drop);
          }
          this.unlockRecipesFromInventory();
          this.hud.showToast(`${hit.name} 처치`);
          this.queueSave();
        } else {
          this.hud.showToast(`${hit.name} 공격`);
        }
        return;
      }
    }

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

    const interactable = this.selectedHit ? BLOCKS[this.selectedHit.block].interactable : null;
    if (this.selectedHit && interactable === "crafting_table" && !sneaking) {
      if (document.pointerLockElement) {
        void document.exitPointerLock();
      }
      this.openCraftingPanel("craftingTable");
      return;
    }

    if (this.selectedHit && interactable === "furnace" && !sneaking) {
      if (document.pointerLockElement) {
        void document.exitPointerLock();
      }
      this.openCraftingPanel("furnace");
      return;
    }

    if (this.selectedHit && interactable === "chest" && !sneaking) {
      this.openChest(this.selectedHit);
      return;
    }

    if (this.selectedHit && interactable === "bed" && !sneaking) {
      this.sleepInBed(this.selectedHit);
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
    const requiredMatches =
      !definition.requiredTool ||
      (itemDefinition?.toolKind === definition.requiredTool &&
        this.tierMeets(itemDefinition.toolTier ?? "hand", definition.requiredTier ?? "wood"));
    const speed = toolMatches ? itemDefinition?.miningSpeed ?? 1 : 1;
    const penalty = requiredMatches ? 1 : 4.2;
    return Math.max(0.18, definition.hardness * 0.85 * penalty / speed);
  }

  private attackDamage(): number {
    const held = selectedStack(this.inventory);
    const itemDefinition = held ? ITEM_DEFINITIONS[held.item] : null;

    if (itemDefinition?.combat) {
      return itemDefinition.combat.damage;
    }

    return 1;
  }

  private attackDelay(): number {
    const held = selectedStack(this.inventory);
    const itemDefinition = held ? ITEM_DEFINITIONS[held.item] : null;
    return itemDefinition?.combat?.cooldown ?? 0.5;
  }

  private attackRange(): number {
    const held = selectedStack(this.inventory);
    const itemDefinition = held ? ITEM_DEFINITIONS[held.item] : null;
    return itemDefinition?.combat?.range ?? 4.4;
  }

  private breakBlock(hit: VoxelHit): void {
    const definition = BLOCKS[hit.block];
    const held = selectedStack(this.inventory);
    const itemDefinition = held ? ITEM_DEFINITIONS[held.item] : null;
    const canDrop =
      !definition.requiredTool ||
      (itemDefinition?.toolKind === definition.requiredTool &&
        this.tierMeets(itemDefinition.toolTier ?? "hand", definition.requiredTier ?? "wood"));
    const changed = this.world.setBlock(hit.x, hit.y, hit.z, BlockType.Air);

    if (!changed) {
      return;
    }

    let drop = canDrop ? (definition.drops as ItemId | null) : null;
    let dropCount = 1;

    if (hit.block === BlockType.Leaves && Math.random() < 0.12) {
      drop = "apple";
    }

    if (hit.block === BlockType.Gravel && Math.random() < 0.18) {
      drop = "flint";
    }

    if (hit.block === BlockType.RedstoneOre) {
      dropCount = 4 + Math.floor(Math.random() * 2);
    }

    if (hit.block === BlockType.LapisOre) {
      dropCount = 4 + Math.floor(Math.random() * 5);
    }

    if (drop) {
      const remaining = addStack(this.inventory, { item: drop, count: dropCount });
      this.hud.showToast(remaining ? "인벤토리가 가득 찼습니다" : `${ITEM_DEFINITIONS[drop].name} 획득`);
    }

    const chestKey = `${hit.x},${hit.y},${hit.z}`;
    if (hit.block === BlockType.Chest && !this.lootedChests.has(chestKey)) {
      for (const loot of this.chestLoot(hit)) {
        addStack(this.inventory, loot);
      }
      this.lootedChests.add(chestKey);
      this.hud.showToast("상자 보급품을 찾았습니다");
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
      this.hud.showToast("도구가 부서졌습니다");
    }
  }

  private openChest(hit: VoxelHit): void {
    const key = `${hit.x},${hit.y},${hit.z}`;
    if (this.lootedChests.has(key)) {
      this.hud.showToast("상자가 비어 있습니다");
      return;
    }

    let accepted = 0;
    for (const loot of this.chestLoot(hit)) {
      const leftover = addStack(this.inventory, loot);
      accepted += loot.count - (leftover?.count ?? 0);
    }

    this.lootedChests.add(key);
    this.unlockRecipesFromInventory();
    this.queueSave();
    this.hud.showToast(accepted > 0 ? "상자에서 보급품을 챙겼습니다" : "가방이 가득 차서 챙길 수 없습니다");
  }

  private chestLoot(hit: VoxelHit): ItemStack[] {
    const roll = (salt: number) => hash3(this.world.seedInt ^ salt, hit.x, hit.y, hit.z);
    const loot: ItemStack[] = [
      { item: "coal", count: 2 + Math.floor(roll(0xc0a1) * 4) },
      { item: "torch", count: 2 + Math.floor(roll(0x70c4) * 5) }
    ];

    if (roll(0xa770) > 0.35) {
      loot.push({ item: "arrow", count: 2 + Math.floor(roll(0xa771) * 6) });
    }

    if (roll(0xf11a) > 0.42) {
      loot.push({ item: "bread", count: 1 + Math.floor(roll(0xf11b) * 2) });
    }

    if (roll(0x1f0a) > 0.45) {
      loot.push({ item: "raw_iron", count: 1 + Math.floor(roll(0x10e) * 3) });
    }

    if (roll(0xa991e) > 0.72) {
      loot.push({ item: "apple", count: 1 + Math.floor(roll(0xa991) * 2) });
    }

    if (roll(0xd1a) > 0.9) {
      loot.push({ item: "diamond", count: 1 });
    }

    if (roll(0xc01f) > 0.86) {
      loot.push({ item: "chainmail_boots", count: 1, durability: 70 });
    }

    return loot;
  }

  private sleepInBed(hit: VoxelHit): void {
    this.survival.state.spawn = [hit.x + 0.5, hit.y + 1, hit.z + 0.5];

    if (this.dayFactor < 0.5) {
      const dayLength = 210;
      const cycle = (this.elapsed / dayLength) % 1;
      const target = 0.18;
      const advance = cycle < target ? target - cycle : 1 - cycle + target;
      this.elapsed += advance * dayLength;
      this.survival.heal(2);
      this.hud.showToast("침대에서 쉬고 아침이 되었습니다");
    } else {
      this.hud.showToast("스폰 위치를 침대로 설정했습니다");
    }

    this.queueSave();
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

  private handleEquipmentClick(slot: EquipmentSlot, button: 0 | 2): void {
    clickArmorSlot(this.inventory, slot, button);
    this.queueSave();
  }

  private handleOffhandClick(button: 0 | 2): void {
    clickOffhandSlot(this.inventory, button);
    this.queueSave();
  }

  private handleCraftingSlotClick(index: number, button: 0 | 2, shift: boolean): void {
    if (shift) {
      const stack = this.craftingGrid[index];
      if (stack) {
        const leftover = addStack(this.inventory, stack);
        this.craftingGrid[index] = leftover;
      }
    } else {
      this.clickExternalSlot(this.craftingGrid, index, button);
    }

    this.unlockRecipesFromInventory();
    this.queueSave();
  }

  private handleHotbarSwap(index: number, hotbarSlot: number): void {
    swapWithHotbar(this.inventory, index, hotbarSlot);
    this.queueSave();
  }

  private handleSlotDrop(fromRef: string, toRef: string): void {
    if (fromRef === toRef) {
      return;
    }

    const from = this.getSlotByRef(fromRef);
    const to = this.getSlotByRef(toRef);
    if (!from) {
      return;
    }

    if (!this.slotAccepts(toRef, from) || (to && !this.slotAccepts(fromRef, to))) {
      this.hud.showToast("이 슬롯에는 장착할 수 없습니다");
      return;
    }

    if (!to) {
      this.setSlotByRef(toRef, from);
      this.setSlotByRef(fromRef, null);
    } else if (stacksMatch(from, to)) {
      const max = maxStackFor(to.item);
      const move = Math.min(max - to.count, from.count);
      to.count += move;
      from.count -= move;
      if (from.count <= 0) {
        this.setSlotByRef(fromRef, null);
      }
    } else {
      this.setSlotByRef(fromRef, to);
      this.setSlotByRef(toRef, from);
    }

    this.unlockRecipesFromInventory();
    this.queueSave();
  }

  private handleCraftingResult(shift: boolean): void {
    const activeGrid = this.activeCraftingGrid();
    const recipe = matchRecipeFromGrid(activeGrid, this.craftingGridSize);
    if (!recipe) {
      return;
    }

    const result = { ...recipe.result };

    if (shift) {
      let made = 0;
      while (matchRecipeFromGrid(this.activeCraftingGrid(), this.craftingGridSize)?.id === recipe.id) {
        if (!this.inventoryCanAccept(result)) {
          break;
        }
        consumeRecipeGrid(this.craftingGrid, recipe, this.craftingGridSize);
        addStack(this.inventory, { ...result });
        made += result.count;
        if (made >= 64) {
          break;
        }
      }
    } else {
      const cursor = this.inventory.cursor;
      if (cursor && (!stacksMatch(cursor, result) || cursor.count + result.count > maxStackFor(cursor.item))) {
        return;
      }

      consumeRecipeGrid(this.craftingGrid, recipe, this.craftingGridSize);
      if (cursor) {
        cursor.count += result.count;
      } else {
        this.inventory.cursor = result;
      }
    }

    this.unlockedRecipes.add(recipe.id);
    this.unlockRecipesFromInventory();
    this.queueSave();
  }

  private handleRecipeFill(recipeId: string, craftAll: boolean, gridSize: 2 | 3): void {
    const recipe = RECIPES.find((entry) => entry.id === recipeId);
    if (!recipe || !canCraft(recipe, this.inventory, gridSize) || !this.returnCraftingGridToInventory()) {
      return;
    }

    this.craftingGridSize = gridSize;
    const layout = recipeLayout(recipe, gridSize);
    if (!layout) {
      return;
    }

    const multiplier = craftAll ? this.maxCraftable(recipe) : 1;
    for (let index = 0; index < layout.length; index += 1) {
      const item = layout[index];
      if (!item) {
        continue;
      }
      removeItems(this.inventory, item, multiplier);
      this.craftingGrid[index] = { item, count: multiplier };
    }

    this.queueSave();
  }

  private handleSmelt(recipeId: string, smeltAll: boolean): void {
    const recipe = SMELTING_RECIPES.find((entry) => entry.id === recipeId);
    if (!recipe || !canSmelt(recipe, this.inventory)) {
      return;
    }

    const made = smelt(recipe, this.inventory, smeltAll);
    if (made > 0) {
      this.hud.showToast(`${recipe.name} 완료`);
      this.unlockRecipesFromInventory();
      this.queueSave();
    }
  }

  private activeCraftingGrid(): Array<ItemStack | null> {
    return this.craftingGrid.slice(0, this.craftingGridSize * this.craftingGridSize);
  }

  private returnCraftingGridToInventory(): boolean {
    for (const stack of this.craftingGrid) {
      if (stack && !this.inventoryCanAccept(stack)) {
        return false;
      }
    }

    for (let index = 0; index < this.craftingGrid.length; index += 1) {
      const stack = this.craftingGrid[index];
      if (stack) {
        addStack(this.inventory, stack);
        this.craftingGrid[index] = null;
      }
    }

    return true;
  }

  private inventoryCanAccept(stack: ItemStack): boolean {
    let remaining = stack.count;

    for (const slot of this.inventory.slots) {
      if (!slot || !stacksMatch(slot, stack)) {
        continue;
      }
      remaining -= Math.max(0, maxStackFor(slot.item) - slot.count);
      if (remaining <= 0) {
        return true;
      }
    }

    for (const slot of this.inventory.slots) {
      if (slot) {
        continue;
      }
      remaining -= maxStackFor(stack.item);
      if (remaining <= 0) {
        return true;
      }
    }

    return false;
  }

  private clickExternalSlot(slots: Array<ItemStack | null>, index: number, button: 0 | 2): void {
    const slot = slots[index] ?? null;
    const cursor = this.inventory.cursor;

    if (button === 0) {
      if (!cursor) {
        this.inventory.cursor = slot;
        slots[index] = null;
        return;
      }

      if (!slot) {
        slots[index] = cursor;
        this.inventory.cursor = null;
        return;
      }

      if (stacksMatch(slot, cursor)) {
        const move = Math.min(maxStackFor(slot.item) - slot.count, cursor.count);
        slot.count += move;
        cursor.count -= move;
        if (cursor.count <= 0) {
          this.inventory.cursor = null;
        }
        return;
      }

      slots[index] = cursor;
      this.inventory.cursor = slot;
      return;
    }

    if (!cursor && slot) {
      const take = Math.ceil(slot.count / 2);
      this.inventory.cursor = { ...slot, count: take };
      slot.count -= take;
      if (slot.count <= 0) {
        slots[index] = null;
      }
      return;
    }

    if (cursor && !slot) {
      slots[index] = { ...cursor, count: 1 };
      cursor.count -= 1;
      if (cursor.count <= 0) {
        this.inventory.cursor = null;
      }
      return;
    }

    if (cursor && slot && stacksMatch(cursor, slot) && slot.count < maxStackFor(slot.item)) {
      slot.count += 1;
      cursor.count -= 1;
      if (cursor.count <= 0) {
        this.inventory.cursor = null;
      }
    }
  }

  private getSlotByRef(ref: string): ItemStack | null {
    if (ref.startsWith("inventory:")) {
      return this.inventory.slots[Number(ref.replace("inventory:", ""))] ?? null;
    }

    if (ref.startsWith("craft:")) {
      return this.craftingGrid[Number(ref.replace("craft:", ""))] ?? null;
    }

    if (ref.startsWith("equip:")) {
      return this.inventory.armorSlots[ref.replace("equip:", "") as EquipmentSlot] ?? null;
    }

    if (ref === "offhand") {
      return this.inventory.offhand;
    }

    return null;
  }

  private setSlotByRef(ref: string, stack: ItemStack | null): void {
    if (ref.startsWith("inventory:")) {
      this.inventory.slots[Number(ref.replace("inventory:", ""))] = stack;
    }

    if (ref.startsWith("craft:")) {
      this.craftingGrid[Number(ref.replace("craft:", ""))] = stack;
    }

    if (ref.startsWith("equip:")) {
      this.inventory.armorSlots[ref.replace("equip:", "") as EquipmentSlot] = stack;
    }

    if (ref === "offhand") {
      this.inventory.offhand = stack;
    }
  }

  private slotAccepts(ref: string, stack: ItemStack): boolean {
    if (ref.startsWith("equip:")) {
      return canEquip(ref.replace("equip:", "") as EquipmentSlot, stack);
    }

    if (ref === "offhand") {
      return canEquip("offhand", stack);
    }

    return true;
  }

  private maxCraftable(recipe: (typeof RECIPES)[number]): number {
    const ingredients = recipeIngredients(recipe);
    let max = Infinity;

    for (const [item, count] of Object.entries(ingredients)) {
      const total = this.inventory.slots.reduce((sum, slot) => sum + (slot?.item === item ? slot.count : 0), 0);
      max = Math.min(max, Math.floor(total / count));
    }

    return Math.max(1, Math.min(64, Number.isFinite(max) ? max : 1));
  }

  private tierMeets(actual: ToolTier, required: ToolTier): boolean {
    const order: ToolTier[] = ["hand", "wood", "stone", "copper", "iron", "gold", "diamond"];
    return order.indexOf(actual) >= order.indexOf(required);
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

  private updateEnvironment(delta: number): void {
    const skyState = this.sky.update(this.elapsed, this.camera.position);
    const day = skyState.dayFactor;
    const surfaceHeight = this.world.terrainHeight(Math.floor(this.player.position.x), Math.floor(this.player.position.z));
    const underground = clamp((surfaceHeight - this.player.position.y - 3) / 16, 0, 1);
    const torchGlow = this.updateTorchLights(delta);
    const holdingTorch = selectedStack(this.inventory)?.item === "torch" || this.inventory.offhand?.item === "torch";
    const sunOffset = skyState.sunDirection.clone().multiplyScalar(88);

    this.dayFactor = day;
    this.undergroundFactor = underground;
    this.sunTarget.position.copy(this.player.position);
    this.sunLight.position.copy(this.player.position).add(sunOffset);
    this.sunLight.intensity = (0.08 + day * 2.25) * (1 - underground * 0.82);
    this.hemisphereLight.intensity = (0.12 + day * 0.56) * (1 - underground * 0.72) + torchGlow * 0.18;
    this.heldLight.intensity = holdingTorch && this.mode === "playing" ? 0.85 : 0;

    const fog = this.scene.fog;
    if (fog instanceof THREE.FogExp2) {
      const caveColor = new THREE.Color("#040608").lerp(new THREE.Color("#131e29"), torchGlow * 0.5);
      const skyColor = new THREE.Color("#131e29").lerp(new THREE.Color("#c8dde2"), day);
      fog.color.copy(skyColor.lerp(caveColor, underground * 0.78));
      fog.density = 0.012 + underground * 0.018 - day * 0.004;
    }
  }

  private updateTorchLights(delta: number): number {
    this.torchScanTimer -= delta;
    if (this.torchScanTimer > 0) {
      return this.nearbyTorchGlow;
    }

    this.torchScanTimer = 0.22;
    const origin = this.player.position;
    const torches: Array<{ distance: number; x: number; y: number; z: number }> = [];
    const radius = 12;
    const minX = Math.floor(origin.x) - radius;
    const maxX = Math.floor(origin.x) + radius;
    const minY = Math.max(0, Math.floor(origin.y) - 8);
    const maxY = Math.min(WORLD_HEIGHT - 1, Math.floor(origin.y) + 8);
    const minZ = Math.floor(origin.z) - radius;
    const maxZ = Math.floor(origin.z) + radius;

    for (let y = minY; y <= maxY; y += 1) {
      for (let z = minZ; z <= maxZ; z += 1) {
        for (let x = minX; x <= maxX; x += 1) {
          if (this.world.getBlock(x, y, z) !== BlockType.Torch) {
            continue;
          }
          const distance = Math.hypot(origin.x - (x + 0.5), origin.y - (y + 0.5), origin.z - (z + 0.5));
          if (distance <= radius) {
            torches.push({ distance, x, y, z });
          }
        }
      }
    }

    torches.sort((a, b) => a.distance - b.distance);
    this.nearbyTorchGlow = torches[0] ? clamp(1 - torches[0].distance / radius, 0, 1) : 0;

    for (let index = 0; index < this.torchLights.length; index += 1) {
      const light = this.torchLights[index];
      const torch = torches[index];
      if (!torch) {
        light.visible = false;
        continue;
      }

      light.visible = true;
      light.position.set(torch.x + 0.5, torch.y + 0.55, torch.z + 0.5);
      light.intensity = 1.35 - Math.min(0.55, torch.distance * 0.018);
    }

    return this.nearbyTorchGlow;
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
    this.saveState = "저장 대기";
  }

  private async saveNow(force = false): Promise<void> {
    if (!this.activeWorld || this.saving || (!force && !this.saveRequested)) {
      return;
    }

    this.saving = true;
    this.saveRequested = false;
    this.saveState = "저장 중";

    try {
      const now = Date.now();
      const inventoryForSave = normalizeInventory(this.inventory);
      for (const stack of this.craftingGrid) {
        if (stack) {
          addStack(inventoryForSave, { ...stack });
        }
      }
      const save: WorldSaveV2 = {
        ...this.activeWorld,
        version: 3,
        worldgenVersion: this.activeWorld.worldgenVersion ?? this.world.worldgenVersion,
        updatedAt: now,
        modified: this.world.exportModifiedBlocks(),
        player: this.player.snapshot(this.inventory.selectedHotbarSlot),
        inventory: inventoryForSave,
        survival: { ...this.survival.state },
        unlockedRecipes: [...this.unlockedRecipes],
        lootedChests: [...this.lootedChests],
        entities: this.mobs.snapshot(),
        gameRules: this.activeWorld.gameRules ?? { mobGriefing: true }
      };
      this.activeWorld = save;
      this.saveIndex = await this.saveSystem.upsertWorld(save);
      this.hud.setWorlds(this.worldSummaries());
      this.saveState = this.saveRequested ? "저장 대기" : "저장됨";
    } catch {
      this.saveState = "저장 오류";
      this.hud.showToast("저장에 실패했습니다");
    } finally {
      this.saving = false;
    }
  }

  private updateHud(): void {
    const position = this.player.position;
    const stats = this.world.getStats();
    const selected = selectedStack(this.inventory);
    const craftingResult = matchRecipeFromGrid(this.activeCraftingGrid(), this.craftingGridSize)?.result ?? null;
    const recipeViews: RecipeView[] = RECIPES.map((recipe) => ({
      recipe,
      craftable: canCraft(recipe, this.inventory, this.craftingGridSize),
      unlocked: recipeIsUnlocked(recipe, this.unlockedRecipes, this.inventory)
    }));

    this.hud.update({
      position: `좌표 ${Math.floor(position.x)} ${Math.floor(position.y)} ${Math.floor(position.z)} | ${this.world.seed}`,
      chunks: stats.chunks,
      mobs: this.mobs.count,
      fps: Math.round(this.fps),
      selectedStack: selected,
      inventory: this.inventory,
      survival: this.survival.state,
      day: clamp(this.sunLight.intensity / 2.37, 0, 1),
      saveState: this.saveState,
      miningProgress: this.mining?.progress ?? 0,
      selectedBlock: this.selectedHit?.block ?? null,
      activeWorldName: this.activeWorld?.name ?? "미리보기",
      recipes: recipeViews,
      craftingGrid: this.activeCraftingGrid(),
      craftingResult: craftingResult ? { ...craftingResult } : null,
      smeltingRecipes: SMELTING_RECIPES.map((recipe) => ({
        recipe,
        smeltable: canSmelt(recipe, this.inventory)
      }))
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
