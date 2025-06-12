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
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projetos" className="flex items-center justify-center flex-col min-h-screen py-16">
      <div className="container mx-auto px-4 backdrop-blur-sm rounded-2xl">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Projetos em destaque
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="relative group hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col p-4">
                <div className="absolute -z-[1] -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />

                <CardHeader className="p-0">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className="text-gray-500 text-sm">{project.category}</span>
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 flex-1 flex flex-col gap-4">
                  <div className="relative">
                    <Carousel images={project.images} />
                  </div>

                  <div>
                    <h3 className="text-purple-500 text-sm font-medium mb-2">
                      {project.projectType}
                    </h3>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="default"
                          className="text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-0 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-3 w-full">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>

                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm hover:text-purple-400 transition-colors"
                      >
                        <Github size={16} />
                        Frontend
                      </Link>
                    )}

                    {project.githubBackend && (
                      <Link
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm hover:text-purple-400 transition-colors"
                      >
                        <Github size={16} />
                        Backend
                      </Link>
                    )}

                    {project.app && project.appLink && (
                      <Link
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm hover:text-purple-400 transition-colors"
                      >
                        <ArrowBigDown size={16} />
                        App
                      </Link>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}