export interface PointerState {
  locked: boolean;
}

export interface MouseLook {
  movementX: number;
  movementY: number;
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

  requestPointerLock(): void {
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
    return this.keys.has(code);
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
    this.element.addEventListener("mousedown", this.handleMouseDown);
    window.addEventListener("mouseup", this.handleMouseUp);
    this.element.addEventListener("wheel", this.handleWheel, { passive: false });
    this.element.addEventListener("contextmenu", this.preventContextMenu);
  }

  private readonly handleKeyDown = (event: KeyboardEvent): void => {
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
    this.keys.delete(event.code);
  };

  private readonly handleBlur = (): void => {
    this.keys.clear();
    this.pressed.clear();
    this.primaryHeld = false;
    this.secondaryHeld = false;
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

  private readonly handleMouseDown = (event: MouseEvent): void => {
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

  private setSelectedSlot(slot: number): void {
    this.selectedSlot = slot;
    this.onSelectedSlotChange?.(slot);
  }
}
