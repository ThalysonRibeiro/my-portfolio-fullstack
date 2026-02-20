"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Download, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiDocker
} from "react-icons/si";
import content from "@/utils/content.json";

import { Button } from "./me-ui/button";
import Link from "next/link";
import { Badge } from "./me-ui/badge";
import { Lang, useLanguageStore } from "@/store/language-store";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const METRICS = content.about.metrics;

const PROCESS_STEPS = content.about.process;

const TECH_STACK = content.about.techStack;

export const COURSES_DETAILS = {
  id: "01",
  title: "FullStack Pro",
  courses: "Sujeito Programador (2024 - 2025)",
  techs: TECH_STACK
};

const getIconTech = (tech: string) => {
  switch (tech) {
    case "TypeScript":
      return <SiTypescript className="text-blue-500" />;
    case "Next.js":
      return <SiNextdotjs className="text-white" />;
    case "Nest.js":
      return <SiNestjs className="text-red-500" />;
    case "PostgreSQL":
      return <SiPostgresql className="text-sky-700" />;
    case "Redis":
      return <SiRedis className="text-red-500" />;
    case "Docker":
      return <SiDocker className="text-blue-500" />;
  }
};

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  </div>
);

const MetricCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -4, scale: 1.02 }}
    className="bg-radial from-zinc-600/10 to-background/50 p-5 text-center group border border-transparent hover:border-primary/20"
  >
    <div className="flex items-center justify-center gap-2 mb-2">
      <span className="text-2xl font-bold">{value}</span>
    </div>
    <p className="text-sm text-muted-foreground">{label}</p>
  </motion.div>
);

const ProcessCard = ({ title, text, index }: { title: string; text: string; index: number }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -8, scale: 1.02 }}
    className="bg-radial from-zinc-600/10 to-background/50 p-6 group border border-transparent hover:border-primary/20 relative overflow-hidden"
  >
    <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/15 transition-colors duration-300">
      {String(index + 1).padStart(2, "0")}
    </div>
    <div className="flex items-center gap-3 mb-3 relative z-10">
      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
    </div>
    <p className="text-sm text-muted-foreground relative z-10">{text}</p>
  </motion.div>
);

type ActionButton = {
  id: string;
  label: string;
  icon: React.ElementType;
  targetId?: string;
  href?: string;
  download?: string;
  variant: "default" | "outline";
  className: string;
  ariaLabel: string;
};

function getActionButton(lang: Lang): readonly ActionButton[] {
  return [
    {
      id: "projects",
      label: content.hero.actions.portfolio.label[lang],
      icon: Eye,
      targetId: "projetos",
      variant: "default",
      className: "col-span-2 md:col-span-1",
      ariaLabel: content.hero.actions.portfolio.ariaLabel[lang]
    },
    {
      id: "whatsapp",
      label: content.hero.actions.whatsapp.label[lang],
      icon: FaWhatsapp,
      href: "https://wa.me/5565981278291?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar.",
      variant: "outline",
      className: "",
      ariaLabel: content.hero.actions.whatsapp.ariaLabel[lang]
    },
    {
      id: "resume",
      label: content.hero.actions.resume.label[lang],
      icon: Download,
      href: "/Curriculo_Thalyson_Ribeiro-full-stack.pdf",
      download: "Curriculo_Thalyson_Ribeiro-full-stack.pdf",
      variant: "outline",
      className: "",
      ariaLabel: content.hero.actions.resume.ariaLabel[lang]
    }
  ];
}

const ActionButtons = ({ lang }: { lang: Lang }) => (
  <div className="flex flex-wrap gap-3 pt-4">
    {getActionButton(lang).map((button) => (
      <Button key={button.id} asChild size="sm" variant={button.variant}>
        {button.href ? (
          <Link
            href={button.href}
            target={button.id === "whatsapp" ? "_blank" : undefined}
            rel={button.id === "whatsapp" ? "noopener noreferrer" : undefined}
            download={button.download}
            aria-label={button.ariaLabel}
          >
            <button.icon className="w-4 h-4 mr-2" aria-hidden="true" />
            {button.label}
          </Link>
        ) : (
          <Link href={`#${button.targetId}`} aria-label={button.ariaLabel}>
            <button.icon className="w-4 h-4 mr-2" aria-hidden="true" />
            {button.label}
          </Link>
        )}
      </Button>
    ))}
  </div>
);

const ProfileImage = () => (
  <motion.div variants={scaleIn} className="relative w-full">
    <div className="relative w-full max-w-sm lg:max-w-md mx-auto group">
      <div className="relative glass-card group-hover:border-primary/40 transition-all duration-500">
        <div className="relative w-full aspect-[4/5] min-h-[350px] overflow-hidden">
          <Image
            src="/profile.webp"
            alt="Foto de perfil de Thalyson Rafael - Desenvolvedor Full Stack"
            fill
            quality={75}
            priority={true}
            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-card px-5 py-2.5 flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold whitespace-nowrap">Full Stack Developer</span>
      </motion.div>
    </div>
  </motion.div>
);

export function About() {
  const { lang } = useLanguageStore();
  return (
    <section
      id="about"
      className="transition-all duration-300 min-h-screen scroll-mt-20 relative overflow-hidden px-2"
      aria-labelledby="about-heading"
    >
      <div className="w-full max-w-7xl mx-auto border bg-card py-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-7xl mx-auto space-y-6"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-14 border-b">
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <ProfileImage />
            </div>

            <div className="lg:col-span-7 space-y-8 p-2 flex flex-col justify-center">
              <motion.div variants={fadeUp}>
                <SectionHeader title={content.about.title[lang]} />

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>{content.about.intro.text1[lang]}</p>

                  <div className="space-y-3 border-l-2 border-primary/20 pl-4 py-1">
                    <p className="text-base">
                      <strong className="text-foreground font-semibold">
                        {content.about.differentiation.title[lang]}
                      </strong>
                    </p>
                    <p className="text-muted-foreground">
                      <strong>{content.about.differentiation.subtitle[lang]}</strong>{" "}
                      {content.about.differentiation.description[lang]}
                    </p>
                    <ul className="text-sm space-y-2">
                      {content.about.differentiation.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>
                            <strong className="text-foreground/90">{item.title[lang]}</strong>{" "}
                            {item.description[lang]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm">{content.about.intro.text2[lang]}</p>
                </div>

                <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 mt-6">
                  {TECH_STACK.map((tech) => {
                    return (
                      <Badge
                        key={tech.title}
                        variant="outline"
                        className="size-8 hover:bg-primary/10 hover:border-primary/50 transition-colors w-full"
                      >
                        <span>{getIconTech(tech.title)}</span>
                        {tech.title}
                      </Badge>
                    );
                  })}
                </div>
                <ActionButtons lang={lang} />
              </motion.div>
            </div>
          </div>

          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {METRICS.map((metric, index) => (
              <MetricCard key={`metric-${index}`} value={metric.value} label={metric.label[lang]} />
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
              {content.about.howIWorkTitle[lang]}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {PROCESS_STEPS.map((step, index) => (
                <ProcessCard
                  key={`process-${index}`}
                  title={step.title[lang]}
                  text={step.text[lang]}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
