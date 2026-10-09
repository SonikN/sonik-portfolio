"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A component that generates slow moving particles
function Particles({ count = 1000 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random positions and velocities for the particles
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Scatter particles across a wide area
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Very slow drift
      velocities[i * 3] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return [positions, velocities];
  }, [count]);

  // Create a simple circular texture to make particles look like stars rather than squares
  const starTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    if (context) {
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  // Animate particles on every frame
  useFrame((state, delta) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Wrap around when particles drift too far
        if (positions[i * 3] > 5) positions[i * 3] = -5;
        if (positions[i * 3] < -5) positions[i * 3] = 5;
        if (positions[i * 3 + 1] > 5) positions[i * 3 + 1] = -5;
        if (positions[i * 3 + 1] < -5) positions[i * 3 + 1] = 5;
        if (positions[i * 3 + 2] > 5) positions[i * 3 + 2] = -5;
        if (positions[i * 3 + 2] < -5) positions[i * 3 + 2] = 5;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;

      // Add a very subtle rotation to the entire particle system
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
        map={starTexture}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 z-[-1]" style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#050505', 2, 10]} />
        <Particles count={1500} />
      </Canvas>
    </div>
  );
}
