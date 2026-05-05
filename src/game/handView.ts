import * as THREE from "three";
import { ITEM_DEFINITIONS, ItemStack } from "./items";

export class HandView {
  private readonly root = new THREE.Group();
  private readonly hand = new THREE.Group();
  private readonly itemRoot = new THREE.Group();
  private readonly skinMaterial = this.makeMaterial("#c98f64");
  private readonly sleeveMaterial = this.makeMaterial("#3f78b5");

  private activeKey = "";
  private swing = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    this.root.name = "FirstPersonHand";
    this.root.position.set(0.43, -0.5, -0.78);
    this.root.rotation.set(-0.18, -0.16, 0.02);
    this.root.renderOrder = 30;

    this.hand.position.set(0.08, -0.04, 0.12);
    this.hand.rotation.set(0.2, -0.22, -0.12);

    const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.2, 0.46), this.sleeveMaterial);
    sleeve.position.set(0.02, -0.06, 0.2);
    sleeve.rotation.x = -0.2;

    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.18, 0.22), this.skinMaterial);
    palm.position.set(0, 0.02, -0.06);

    this.hand.add(sleeve, palm);
    this.root.add(this.hand, this.itemRoot);
    camera.add(this.root);
  }

  update(delta: number, stack: ItemStack | null, visible: boolean, miningProgress: number): void {
    this.root.visible = visible;
    if (!visible) {
      return;
    }

    this.swing = Math.max(0, this.swing - delta * 5.5);
    if (miningProgress > 0) {
      this.swing = Math.max(this.swing, Math.min(1, miningProgress));
    }

    const key = stack ? `${stack.item}:${stack.durability ?? ""}` : "";
    if (key !== this.activeKey) {
      this.activeKey = key;
      this.rebuildItem(stack);
      this.swing = 0.45;
    }

    const bob = Math.sin(performance.now() * 0.006) * 0.012;
    const swingOffset = Math.sin(this.swing * Math.PI) * 0.22;
    this.root.position.set(0.43 - swingOffset * 0.08, -0.5 + bob - swingOffset * 0.06, -0.78 - swingOffset * 0.14);
    this.root.rotation.set(-0.18 - swingOffset * 0.48, -0.16 - swingOffset * 0.12, 0.02 + swingOffset * 0.16);
  }

  private rebuildItem(stack: ItemStack | null): void {
    this.itemRoot.clear();
    if (!stack) {
      return;
    }

    const definition = ITEM_DEFINITIONS[stack.item];
    const material = this.makeMaterial(definition.color);

    if (definition.placeBlock) {
      const block = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.32), material);
      block.position.set(-0.1, 0.12, -0.26);
      block.rotation.set(0.58, -0.74, 0.22);
      this.itemRoot.add(block);

      const top = new THREE.Mesh(
        new THREE.BoxGeometry(0.322, 0.016, 0.322),
        this.makeMaterial(this.highlightColor(definition.color, 1.28))
      );
      top.position.set(-0.1, 0.29, -0.26);
      top.rotation.copy(block.rotation);
      this.itemRoot.add(top);
      return;
    }

    if (definition.toolKind === "pickaxe") {
      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.44, 0.06), this.makeMaterial("#8a5b33"));
      handle.position.set(-0.04, 0.06, -0.18);
      handle.rotation.set(0.08, 0.08, -0.38);

      const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.08, 0.08), material);
      head.position.set(-0.12, 0.25, -0.23);
      head.rotation.set(0.08, 0.08, -0.38);

      const toothA = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.08), material);
      toothA.position.set(-0.27, 0.21, -0.23);
      toothA.rotation.set(0.08, 0.08, -0.38);

      const toothB = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.08), material);
      toothB.position.set(0.04, 0.31, -0.23);
      toothB.rotation.set(0.08, 0.08, -0.38);

      this.itemRoot.add(handle, head, toothA, toothB);
      return;
    }

    const item = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.045), material);
    item.position.set(-0.08, 0.12, -0.22);
    item.rotation.set(0.4, -0.6, 0.18);
    this.itemRoot.add(item);
  }

  private highlightColor(color: string, multiplier: number): string {
    const base = new THREE.Color(color);
    base.r = Math.min(1, base.r * multiplier);
    base.g = Math.min(1, base.g * multiplier);
    base.b = Math.min(1, base.b * multiplier);
    return `#${base.getHexString()}`;
  }

  private makeMaterial(color: string): THREE.MeshBasicMaterial {
    return new THREE.MeshBasicMaterial({
      color,
      depthTest: false,
      depthWrite: false
    });
  }
}
