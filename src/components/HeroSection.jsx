import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import GlitchText from "./GlitchText.jsx";
import Ribbons from "./Ribbons.jsx";
import SplitText from "./SplitText.jsx";
import { TypewriterEffectSmoothDemo } from "./ TypewriterEffectSmoothDemo.jsx";

const floatingTexts = [
  { text: "Swing", x: -750, y: -120, depth: 30 },
  { text: "Javascript", x: -620, y: 200, depth: 22 },
  { text: "Frontend", x: -500, y: -120, depth: 25 },
  { text: "Backend", x: -400, y: 220, depth: 18 },
  { text: "Fullstack", x: -250, y: -300, depth: 20 },
  { text: "React.js", x: -230, y: 180, depth: 18 },
  { text: "TailwindCSS", x: -80, y: -250, depth: 22 },
  { text: "GUI", x: 120, y: 100, depth: 35 },
  { text: "Hibernate", x: 250, y: -200, depth: 28 },
  { text: "Spring", x: 370, y: 120, depth: 24 },
  { text: "SpringBoot", x: 600, y: -280, depth: 20 },
  { text: "Servlet", x: 520, y: 230, depth: 30 },
  { text: "Bootstrap", x: 750, y: -60, depth: 25 },
  { text: "HTML", x: -680, y: 40, depth: 20 },
  { text: "CSS", x: 580, y: -40, depth: 22 },
  { text: "APIs", x: -550, y: 0, depth: 27 },
  { text: "Web Dev", x: 650, y: 80, depth: 26 },
  { text: "JAVA", x: -400, y: 80, depth: 15 },
  { text: "Core JAVA", x: 500, y: -140, depth: 28 },
  { text: "TECH", x: -250, y: 30, depth: 27 },
  { text: "GitHub", x: 250, y: 190, depth: 32 },
  { text: "Node.js", x: -120, y: 300, depth: 20 },
  { text: "Next.js", x: 120, y: 270, depth: 15 },
  { text: "R&D", x: 0, y: 0, depth: 26 },
  { text: "MySQL", x: 750, y: 220, depth: 22 },
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className=" relative h-[90vh] max-w-screen flex items-center justify-center bg-black overflow-hidden"
    >

        
      {floatingTexts.map((item, i) => {
        const offsetX = (mouse.x / item.depth) * -8;
        const offsetY = (mouse.y / item.depth) * -2.5;

        const distanceFromCenter = Math.sqrt(
          Math.pow(item.x + offsetX, 2) + Math.pow(item.y + offsetY, 2)
        );

        const fadeDistance = 400;
        let opacity =
          distanceFromCenter < fadeDistance
            ? (distanceFromCenter / fadeDistance) ** 2
            : 1;

        if (hoveredIndex === i) {
          opacity = 1;
        }

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `50%`,
              top: `50%`,
              transform: `translate(${item.x}px, ${item.y}px)`,
              pointerEvents: "auto",
              zIndex: 10,
            }}
          >
            <motion.div
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                x: offsetX,
                y: offsetY,
                opacity,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-base font-semibold text-gray-400 hover:text-emerald-500 hover:bg-emerald-100 hover:scale-150 transition-transform duration-[1500ms] ease-out px-3 py-2 rounded-lg"
              style={{ position: "relative", zIndex: 20 }}
            >
              {item.text}
            </motion.div>
          </div>
        );
      })}




       <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-0 text-center max-w-2xl"
      >
        <h1 className="text-5xl animate-bounce items-center font-Zendot text-emerald-50 mb-4 inline-block  relative z-10   px-11 ">
            
          {/* <span
            className="absolute inset-0 items-center rounded-2xl pointer-events-none border-3 border-dashed border-emerald-500 "
            style={{ zIndex: -1, padding: "4px" }}
          /> */}
          {/* { <span
            className="relative z-10 inline-block overflow-hidden"
            style={{
              width: "0",
              whiteSpace: "nowrap",
              animation: "typing 3s steps(30, end) forwards",
            }}
          >
            Nishant Wankhade
          </span> } */}
          Nishant Wankhade
          
        </h1>
        

        <p className="text-lg md:text-xl font-doto animate-bounce text-emerald-400 mb-6">
          <span className="mr-2 ">:</span> JAVA FullStack Developer
        </p>
        
      </motion.div> 
    
      <ShootingStars />
      <StarsBackground />
     
     
  
 

    </div>
  );
}
