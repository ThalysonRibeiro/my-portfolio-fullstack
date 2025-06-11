"use client"
import {
  Card, CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowBigDown, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { Carousel } from './carousel-image-projects';
import { projects } from '@/utils/contants';



export function Projects() {


  return (
    <section id="projetos" className="flex items-center justify-center flex-col min-h-screen">
      <div className="container mx-auto px-4 backdrop-blur-sm rounded-2xl">
        <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="relative group hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="absolute -z-[1] -inset-2 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-4">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative backdrop-blur-sm mb-10">
                <div>
                  <Carousel images={project.images} />
                </div>
                <p className="text-purple-400 rounded-sm text-md">{project.projectType}</p>
                <p className="text-gray-400 mb-4"></p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="default">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="absolute bottom-5 w-full">
                {/* <CardFooter className="absolute bottom-5 w-full"> */}
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
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code web
                  </Link>
                  {project.projectType === 'Fullstack' && (
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
                {/* <div className="flex items-center justify-between w-full">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demonstração
                  </Link>
                  <Link
                    href={`/projects-info/${project.id}`}
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-purple-400 transition-colors"
                  >
                    <Info size={20} className="mr-1" />
                    Mais Detalhes
                  </Link>
                </div> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};