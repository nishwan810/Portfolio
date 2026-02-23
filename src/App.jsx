import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import { FloatingDockDemo } from "./components/FloatingDockDemo";
import HeroSection from "./components/HeroSection";
import Ribbons from "./components/Ribbons";

import { TimelineDemo } from "./components/timelineDemo";
import Lenis from 'lenis'
import Crosshair from "./components/CrossHair";
import { Vortex } from "./components/ui/vortex";
import { HashLoader } from "react-spinners";
import Carousel from "./components/ui/Carousel";










function App() {

  

  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []);



  return (

  
    
    
  
   

      <>
      <FloatingDockDemo/>
<Ribbons/>

<Crosshair  color='#ffffff'/>

<HeroSection />
<AboutSection/> 
<TimelineDemo/>





<Vortex  />     
      </>
      
  


 
    
    
  
    
      
  );
}

export default App;
