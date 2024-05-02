import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center"></main>
      <About />
      <Skills />
      <Projects />
    </>
  );
}
