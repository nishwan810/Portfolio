import React from "react";
import { Timeline } from "./ui/timeline";
import SplashCursor from "./SplashCursor";
import { LogoGithub } from "../assets/logo";
import imgninfi from "./../assets/corejava.jpeg";
import imgnDegre from "./../assets/degree.jpeg";
import imgPub from "./../assets/pub.jpeg";
import imgnted from "./../assets/tedxg.webp";
import imgpresentation from "./../assets/presentation.png";
import { BentoGridDemo } from "./BentoGridDemo";


export function TimelineDemo() {
  const data = [
    {
      title: "2024-25 [Present]",
      content: (
        <div>
          <p
            className="mb-8   text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              <a className=" font-Funnel text-xl"> Java Fullstack Developer Intern – N Infinity Info Solution</a><br/><a className="font-Funnel text-gray-500 ">
           Deep-dived into backend development using Core Java, Spring Boot, Hibernate, Servlets, and MySQL. Contributed 
           to enhancing web app performance and functionality.</a> <a className=" text-blue-500" href="https://www.linkedin.com/company/ninfinityinfosolutions/posts/?feedView=all">
            N Infinity Info Solution
           </a>
          </p>
          <div className="grid grid-cols-2 gap-4">

            
             <img
              src={imgninfi}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover
               shadow-[0_0_24px_rgba(34,_42,_53,_0.06)
               ,_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" /> 
            </div>
        </div>
      ),
    },
    {
      title: "2020-24",
      content: (
        <div>
           <p
             className="mb-8   text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
             <a className=" font-Funnel text-xl"> B.Tech in Mechanical Engineering – MIT Academy of Engineering, Pune</a><br/><a className="font-Funnel text-gray-500 ">
             Started as a mechanical engineer with a passion for tech. Learned discipline, analytical thinking, and problem-solving.</a> <a className=" text-blue-500" href="https://admissions.mitaoe.ac.in/application-form-engineering">
           MITAOE
          </a><br/><a className=" font-Funnel text-[18px]">Club Involvement </a><br/>
          <a>Actively participated in college tech and cultural clubs, contributing to team events and boosting collaboration skills.like  </a><a className=" font-Funnel text-orange-700" href="https://www.instagram.com/p/CaXNIvvgfT-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="> TEDxMITAOE, </a><a className=" font-Funnel text-orange-700" >Robotics & </a><a className=" font-Funnel text-orange-700">Under25</a>
          
          
          </p>



         
          <div className="grid grid-cols-2 gap-4">
            <img
              src={imgnDegre}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={imgnted}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={imgpresentation}
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src={imgPub}
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>

<BentoGridDemo/>
        </div>
        
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      
    </div>
  );
}
