import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandLinkedin,
  IconTarget,
  IconFileCv,
} from "@tabler/icons-react";
import { title } from "framer-motion/client";

export function FloatingDockDemo() {
  const links = [
    // {
    //   title: "Home",
    //   icon: (
    //     <IconHome className="h-full w-full text-neutral-500 dark:text-emerald-400" />
    //   ),
    //   href: "#",
    // },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-emerald-400" />
      ),
      href: "https://github.com/nishwan810",
    },
    {
      title: "Linkedin",
      icon: (

        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-emerald-400"/>

      ),
      href: "https://www.linkedin.com/in/nishantwankhade/",
     target: "_blank",

      },
      {
        title: "Resume",
        icon: (
  
          <IconFileCv className="h-full w-full text-neutral-500 dark:text-emerald-400"/>
  
        ),
        href: "https://drive.google.com/file/d/1C47cPrS24_nlBl6M0NU_iSphFM5oeekL/view?usp=sharing",
       target: "_blank",
  
        },

      
  ];
  return (
    <div className="flex  z-40 fixed top-8  right-5 min-h-100vh ">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="   "
        items={links}
         />
    </div>
  );
}
