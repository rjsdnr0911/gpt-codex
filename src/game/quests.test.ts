import { describe, expect, it } from "vitest";
import { addStack, createInventoryState } from "./inventory";
import { applyQuestEvent, createQuestState, syncQuestState } from "./quests";

describe("quests", () => {
  it("advances the first survival quests from inventory and crafting events", () => {
    const inventory = createInventoryState();
    const quests = createQuestState();

    addStack(inventory, { item: "log", count: 1 });
    let completed = syncQuestState(quests, inventory, "overworld");
    expect(completed.map((quest) => quest.id)).toContain("main_get_log");
    expect(quests.activeMainQuestId).toBe("main_make_planks");

    addStack(inventory, { item: "planks", count: 4 });
    completed = applyQuestEvent(quests, { type: "crafted", target: "planks", amount: 4 }, inventory, "overworld");
    expect(completed.map((quest) => quest.id)).toContain("main_make_planks");
    expect(quests.activeMainQuestId).toBe("main_make_crafting_table");
  });

  it("completes portal entry once the nether dimension is reached", () => {
    const inventory = createInventoryState();
    const quests = createQuestState();
    quests.completed.push(
      "main_get_log",
      "main_make_planks",
      "main_make_crafting_table",
      "main_make_wooden_pickaxe",
      "main_mine_stone",
      "main_make_stone_pickaxe",
      "main_get_coal",
      "main_make_torch",
      "main_mine_iron",
      "main_smelt_iron",
      "main_make_iron_pickaxe",
      "main_get_diamond",
      "main_make_diamond_pickaxe",
      "main_find_lava",
      "main_make_bucket",
      "main_make_obsidian",
      "main_mine_obsidian",
      "main_make_flint_steel",
      "main_ignite_portal"
    );

    const completed = applyQuestEvent(quests, { type: "dimension", target: "nether" }, inventory, "nether");

    expect(completed.map((quest) => quest.id)).toContain("main_enter_nether");
  });

  it("continues the main quest line through blaze powder and the first eye of ender", () => {
    const inventory = createInventoryState();
    const quests = createQuestState();
    quests.completed.push(
      "main_get_log",
      "main_make_planks",
      "main_make_crafting_table",
      "main_make_wooden_pickaxe",
      "main_mine_stone",
      "main_make_stone_pickaxe",
      "main_get_coal",
      "main_make_torch",
      "main_mine_iron",
      "main_smelt_iron",
      "main_make_iron_pickaxe",
      "main_get_diamond",
      "main_make_diamond_pickaxe",
      "main_find_lava",
      "main_make_bucket",
      "main_make_obsidian",
      "main_mine_obsidian",
      "main_make_flint_steel",
      "main_ignite_portal",
      "main_enter_nether"
    );

    let completed = applyQuestEvent(quests, { type: "discover", target: "fortress" }, inventory, "nether");
    expect(completed.map((quest) => quest.id)).toContain("road_find_fortress");

    completed = applyQuestEvent(quests, { type: "mob_killed", target: "블레이즈" }, inventory, "nether");
    expect(completed.map((quest) => quest.id)).toContain("road_kill_blaze");

    addStack(inventory, { item: "blaze_powder", count: 2 });
    completed = applyQuestEvent(quests, { type: "crafted", target: "blaze_powder", amount: 2 }, inventory, "nether");
    expect(completed.map((quest) => quest.id)).toContain("road_make_blaze_powder");

    addStack(inventory, { item: "ender_pearl", count: 1 });
    completed = syncQuestState(quests, inventory, "nether");
    expect(completed.map((quest) => quest.id)).toContain("road_kill_enderman");

    addStack(inventory, { item: "eye_of_ender", count: 1 });
    completed = applyQuestEvent(quests, { type: "crafted", target: "eye_of_ender" }, inventory, "nether");
    expect(completed.map((quest) => quest.id)).toContain("road_make_eye");

    completed = applyQuestEvent(quests, { type: "discover", target: "stronghold" }, inventory, "overworld");
    expect(completed.map((quest) => quest.id)).toContain("road_find_stronghold");

    completed = applyQuestEvent(quests, { type: "portal_ignited", target: "end_portal" }, inventory, "overworld");
    expect(completed.map((quest) => quest.id)).toContain("road_activate_end_portal");
  });
});
