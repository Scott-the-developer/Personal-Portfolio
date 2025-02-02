"use client";
import React, { useRef } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 2", "1 1"],
  });
  const projects = [
    {
      title: "Frontend project",
      category: "Ziki Mall",
      image: "/dev.jpg",
      url: "https://salmon-dune-0f7c88903.4.azurestaticapps.net/",
    },
    {
      title: "Geo based app",
      category: "Ziki Recruit",
      image: "/dev4.jpg",
      url: "https://black-bush-03adec20f.4.azurestaticapps.net/",
    },
    {
      title: "Photography site",
      category: "Ziki Agency Services",
      image: "/dev3.jpg",
      url: "https://witty-sand-0e85e7803.4.azurestaticapps.net/",
    },
  ];
  return (
    <div id="work">
      <div className="flex justify-center items-center m-20">
        <h1 className="heading text-3xl sm:text-5xl font-bold">
          My <span className="text-purple">Latest Work</span>
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-1 z-10 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 z-10 ">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-500 mb-4 text-xl ">
                  {project.category}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="z-10 cursor-pointer mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-800">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
