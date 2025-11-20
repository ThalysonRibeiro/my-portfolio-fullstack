import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { NavigationHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <NavigationHeader />
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="space-y-6 mb-4">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
