"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowBigDown, Github, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Carousel } from "./carousel-image-projects";
import { projects } from "@/utils/contants";
import { motion } from "framer-motion";
import { memo, useMemo, useRef, useState, useEffect } from "react";
import { useDragScroll } from "@/app/hooks/use-drag-scroll";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<number | null>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);
  const ARROW_STEP_DIVISOR = 14;
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } = useDragScroll(false, scrollRef);
  const projectTypes = useMemo(() => {
    const types = Array.from(new Set(projects.map((p) => p.projectType)));
    return ["Todos", ...types];
  }, []);

  const filteredProjects = useMemo(() => {
    return activeType === "Todos" ? projects : projects.filter((p) => p.projectType === activeType);
  }, [activeType]);
  const featuredProject = filteredProjects[0];
  const otherProjects = filteredProjects.slice(1);

  useEffect(() => {
    const updateShadows = () => {
      const el = scrollRef.current?.querySelector(
        ".relative.w-full.overflow-x-auto"
      ) as HTMLElement | null;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setShowLeftShadow(scrollLeft > 0);
      setShowRightShadow(scrollLeft + clientWidth < scrollWidth);
    };
    updateShadows();
    const el = scrollRef.current?.querySelector(
      ".relative.w-full.overflow-x-auto"
    ) as HTMLElement | null;
    el?.addEventListener("scroll", updateShadows, { passive: true });
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      el?.removeEventListener("scroll", updateShadows);
    };
  }, []);

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
            className="text-3xl md:text-4xl font-bold mb-4 brand-gradient-text"
          >
            Projetos em destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
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
                className={`px-3 py-1 rounded-full border text-sm transition-colors ${activeType === type ? "bg-primary text-primary-foreground border-primary" : "hover:bg-primary/10 hover:border-primary/40"}`}
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
        </header>
        {featuredProject ? (
          <FeaturedProject project={featuredProject} />
        ) : (
          <p className="text-center text-muted-foreground">Nenhum projeto encontrado.</p>
        )}

        {otherProjects.length > 0 && (
          <div ref={scrollRef} className="mt-8 -mx-4 px-4 relative">
            <button
              type="button"
              onMouseDown={() => {
                const container = scrollRef.current?.querySelector(
                  ".relative.w-full.overflow-x-auto"
                ) as HTMLElement | null;
                if (!container) return;
                const step = Math.max(200, Math.floor(container.clientWidth * 0.6));
                autoScrollIntervalRef.current = window.setInterval(() => {
                  container.scrollBy({
                    left: -step / ARROW_STEP_DIVISOR,
                    behavior: "auto"
                  });
                }, 16);
              }}
              onMouseUp={() => {
                if (autoScrollIntervalRef.current) {
                  clearInterval(autoScrollIntervalRef.current);
                  autoScrollIntervalRef.current = null;
                }
              }}
              onMouseLeave={() => {
                if (autoScrollIntervalRef.current) {
                  clearInterval(autoScrollIntervalRef.current);
                  autoScrollIntervalRef.current = null;
                }
              }}
              className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg z-10"
              aria-label="Rolar para a esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="relative w-full overflow-x-auto" onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
              <div
                className="flex gap-4 snap-x snap-proximity pb-4 cursor-grab"
                role="list"
                aria-label="Mais projetos"
              >
                {otherProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="snap-start w-[95%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex-shrink-0"
                    role="listitem"
                  >
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            </div>
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent ${showLeftShadow ? "" : "hidden"}`}
            />
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent ${showRightShadow ? "" : "hidden"}`}
            />
            <button
              type="button"
              onMouseDown={() => {
                const container = scrollRef.current?.querySelector(
                  ".relative.w-full.overflow-x-auto"
                ) as HTMLElement | null;
                if (!container) return;
                const step = Math.max(200, Math.floor(container.clientWidth * 0.6));
                autoScrollIntervalRef.current = window.setInterval(() => {
                  container.scrollBy({
                    left: step / ARROW_STEP_DIVISOR,
                    behavior: "auto"
                  });
                }, 16);
              }}
              onMouseUp={() => {
                if (autoScrollIntervalRef.current) {
                  clearInterval(autoScrollIntervalRef.current);
                  autoScrollIntervalRef.current = null;
                }
              }}
              onMouseLeave={() => {
                if (autoScrollIntervalRef.current) {
                  clearInterval(autoScrollIntervalRef.current);
                  autoScrollIntervalRef.current = null;
                }
              }}
              className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg z-10"
              aria-label="Rolar para a direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
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
      <Card className="glass-card hover:border-red-500/50 h-full p-5 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="relative rounded-lg overflow-hidden md:w-[60%] lg:w-[60%]">
            <Carousel images={project.images} aria-label={`Imagens do projeto ${project.title}`} />
          </div>
          <div className="space-y-4 md:flex-1">
            <div className="flex items-start justify-between gap-2">
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
            <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {project.description}
            </CardDescription>
            {project.projectType && (
              <div>
                <h3 className="text-brand text-sm font-medium">{project.projectType}</h3>
              </div>
            )}
            <div>
              <h4 className="sr-only">Tecnologias utilizadas</h4>
              <div className="flex flex-wrap gap-1.5" role="list">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    role="listitem"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {projectLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.href}
                    asChild
                    variant="outline"
                    size="sm"
                    className="group relative overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="inline-flex items-center gap-2"
                    >
                      <Icon size={16} aria-hidden="true" />
                      <span>{link.label}</span>
                      <div className="btn-gradient-hover -z-10" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </motion.article>
  );
});

function FeaturedProject({ project }: { project: (typeof projects)[0] }) {
  const projectLinks = useMemo(() => getProjectLinks(project), [project]);
  return (
    <motion.article
      variants={ANIMATION_CONFIG.item}
      aria-labelledby={`featured-project-${project.id}`}
      className="mb-8"
    >
      <Card className="glass-card p-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="relative rounded-lg overflow-hidden">
            <Carousel images={project.images} aria-label={`Imagens do projeto ${project.title}`} />
          </div>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-2">
              <CardTitle
                id={`featured-project-${project.id}`}
                className="text-2xl font-bold leading-tight"
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
            <CardDescription className="text-base leading-relaxed text-muted-foreground">
              {project.description}
            </CardDescription>
            <div>
              <h4 className="sr-only">Tecnologias utilizadas</h4>
              <div className="flex flex-wrap gap-1.5" role="list">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    role="listitem"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {projectLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.href}
                    asChild
                    variant="default"
                    size="sm"
                    className="group relative overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="inline-flex items-center gap-2"
                    >
                      <Icon size={16} aria-hidden="true" />
                      <span>{link.label}</span>
                      <div className="btn-gradient-hover -z-10" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

ProjectCard.displayName = "ProjectCard";
