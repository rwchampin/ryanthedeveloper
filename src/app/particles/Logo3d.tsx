"use client";
import React, { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";

export default function Logo3d() {
  const { nodes, materials }:any = useGLTF("/black-logo.glb");
  return (
    <Center>    
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.a.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.D.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.e.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.e001.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.e002.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.er.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.h.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.l.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.n.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.p.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.t.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.v.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.y.geometry}
        material={materials.Gradient}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
    </Center>
  );
}

useGLTF.preload("/black-logo.glb");


