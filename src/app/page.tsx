'use client';
import Logo3d from "../app/particles/Logo3d";
import CustomCanvas from "./particles/CustomCanvas";

import Social from "./Social";

import { SoftShadows } from "@react-three/drei";
// const Logo3d = lazy(() => import("../app/particles/Logo3d"));


export default function Page() {
  return (
<>
<CustomCanvas>
            {/* <Particles /> */}


          

              <Logo3d />
            <SoftShadows />
           


        
           
      </CustomCanvas>
 <Social />
      </>
  );
}
