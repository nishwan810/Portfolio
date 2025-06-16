import React from 'react'
import { LogoReact, LogoVercel, LogoGithub, LogoNextjs ,LogoNext , Logojs, LogoTail} from "../assets/logo"
import { div, image } from 'framer-motion/client';

const Banner = () => {


  const logos = [LogoNext, LogoTail];



  return (
    
    <div className='container mx-auto' >

<div className=' border   '>  


  <div className='flex items-center  pl-3'>
    

  {logos.map((LogoComponent, index) => (
    

  
      <div key={index} className='flex  px-3'>

        <div className=' flex px-4 items-center bg-gray-900 border  rounded-full'>

       
        <LogoComponent className=" h-2" />
        <h1 className='px-3  '>Next.js</h1> 
        </div>
     
      </div>
    ))}
    


  </div>


</div>


    </div>
  )
}

export default Banner