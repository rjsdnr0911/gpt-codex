import { describe, expect, it } from "vitest";
import {
  HOTBAR_START,
  addStack,
  clickSlot,
  createInventoryState,
  moveSlotStack,
  shiftClickSlot
} from "./inventory";

describe("inventory", () => {
  it("adds new pickups to the hotbar before storage", () => {
    const inventory = createInventoryState();

    const leftover = addStack(inventory, { item: "log", count: 3 });

    expect(leftover).toBeNull();
    expect(inventory.slots[HOTBAR_START]).toEqual({ item: "log", count: 3 });
    expect(inventory.slots[0]).toBeNull();
  });

  it("fills hotbar stacks before storage stacks when picking up matching items", () => {
    const inventory = createInventoryState();
    inventory.slots[0] = { item: "log", count: 63 };
    inventory.slots[HOTBAR_START] = { item: "log", count: 62 };

    const leftover = addStack(inventory, { item: "log", count: 4 });

    expect(leftover).toBeNull();
    expect(inventory.slots[HOTBAR_START]).toEqual({ item: "log", count: 64 });
    expect(inventory.slots[0]).toEqual({ item: "log", count: 64 });
    expect(inventory.slots[HOTBAR_START + 1]).toEqual({ item: "log", count: 1 });
  });

  it("splits a slot with right click", () => {
    const inventory = createInventoryState();
    inventory.slots[0] = { item: "planks", count: 5 };

    clickSlot(inventory, 0, 2);

    expect(inventory.cursor).toEqual({ item: "planks", count: 3 });
    expect(inventory.slots[0]).toEqual({ item: "planks", count: 2 });
  });

  it("shift-click moves storage items to the hotbar", () => {
    const inventory = createInventoryState();
    inventory.slots[0] = { item: "stone", count: 12 };

    shiftClickSlot(inventory, 0);

    expect(inventory.slots[0]).toBeNull();
    expect(inventory.slots[HOTBAR_START]).toEqual({ item: "stone", count: 12 });
  });

  it("drag-moving merges compatible stacks", () => {
    const inventory = createInventoryState();
    inventory.slots[0] = { item: "log", count: 10 };
    inventory.slots[1] = { item: "log", count: 60 };

    moveSlotStack(inventory, 0, 1);

    expect(inventory.slots[0]).toEqual({ item: "log", count: 6 });
    expect(inventory.slots[1]).toEqual({ item: "log", count: 64 });
  });
});
