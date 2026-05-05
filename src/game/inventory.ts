import { cloneStack, ItemId, ItemStack, maxStackFor, stacksMatch } from "./items";

export const INVENTORY_SIZE = 36;
export const HOTBAR_START = 27;
export const HOTBAR_SIZE = 9;

export interface InventoryState {
  slots: Array<ItemStack | null>;
  cursor: ItemStack | null;
  selectedHotbarSlot: number;
}

export function createInventoryState(): InventoryState {
  return {
    slots: Array.from({ length: INVENTORY_SIZE }, () => null),
    cursor: null,
    selectedHotbarSlot: 0
  };
}

export function normalizeInventory(state: InventoryState): InventoryState {
  const slots = Array.from({ length: INVENTORY_SIZE }, (_, index) => cloneStack(state.slots[index] ?? null));
  return {
    slots,
    cursor: cloneStack(state.cursor),
    selectedHotbarSlot: Math.max(0, Math.min(HOTBAR_SIZE - 1, state.selectedHotbarSlot ?? 0))
  };
}

export function selectedStack(state: InventoryState): ItemStack | null {
  return state.slots[HOTBAR_START + state.selectedHotbarSlot] ?? null;
}

export function addStack(state: InventoryState, incoming: ItemStack): ItemStack | null {
  let remaining: ItemStack = { ...incoming };

  for (const slot of state.slots) {
    if (!slot || !stacksMatch(slot, remaining)) {
      continue;
    }

    const max = maxStackFor(slot.item);
    const move = Math.min(max - slot.count, remaining.count);
    slot.count += move;
    remaining.count -= move;

    if (remaining.count <= 0) {
      return null;
    }
  }

  for (let index = 0; index < state.slots.length; index += 1) {
    if (state.slots[index]) {
      continue;
    }

    const move = Math.min(maxStackFor(remaining.item), remaining.count);
    state.slots[index] = { ...remaining, count: move };
    remaining.count -= move;

    if (remaining.count <= 0) {
      return null;
    }
  }

  return remaining;
}

export function removeItems(state: InventoryState, item: ItemId, count: number): boolean {
  if (countItems(state, item) < count) {
    return false;
  }

  let remaining = count;

  for (const slot of state.slots) {
    if (!slot || slot.item !== item) {
      continue;
    }

    const take = Math.min(slot.count, remaining);
    slot.count -= take;
    remaining -= take;

    if (slot.count <= 0) {
      const index = state.slots.indexOf(slot);
      state.slots[index] = null;
    }

    if (remaining <= 0) {
      return true;
    }
  }

  return true;
}

export function countItems(state: InventoryState, item: ItemId): number {
  return state.slots.reduce((sum, slot) => sum + (slot?.item === item ? slot.count : 0), 0);
}

export function clickSlot(state: InventoryState, index: number, button: 0 | 2): void {
  const slot = state.slots[index] ?? null;
  const cursor = state.cursor;

  if (button === 0) {
    if (!cursor) {
      state.cursor = slot;
      state.slots[index] = null;
      return;
    }

    if (!slot) {
      state.slots[index] = cursor;
      state.cursor = null;
      return;
    }

    if (stacksMatch(slot, cursor)) {
      const max = maxStackFor(slot.item);
      const move = Math.min(max - slot.count, cursor.count);
      slot.count += move;
      cursor.count -= move;

      if (cursor.count <= 0) {
        state.cursor = null;
      }
      return;
    }

    state.slots[index] = cursor;
    state.cursor = slot;
    return;
  }

  if (!cursor && slot) {
    const take = Math.ceil(slot.count / 2);
    state.cursor = { ...slot, count: take };
    slot.count -= take;
    if (slot.count <= 0) {
      state.slots[index] = null;
    }
    return;
  }

  if (cursor && !slot) {
    state.slots[index] = { ...cursor, count: 1 };
    cursor.count -= 1;
    if (cursor.count <= 0) {
      state.cursor = null;
    }
    return;
  }

  if (cursor && slot && stacksMatch(slot, cursor) && slot.count < maxStackFor(slot.item)) {
    slot.count += 1;
    cursor.count -= 1;
    if (cursor.count <= 0) {
      state.cursor = null;
    }
  }
}

export function shiftClickSlot(state: InventoryState, index: number): void {
  const slot = state.slots[index];

  if (!slot) {
    return;
  }

  const sourceHotbar = index >= HOTBAR_START;
  const ranges = sourceHotbar ? [[0, HOTBAR_START]] : [[HOTBAR_START, INVENTORY_SIZE], [0, HOTBAR_START]];
  let moving = { ...slot };
  state.slots[index] = null;

  for (const [start, end] of ranges) {
    for (let target = start; target < end; target += 1) {
      const targetSlot = state.slots[target];
      if (!targetSlot || !stacksMatch(targetSlot, moving)) {
        continue;
      }

      const move = Math.min(maxStackFor(targetSlot.item) - targetSlot.count, moving.count);
      targetSlot.count += move;
      moving.count -= move;

      if (moving.count <= 0) {
        return;
      }
    }

    for (let target = start; target < end; target += 1) {
      if (state.slots[target]) {
        continue;
      }

      const move = Math.min(maxStackFor(moving.item), moving.count);
      state.slots[target] = { ...moving, count: move };
      moving.count -= move;

      if (moving.count <= 0) {
        return;
      }
    }
  }

  state.slots[index] = moving;
}

export function swapWithHotbar(state: InventoryState, index: number, hotbarSlot: number): void {
  const hotbarIndex = HOTBAR_START + hotbarSlot;
  const temp = state.slots[hotbarIndex];
  state.slots[hotbarIndex] = state.slots[index];
  state.slots[index] = temp;
}
