import { NavigationHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import Squares from "@/components/Squares";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/projects").then((mod) => mod.Projects));
const TechnicalDecisions = dynamic(() =>
  import("@/components/technical-decisions").then((mod) => mod.TechnicalDecisions)
);
const About = dynamic(() => import("@/components/about").then((mod) => mod.About));
const Contact = dynamic(() => import("@/components/contact").then((mod) => mod.Contact));

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <NavigationHeader />
      {/* <Background /> */}

      <div className="absolute w-full h-full -z-10 opacity-50">
        <Squares
          speed={0.1}
          squareSize={70}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#404040"
          hoverFillColor="#222"
        />
      </div>

      <div className="space-y-8">
        <Hero />
        <Projects />
        <TechnicalDecisions />
        <About />
        <Contact />
      </div>
    </main>
  );
}
