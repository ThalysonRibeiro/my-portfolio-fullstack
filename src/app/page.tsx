import { Hero } from "@/components/en/Hero";
import { About } from "@/components/en/About";
import { Projects } from "@/components/en/Projects";
import { Contact } from "@/components/en/Contact";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}