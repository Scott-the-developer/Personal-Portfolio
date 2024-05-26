'use client'
import { skills } from '@/data'
import React, { useRef } from 'react'
import { Button } from './ui/MovingBorders'
import { motion, useScroll } from "framer-motion"


const Skills = () => {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 2", "1 1"]
    }) 

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            translateX: -90,
            translateY: -90
        },
        animate: (index: number)=>( {
            opacity: 1,
            translateX: 0,
            translateY: 0,
            transition: {
                delay: 0.2 * index
            }
        })

    }
    return (
        <div id="skills" className='py-20 w-full'>
            <motion.div
                    ref={ref}
                    style={{
                        scale: scrollYProgress,
                        opacity: scrollYProgress
                    }
                    } className="pt-20 w-full ">
                        <div 
                    className="flex justify-center items-center">

                    <h1 className="heading text-3xl sm:text-5xl font-bold">
                        My <span className="text-purple">Skills</span>
                    </h1></div>
                </motion.div>

            <div className=" my-12 flex flex-wrap justify-center gap-4">
                {skills.map((card,index) => (
                    <motion.div 
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView='animate'
                    custom={index}
                    className=''>
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}

                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center py-4 px-5   gap-2">
                            {card.name}
                        </div>
                    </Button>
                    </motion.div>

                ))}
            </div>
        </div>
    )
}

export default Skills
