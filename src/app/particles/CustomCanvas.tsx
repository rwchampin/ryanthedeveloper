"use client";
import {
  Loader,
  OrbitControls,
  ScrollControls,
  StatsGl
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { useControls } from "leva";
import CustomCursor from "./CustomCursor";

 
export default function CustomCanvas({ children }: any) {
  const [debug, setDebug] = useState(process.env.NODE_ENV === "development");
  const [orbit, setOrbit] = useState(false);
  const [axis, setAxis] = useState(debug);
  const[stats, setStats] = useState(debug);
  const [ambientLight, setAmbientLight] = useState<any>(true);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState<any>(0);
  const [ambientLightColor, setAmbientLightColor] = useState<any>("#ffffff");
  const [fog, setFog] = useState<any>(false);
  const [fogColor, setFogColor] = useState<any>("#ffffff");
  const [fogNear, setFogNear] = useState<any>(0);
  const [fogFar, setFogFar] = useState<any>(0);

   // make leva have a parent debug boolean and if true, allow children to be edited
    const { debugLeva, orbitLeva, axisLeva, statsLeva } = useControls('debug',{
      debugLeva: debug,
      orbitLeva: {
        // if debug is false, orbit is false and deactived
        value: orbit,
        disabled: !debug
      },
      axisLeva: axis,
      statsLeva: stats
    });

    const { ambientLightLeva, ambientLightColorLeva,ambientLightIntensityLeva
    } = useControls('Lights',{
      ambientLightLeva: ambientLight,
      ambientLightColorLeva: ambientLightColor,
      ambientLightIntensityLeva: ambientLightIntensity
    });

    const { fogLeva, fogColorLeva, fogNearLeva, fogFarLeva } = useControls('Fog',{
      fogLeva: fog,
      fogColorLeva: fogColor,
      fogNearLeva: fogNear,
      fogFarLeva: fogFar
    });

  return (
    <>
      <Canvas
        shadows
        style={{ height: "100vh", width: "100vw" }}
        camera={{ position: [0, 0, 2] }}
        onCreated={({ gl }) => {
          // gl.setClearColor('white');
        }}
      >
        <Suspense fallback={null}>
           
          {fogLeva && (
            <fog attach="fog" args={[fogColorLeva, fogNearLeva, fogFarLeva]} />
          )}
          {ambientLightLeva && (
            <ambientLight
              intensity={ambientLightIntensityLeva}
              color={ambientLightColorLeva}
            />
          )}


          <ScrollControls damping={0.1} pages={3} horizontal={false}>
            
                {children}

                <CustomCursor />

           
          </ScrollControls>

          {debugLeva && (
            <>
              {axisLeva && <axesHelper args={[5]} />}
              {orbitLeva && <OrbitControls />}
              {statsLeva && <StatsGl />}
            </>
          )}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
