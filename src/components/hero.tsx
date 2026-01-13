"use client";

import { Download, Eye, Rocket, Server, Layout, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { GithubStats } from "./github-stats";
import { Button } from "./me-ui/button";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  },
  title: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 1
      }
    }
  }
} as const;

type ActionButton = {
  id: string;
  label: string;
  icon: LucideIcon | React.ElementType;
  targetId?: string;
  variant: "default" | "outline";
  className: string;
  ariaLabel: string;
  href?: string;
  download?: string;
};

const ACTION_BUTTONS: readonly ActionButton[] = [
  {
    id: "projects",
    label: "Ver portfólio",
    icon: Eye,
    targetId: "projetos",
    variant: "default",
    className: "col-span-2 md:col-span-1",
    ariaLabel: "Ver meus projetos em destaque"
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/5565981278291?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar.",
    variant: "outline",
    className: "",
    ariaLabel: "Abrir conversa no WhatsApp"
  },
  {
    id: "resume",
    label: "Currículo",
    icon: Download,
    href: "/Curriculo_Thalyson_Ribeiro.pdf",
    download: "Curriculo_Thalyson_Ribeiro.pdf",
    variant: "outline",
    className: "",
    ariaLabel: "Baixar currículo em PDF"
  }
] as const;

type Feature = {
  id: string;
  label: string;
  icon: typeof Eye;
};

const FEATURES: readonly Feature[] = [
  { id: "end-to-end", label: "Do planejamento ao deploy", icon: Rocket },
  { id: "backend", label: "Back-end escalável (Node.js, Prisma, Postgres)", icon: Server },
  { id: "ui", label: "Interfaces animadas e acessíveis", icon: Layout }
] as const;

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 px-2"
      aria-labelledby="hero-heading"
    >
      {/* Premium Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={ANIMATION_CONFIG.container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="z-10 bg-background/60 backdrop-blur-[2px] max-w-7xl mx-auto border w-full flex flex-col items-center justify-center text-center gap-8 pt-20 relative"
      >
        <motion.header variants={ANIMATION_CONFIG.title} className="w-full space-y-4">
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary/60 mb-4 block">
            Full Stack Developer & Architect
          </span>
          <h1
            id="hero-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-black text-center tracking-tighter mx-auto px-4"
          >
            <span className="block text-white mb-2">Olá, eu sou</span>
            <span className="bg-gradient-to-r from-white via-primary to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Thalyson Rafael
            </span>
          </h1>
        </motion.header>

        <motion.div variants={ANIMATION_CONFIG.item} className="space-y-4 max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-zinc-400 leading-tight">
            Transformo visão técnica em{" "}
            <span className="text-white font-bold decoration-primary/40">produtos escaláveis</span>{" "}
            e experiências de alto impacto.
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-muted-foreground/80">
            Focado em arquitetura monorepo, performance extrema e decisões orientadas a dados para
            SaaS de nova geração.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.id}
                  className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/5 hover:border-primary/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="text-xs md:text-sm font-medium text-zinc-300">{f.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={ANIMATION_CONFIG.item} className="flex gap-4 absolute top-4 left-4">
          <Link
            href="https://github.com/ThalysonRibeiro"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex justify-center items-center border border-white/10 p-3",
              "hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-110"
            )}
            aria-label="Perfil do GitHub"
          >
            <FaGithub size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thalyson-rafael-br"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex justify-center items-center border border-white/10 p-3",
              "hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-110"
            )}
            aria-label="Perfil do LinkedIn"
          >
            <FaLinkedinIn size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Link>
        </motion.div>

        <div className="w-full flex justify-center">
          <motion.nav
            variants={ANIMATION_CONFIG.item}
            className="flex flex-wrap items-center justify-center gap-4 w-full"
            aria-label="Ações principais"
          >
            {ACTION_BUTTONS.map((button) => {
              const Icon = button.icon;
              const isPrimary = button.variant === "default";

              const buttonElement = (
                <Button
                  variant={button.variant}
                  size="xl"
                  className={cn(
                    "min-w-[180px] h-14 relative group overflow-hidden transition-all duration-500 rounded-none",
                    isPrimary
                      ? "bg-primary hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/30"
                  )}
                  onClick={() => button.targetId && scrollToSection(button.targetId)}
                >
                  {isPrimary && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:animate-shine pointer-events-none" />
                  )}
                  <Icon
                    className={cn(
                      "w-5 h-5 mr-3 transition-transform duration-300",
                      !isPrimary && "text-primary"
                    )}
                  />
                  <span className="tracking-tight">{button.label}</span>
                </Button>
              );

              if (button.href) {
                return (
                  <Link
                    key={button.id}
                    href={button.href}
                    download={button.download}
                    target={button.id === "whatsapp" ? "_blank" : undefined}
                  >
                    {buttonElement}
                  </Link>
                );
              }

              return <div key={button.id}>{buttonElement}</div>;
            })}
          </motion.nav>
        </div>

        <motion.div
          variants={ANIMATION_CONFIG.item}
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground w-full py-8"
        >
          <GithubStats />
        </motion.div>
      </motion.div>
    </section>
  );
}
