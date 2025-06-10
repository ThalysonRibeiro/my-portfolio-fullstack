import { projectsEN } from "@/utils/contants";
import { ProjectContent } from "./_components/projectContent";
import Link from "next/link";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";

export default async function ProjectsInfo({ params }: { params: { id: string } }) {
  const projectId = (await params).id;
  const project = projectsEN.find(project => project.id === projectId);

  if (!project) {
    return (
      <main className="p-10 text-center text-red-400">
        <h2 className="text-2xl font-semibold">Projeto não encontrado.</h2>
      </main>
    );
  }
  return (
    <main className="container mx-auto">
      <section>
        <nav>
          <Link href={"/"} className="flex gap-2">
            <ArrowLeft className="text-indigo-500" />
            Back</Link>
        </nav>
      </section>
      <ProjectContent project={project} />
    </main>
  )
}