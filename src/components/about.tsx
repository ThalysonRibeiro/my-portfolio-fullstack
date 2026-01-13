"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { memo } from "react";
import {
  Code,
  Layout,
  Server,
  Settings,
  Rocket,
  Workflow,
  ShieldCheck,
  Eye,
  Download,
  Sparkles
} from "lucide-react";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaWhatsapp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCloudinary, SiNestjs, SiPrisma, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrStripe } from "react-icons/gr";

import { Button } from "./me-ui/button";
import Link from "next/link";
import { Badge } from "./me-ui/badge";

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

const METRICS = [
  { icon: Rocket, value: "5+", label: "Projetos end-to-end" },
  { icon: Server, value: "Node + Prisma", label: "Back-end escalável" },
  { icon: Layout, value: "Next + Tailwind", label: "UI performática" },
  { icon: ShieldCheck, value: "Auth + Stripe", label: "Integrações seguras" }
];

const PROCESS_STEPS = [
  { icon: Workflow, title: "Descoberta", text: "Entendo o problema, público e sucesso esperado." },
  { icon: Settings, title: "Arquitetura", text: "Defino fluxos, modelos e integrações." },
  { icon: Code, title: "Entrega", text: "Implemento com testes, performance e acessibilidade." }
];

const TECH_STACK = [
  { icon: FaHtml5, title: "HTML5" },
  { icon: FaCss3Alt, title: "CSS3" },
  { icon: IoLogoJavascript, title: "JavaScript" },
  { icon: RiTailwindCssFill, title: "TailwindCSS" },
  { icon: SiTypescript, title: "TypeScript" },
  { icon: RiNextjsFill, title: "Next.js" },
  { icon: FaNodeJs, title: "Node.js" },
  { icon: SiNestjs, title: "Nest.js" },
  { icon: SiPrisma, title: "Prisma" },
  { icon: BiLogoPostgresql, title: "PostgreSQL" },
  { icon: GrStripe, title: "Stripe" },
  { icon: SiCloudinary, title: "Cloudinary" }
];

export const COURSES_DETAILS = {
  id: "01",
  title: "FullStack Pro",
  courses: "Sujeito Programador (2024 - 2025)",
  techs: TECH_STACK
};

const getColorIconTech = (tech: string) => {
  switch (tech) {
    case "HTML5":
      return "text-orange-500";
    case "CSS3":
      return "text-blue-400";
    case "JavaScript":
      return "text-yellow-500";
    case "TailwindCSS":
      return "text-teal-500";
    case "TypeScript":
      return "text-blue-700";
    case "Next.js":
      return "text-white";
    case "Node.js":
      return "text-green-500";
    case "Nest.js":
      return "text-red-500";
    case "Prisma":
      return "text-white";
    case "PostgreSQL":
      return "text-sky-700";
    case "Stripe":
      return "text-violet-500";
    case "Cloudinary":
      return "text-blue-500";
    default:
      return "text-gray-500";
  }
};

const SectionHeader = memo(({ title }: { title: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  </div>
));
SectionHeader.displayName = "SectionHeader";

const MetricCard = memo(({ icon: Icon, value, label }: (typeof METRICS)[0]) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -4, scale: 1.02 }}
    className="glass-card p-5 text-center group hover:border-primary/30"
  >
    <div className="flex items-center justify-center gap-2 mb-2">
      <Icon
        className="w-5 h-5 text-primary group-hover:scale-110 transition-transform"
        aria-hidden="true"
      />
      <span className="text-2xl font-bold">{value}</span>
    </div>
    <p className="text-sm text-muted-foreground">{label}</p>
  </motion.div>
));
MetricCard.displayName = "MetricCard";

const ProcessCard = memo(
  ({ icon: Icon, title, text, index }: (typeof PROCESS_STEPS)[0] & { index: number }) => (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-6 group hover:border-primary/40 relative overflow-hidden"
    >
      <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/15 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="flex items-center gap-3 mb-3 relative z-10">
        <div className="p-2 border border-white/5 group-hover:scale-110 transition-transform duration-300 rounded-none bg-white/5">
          <Icon className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground relative z-10">{text}</p>
    </motion.div>
  )
);
ProcessCard.displayName = "ProcessCard";

const ActionButtons = memo(() => (
  <div className="flex flex-wrap gap-3 pt-4">
    <Button asChild size="sm">
      <Link href="#projetos" aria-label="Ver portfólio">
        <Eye className="w-4 h-4 mr-2" aria-hidden="true" />
        Ver portfólio
      </Link>
    </Button>
    <Button asChild size="sm">
      <Link
        href="https://wa.me/5565981278291?text=Olá!%20Vi%20seu%20portfólio%20e%20quero%20conversar."
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="w-4 h-4 mr-2" aria-hidden="true" />
        WhatsApp
      </Link>
    </Button>
    <Button asChild size="sm">
      <Link href="/Curriculo_Thalyson_Ribeiro.pdf" download>
        <Download className="w-4 h-4 mr-2" aria-hidden="true" />
        Currículo
      </Link>
    </Button>
  </div>
));
ActionButtons.displayName = "ActionButtons";

const ProfileImage = memo(() => (
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
));
ProfileImage.displayName = "ProfileImage";

export function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen scroll-mt-20 relative overflow-hidden px-2"
      aria-labelledby="about-heading"
    >
      <div className="wz-10 max-w-7xl mx-auto border bg-card py-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-7xl mx-auto space-y-6"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-24 border-b">
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <ProfileImage />
            </div>

            <div className="lg:col-span-7 space-y-8 p-2 flex flex-col justify-center">
              <motion.div variants={fadeUp}>
                <SectionHeader title="Sobre mim" />

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Da gastronomia para a tecnologia, levo{" "}
                    <span className="text-foreground font-medium">
                      disciplina, clareza e foco em resultado
                    </span>{" "}
                    para cada projeto. Não apenas escrevo código, mas projeto softwares baseados em{" "}
                    <span className="text-primary font-semibold italic">
                      decisões orientadas a dados e custos
                    </span>
                    .
                  </p>

                  <div className="space-y-3 border-l-2 border-primary/20 pl-4 py-1">
                    <p className="text-base">
                      <strong className="text-foreground font-semibold">
                        O que me diferencia:
                      </strong>
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Dados, não achismos:</strong> Todas decisões técnicas baseadas em
                      análise de threshold, benchmarks e projeções de custo. Migração para NestJS só
                      aconteceu quando análise mostrou economia de 70% na escala.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>
                          <strong className="text-foreground/90">Gestão de Infra:</strong> Migração
                          Vexiun Vercel → Railway priorizando 70% de economia.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>
                          <strong className="text-foreground/90">Performance:</strong> WebSocket
                          substituindo polling reduzindo 86k requests/dia.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>
                          <strong className="text-foreground/90">Arquitetura:</strong> Monorepo com
                          tipos compartilhados (Zero drift) em NestJS e Next.js 15.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm">
                    Priorizo{" "}
                    <span className="text-foreground font-medium">
                      performance, acessibilidade e DX
                    </span>{" "}
                    para evoluir rápido sem perder a qualidade do produto final.
                  </p>
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 mt-6">
                  {TECH_STACK.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <Badge
                        key={tech.title}
                        variant="outline"
                        className="hover:bg-primary/10 hover:border-primary/50 transition-colors w-full"
                      >
                        <span className={getColorIconTech(tech.title)}>
                          <Icon />
                        </span>
                        {tech.title}
                      </Badge>
                    );
                  })}
                </div>
                <ActionButtons />
              </motion.div>
            </div>
          </div>

          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {METRICS.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Como trabalho</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {PROCESS_STEPS.map((step, index) => (
                <ProcessCard key={step.title} {...step} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
