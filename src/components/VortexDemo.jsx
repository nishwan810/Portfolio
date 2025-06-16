import React from "react";
import { Vortex } from "./ui/vortex";
import CopySnippet from "./CopySnippet";


export function VortexDemo() {
  return (
    <div
      className="w-[calc(100%-4rem)] relative flex items-center justify-between mx-auto rounded-md  h-[500rem] overflow-hidden">

        <div className=" z-30">



        </div>

        
        
      <Vortex
        backgroundColor="transparent"
        className="flex items-center scale-200 flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        
      </Vortex>
    </div>
  );
}
