"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowBigDown, Github, Eye } from 'lucide-react';
import Link from 'next/link';
import { Carousel } from './carousel-image-projects';
import { projects } from '@/utils/contants';
import { motion } from "framer-motion";
import { memo, useMemo } from "react";

const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }
} as const;

interface ProjectLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  ariaLabel: string;
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

export function Projects() {
  return (
    <section
      id="projetos"
      className="flex items-center justify-center flex-col min-h-screen py-16 scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 backdrop-blur-sm rounded-2xl">
        <header className="text-center mb-12">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
          >
            Projetos em destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </header>

        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const projectLinks = useMemo(() => {
    const links: ProjectLink[] = [
      {
        href: project.live,
        label: "Live Demo",
        icon: Eye,
        ariaLabel: `Ver demonstração ao vivo do projeto ${project.title}`
      }
    ];

    if (project.github) {
      links.push({
        href: project.github,
        label: "Frontend",
        icon: Github,
        ariaLabel: `Ver código frontend do projeto ${project.title} no GitHub`
      });
    }

    if (project.githubBackend) {
      links.push({
        href: project.githubBackend,
        label: "Backend",
        icon: Github,
        ariaLabel: `Ver código backend do projeto ${project.title} no GitHub`
      });
    }

    if (project.app && project.appLink) {
      links.push({
        href: project.appLink,
        label: "Download App",
        icon: ArrowBigDown,
        ariaLabel: `Baixar aplicativo ${project.title}`
      });
    }

    return links;
  }, [project]);

  return (
    <motion.article
      variants={ANIMATION_CONFIG.item}
      className="h-full group"
      role="article"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", damping: 15 }}
      aria-labelledby={`project-title-${project.id}`}
    >
      <Card className="bg-transparent hover:border-red-500/50 h-full flex flex-col p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1">

        <CardHeader className="p-0 mb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <CardTitle
              id={`project-title-${project.id}`}
              className="text-xl font-bold leading-tight"
            >
              {project.title}
            </CardTitle>
            {project.category && (
              <Badge
                variant="secondary"
                className="text-xs shrink-0"
                aria-label={`Categoria: ${project.category}`}
              >
                {project.category}
              </Badge>
            )}
          </div>

          <CardDescription className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 flex-1 flex flex-col gap-4">

          <div className="relative rounded-lg overflow-hidden">
            <Carousel
              images={project.images}
              aria-label={`Imagens do projeto ${project.title}`}
            />
          </div>

          <div className="space-y-3">
            {project.projectType && (
              <div>
                <h3 className="text-red-500 text-sm font-medium mb-2">
                  {project.projectType}
                </h3>
              </div>
            )}

            <div>
              <h4 className="sr-only">Tecnologias utilizadas</h4>
              <div className="flex flex-wrap gap-1.5" role="list">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs hover:bg-red-500/10 hover:border-red-500/30 transition-colors"
                    role="listitem"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-0 pt-6 mt-auto">
          <nav className="flex flex-wrap gap-3 w-full" aria-label="Links do projeto">
            {projectLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-red-400 transition-colors focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-2 rounded-md px-2 py-1"
                  aria-label={link.ariaLabel}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </CardFooter>
      </Card>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";