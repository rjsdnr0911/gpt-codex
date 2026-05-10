import * as THREE from "three";

interface Particle {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;
  velocity: THREE.Vector3;
  age: number;
  lifetime: number;
  spin: THREE.Vector3;
  attractToTarget: boolean;
}

export class ParticleSystem {
  readonly group = new THREE.Group();

  private readonly geometry = new THREE.BoxGeometry(1, 1, 1);
  private readonly particles: Particle[] = [];

  constructor() {
    this.group.name = "Codex Craft particles";
  }

  get count(): number {
    return this.particles.length;
  }

  spawnBlockBreak(position: THREE.Vector3, color: string, count = 18): void {
    for (let index = 0; index < count; index += 1) {
      this.spawnParticle({
        position: jitter(position, 0.48),
        color,
        size: 0.07 + Math.random() * 0.08,
        lifetime: 0.45 + Math.random() * 0.32,
        velocity: randomVector(1.4 + Math.random() * 1.8).add(new THREE.Vector3(0, 1.2 + Math.random() * 1.8, 0))
      });
    }
  }

  spawnBlockPlace(position: THREE.Vector3, color: string): void {
    for (let index = 0; index < 9; index += 1) {
      this.spawnParticle({
        position: jitter(position, 0.36),
        color,
        size: 0.05 + Math.random() * 0.06,
        lifetime: 0.24 + Math.random() * 0.18,
        velocity: randomVector(0.75).add(new THREE.Vector3(0, 0.55, 0))
      });
    }
  }

  spawnPickup(position: THREE.Vector3, color: string): void {
    this.spawnParticle({
      position: position.clone().add(new THREE.Vector3(0, 0.34, 0)),
      color,
      size: 0.16,
      lifetime: 0.58,
      velocity: randomVector(0.7).add(new THREE.Vector3(0, 0.8, 0)),
      attractToTarget: true
    });
  }

  spawnMagicBurst(position: THREE.Vector3, color: string, count = 28): void {
    for (let index = 0; index < count; index += 1) {
      this.spawnParticle({
        position: jitter(position, 0.26),
        color,
        size: 0.05 + Math.random() * 0.11,
        lifetime: 0.75 + Math.random() * 0.72,
        velocity: randomVector(2.6 + Math.random() * 3.4)
      });
    }
  }

  update(delta: number, target?: THREE.Vector3): void {
    for (let index = this.particles.length - 1; index >= 0; index -= 1) {
      const particle = this.particles[index];
      particle.age += delta;

      if (particle.attractToTarget && target) {
        const desired = target.clone().add(new THREE.Vector3(0, 1.1, 0)).sub(particle.mesh.position);
        particle.velocity.addScaledVector(desired, delta * 11);
      } else {
        particle.velocity.y -= 5.8 * delta;
      }

      particle.mesh.position.addScaledVector(particle.velocity, delta);
      particle.mesh.rotation.x += particle.spin.x * delta;
      particle.mesh.rotation.y += particle.spin.y * delta;
      particle.mesh.rotation.z += particle.spin.z * delta;

      const life = Math.max(0, 1 - particle.age / particle.lifetime);
      particle.mesh.material.opacity = life;
      particle.mesh.scale.setScalar(0.72 + life * 0.28);

      if (particle.age < particle.lifetime) {
        continue;
      }

      this.group.remove(particle.mesh);
      particle.mesh.material.dispose();
      this.particles.splice(index, 1);
    }
  }

  private spawnParticle(options: {
    position: THREE.Vector3;
    color: string;
    size: number;
    lifetime: number;
    velocity: THREE.Vector3;
    attractToTarget?: boolean;
  }): void {
    const material = new THREE.MeshBasicMaterial({
      color: options.color,
      transparent: true,
      opacity: 1,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(this.geometry, material);
    mesh.position.copy(options.position);
    mesh.scale.setScalar(options.size);
    mesh.renderOrder = 6;
    this.group.add(mesh);
    this.particles.push({
      mesh,
      velocity: options.velocity,
      age: 0,
      lifetime: options.lifetime,
      spin: randomVector(9),
      attractToTarget: options.attractToTarget ?? false
    });
  }
}

function jitter(position: THREE.Vector3, amount: number): THREE.Vector3 {
  return position
    .clone()
    .add(new THREE.Vector3((Math.random() - 0.5) * amount, (Math.random() - 0.5) * amount, (Math.random() - 0.5) * amount));
}

function randomVector(strength: number): THREE.Vector3 {
  const vector = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
  if (vector.lengthSq() < 0.0001) {
    vector.set(0, 1, 0);
  }
  return vector.normalize().multiplyScalar(strength);
}
