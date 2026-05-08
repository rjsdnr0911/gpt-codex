import { InventoryState, countItems } from "./inventory";
import { ItemId, ITEM_DEFINITIONS, ItemStack } from "./items";

export type DimensionId = "overworld" | "nether" | "end";

export type QuestCategory = "main" | "side" | "combat" | "exploration" | "crafting";
export type QuestObjectiveType =
  | "item"
  | "crafted"
  | "smelted"
  | "block_mined"
  | "block_placed"
  | "mob_killed"
  | "dimension"
  | "discover"
  | "portal_ignited"
  | "food_count"
  | "armor_equipped";

export type QuestId =
  | "main_get_log"
  | "main_make_planks"
  | "main_make_crafting_table"
  | "main_make_wooden_pickaxe"
  | "main_mine_stone"
  | "main_make_stone_pickaxe"
  | "main_get_coal"
  | "main_make_torch"
  | "main_mine_iron"
  | "main_smelt_iron"
  | "main_make_iron_pickaxe"
  | "main_get_diamond"
  | "main_make_diamond_pickaxe"
  | "main_find_lava"
  | "main_make_bucket"
  | "main_make_obsidian"
  | "main_mine_obsidian"
  | "main_make_flint_steel"
  | "main_ignite_portal"
  | "main_enter_nether"
  | "road_find_fortress"
  | "road_kill_blaze"
  | "road_make_blaze_powder"
  | "road_kill_enderman"
  | "road_make_eye"
  | "road_find_stronghold"
  | "road_activate_end_portal"
  | "road_defeat_dragon"
  | "side_craft_shield"
  | "side_equip_iron_armor"
  | "side_craft_bow"
  | "side_arrow_stockpile"
  | "side_place_bed"
  | "side_food_stockpile"
  | "side_open_chest"
  | "side_kill_zombie"
  | "side_kill_skeleton"
  | "side_survive_creeper"
  | "side_place_torches"
  | "side_discover_ruined_portal";

export interface QuestObjective {
  type: QuestObjectiveType;
  target: string;
  required: number;
  progressTextKo: string;
}

export interface QuestReward {
  toastKo: string;
  items?: ItemStack[];
  xp?: number;
  unlockHints?: string[];
}

export interface QuestDefinition {
  id: QuestId;
  titleKo: string;
  descriptionKo: string;
  category: QuestCategory;
  prerequisites: QuestId[];
  objectives: QuestObjective[];
  rewards: QuestReward;
  hintItemIds: ItemId[];
  future?: boolean;
}

export interface QuestState {
  activeMainQuestId: QuestId | null;
  trackedSideQuestIds: QuestId[];
  completed: QuestId[];
  progress: Record<string, number>;
  xp: number;
  milestones: string[];
}

export interface QuestEvent {
  type: QuestObjectiveType;
  target: string;
  amount?: number;
}

export const QUESTS: QuestDefinition[] = [
  main("main_get_log", "첫 나무", "손으로 원목을 캐서 생존의 첫 재료를 확보하세요.", [], item("log", 1, "원목")),
  main("main_make_planks", "판자로 바꾸기", "원목을 판자로 가공하면 제작의 폭이 크게 넓어집니다.", ["main_get_log"], crafted("planks", 4, "판자 제작"), ["log", "planks"]),
  main(
    "main_make_crafting_table",
    "작업대 세우기",
    "2x2 제작으로 제작대를 만들고 더 큰 조합을 열어 보세요.",
    ["main_make_planks"],
    crafted("crafting_table", 1, "제작대 제작"),
    ["planks", "crafting_table"]
  ),
  main(
    "main_make_wooden_pickaxe",
    "첫 곡괭이",
    "판자와 막대기로 나무 곡괭이를 만들어 돌을 캘 준비를 하세요.",
    ["main_make_crafting_table"],
    crafted("wooden_pickaxe", 1, "나무 곡괭이 제작"),
    ["planks", "stick", "wooden_pickaxe"],
    { items: [{ item: "stick", count: 2 }], unlockHints: ["곡괭이 머리는 위 3칸, 손잡이는 가운데 줄입니다."] }
  ),
  main("main_mine_stone", "돌의 시대", "나무 곡괭이로 돌을 캐서 더 튼튼한 도구를 준비하세요.", ["main_make_wooden_pickaxe"], mined("stone", 8, "돌 채굴"), ["stone"]),
  main(
    "main_make_stone_pickaxe",
    "돌 곡괭이",
    "돌 곡괭이는 석탄과 철 광석을 안정적으로 캘 수 있습니다.",
    ["main_mine_stone"],
    crafted("stone_pickaxe", 1, "돌 곡괭이 제작"),
    ["stone", "stick", "stone_pickaxe"],
    { items: [{ item: "torch", count: 2 }] }
  ),
  main("main_get_coal", "빛의 재료", "석탄 광석을 찾아 캐세요. 밤과 동굴을 버티는 핵심입니다.", ["main_make_stone_pickaxe"], item("coal", 1, "석탄"), ["coal", "coal_ore"]),
  main("main_make_torch", "동굴을 밝히기", "석탄과 막대기로 횃불을 만들어 동굴 탐험을 시작하세요.", ["main_get_coal"], crafted("torch", 4, "횃불 제작"), ["coal", "stick", "torch"]),
  main("main_mine_iron", "철 광석 찾기", "지하에서 철 광석을 캐서 장비 단계로 넘어가세요.", ["main_make_torch"], item("raw_iron", 1, "철 원석"), ["raw_iron", "iron_ore"]),
  main(
    "main_smelt_iron",
    "철 주괴 제련",
    "화로에서 철 원석과 석탄을 사용해 철 주괴를 만드세요.",
    ["main_mine_iron"],
    smelted("iron_ingot", 1, "철 주괴 제련"),
    ["raw_iron", "coal", "furnace", "iron_ingot"],
    { items: [{ item: "bread", count: 1 }], unlockHints: ["화로는 돌 8개로 만들고, 석탄을 연료로 씁니다."] }
  ),
  main(
    "main_make_iron_pickaxe",
    "철 곡괭이",
    "철 곡괭이는 다이아몬드 채굴의 최소 조건입니다.",
    ["main_smelt_iron"],
    crafted("iron_pickaxe", 1, "철 곡괭이 제작"),
    ["iron_ingot", "stick", "iron_pickaxe"]
  ),
  main("main_get_diamond", "깊은 곳의 빛", "낮은 고도에서 다이아몬드를 찾아 캐세요.", ["main_make_iron_pickaxe"], item("diamond", 3, "다이아몬드"), ["diamond", "diamond_ore"]),
  main(
    "main_make_diamond_pickaxe",
    "흑요석을 캘 도구",
    "다이아몬드 곡괭이는 흑요석을 아이템으로 얻기 위한 열쇠입니다.",
    ["main_get_diamond"],
    crafted("diamond_pickaxe", 1, "다이아몬드 곡괭이 제작"),
    ["diamond", "stick", "diamond_pickaxe"]
  ),
  main("main_find_lava", "용암 발견", "깊은 동굴이나 지상 용암 웅덩이를 찾으세요.", ["main_make_diamond_pickaxe"], discover("lava", 1, "용암 발견"), ["lava_bucket", "bucket"]),
  main("main_make_bucket", "양동이 준비", "철 주괴 3개로 양동이를 만들어 물과 용암을 다룰 준비를 하세요.", ["main_find_lava"], crafted("bucket", 1, "양동이 제작"), ["iron_ingot", "bucket"]),
  main(
    "main_make_obsidian",
    "검은 문돌",
    "물과 용암을 만나게 해서 흑요석을 만드세요.",
    ["main_make_bucket"],
    placed("obsidian", 1, "흑요석 생성"),
    ["water_bucket", "lava_bucket", "obsidian"],
    { unlockHints: ["용암 옆에 물을 놓으면 용암이 흑요석으로 굳습니다."] }
  ),
  main(
    "main_mine_obsidian",
    "흑요석 채굴",
    "다이아몬드 곡괭이로 흑요석 10개 이상을 확보하세요.",
    ["main_make_obsidian"],
    item("obsidian", 10, "흑요석"),
    ["obsidian", "diamond_pickaxe"],
    { items: [{ item: "torch", count: 4 }], unlockHints: ["최소 4x5 외곽 프레임이면 지옥문이 됩니다."] }
  ),
  main(
    "main_make_flint_steel",
    "불을 붙이는 도구",
    "부싯돌과 철 주괴로 부싯돌과 부시를 만드세요.",
    ["main_mine_obsidian"],
    crafted("flint_and_steel", 1, "부싯돌과 부시 제작"),
    ["flint", "iron_ingot", "flint_and_steel"]
  ),
  main(
    "main_ignite_portal",
    "문에 불 붙이기",
    "흑요석 프레임 안쪽에 불을 붙여 지옥문을 여세요.",
    ["main_make_flint_steel"],
    objective("portal_ignited", "nether_portal", 1, "지옥문 점화"),
    ["obsidian", "flint_and_steel"]
  ),
  main(
    "main_enter_nether",
    "문 너머",
    "포털 안에 잠시 서서 지옥 차원 진입 기반을 확인하세요.",
    ["main_ignite_portal"],
    objective("dimension", "nether", 1, "지옥 진입"),
    ["flint_and_steel", "obsidian", "netherrack"],
    { unlockHints: ["지옥에서는 귀환 포털 위치를 기억하고, 네더 벽돌 구조물을 찾으면 블레이즈를 만날 수 있습니다."] }
  ),
  main(
    "road_find_fortress",
    "지옥 요새 수색",
    "네더 벽돌로 된 요새 통로를 찾아 블레이즈 사냥 준비를 하세요.",
    ["main_enter_nether"],
    discover("fortress", 1, "요새 발견"),
    ["torch", "nether_brick", "netherrack"],
    { items: [{ item: "bread", count: 1 }], unlockHints: ["네더 벽돌 구조물 안팎에서 블레이즈가 자주 나타납니다."] }
  ),
  main(
    "road_kill_blaze",
    "블레이즈 막대",
    "방패나 활을 준비하고 블레이즈를 처치해 막대를 얻으세요.",
    ["road_find_fortress"],
    killed("블레이즈", 1, "블레이즈 처치"),
    ["iron_sword", "shield", "bow", "blaze_rod"],
    { items: [{ item: "torch", count: 4 }] }
  ),
  main(
    "road_make_blaze_powder",
    "가루로 빻기",
    "블레이즈 막대를 가루로 바꾸면 엔더의 눈 재료가 됩니다.",
    ["road_kill_blaze"],
    crafted("blaze_powder", 2, "블레이즈 가루 제작"),
    ["blaze_rod", "blaze_powder"]
  ),
  main(
    "road_kill_enderman",
    "엔더 진주",
    "지상 밤이나 지옥의 드문 엔더맨을 쓰러뜨려 엔더 진주를 확보하세요.",
    ["road_make_blaze_powder"],
    item("ender_pearl", 1, "엔더 진주"),
    ["ender_pearl", "diamond_sword", "shield"]
  ),
  main(
    "road_make_eye",
    "엔더의 눈",
    "엔더 진주와 블레이즈 가루를 합쳐 요새 추적의 핵심 아이템을 만드세요.",
    ["road_kill_enderman"],
    crafted("eye_of_ender", 1, "엔더의 눈 제작"),
    ["ender_pearl", "blaze_powder", "eye_of_ender"],
    { unlockHints: ["다음 대형 업데이트에서는 엔더의 눈을 던져 지상 요새를 찾는 단계가 열립니다."] }
  ),
  future("road_find_stronghold", "이후: 요새 추적", "엔더의 눈을 던져 지상 요새를 찾습니다.", ["road_make_eye"], discover("stronghold", 1, "요새 발견"), ["eye_of_ender", "diamond_pickaxe"]),
  future("road_activate_end_portal", "이후: 엔드 포털", "엔더의 눈으로 엔드 포털을 활성화합니다.", ["road_find_stronghold"], objective("portal_ignited", "end_portal", 1, "엔드 포털 활성화"), ["diamond_sword"]),
  future("road_defeat_dragon", "이후: 드래곤", "엔드 수정과 드래곤을 상대해 엔딩을 봅니다.", ["road_activate_end_portal"], killed("dragon", 1, "드래곤 처치"), ["bow", "arrow"]),
  side("side_craft_shield", "방패 만들기", "철 주괴와 판자로 방패를 만들어 첫 원거리 공격에 대비하세요.", [], crafted("shield", 1, "방패 제작"), ["shield"]),
  side("side_equip_iron_armor", "철 방어구 장착", "철 방어구 한 부위를 입어 생존성을 올리세요.", ["main_smelt_iron"], objective("armor_equipped", "iron", 1, "철 방어구 장착"), ["iron_ingot"]),
  side("side_craft_bow", "활 만들기", "실과 막대기로 활을 만들면 스켈레톤과 크리퍼를 멀리서 견제할 수 있습니다.", [], crafted("bow", 1, "활 제작"), ["bow", "string"]),
  side("side_arrow_stockpile", "화살 16개", "깃털, 부싯돌, 막대기로 화살을 충분히 준비하세요.", ["side_craft_bow"], item("arrow", 16, "화살"), ["arrow", "flint", "feather"]),
  side("side_place_bed", "침대 놓기", "침대를 설치해 밤을 넘기고 스폰을 저장하세요.", [], placed("bed", 1, "침대 설치"), ["bed", "wool"]),
  side("side_food_stockpile", "식량 10개", "동물 사냥이나 상자 보급품으로 음식 10개를 확보하세요.", [], objective("food_count", "food", 10, "음식"), ["bread", "steak", "apple"]),
  side("side_open_chest", "상자 보급품", "버려진 캠프, 오두막, 던전, 폐허 포털의 상자를 열어 보세요.", [], discover("chest", 1, "상자 열기"), ["chest"]),
  side("side_kill_zombie", "전투 연습: 좀비", "좀비를 처치해 기본 근접 전투 감각을 익히세요.", [], killed("좀비", 1, "좀비 처치"), ["wooden_sword"]),
  side("side_kill_skeleton", "전투 연습: 스켈레톤", "방패나 활을 준비하고 스켈레톤을 처치하세요.", [], killed("스켈레톤", 1, "스켈레톤 처치"), ["shield", "bow"]),
  side("side_survive_creeper", "크리퍼 폭발 생존", "크리퍼 폭발 뒤에도 살아남으세요.", [], discover("creeper_survived", 1, "폭발 생존"), ["shield"]),
  side("side_place_torches", "동굴 안전 확보", "동굴이나 거점 주변에 횃불 10개를 설치하세요.", ["main_make_torch"], placed("torch", 10, "횃불 설치"), ["torch"]),
  side("side_discover_ruined_portal", "폐허 포털 발견", "지상 탐험 중 폐허 포털 흔적을 찾아보세요.", [], discover("ruined_portal", 1, "폐허 포털 발견"), ["obsidian", "chest"])
];

export function createQuestState(): QuestState {
  const state: QuestState = {
    activeMainQuestId: "main_get_log",
    trackedSideQuestIds: ["side_food_stockpile", "side_place_bed", "side_open_chest"],
    completed: [],
    progress: {},
    xp: 0,
    milestones: []
  };
  refreshTrackedQuests(state);
  return state;
}

export function normalizeQuestState(state?: Partial<QuestState> | null): QuestState {
  const normalized: QuestState = {
    activeMainQuestId: (state?.activeMainQuestId as QuestId | null) ?? "main_get_log",
    trackedSideQuestIds: ((state?.trackedSideQuestIds ?? []) as QuestId[]).filter((id) => Boolean(questById(id))),
    completed: ((state?.completed ?? []) as QuestId[]).filter((id) => Boolean(questById(id))),
    progress: { ...(state?.progress ?? {}) },
    xp: Math.max(0, Math.floor(state?.xp ?? 0)),
    milestones: [...(state?.milestones ?? [])]
  };
  refreshTrackedQuests(normalized);
  return normalized;
}

export function syncQuestState(state: QuestState, inventory: InventoryState, dimension: DimensionId): QuestDefinition[] {
  for (const quest of QUESTS) {
    quest.objectives.forEach((objectiveEntry, index) => {
      if (
        (objectiveEntry.type === "item" || objectiveEntry.type === "crafted" || objectiveEntry.type === "smelted") &&
        isItemId(objectiveEntry.target)
      ) {
        state.progress[progressKey(quest.id, index)] = Math.max(
          state.progress[progressKey(quest.id, index)] ?? 0,
          countItems(inventory, objectiveEntry.target)
        );
      } else if (objectiveEntry.type === "food_count") {
        state.progress[progressKey(quest.id, index)] = countFood(inventory);
      } else if (objectiveEntry.type === "armor_equipped") {
        state.progress[progressKey(quest.id, index)] = hasArmor(inventory, objectiveEntry.target) ? 1 : 0;
      } else if (objectiveEntry.type === "dimension") {
        state.progress[progressKey(quest.id, index)] = dimension === objectiveEntry.target ? 1 : state.progress[progressKey(quest.id, index)] ?? 0;
      }
    });
  }

  return completeReadyQuests(state);
}

export function applyQuestEvent(
  state: QuestState,
  event: QuestEvent,
  inventory: InventoryState,
  dimension: DimensionId
): QuestDefinition[] {
  const amount = event.amount ?? 1;
  for (const quest of QUESTS) {
    quest.objectives.forEach((objectiveEntry, index) => {
      if (objectiveEntry.type !== event.type || objectiveEntry.target !== event.target) {
        return;
      }
      const key = progressKey(quest.id, index);
      state.progress[key] = Math.min(objectiveEntry.required, (state.progress[key] ?? 0) + amount);
    });
  }

  const completed = syncQuestState(state, inventory, dimension);
  refreshTrackedQuests(state);
  return completed;
}

export function getQuest(id: QuestId | null): QuestDefinition | null {
  return id ? questById(id) : null;
}

export function getActiveMainQuest(state: QuestState): QuestDefinition | null {
  return getQuest(state.activeMainQuestId);
}

export function getTrackedSideQuests(state: QuestState): QuestDefinition[] {
  return state.trackedSideQuestIds.map((id) => questById(id)).filter(Boolean) as QuestDefinition[];
}

export function questProgressText(quest: QuestDefinition, state: QuestState): string {
  return quest.objectives
    .map((entry, index) => {
      const progress = Math.min(entry.required, Math.floor(state.progress[progressKey(quest.id, index)] ?? 0));
      return `${entry.progressTextKo} ${progress}/${entry.required}`;
    })
    .join(" · ");
}

export function questItemUsage(itemId: ItemId): QuestDefinition[] {
  return QUESTS.filter((quest) => quest.hintItemIds.includes(itemId) || quest.objectives.some((entry) => entry.target === itemId));
}

function completeReadyQuests(state: QuestState): QuestDefinition[] {
  const completed: QuestDefinition[] = [];
  let changed = true;

  while (changed) {
    changed = false;
    for (const quest of QUESTS) {
      if (state.completed.includes(quest.id) || quest.future || !prerequisitesMet(quest, state)) {
        continue;
      }

      const ready = quest.objectives.every((entry, index) => (state.progress[progressKey(quest.id, index)] ?? 0) >= entry.required);
      if (!ready) {
        continue;
      }

      state.completed.push(quest.id);
      state.xp += quest.rewards.xp ?? (quest.category === "main" ? 25 : 10);
      for (const hint of quest.rewards.unlockHints ?? []) {
        if (!state.milestones.includes(hint)) {
          state.milestones.push(hint);
        }
      }
      completed.push(quest);
      changed = true;
    }
  }

  refreshTrackedQuests(state);
  return completed;
}

function refreshTrackedQuests(state: QuestState): void {
  const nextMain = QUESTS.find((quest) => quest.category === "main" && !quest.future && !state.completed.includes(quest.id) && prerequisitesMet(quest, state));
  state.activeMainQuestId = nextMain?.id ?? null;

  const current = state.trackedSideQuestIds.filter((id) => {
    const quest = questById(id);
    return quest && !quest.future && !state.completed.includes(id) && prerequisitesMet(quest, state);
  });
  const extras = QUESTS.filter(
    (quest) =>
      quest.category !== "main" &&
      !quest.future &&
      !state.completed.includes(quest.id) &&
      prerequisitesMet(quest, state) &&
      !current.includes(quest.id)
  )
    .slice(0, 3)
    .map((quest) => quest.id);
  state.trackedSideQuestIds = [...current, ...extras].slice(0, 3);
}

function prerequisitesMet(quest: QuestDefinition, state: QuestState): boolean {
  return quest.prerequisites.every((id) => state.completed.includes(id));
}

function progressKey(id: QuestId, index: number): string {
  return `${id}:${index}`;
}

function questById(id: QuestId | string | null): QuestDefinition | null {
  return QUESTS.find((quest) => quest.id === id) ?? null;
}

function countFood(inventory: InventoryState): number {
  return inventory.slots.reduce((sum, stack) => sum + (stack && ITEM_DEFINITIONS[stack.item].food ? stack.count : 0), 0);
}

function hasArmor(inventory: InventoryState, target: string): boolean {
  return Object.values(inventory.armorSlots).some((stack) => Boolean(stack?.item.startsWith(`${target}_`)));
}

function isItemId(value: string): value is ItemId {
  return value in ITEM_DEFINITIONS;
}

function main(
  id: QuestId,
  titleKo: string,
  descriptionKo: string,
  prerequisites: QuestId[],
  objectiveEntry: QuestObjective,
  hintItemIds: ItemId[] = [],
  reward: Partial<QuestReward> = {}
): QuestDefinition {
  return makeQuest(id, "main", titleKo, descriptionKo, prerequisites, objectiveEntry, hintItemIds, reward);
}

function side(
  id: QuestId,
  titleKo: string,
  descriptionKo: string,
  prerequisites: QuestId[],
  objectiveEntry: QuestObjective,
  hintItemIds: ItemId[] = [],
  reward: Partial<QuestReward> = {}
): QuestDefinition {
  const category: QuestCategory =
    objectiveEntry.type === "mob_killed" || id === "side_survive_creeper"
      ? "combat"
      : objectiveEntry.type === "discover" || id === "side_place_bed"
        ? "exploration"
        : objectiveEntry.type === "crafted" || objectiveEntry.type === "block_placed"
          ? "crafting"
          : "side";
  return makeQuest(id, category, titleKo, descriptionKo, prerequisites, objectiveEntry, hintItemIds, reward);
}

function future(
  id: QuestId,
  titleKo: string,
  descriptionKo: string,
  prerequisites: QuestId[],
  objectiveEntry: QuestObjective,
  hintItemIds: ItemId[]
): QuestDefinition {
  return { ...makeQuest(id, "main", titleKo, descriptionKo, prerequisites, objectiveEntry, hintItemIds), future: true };
}

function makeQuest(
  id: QuestId,
  category: QuestCategory,
  titleKo: string,
  descriptionKo: string,
  prerequisites: QuestId[],
  objectiveEntry: QuestObjective,
  hintItemIds: ItemId[],
  reward: Partial<QuestReward> = {}
): QuestDefinition {
  return {
    id,
    titleKo,
    descriptionKo,
    category,
    prerequisites,
    objectives: [objectiveEntry],
    rewards: {
      toastKo: reward.toastKo ?? `${titleKo} 완료`,
      items: reward.items,
      xp: reward.xp,
      unlockHints: reward.unlockHints
    },
    hintItemIds
  };
}

function item(target: string, required: number, label: string): QuestObjective {
  return objective("item", target, required, label);
}

function crafted(target: string, required: number, label: string): QuestObjective {
  return objective("crafted", target, required, label);
}

function smelted(target: string, required: number, label: string): QuestObjective {
  return objective("smelted", target, required, label);
}

function mined(target: string, required: number, label: string): QuestObjective {
  return objective("block_mined", target, required, label);
}

function placed(target: string, required: number, label: string): QuestObjective {
  return objective("block_placed", target, required, label);
}

function killed(target: string, required: number, label: string): QuestObjective {
  return objective("mob_killed", target, required, label);
}

function discover(target: string, required: number, label: string): QuestObjective {
  return objective("discover", target, required, label);
}

function objective(type: QuestObjectiveType, target: string, required: number, label: string): QuestObjective {
  return {
    type,
    target,
    required,
    progressTextKo: label
  };
}
