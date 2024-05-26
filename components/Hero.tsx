'use client'
import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image'
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import TypeWriterEffect from 'react-typewriter-effect';
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

const Hero = () => {

  
  return (
    <div className="pb-20 pt-3 ">

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="text-center md:tracking-wider text-purpl p-4 mb-4 text-2xl md:text-lg lg:text-4xl">
            Hi! My name is <span className="text-purple lg:text-5xl">Sello Telly</span> and i&apos;m,
            <div className="mt-4 textxl text-pink-300 md:text-xl ">
            <Typewriter
            
            words={[
              'A Software Developer',
              'A Web Developer',
              'A SharePoint Developer',
              'Soon to be a FullStack Developer',
            ]}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}

            />
          {/*}  <TypeWriterEffect
                textStyle={{
                  fontFamily: 'Red Hat Display',
                  color: 'pink',
                  fontWeight: 500,
                  fontSize: '1.5em',
                }}

                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={[
                  'A Software Developer',
                  'A Web Developer',
                  'A SharePoint Developer',
                  'Soon to be a FullStack Developer',
                ]}
                multiTextDelay={1000}
                typeSpeed={30}
              />*/}
            </div>
          </div>

<div className="hidden lg:block md:block">

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className=" text-center text-[10px] md:text-5xl lg:text-5xl"
          />
</div>

          <a href="mailto:sellotelly06@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="borde">

          <Image
            height={300}
            width={300}
            src="/Scott1.png"
            alt="pic"
            className="bg-pink-400 p-4 rounded-full mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
