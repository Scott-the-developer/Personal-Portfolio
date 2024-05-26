'use client'
import React, {useRef} from 'react'
import {motion, useScroll} from "framer-motion"
import Image from 'next/image'


const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
      target:ref,
      offset: ["0 2", "1 1"]
  })
  return (
    <motion.div
    ref={ref}
    id='about'
    style={{
      scale: scrollYProgress,
      opacity: scrollYProgress
    }
    }
     className="py-20 w-full ">
      <div className="flex justify-center items-center">

      <h1 className="heading text-3xl sm:text-5xl font-bold">
        Get to <span className="text-purple">Know Me</span>
      </h1>
      </div>

      <div className="w-full mt-12 sm:grid sm:grid-cols-6 justify-center items-center">
      <div className=' col-span-2 '>
      <Image 
          height={300}
          width={300}
          src="/Scott3.jpeg"
          alt="pic"
          className="bg-pin-400 p-4 rounded-full mt-10"/>
      </div>
        <div className='col-span-4'>
        <h1 className=' text-xs sm:text-lg'>
        With a passion for crafting intuitive and visually appealing user interfaces, I have dedicated my career to frontend development. Over the past 4 years, I have honed my skills in HTML, CSS, JavaScript, and modern frameworks like React and Next.js. My expertise lies in transforming complex requirements into seamless, responsive designs that provide exceptional user experiences. I thrive in collaborative environments, consistently delivering high-quality code and innovative solutions. Let&apos;s work together to create dynamic and engaging digital experiences that captivate your audience and elevate your brand.</h1>
      </div>
      </div>
    </motion.div>
  );
};

export default About;
