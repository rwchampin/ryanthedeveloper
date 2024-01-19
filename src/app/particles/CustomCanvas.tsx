"use client";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Stage, ScrollControls, Scroll } from "@react-three/drei";
import CustomCursor from "./CustomCursor";
export default function CustomCanvas({ children }: any) {
  const env = process.env.NODE_ENV;
  return (
    <Canvas
      shadows
      style={{ height: "100vh", width: "100vw" }}
      camera={{ position: [0, 0, 2], zoom: 2 }}
      onCreated={({ gl }) => {
        // gl.setClearColor('white');
      }}
    >
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#ccc", 0, 50]} />


      <Stage intensity={0}>
     
<ScrollControls damping={0.1} pages={3}>
    <Scroll>
        <Center>
          {children}
          
          <CustomCursor />
        </Center>
    </Scroll>
    </ScrollControls>
      </Stage>
       
       

      {env === "development" && (
        <>
          <axesHelper args={[5]} />
          {/* <OrbitControls /> */}
        </>
      )}
    </Canvas>
  );
}
