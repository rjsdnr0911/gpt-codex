import * as THREE from "three";
import { mulberry32, smoothstep } from "./math";

const DAY_LENGTH_SECONDS = 210;

export interface SkyState {
  dayFactor: number;
  sunDirection: THREE.Vector3;
}

export class SkySystem {
  readonly sunDirection = new THREE.Vector3(0.4, 1, 0.2).normalize();

  private readonly skyGroup = new THREE.Group();
  private readonly cloudGroup = new THREE.Group();
  private readonly skyMaterial: THREE.ShaderMaterial;
  private starMaterial!: THREE.PointsMaterial;
  private readonly sun: THREE.Mesh;
  private readonly moon: THREE.Mesh;

  constructor(scene: THREE.Scene) {
    const skyGeometry = new THREE.SphereGeometry(420, 48, 24);
    this.skyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uDay: { value: 1 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;

        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vWorldPosition;
        uniform float uDay;

        void main() {
          float h = clamp(normalize(vWorldPosition).y * 0.5 + 0.5, 0.0, 1.0);
          vec3 dayTop = vec3(0.26, 0.58, 0.90);
          vec3 dayHorizon = vec3(0.90, 0.78, 0.58);
          vec3 nightTop = vec3(0.012, 0.026, 0.070);
          vec3 nightHorizon = vec3(0.090, 0.120, 0.160);
          vec3 dayColor = mix(dayHorizon, dayTop, pow(h, 0.72));
          vec3 nightColor = mix(nightHorizon, nightTop, pow(h, 1.18));
          gl_FragColor = vec4(mix(nightColor, dayColor, uDay), 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false
    });

    const sky = new THREE.Mesh(skyGeometry, this.skyMaterial);
    sky.frustumCulled = false;
    this.skyGroup.add(sky);

    this.sun = new THREE.Mesh(
      new THREE.SphereGeometry(9, 32, 16),
      new THREE.MeshBasicMaterial({ color: "#fff0ad" })
    );
    this.moon = new THREE.Mesh(
      new THREE.SphereGeometry(6, 28, 14),
      new THREE.MeshBasicMaterial({ color: "#d7e1ec" })
    );
    this.skyGroup.add(this.sun, this.moon, this.makeStars());
    scene.add(this.skyGroup);

    this.makeClouds();
    scene.add(this.cloudGroup);
  }

  update(elapsed: number, cameraPosition: THREE.Vector3): SkyState {
    const cycle = (elapsed / DAY_LENGTH_SECONDS) % 1;
    const angle = cycle * Math.PI * 2 + Math.PI * 0.28;
    this.sunDirection.set(Math.cos(angle) * 0.72, Math.sin(angle), Math.sin(angle * 0.7) * 0.28).normalize();

    const dayFactor = smoothstep(-0.12, 0.32, this.sunDirection.y);
    this.skyMaterial.uniforms.uDay.value = dayFactor;
    this.starMaterial.opacity = 1 - dayFactor;

    this.skyGroup.position.copy(cameraPosition);
    this.sun.position.copy(this.sunDirection).multiplyScalar(355);
    this.moon.position.copy(this.sunDirection).multiplyScalar(-330);
    this.sun.visible = dayFactor > 0.03;
    this.moon.visible = dayFactor < 0.88;

    this.cloudGroup.position.set(cameraPosition.x + ((elapsed * 0.42) % 70), 56, cameraPosition.z);
    this.cloudGroup.children.forEach((child, index) => {
      child.position.x += Math.sin(elapsed * 0.05 + index) * 0.001;
    });

    return {
      dayFactor,
      sunDirection: this.sunDirection
    };
  }

  private makeStars(): THREE.Points {
    const random = mulberry32(0x6a09e667);
    const positions: number[] = [];

    for (let index = 0; index < 720; index += 1) {
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(random() * 2 - 1);
      const radius = 385;
      const y = Math.cos(phi) * radius;

      if (y < -30) {
        continue;
      }

      positions.push(Math.sin(phi) * Math.cos(theta) * radius, y, Math.sin(phi) * Math.sin(theta) * radius);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    this.starMaterial = new THREE.PointsMaterial({
      color: "#f7fbff",
      size: 1.25,
      transparent: true,
      opacity: 0,
      depthWrite: false
    });

    return new THREE.Points(geometry, this.starMaterial);
  }

  private makeClouds(): void {
    const material = new THREE.MeshBasicMaterial({
      color: "#f5f7ef",
      transparent: true,
      opacity: 0.68,
      depthWrite: false
    });
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const random = mulberry32(0x243f6a88);

    for (let cloud = 0; cloud < 26; cloud += 1) {
      const group = new THREE.Group();
      const baseX = (random() - 0.5) * 260;
      const baseZ = (random() - 0.5) * 260;
      group.position.set(baseX, random() * 12, baseZ);

      const puffCount = 4 + Math.floor(random() * 6);

      for (let puff = 0; puff < puffCount; puff += 1) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set((random() - 0.5) * 20, (random() - 0.5) * 2, (random() - 0.5) * 9);
        mesh.scale.set(8 + random() * 12, 1.0 + random() * 1.2, 4 + random() * 5);
        group.add(mesh);
      }

      this.cloudGroup.add(group);
    }
  }
}
