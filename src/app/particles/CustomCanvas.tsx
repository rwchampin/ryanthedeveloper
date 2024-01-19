"use client";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Stage } from "@react-three/drei";
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
      <Stage intensity={0}>
        <Center>
        {children}
        <CustomCursor />
        </Center>
      </Stage>
      {env === "development" && (
        <>
          <axesHelper args={[5]} />
          <OrbitControls />
        </>
      )}
    </Canvas>
  );
}
