"use client";
import { useMemo, useRef } from "react";
import { createNoise3D } from 'simplex-noise';

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const noise3D = createNoise3D();

const vertexShader = `
attribute float size;

uniform vec3 color;
uniform float uTime;
varying vec3 vColor;

void main() {
    vColor = color; // Pass the color to the fragment shader
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * 10.; // Set the size of the points
    gl_Position = projectionMatrix * mvPosition;
}

    `;

const fragmentShader = `
varying vec3 vColor;

void main() {
    float r = 0.0, delta = 0.0, alpha = 1.0;
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    r = dot(cxy, cxy);
    delta = fwidth(r);
    alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
    if (r > 1.0) {
        discard;
    }

    # apply light and shadow here based on the alpha value above
    


    gl_FragColor = vec4(vColor, alpha); // Use the passed color
}


    `;

export default function Particles() {
    const PARTICLE_COUNT = 500;
  const particles = useRef<any>();
  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      color: {
        value: new THREE.Color("black"),
      },
      

      // Add any other attributes here
    }),
    []
  );

  const sizes = useMemo(() => {
    const sizes = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      sizes.push(Math.random() * 2);
    }

    return new Float32Array(sizes);
  }, []);

  const pos = useMemo(() => {
    const pos = [];
    const r = 1;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;

        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);

        pos.push(x, y, z);
    }

    return new Float32Array(pos);
  }, []);

  useFrame(() => {
    if (!particles.current) return;
    const positions = particles.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i++) {
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];

      const vec = new THREE.Vector3(x, y, z);
      vec.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.01);

      const noise = noise3D(x, y, z);
      positions[i * 3] = vec.x + (noise * 0.1);
      positions[i * 3 + 1] = vec.y + (noise * 0.1);
      positions[i * 3 + 2] = vec.z + (noise * 0.1);
    }

    particles.current.geometry.attributes.position.needsUpdate = true;

    uniforms.uTime.value += 0.01;
  });

  return (
    <points
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
      ref={particles}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={pos.length / 3}
          array={pos}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      {/* <pointsMaterial
        size={0.015}
        color="#ffffff"
        sizeAttenuation
        depthWrite={false}
        transparent
      /> */}
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        depthTest={false}
        // additive
        // blending={THREE.AdditiveBlending}
        transparent
      />
    </points>
  );
}
