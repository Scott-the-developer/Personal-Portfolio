'use client'
import React, {useRef} from 'react'
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import {motion, useScroll} from "framer-motion"


const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
      target:ref,
      offset: ["0 2", "1 1"]
  })
  return (
    <motion.div
    ref={ref}
    id='experience'
    style={{
      scale: scrollYProgress,
      opacity: scrollYProgress
    }
    }
     className="py-20 w-full ">
      <div className="flex justify-center items-center">

      <h1 className="heading text-3xl sm:text-5xl font-bold">
        My <span className="text-purple">work experience</span>
      </h1>
      </div>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
           
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 text-xs font-semibold">
                  {card.company}
                </p>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
