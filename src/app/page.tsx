'use client';
import Image from "next/image";
import Logo3d from "../app/particles/Logo3d";
import { lazy, Suspense } from "react";
import CustomCanvas from "./particles/CustomCanvas";

import CustomCursor from "./particles/CustomCursor";

import { Center, SoftShadows } from "@react-three/drei";
// const Logo3d = lazy(() => import("../app/particles/Logo3d"));


export default function Page() {
  return (

<CustomCanvas>
            {/* <Particles /> */}


          

              <Logo3d />
            <SoftShadows />
           


        
        
      </CustomCanvas>

      
  );
}
