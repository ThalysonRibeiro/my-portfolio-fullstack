import { About } from "@/components/pt-br/About";
import { Contact } from "@/components/pt-br/Contact";
import { Footer } from "@/components/pt-br/Footer";
import { Header } from "@/components/pt-br/Header";
import { Hero } from "@/components/pt-br/Hero";
import { Projects } from "@/components/pt-br/Projects";




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