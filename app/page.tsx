import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaAndroid, FaBarcode, FaHome, FaHtml5, FaJava } from "react-icons/fa";
import { FaMobile, FaT } from "react-icons/fa6";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className=" relative flex flex-col bg-black-100 items-center justify-between overflow-hidden mx-auto sm:px-10 px-5  ">
     <div className="mx-w-7xl w-full">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome/>},
        {name: 'Coding', link: '#coding', icon: <FaHtml5/>},
        {name: 'About', link: '#about', icon: <FaAndroid/>},
        {name: 'Experience', link: '#experience', icon: <FaJava/>},
        {name: 'Skills', link: '#skills', icon: <FaMobile/>},
        {name: 'Work', link: '#work', icon: <FaMobile/>},
        {name: 'Footer', link: '#footer', icon: <FaT/>}
      ]}/>
      <Hero />
      <Grid />
      <About/>
      <Experience/>
      <Skills/>
      <Work/>
      <Footer/>
     </div>
    </main>
  );
}
