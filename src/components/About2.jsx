import React from 'react'
import Magnet from './Magnet'
import GlassIcons from './GlassIcons'
import { LogoBootstrap, LogoCSS, LogoGit, LogoGithub, LogoHTML, Logojs, LogoNext, LogoNextjs, LogoReact, LogoTail, LogoVercel } from '../assets/logo'
import { px } from 'framer-motion';




const skills = [
  
  { name: "Java", component: LogoVercel },
  { name: "JS", component: Logojs },
  { name: "React.js", component: LogoReact },
  { name: "Spring", component: LogoGithub },
  { name: "NextJs", component: LogoNext },
  { name: "MySQL", component: LogoNextjs },
  { name: "TailwindCSS", component: LogoTail },
  { name: "HTML", component: LogoHTML },
  { name: "CSS", component: LogoCSS },
  { name: "GIT", component: LogoGit },
  { name: "BootStrap", component: LogoBootstrap },
  { name: "CSS", component: LogoCSS },

];


const About2 = () => {
  
return( 
  <div className="w-full flex items-center justify-center xl:justify-start pt-10">
  <div className="grid grid-cols-6 gap-4">
    {skills.map((skill, index) => {
      const Logo = skill.component;
      return (
        <Magnet key={index} padding={50} magnetStrength={4}>
          <div className="flex flex-col items-center">
            <Logo style={{  }} />
            <span className="text-xs text-emerald-400 font-Iceland  hover:scale-150 animate-pulse  mt-2">{skill.name}</span>
          </div>
        </Magnet>
      );
    })}
  </div>
</div>

);


    
    
//      <div className='flex h-auto w-full items-center justify-center bg-gray-950 overflow-hidden'>


// <Magnet padding={50} magnetStrength={5}>
//   <div className="inline-block text-2xl px-4 py-2 bg-blue-950 rounded shadow">
//     Star React Bits on GitHub!
//   </div>

  
// </Magnet>





//      </div>
 
}

export default About2