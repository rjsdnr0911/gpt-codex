export interface PointerState {
  locked: boolean;
}

export interface MouseLook {
  movementX: number;
  movementY: number;
}

export interface MoveAxis {
  strafe: number;
  forward: number;
}

export interface MouseActions {
  primary: boolean;
  primaryHeld: boolean;
  secondary: boolean;
  secondaryHeld: boolean;
}

export class InputController {
  readonly keys = new Set<string>();
  selectedSlot = 0;
  onPointerLockChange?: (state: PointerState) => void;
  onSelectedSlotChange?: (slot: number) => void;

  private movementX = 0;
  private movementY = 0;
  private touchLookActive = false;
  private touchLookPointerId: number | null = null;
  private touchLookX = 0;
  private touchLookY = 0;
  private touchMouseBlockUntil = 0;
  private virtualMove: MoveAxis = { strafe: 0, forward: 0 };
  private readonly virtualKeys = new Set<string>();
  private primaryQueued = false;
  private secondaryQueued = false;
  private primaryHeld = false;
  private secondaryHeld = false;
  private readonly pressed = new Set<string>();
  private readonly element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
    this.attach();
  }

  get pointerLocked(): boolean {
    return document.pointerLockElement === this.element;
  }

  get touchControlsPreferred(): boolean {
    const compactTouchScreen = navigator.maxTouchPoints > 0 && Math.min(window.innerWidth, window.innerHeight) <= 900;
    return (
      compactTouchScreen ||
      window.matchMedia?.("(pointer: coarse)")?.matches === true ||
      this.touchLookActive
    );
  }

  requestPointerLock(): void {
    if (this.touchControlsPreferred) {
      return;
    }
    void this.element.requestPointerLock();
  }

  consumeLook(): MouseLook {
    const look = {
      movementX: this.movementX,
      movementY: this.movementY
    };
    this.movementX = 0;
    this.movementY = 0;
    return look;
  }

  consumeActions(): MouseActions {
    const actions = {
      primary: this.primaryQueued,
      primaryHeld: this.primaryHeld,
      secondary: this.secondaryQueued,
      secondaryHeld: this.secondaryHeld
    };
    this.primaryQueued = false;
    this.secondaryQueued = false;
    return actions;
  }

  isDown(code: string): boolean {
    return this.keys.has(code) || this.virtualKeys.has(code);
  }

  moveAxis(): MoveAxis {
    let strafe = this.virtualMove.strafe;
    let forward = this.virtualMove.forward;

    if (this.keys.has("KeyW")) {
      forward += 1;
    }
    if (this.keys.has("KeyS")) {
      forward -= 1;
    }
    if (this.keys.has("KeyD")) {
      strafe += 1;
    }
    if (this.keys.has("KeyA")) {
      strafe -= 1;
    }

    const length = Math.hypot(strafe, forward);
    if (length > 1) {
      strafe /= length;
      forward /= length;
    }

    return { strafe, forward };
  }

  setVirtualMove(strafe: number, forward: number): void {
    const length = Math.hypot(strafe, forward);
    if (length > 1) {
      this.virtualMove = { strafe: strafe / length, forward: forward / length };
      return;
    }
    this.virtualMove = { strafe, forward };
  }

  setVirtualKey(code: string, pressed: boolean): void {
    if (pressed) {
      if (!this.virtualKeys.has(code) && !this.keys.has(code)) {
        this.pressed.add(code);
      }
      this.virtualKeys.add(code);
      return;
    }

    this.virtualKeys.delete(code);
  }

  setVirtualAction(action: "primary" | "secondary", pressed: boolean): void {
    if (action === "primary") {
      if (pressed && !this.primaryHeld) {
        this.primaryQueued = true;
      }
      this.primaryHeld = pressed;
      return;
    }

    if (pressed && !this.secondaryHeld) {
      this.secondaryQueued = true;
    }
    this.secondaryHeld = pressed;
  }

  setSelectedSlot(slot: number): void {
    this.selectedSlot = Math.max(0, Math.min(8, slot));
    this.onSelectedSlotChange?.(this.selectedSlot);
  }

  consumePressed(code: string): boolean {
    const pressed = this.pressed.has(code);
    this.pressed.delete(code);
    return pressed;
  }

  dispose(): void {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
    window.removeEventListener("blur", this.handleBlur);
    document.removeEventListener("pointerlockchange", this.handlePointerLockChange);
    document.removeEventListener("mousemove", this.handleMouseMove);
    this.element.removeEventListener("pointerdown", this.handlePointerDown);
    window.removeEventListener("pointermove", this.handlePointerMove);
    window.removeEventListener("pointerup", this.handlePointerUp);
    window.removeEventListener("pointercancel", this.handlePointerUp);
    this.element.removeEventListener("mousedown", this.handleMouseDown);
    window.removeEventListener("mouseup", this.handleMouseUp);
    this.element.removeEventListener("wheel", this.handleWheel);
    this.element.removeEventListener("contextmenu", this.preventContextMenu);
  }

  private attach(): void {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
    window.addEventListener("blur", this.handleBlur);
    document.addEventListener("pointerlockchange", this.handlePointerLockChange);
    document.addEventListener("mousemove", this.handleMouseMove);
    this.element.addEventListener("pointerdown", this.handlePointerDown);
    window.addEventListener("pointermove", this.handlePointerMove, { passive: false });
    window.addEventListener("pointerup", this.handlePointerUp);
    window.addEventListener("pointercancel", this.handlePointerUp);
    this.element.addEventListener("mousedown", this.handleMouseDown);
    window.addEventListener("mouseup", this.handleMouseUp);
    this.element.addEventListener("wheel", this.handleWheel, { passive: false });
    this.element.addEventListener("contextmenu", this.preventContextMenu);
  }

  private readonly handleKeyDown = (event: KeyboardEvent): void => {
    if (this.shouldCaptureKeyboard(event)) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.isEditableTarget(event.target)) {
      return;
    }

    if (!this.keys.has(event.code)) {
      this.pressed.add(event.code);
    }

    this.keys.add(event.code);

    if (event.code.startsWith("Digit")) {
      const digit = Number(event.code.replace("Digit", ""));
      if (digit >= 1 && digit <= 9) {
        this.setSelectedSlot(digit - 1);
      }
    }
  };

  private readonly handleKeyUp = (event: KeyboardEvent): void => {
    if (this.shouldCaptureKeyboard(event)) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.isEditableTarget(event.target)) {
      return;
    }

    this.keys.delete(event.code);
  };

  private readonly handleBlur = (): void => {
    this.keys.clear();
    this.pressed.clear();
    this.virtualKeys.clear();
    this.virtualMove = { strafe: 0, forward: 0 };
    this.primaryHeld = false;
    this.secondaryHeld = false;
    this.touchLookActive = false;
    this.touchLookPointerId = null;
  };

  private readonly handlePointerLockChange = (): void => {
    this.onPointerLockChange?.({ locked: this.pointerLocked });
  };

  private readonly handleMouseMove = (event: MouseEvent): void => {
    if (!this.pointerLocked) {
      return;
    }

    this.movementX += event.movementX;
    this.movementY += event.movementY;
  };

  private readonly handlePointerDown = (event: PointerEvent): void => {
    if (event.pointerType === "mouse") {
      return;
    }

    this.touchMouseBlockUntil = Date.now() + 700;
    this.touchLookActive = true;
    this.touchLookPointerId = event.pointerId;
    this.touchLookX = event.clientX;
    this.touchLookY = event.clientY;
    this.element.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  };

  private readonly handlePointerMove = (event: PointerEvent): void => {
    if (!this.touchLookActive || event.pointerId !== this.touchLookPointerId) {
      return;
    }

    const dx = event.clientX - this.touchLookX;
    const dy = event.clientY - this.touchLookY;
    this.touchLookX = event.clientX;
    this.touchLookY = event.clientY;
    this.movementX += dx * 1.85;
    this.movementY += dy * 1.85;
    event.preventDefault();
  };

  private readonly handlePointerUp = (event: PointerEvent): void => {
    if (event.pointerId !== this.touchLookPointerId) {
      return;
    }

    this.touchLookActive = false;
    this.touchLookPointerId = null;
    event.preventDefault();
  };

  private readonly handleMouseDown = (event: MouseEvent): void => {
    if (Date.now() < this.touchMouseBlockUntil) {
      event.preventDefault();
      return;
    }

    if (!this.pointerLocked) {
      this.requestPointerLock();
      return;
    }

    if (event.button === 0) {
      this.primaryQueued = true;
      this.primaryHeld = true;
    }

    if (event.button === 2) {
      this.secondaryQueued = true;
      this.secondaryHeld = true;
    }
  };

  private readonly handleMouseUp = (event: MouseEvent): void => {
    if (event.button === 0) {
      this.primaryHeld = false;
    }

    if (event.button === 2) {
      this.secondaryHeld = false;
    }
  };

  private readonly handleWheel = (event: WheelEvent): void => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    this.setSelectedSlot((this.selectedSlot + direction + 9) % 9);
  };

  private readonly preventContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
  };

  private shouldCaptureKeyboard(event: KeyboardEvent): boolean {
    if (this.isEditableTarget(event.target)) {
      return false;
    }

    const gameCodes = new Set([
      "KeyW",
      "KeyA",
      "KeyS",
      "KeyD",
      "Space",
      "ShiftLeft",
      "ShiftRight",
      "ControlLeft",
      "ControlRight",
      "KeyR",
      "KeyE",
      "Escape",
      "Tab",
      "Digit1",
      "Digit2",
      "Digit3",
      "Digit4",
      "Digit5",
      "Digit6",
      "Digit7",
      "Digit8",
      "Digit9"
    ]);

    return this.pointerLocked || gameCodes.has(event.code) || event.ctrlKey || event.metaKey;
  }

  private isEditableTarget(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) {
      return false;
    }

    return (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target.isContentEditable ||
      target instanceof HTMLSelectElement
    );
  }
}
