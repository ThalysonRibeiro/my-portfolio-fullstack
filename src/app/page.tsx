import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { NavigationHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main>
      <NavigationHeader />
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
