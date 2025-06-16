import React from 'react'
import CardSwap, {Card} from './CardSwap'
import { ShootingStars } from './ui/shooting-stars'
import { StarsBackground } from './ui/stars-background'
import Keyframes from './Keyframes'
import UseAnimationFrame from './UseAnimationFrame'
import { div } from 'motion/react-client'
import LetterGlitch from './ui/LetterGlitch'
import DecryptedText from './ui/DecryptedText'
import Reordering from './reordering'
import Reordering2 from './Reordering2'
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
    IconStack2Filled,
    IconCode,
    IconPhotoCode,
    IconDots,
    IconHandLoveYou,
    IconSparkles,
  } from "@tabler/icons-react";
import EmailCopyButton from './EmailCopyButton'
import Reordering3 from './Reordering3'
import Squares from './Squares'
import ScrambledText from './ScrambledText'
import ScrollVelocity from './ScrollVelocity'
import { LogoReact, LogoVercel, LogoGithub, LogoNextjs ,LogoNext , Logojs, LogoTail} from "../assets/logo"
import Banner from './Banner'
import Magnet from './Magnet'
import { Spotlight } from './ui/spotlight-new'
import About2 from './About2'
import RotatingText from './RotatingText'
import CircularText from './CircularText'


const AboutSection = () => (

<div className='flex flex-col h-auto relative bg-black overflow-hidden'>
  <Squares 
    speed={0.01} 
    squareSize={60}
    direction='diagonal'
    borderColor='#ffffff'
    hoverFillColor='#000000'
  />

  <div className='w-full p-4 sm:p-16 flex flex-col xl:flex-row items-center justify-between gap-8'>
    
    {/* Left Section */}
    <div className='relative flex flex-col w-full  items-center xl:items-start px-2 sm:px-10 z-20'>
      <ScrambledText
        className='scrambled-text-demo h-40 font-Funnel z-10'
        radius={100}
        duration={1.2}
        speed={0.5}
      >
        <Spotlight />
        <div className='flex items-center justify-center  xl:items-start xl:justify-start'>
          <IconSparkles className='animate-bounce' />
          <IconHandLoveYou className='animate-bounce' />
        </div>

        <div className='font-Funnel flex items-center justify-center xl:items-start xl:justify-start text-lg sm:text-2xl'>
          <RotatingText
            texts={["Hey! It's me ", 'Nishant', "Hey! It's me ", 'Nishwan']}
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <p className='text-base sm:text-xl flex flex-col w-auto  xl:w-[660px]  items-center xl:items-baseline justify-center xl:justify-start font-Funnel mt-2'>
          <span className='text-2xl  font-Funnel  sm:text-4xl text-emerald-400 block'>Full Stack Java Developer</span> <br />
          <p className=' font-Funnel items-center   justify-center '>with experience in building Java-based web applications and creating responsive UIs, Skilled in</p>
          
        </p>
      </ScrambledText>

      <div className='pt-6 items-center justify-center  z-30 w-full'>
        <About2 />
      </div>
    </div>

    {/* Right Section - Cards */}
    <div className='w-full sm:w-[40%] bg-black z-10 hidden xl:block'>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={3000}
        pauseOnHover={true}
      >
        {/* Card 1 */}
        <Card>
          <div className='flex items-center justify-between'>
            <h3 className='px-2 py-2 font-Iceland text-lg sm:text-2xl text-emerald-400 flex items-center'>
              <IconCode className='mx-2 animate-bounce' /> Programming Languages
            </h3>
            <IconDots className='mx-2 text-white animate-pulse' />
          </div>
          <hr className=' text-white ' />
          <div className=' pl-20 pt-32'><Reordering /></div>
        </Card>

        {/* Card 2 */}
        <Card>
          <div className='flex items-center justify-between'>
            <h3 className='px-2 py-2 font-Iceland text-lg sm:text-2xl text-emerald-400 flex items-center'>
              <IconStack2Filled className='animate-bounce mx-2' /> Tech Stack
            </h3>
            <IconDots className='mx-2 text-white animate-pulse' />
          </div>
          <hr className=' text-white ' />
          <div className='pl-20  pt-20'><Reordering2 /></div>
        </Card>

        {/* Card 3 */}
        <Card>
          <div className='flex items-center justify-between'>
            <h3 className='px-2 py-2 font-Iceland text-lg sm:text-2xl text-emerald-400 flex items-center'>
              <IconPhotoCode className='animate-bounce mx-2' /> Frontend Tech
            </h3>
            <IconDots className='mx-2 text-white animate-pulse' />
          </div>
          <hr className=' text-white ' />
          <div className='pl-20 pt-20'><Reordering3 /></div>
        </Card>
      </CardSwap>
    </div>
  </div>
</div>



//     <div className='flex-col h-[650px]   relative bg-black overflow-hidden'>
       



        
  
// <Squares 
// speed={0.01} 
// squareSize={60}
// direction='diagonal' // up, down, left, right, diagonal
// borderColor='#ffffff'
// hoverFillColor='#000000'
// />


// <div className='w-full  h-fit p-16  flex  items-center   justify-between '>



// <div className='relative flex flex-col   w-[1000px]  items-start sm:pl-32 p-0  z-20'>   


  

//     <div className='  min-h-5  '>

//     <ScrambledText
// className='scrambled-text-demo h-40 font-Funnel z-10 '
// radius={100}
// duration={1.2}
// speed={0.5}


// >

//     <Spotlight />
//     <div className='flex'>
//     <IconSparkles  className=' animate-bounce '/>
//     <IconHandLoveYou className=' animate-bounce '/>

//     </div>

   
  

// <div className='font-Funnel text-[20px]'>

// <RotatingText

// texts={["Hey! It's me ",'Nishant',"Hey! It's me ", 'Nishwan']}
// mainClassName=""
// staggerFrom={"last"}
// initial={{ y: "100%" }}
// animate={{ y: 0 }}
// exit={{ y: "-120%" }}
// staggerDuration={0.025}
// splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
// transition={{ type: "spring", damping: 30, stiffness: 400 }}
// rotationInterval={2000}
   
//    />


// </div>
   

    
  
   

//  <p className='text-2xl font-Funnel  '> <a className='text-[39px] text-emerald-400  '>Full Stack Java Developer</a> <br/> <a className='text-gray-500'>with experience in building Java-basedweb applications</a>  <a className='text-gray-500'>and creating responsive UIs</a></p>



// </ScrambledText> 



//     </div>

//     <div >

   

//     <div className=' pt-10  z-30 '>
// <About2/>
 
// </div>

//     </div>
    
     
// </div>
// <div className=' bg-black z-10 sm:block hidden  '>



    

// <CardSwap
//             cardDistance={60}
//             verticalDistance={70}
//             delay={3000}
//             pauseOnHover={true}
//         >


//             <Card>



//              <div className='flex  items-center justify-between'>
//                 <div>

//                 <h3 className='px-2 py-2  font-Iceland text-2xl text-emerald-400 flex items-center '><IconCode className='mx-2 animate-bounce '/> Programming languages 
                
//                 </h3>
//                 </div>
//                 <div>
//                 <h3 className='px-2 py-2  font-Iceland text-2xl text-emerald-400 flex items-center '>
//                 <IconDots className='mx-2 items-center animate-pulse justify-end'/>
//                 </h3>
//                 </div>
            

//              </div>
               

//                 <hr />
//                 <div className='pl-20 pt-30'><Reordering /></div>

//             </Card>
//             <Card>

//             <div className='flex  items-center justify-between'>
//                 <div>

//                 <h3 className='px-2 py-2 font-Iceland text-2xl text-emerald-400  flex items-center'><IconStack2Filled className=' animate-bounce mx-2'/>  Tech Stack </h3>
//                 </div>
//                 <div>
//                 <h3 className='px-2 py-2  font-Iceland text-2xl text-emerald-400 flex items-center '>
//                 <IconDots className='mx-2 items-center animate-pulse justify-end'/>
//                 </h3>
//                 </div>
            

//              </div>
                


               

//                 <hr />
//                 <div className='pl-20 pt-10'><Reordering2 /></div>

//             </Card>
//             <Card>

//             <div className='flex  items-center justify-between'>
//                 <div>

//                 <h3 className='px-2 py-2  font-Iceland text-2xl text-emerald-400  flex items-center'><IconPhotoCode className=' animate-bounce  mx-2'/> Frontend Tech </h3>
//                 </div>
//                 <div>
//                 <h3 className='px-2 py-2  font-Iceland text-2xl text-emerald-400 flex items-center '>
//                 <IconDots className='mx-2 animate-pulse items-center justify-end'/>
//                 </h3>
//                 </div>
            

//              </div>


                

//                 <hr />
//                 <div className='pl-20 pt-10'><Reordering3/></div>

//             </Card>
            

//         </CardSwap>




// </div>

// </div>




       





        


    







//     </div>

)

export default AboutSection