import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="space-y-6 mb-4">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
