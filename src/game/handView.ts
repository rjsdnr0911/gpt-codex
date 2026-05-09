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
    this.root.position.set(0.48, -0.54, -0.86);
    this.root.rotation.set(-0.14, -0.2, 0.02);
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

    const bob = Math.sin(performance.now() * 0.006) * 0.01;
    const swingOffset = Math.sin(this.swing * Math.PI) * 0.24;
    this.root.position.set(0.48 - swingOffset * 0.1, -0.54 + bob - swingOffset * 0.08, -0.86 - swingOffset * 0.12);
    this.root.rotation.set(-0.14 - swingOffset * 0.62, -0.2 - swingOffset * 0.08, 0.02 + swingOffset * 0.2);
    this.itemRoot.rotation.z = Math.sin(this.swing * Math.PI) * -0.12;
  }

  private rebuildItem(stack: ItemStack | null): void {
    this.itemRoot.clear();
    if (!stack) {
      return;
    }

    const definition = ITEM_DEFINITIONS[stack.item];
    const material = this.makeMaterial(definition.color);
    const dark = this.makeMaterial(this.highlightColor(definition.color, 0.62));
    const light = this.makeMaterial(this.highlightColor(definition.color, 1.35));

    if (definition.placeBlock) {
      const block = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.34), this.makeBlockMaterials(definition.color));
      block.position.set(-0.11, 0.11, -0.3);
      block.rotation.set(0.64, -0.72, 0.28);
      this.itemRoot.add(block);

      const top = new THREE.Mesh(
        new THREE.BoxGeometry(0.342, 0.018, 0.342),
        light
      );
      top.position.set(-0.11, 0.29, -0.3);
      top.rotation.copy(block.rotation);
      this.itemRoot.add(top);
      return;
    }

    if (definition.toolKind === "pickaxe") {
      const group = new THREE.Group();
      group.position.set(-0.1, 0.08, -0.28);
      group.rotation.set(0.2, -0.22, -0.74);
      this.addPart(group, [0.055, 0.62, 0.055], [0, -0.08, 0], [0, 0, 0], this.makeMaterial("#8a5a32"));
      this.addPart(group, [0.48, 0.07, 0.08], [0, 0.25, 0], [0, 0, 0], dark);
      this.addPart(group, [0.32, 0.075, 0.09], [-0.08, 0.29, 0], [0, 0, 0], material);
      this.addPart(group, [0.09, 0.15, 0.09], [-0.29, 0.19, 0], [0, 0, 0], material);
      this.addPart(group, [0.09, 0.15, 0.09], [0.21, 0.19, 0], [0, 0, 0], material);
      this.addPart(group, [0.26, 0.018, 0.095], [-0.08, 0.33, -0.003], [0, 0, 0], light);
      this.itemRoot.add(group);
      return;
    }

    if (definition.toolKind === "axe") {
      const group = new THREE.Group();
      group.position.set(-0.08, 0.07, -0.28);
      group.rotation.set(0.18, -0.2, -0.72);
      this.addPart(group, [0.055, 0.6, 0.055], [0, -0.08, 0], [0, 0, 0], this.makeMaterial("#8a5a32"));
      this.addPart(group, [0.24, 0.25, 0.085], [-0.11, 0.24, 0], [0, 0, -0.12], material);
      this.addPart(group, [0.12, 0.14, 0.08], [0.05, 0.24, 0], [0, 0, 0.22], dark);
      this.addPart(group, [0.18, 0.026, 0.09], [-0.13, 0.36, -0.003], [0, 0, -0.12], light);
      this.itemRoot.add(group);
      return;
    }

    if (definition.toolKind === "shovel") {
      const group = new THREE.Group();
      group.position.set(-0.08, 0.07, -0.28);
      group.rotation.set(0.18, -0.2, -0.72);
      this.addPart(group, [0.055, 0.56, 0.055], [0, -0.09, 0], [0, 0, 0], this.makeMaterial("#8a5a32"));
      this.addPart(group, [0.18, 0.22, 0.075], [0, 0.25, 0], [0, 0, 0.78], material);
      this.addPart(group, [0.11, 0.032, 0.08], [0.02, 0.34, -0.003], [0, 0, 0.78], light);
      this.itemRoot.add(group);
      return;
    }

    if (definition.toolKind === "sword") {
      const group = new THREE.Group();
      group.position.set(-0.09, 0.04, -0.28);
      group.rotation.set(0.16, -0.18, -0.7);
      this.addPart(group, [0.06, 0.22, 0.06], [0, -0.19, 0], [0, 0, 0], this.makeMaterial("#70421f"));
      this.addPart(group, [0.28, 0.055, 0.07], [0, -0.07, 0], [0, 0, 0], this.makeMaterial("#6d4b31"));
      this.addPart(group, [0.085, 0.58, 0.045], [0, 0.24, 0], [0, 0, 0], material);
      this.addPart(group, [0.022, 0.48, 0.048], [0.032, 0.27, -0.003], [0, 0, 0], light);
      this.itemRoot.add(group);
      return;
    }

    if (definition.toolKind === "bow") {
      const bow = new THREE.Group();
      bow.position.set(-0.09, 0.08, -0.27);
      bow.rotation.set(0.22, -0.16, -0.16);
      this.addPart(bow, [0.055, 0.24, 0.045], [-0.1, -0.04, 0], [0, 0, -0.46], this.makeMaterial("#9b6638"));
      this.addPart(bow, [0.055, 0.28, 0.045], [-0.08, 0.16, 0], [0, 0, 0], this.makeMaterial("#b07942"));
      this.addPart(bow, [0.055, 0.24, 0.045], [-0.1, 0.38, 0], [0, 0, 0.46], this.makeMaterial("#9b6638"));
      this.addPart(bow, [0.016, 0.58, 0.016], [0.02, 0.16, -0.03], [0, 0, 0], this.makeMaterial("#e8e2d2"));
      this.addPart(bow, [0.18, 0.035, 0.025], [-0.02, 0.16, -0.04], [0, 0, 0], this.makeMaterial("#d8d3c0"));
      this.itemRoot.add(bow);
      return;
    }

    if (definition.toolKind === "shield") {
      const shield = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.45, 0.06), material);
      shield.position.set(-0.08, 0.09, -0.24);
      shield.rotation.set(0.32, -0.72, 0.06);
      const band = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.07, 0.06), this.makeMaterial("#c9d1d1"));
      band.position.set(-0.08, 0.12, -0.275);
      band.rotation.copy(shield.rotation);
      this.itemRoot.add(shield, band);
      return;
    }

    if (definition.toolKind === "shears") {
      const group = new THREE.Group();
      group.position.set(-0.08, 0.1, -0.25);
      group.rotation.set(0.24, -0.36, -0.34);
      this.addPart(group, [0.2, 0.035, 0.035], [-0.05, 0.06, 0], [0, 0, 0.74], material);
      this.addPart(group, [0.2, 0.035, 0.035], [0.05, 0.06, 0], [0, 0, -0.74], material);
      this.addPart(group, [0.08, 0.08, 0.035], [-0.09, -0.05, 0], [0, 0, 0], dark);
      this.addPart(group, [0.08, 0.08, 0.035], [0.09, -0.05, 0], [0, 0, 0], dark);
      this.itemRoot.add(group);
      return;
    }

    const item = new THREE.Mesh(new THREE.BoxGeometry(definition.food ? 0.22 : 0.26, definition.food ? 0.22 : 0.26, 0.05), material);
    item.position.set(-0.08, 0.12, -0.24);
    item.rotation.set(0.4, -0.58, 0.18);
    const shine = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.052), light);
    shine.position.set(-0.14, 0.19, -0.27);
    shine.rotation.copy(item.rotation);
    this.itemRoot.add(item, shine);
  }

  private addPart(
    group: THREE.Group,
    size: [number, number, number],
    position: [number, number, number],
    rotation: [number, number, number],
    material: THREE.Material
  ): THREE.Mesh {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    group.add(mesh);
    return mesh;
  }

  private makeBlockMaterials(color: string): THREE.MeshBasicMaterial[] {
    return [
      this.makeMaterial(this.highlightColor(color, 0.82)),
      this.makeMaterial(this.highlightColor(color, 0.62)),
      this.makeMaterial(this.highlightColor(color, 1.24)),
      this.makeMaterial(this.highlightColor(color, 0.58)),
      this.makeMaterial(this.highlightColor(color, 0.94)),
      this.makeMaterial(this.highlightColor(color, 0.72))
    ];
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
