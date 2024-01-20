"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DebugLayerMaterial, LayerMaterial, Depth, Color, Fresnel, Noise, Normal } from 'lamina'

import * as THREE from "three";


export default function Background() {
    const props = { base: '#ff4eb8', colorA: '#00ffff', colorB: '#ff00e3' }
    const mesh = useRef<any>()
    useFrame((state, delta) => {
      mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += delta
    })
    return (
      <mesh ref={mesh} scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial color="#f0aed2" attach="material" side={THREE.BackSide}>
          <Depth colorA="blue" colorB="#00aaff" alpha={0.5} mode="multiply" near={0} far={300} origin={[10, 10, 10]} />
          <Depth
            colorA="#ff0000"
            colorB="#00aaff"
            alpha={0.5}
            mode="multiply"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    )
  }