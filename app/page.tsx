import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className=" relative flex flex-col bg-black-100 items-center justify-between overflow-hidden mx-auto sm:px-10 px-5  ">
     <div className="mx-w-7xl w-full">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome/>},
        {name: 'Coding', link: '#coding', icon: <FaHome/>},
        {name: 'About', link: '#about', icon: <FaHome/>},
        {name: 'Experience', link: '#experience', icon: <FaHome/>},
        {name: 'Skills', link: '#skills', icon: <FaHome/>},
        {name: 'Footer', link: '#footer', icon: <FaHome/>}
      ]}/>
      <Hero />
      <Grid />
      <About/>
      <Experience/>
      <Skills/>
      <Footer/>
     </div>
    </main>
  );
}
