"use client";
import React, { useEffect, useRef } from "react";
import {
  useGLTF,
  Center,
  useScroll,
  TransformControls,
} from "@react-three/drei";
import { Flex, Box } from "@react-three/flex";

import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three";

export default function Logo3d() {
  const { nodes }: any = useGLTF("/black-logo-new.glb");
  const logoRef = useRef<any>();
  const data = useScroll();
    const [xpos, setXpos] = React.useState<any>(0);
    const [ypos, setYpos] = React.useState<any>(0);
    const [zpos, setZpos] = React.useState<any>(0);
  const color = new THREE.Color();
  const black = new THREE.Color(0x000000);
  const white = new THREE.Color(0xffffff);
  const { scene, camera, viewport } = useThree();

    const { logoPos } = useControls("logo", {
        logoPos: [xpos, ypos, zpos]
    });
    scene.background = black;

  useFrame(() => {
    if (!logoRef.current) return;
    const colorLerp = color.lerpColors(black, white, data.offset);
    scene.background = colorLerp;
    // materials.Gradient.color = colorLerp;
    // Assuming the scroll range is from 0 to 1, where 1 is fully scrolled
    // const scrollFactor = data.offset;

    // // // Interpolate scale between 1 and 0.5 based on the scroll position
    // const scale = 1 - scrollFactor * 0.6;
    // logoRef.current.scale.set(scale, scale, scale);

    // // animate the y pos to .50 from 0
    // const y = 1.1 * scrollFactor;
    // logoRef.current.position.y = y;

   
  });

  return (
    <Center>
      <primitive
        object={nodes.n}
        ref={logoRef}
        position={logoPos}
        receiveShadow
        castShadow
      />
    </Center>
  );
}

useGLTF.preload("/black-logo-new.glb");
