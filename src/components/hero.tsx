"use client";

import { Download, Eye, MessageCircle, Rocket, Server, Layout } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { GithubStats } from "./github-stats";

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
  icon: typeof Eye;
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
    label: "Falar no WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/5565981278291?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar.",
    variant: "outline",
    className: "",
    ariaLabel: "Abrir conversa no WhatsApp"
  },
  {
    id: "resume",
    label: "Baixar currículo",
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
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background/20" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="w-full flex flex-col items-center justify-center space-y-8 text-center"
        >
          <motion.header variants={ANIMATION_CONFIG.title}>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight"
            >
              <span className="block mb-2">Olá, eu sou</span>
              <span className="block brand-gradient-text animate-gradient-x bg-[length:200%_auto]">
                Thalyson Rafael
              </span>
            </h1>
          </motion.header>

          <motion.div variants={ANIMATION_CONFIG.item} className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Construo produtos <span className="text-brand">full stack</span> focados em
              experiência e resultado
            </h2>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Da gastronomia para a tecnologia, levo disciplina e clareza para cada projeto. Desenho
              e entrego aplicações de ponta a ponta, com métricas e performance desde o primeiro
              dia.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.id}
                    className="flex items-center gap-3 justify-center sm:justify-start"
                  >
                    <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                    <span className="text-sm md:text-base text-muted-foreground">{f.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.nav
            variants={ANIMATION_CONFIG.item}
            className="grid grid-cols-2 md:grid-cols-3 w-full max-w-2xl gap-4"
            aria-label="Ações principais"
          >
            {ACTION_BUTTONS.map((button) => {
              const Icon = button.icon;

              if (button.href) {
                return (
                  <Button
                    key={button.id}
                    asChild
                    variant={button.variant}
                    size="lg"
                    className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 ${button.className}`}
                    aria-label={button.ariaLabel}
                  >
                    <a
                      href={button.href}
                      download={button.download}
                      className="flex items-center justify-center gap-2"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span>{button.label}</span>
                      <div className="btn-gradient-hover -z-10" />
                    </a>
                  </Button>
                );
              }

              return (
                <Button
                  key={button.id}
                  onClick={() => button.targetId && scrollToSection(button.targetId)}
                  variant={button.variant}
                  size="lg"
                  className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 ${button.className}`}
                  aria-label={button.ariaLabel}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{button.label}</span>
                  <div className="btn-gradient-hover -z-10" />
                </Button>
              );
            })}
          </motion.nav>

          <motion.div
            variants={ANIMATION_CONFIG.item}
            className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground"
          >
            <GithubStats />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
