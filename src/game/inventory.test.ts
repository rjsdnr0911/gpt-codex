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
  it("merges stacks before using empty slots", () => {
    const inventory = createInventoryState();
    inventory.slots[0] = { item: "log", count: 63 };

    const leftover = addStack(inventory, { item: "log", count: 3 });

    expect(leftover).toBeNull();
    expect(inventory.slots[0]).toEqual({ item: "log", count: 64 });
    expect(inventory.slots[1]).toEqual({ item: "log", count: 2 });
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
