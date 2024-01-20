'use client';
import { useRef, lazy } from "react";
// import Logo3d from "../app/particles/Logo3d";
import CustomCanvas from "./particles/CustomCanvas";

import Social from "./Social";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { 
  SoftShadows,
  ScrollControls,
  Scroll,
 } from "@react-three/drei";
const Logo3d = lazy(() => import("../app/particles/Logo3d"));
const Background = lazy(() => import("@/components/Background"));

const Particles = lazy(() => import("@/app/particles/Particles"));

const SphereField = lazy(() => import("@/components/SphereField"));
export default function Page() {



  return (
<>
<CustomCanvas>

              <Logo3d />
            <SoftShadows />
            <SphereField count={1000} />
     
           
      </CustomCanvas>
 <Social />
      </>
  );
}
