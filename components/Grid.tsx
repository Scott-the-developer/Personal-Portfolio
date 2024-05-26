'use client'
import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"

const Grid = () => {

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
        animate: {
            opacity: 1,
            translateX: 0,
            translateY: 0

        },

    }
    const fadeInAnimationVariants1 = {
        initial: {
            opacity: 0,
            translateX: 90,
            translateY: 90
        },
        animate: {
            opacity: 1,
            translateX: 0,
            translateY: 0

        },

    }
    return (
        <motion.div
            id='coding'
            ref={ref}

        >
            <section >
              
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
                        Welcome to <span className="text-purple">Web Development</span>
                    </h1></div>
                </motion.div>
                <div className='w-full   items-center flex justify-center  p-5 '>
                    <div className=' py-5  grid    sm:h-[120vh] w-full grid-cols-10 smgrid-rows-4 gap-4 '>
                        <motion.div
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            transition={{ duration: 1 }}
                            className=" bg-[url('/b5.svg')] h-40 sm:h-auto w-full bg-center border col-span-10  sm:col-span-6 sm:row-span-2  rounded-3xl ">
                            <motion.h1 className='sm:p-5 sm:text-2xl text-sm p-5 font-bold sm:relative sm:top-10 '>
                                &apos;A website without visitors is like a ship lost in the horizon.&apos;
                                <p className="sm:text-sm text-xs font-light text-purple ext-gray-400">
                                    — Dr. Christopher Dayagdag, Digital Marketer

                                </p>
                            </motion.h1>
                        </motion.div>
                        <motion.div
                            variants={fadeInAnimationVariants1}
                            initial="initial"
                            whileInView="animate"
                            transition={{ duration: 1 }}
                            className="border col-span-10 h-40 sm:h-auto sm:col-span-4 sm:row-span-1  rounded-3xl bg-[url('/bg.png')] bg-cover">
                            <h1 className='sm:p-5 sm:text-xl text-sm p-5 font-bold sm:relative sm:top-10'>
                            &apos;The web is more a social creation than a technical one. I designed it for a social effect—to help people work together—and not as a technical toy.&apos;
                                —
                                <p className="sm:text-sm text-xs font-light text-purple ext-gray-400">
                                    Tim Berners-Lee, World Wide Web
                                </p>
                            </h1>
                        </motion.div>
                        <motion.div
                            variants={fadeInAnimationVariants1}
                            initial="initial"
                            whileInView="animate"
                            transition={{ duration: 1 }}
                            className="border col-span-10 h-40 sm:h-auto sm:col-span-4 sm:row-span-1  rounded-3xl bg-[url('/b4.svg')] bg-fit">
                            <h1 className='sm:p-5 sm:text-xl text-sm p-5 font-bold sm:relative sm:top-10 '>

                            &apos;Content precedes design. Design in the absence of content is not design, it&apos;s decoration.&apos;

                                <p className="sm:text-sm text-xs font-light text-purple ">

                                    — Jeffrey Zeldman, Web Standards Advocate
                                </p>
                            </h1>
                        </motion.div>
                        <motion.div
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            transition={{ duration: 1 }}
                            className="border col-span-10 h-40 sm:h-auto sm:col-span-2 sm:row-span-2  rounded-3xl bg-[url('/grid.svg')] bg-cover">
                            <h1 className='sm:p-5 sm:text-xl text-sm p-5 font-bold sm:relative sm:top-10'>
                            &apos;Websites promote you 24/7: No employee will do that.&apos;
                                <p className="sm:text-sm text-xs font-light text-purple ">
                                    — Paul Cookson, Author
                                </p>
                            </h1>
                        </motion.div>
                        <motion.div
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            transition={{ duration: 1 }}
                            className="border col-span-10 h-40 sm:h-auto sm:col-span-2 sm:row-span-2  rounded-3xl bg-[url('/b4.svg')] bg-cover">
                            <h1 className='sm:p-5 sm:text-xl text-sm p-5 font-bold sm:relative sm:top-10'>
                            &apos;The details are not the details. They make the design.&apos;
                                <p className="sm:text-sm text-xs font-light text-purple ">
                                    — Charles Eames, Designer
                                </p>
                            </h1>
                        </motion.div>
                        <motion.div
                            variants={fadeInAnimationVariants1}
                            initial="initial"
                            whileInView="animate"
                            transition={{ duration: 1 }}
                            className="border col-span-10 h-40 sm:h-auto sm:col-span-6 sm:row-span-2  rounded-3xl bg-[url('/b1.svg')] bg-cove  bg-cover">
                            <h1 className='sm:p-5 sm:text-xl p-5 font-bold sm:relative sm:top-10'>
                                I Prioritize client collaboration, fostering open communication
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Grid
