"use client";

import { ChevronsDown, Download, Eye, MessageCircle } from "lucide-react";
import { AnimatedBackground } from "./animatedBackground";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { GithubStats } from "./gfithub-stats";

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
    label: "Veja meu trabalho",
    icon: Eye,
    targetId: "projetos",
    variant: "default",
    className: "col-span-2 md:col-span-1",
    ariaLabel: "Ver meus projetos em destaque"
  },
  {
    id: "contact",
    label: "Entre em contato",
    icon: MessageCircle,
    targetId: "contato",
    variant: "outline",
    className: "",
    ariaLabel: "Ir para seção de contato"
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

  const scrollToProjects = useCallback(() => {
    scrollToSection("projetos");
  }, [scrollToSection]);

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-[900px] w-full absolute top-10 -z-10">
        <AnimatedBackground />
      </div>

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
              <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                Thalyson Rafael
              </span>
            </h1>
          </motion.header>

          <motion.div variants={ANIMATION_CONFIG.item} className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Desenvolvedor <span className="text-red-500">Full Stack</span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Transformo ideias em{" "}
              <span className="text-foreground font-medium">experiências digitais envolventes</span>
              , com atenção aos detalhes no código e no que o usuário realmente precisa.
            </p>
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
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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

      <motion.button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 hover:bg-red-500/10 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        aria-label="Rolar para ver projetos"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <ChevronsDown size={32} className="text-red-400 drop-shadow-lg" />
        </motion.div>
      </motion.button>
    </section>
  );
}
