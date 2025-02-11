import { Hero } from "@/components/en/Hero";
import { About } from "@/components/en/About";
import { Projects } from "@/components/en/Projects";
import { Contact } from "@/components/en/Contact";
import { Header } from "@/components/en/Header";
import { Footer } from "@/components/en/Footer";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}