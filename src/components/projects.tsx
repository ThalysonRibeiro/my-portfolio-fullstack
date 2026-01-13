"use client";

import { Card, CardDescription, CardTitle } from "@/components/me-ui/card";
import { Badge } from "@/components/me-ui/badge";
import { Button } from "@/components/me-ui/button";
import { ArrowBigDown, Eye, Lock, FileText, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Carousel } from "./carousel-image-projects";
import { projects } from "@/utils/contants";
import { motion } from "framer-motion";
import { memo, useMemo, useState } from "react";
import vexiun_info from "@/utils/vexiun.json";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { FaGithub } from "react-icons/fa";

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
  project: (typeof projects)[0];
  index: number;
}

export function Projects() {
  const [activeType, setActiveType] = useState<string>("Todos");

  const projectTypes = useMemo(() => {
    const types = Array.from(new Set(projects.map((p) => p.projectType)));
    return ["Todos", ...types];
  }, []);

  const filteredProjects = useMemo(() => {
    return activeType === "Todos" ? projects : projects.filter((p) => p.projectType === activeType);
  }, [activeType]);

  return (
    <section id="projetos" className="scroll-mt-20 px-2" aria-labelledby="projects-heading">
      <div className="z-10 bg-background max-w-7xl mx-auto border">
        <header className="text-center py-6">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </header>

        <VexiunCard />

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filtrar por tipo de projeto"
        >
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              role="tab"
              aria-selected={activeType === type}
              onClick={() => setActiveType(type)}
              className={`px-3 py-1 rounded-none border text-sm transition-colors ${activeType === type ? "bg-primary text-primary-foreground border-primary" : "hover:bg-primary/10 hover:border-primary/40"}`}
            >
              {type}
            </button>
          ))}
          <Link
            href="https://github.com/ThalysonRibeiro?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm text-muted-foreground hover:text-primary"
            aria-label="Ver todos os repositórios no GitHub"
          >
            Ver todos no GitHub →
          </Link>
        </div>
        <div className="mt-8 px-4 lg:px-6 pb-12">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            role="list"
            aria-label="Mais projetos"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getProjectLinks(project: (typeof projects)[0]): ProjectLink[] {
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
      icon: FaGithub,
      ariaLabel: `Ver código frontend do projeto ${project.title} no GitHub`
    });
  }
  if (project.githubBackend) {
    links.push({
      href: project.githubBackend,
      label: "Backend",
      icon: FaGithub,
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
}

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const projectLinks = useMemo(() => getProjectLinks(project), [project]);

  return (
    <motion.article
      variants={ANIMATION_CONFIG.item}
      className="h-full group"
      role="article"
      transition={{ type: "spring", damping: 15 }}
      aria-labelledby={`project-title-${project.id}`}
    >
      <Card
        className={cn(
          "h-full p-0 relative bg-zinc-950/20 hover:bg-zinc-900/60 transition-all duration-300 border border-white/5 overflow-hidden flex flex-col"
        )}
      >
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-[80px] group-hover:bg-primary/10" />

        <div className="relative aspect-video overflow-hidden border-b border-white/5">
          <Carousel images={project.images} aria-label={`Imagens do projeto ${project.title}`} />
        </div>

        <div className="p-5 flex flex-col flex-1 space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <CardTitle
                id={`project-title-${project.id}`}
                className="text-xl font-bold leading-tight group-hover:text-primary transition-colors"
              >
                {project.title}
              </CardTitle>
              {project.projectType && (
                <span className="text-xs font-medium text-brand">{project.projectType}</span>
              )}
            </div>
            {project.category && (
              <Badge
                variant="secondary"
                className="text-[10px] uppercase tracking-wider shrink-0 bg-white/5 text-zinc-400"
                aria-label={`Categoria: ${project.category}`}
              >
                {project.category}
              </Badge>
            )}
          </div>

          <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </CardDescription>

          <div className="flex flex-wrap gap-1.5" role="list">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-white/5 text-[10px] font-medium text-zinc-400 border-transparent hover:border-primary/30 hover:text-primary transition-all"
                role="listitem"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="pt-4 mt-auto flex flex-wrap gap-2">
            {projectLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.href}
                  asChild
                  size="sm"
                  variant={link.label === "Live Demo" ? "default" : "outline"}
                  className="h-8 px-3 text-[11px] font-bold gap-2"
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                  >
                    <Icon size={14} aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </Card>
    </motion.article>
  );
});

export function VexiunCard() {
  return (
    <div className="relative border transition-all hover:bg-zinc-900/60 w-full h-full group overflow-hidden">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-[80px] group-hover:bg-primary/10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        <div className="relative hidden lg:block aspect-video w-full overflow-hidden border-b md:border-b-0 md:border-r h-full">
          <Image
            src="/vexiun.cap-1.webp"
            alt="Vexiun Dashboard Preview"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20 rounded-none">
              <span className="h-1.5 w-1.5 animate-pulse bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)] rounded-none" />
              {vexiun_info.ptBR.status}
            </span>
          </div>
        </div>

        <div className="flex flex-col p-6 lg:p-8 h-full">
          <div className="mb-4">
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
              {vexiun_info.ptBR.title}
            </h3>
            <p className="text-sm font-medium text-primary/80 italic line-clamp-1">
              {vexiun_info.ptBR.shortDescription}
            </p>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {vexiun_info.ptBR.fullDescription}
          </p>

          {/* Métricas de Impacto - DESTAQUE */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {vexiun_info.ptBR.impactMetrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="text-2xl font-bold text-primary tabular-nums tracking-tight">
                  {metric.value}{" "}
                  <span className="text-[10px] text-zinc-500 font-normal uppercase">
                    {metric.label}
                  </span>
                </span>
                <span className="text-[10px] text-zinc-400 line-clamp-1">{metric.detail}</span>
              </div>
            ))}
          </div>

          <div className="mb-6 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              Destaques Técnicos
            </p>
            <ul className="grid grid-cols-1 gap-2">
              {vexiun_info.ptBR.technicalHighlights.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 flex flex-wrap gap-1.5">
            {vexiun_info.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-white/5 text-[10px] font-medium text-zinc-400 border-transparent hover:border-primary/30 hover:text-primary transition-all"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <Link
              href="https://vexiun.com"
              className="flex items-center gap-2 bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-transform active:scale-95 hover:opacity-90"
            >
              <ExternalLink size={14} />
              Landing Page
            </Link>
            <Link
              href="https://www.notion.so/Case-Study-Vexiun-2e5a59ee290c80c886ccd65aee84561f?source=copy_link"
              className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/10"
            >
              <FileText size={14} />
              Case Study
            </Link>
            <div className="flex items-center gap-2 border border-white/5 bg-zinc-950/30 px-3 py-2 text-[10px] font-medium text-zinc-600">
              <Lock size={12} />
              {vexiun_info.ptBR.linkNote.includes("privado") ? "Repo Privado" : "Ver Código"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.displayName = "ProjectCard";
