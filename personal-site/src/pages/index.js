import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center"></main>
      <Intro />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
