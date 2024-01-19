"use client"
import React, { useEffect } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'
import * as THREE from 'three'


extend({ UnrealBloomPass })

export default function CustomCursor() {
    const follower = React.useRef<any>();
    const plane = React.useRef<any>();

    useFrame(({pointer, raycaster, camera, viewport}) => {
        if(!viewport || !pointer) return;
        if (!follower.current || !plane.current) return;
        // get viewport sizes and aspect ratio to set plane dimensions
        const width = viewport.width;
        const height = viewport.height;
        const aspect = width / height;
        plane.current.scale.set(width, height, 1);
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects([plane.current], true);
        if (intersects.length > 0) {
            const { x, y } = intersects[0].point;
            follower.current.position.x = x;
            follower.current.position.y = y;
        }

    });

  return (
    <group
        position={[0,0,.5]}
    >
        <mesh ref={plane}>
            <planeGeometry args={[1,1]} />
            <meshStandardMaterial color="red" visible={false} />
        </mesh>
    
        <mesh ref={follower}>
            <sphereGeometry args={[.01,32, 32]} />
            <meshStandardMaterial color="white" />
            <pointLight castShadow distance={1} intensity={5} color={'#ccc'} />
        </mesh>

    </group>
  )
}
