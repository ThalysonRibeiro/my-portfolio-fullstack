"use client"
import { ProjectProps } from "@/utils/contants";
import { ArrowBigDown, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectContent({ project }: { project: ProjectProps }) {
  return (
    <section className="flex items-center">
      <article className="md:w-1/2 w-full px-2">
        <h2>{project.title}</h2>
        <h3>sub title</h3>
        <p>{project.description}</p>
        <div>
          <div className="flex flex-wrap gap-2 space-x-4">
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
            >
              <ExternalLink size={20} className="mr-1" />
              Live Demo
            </Link>
            {project.github !== "" && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github size={20} className="mr-1" />
                Code web
              </Link>
            )}
            {project.projectType === 'Fullstack' && project.githubBackend !== "" && project.appLink !== "" && (
              <Link
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github size={20} className="mr-1" />
                Backend
              </Link>
            )}
            {project.app === 'Mobile' && (
              <Link
                href={project.appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
              >
                <ArrowBigDown size={20} className="mr-1" />
                App mobile
              </Link>
            )}
          </div>
        </div>
      </article>
      <aside className="md:w-1/2 md:block hidden px-2">
        <div>
          <Image
            src={project.images[0].image}
            alt="imagem project"
            width={1000}
            height={1000}
            className="object-cover"
            priority
            quality={100}

          />
        </div>
        <div>123</div>
      </aside>
    </section>
  )
}