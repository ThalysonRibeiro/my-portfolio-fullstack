"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { courses_details } from "@/utils/contants";
import { memo } from "react";
import {
  Code,
  GraduationCap,
  Layout,
  Server,
  Settings,
  User,
  Rocket,
  Workflow,
  ShieldCheck,
  Eye,
  MessageCircle,
  Download,
  Sparkles
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";

// Animações
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

// Dados
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
  "Next.js",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Auth.js",
  "Stripe",
  "Cloudinary",
  "TailwindCSS"
];

// Timeline data - cursos + badges intercalados
const TIMELINE_ITEMS = [
  { type: "course", side: "left", data: courses_details[0] },
  { type: "badges", side: "right", data: ["HTML5", "CSS3", "JavaScript"] },
  { type: "course", side: "left", data: courses_details[1] },
  { type: "badges", side: "right", data: TECH_STACK }
];

const getYearRange = (s: string) => {
  const m = s.match(/\(([^)]+)\)/);
  return m ? m[1] : "";
};

// Componente de Seção Header
const SectionHeader = memo(
  ({
    icon: Icon,
    title,
    gradient = "brand-gradient"
  }: {
    icon: React.ElementType;
    title: string;
    gradient?: string;
  }) => (
    <div className="flex items-center gap-4 mb-8">
      <motion.div
        className={`p-3 ${gradient} rounded-2xl shadow-lg shadow-primary/20`}
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
      </motion.div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold brand-gradient-text">{title}</h2>
        <div className="h-1 w-16 brand-gradient rounded-full mt-2" />
      </div>
    </div>
  )
);
SectionHeader.displayName = "SectionHeader";

// Card de Métrica
const MetricCard = memo(({ icon: Icon, value, label }: (typeof METRICS)[0]) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -4, scale: 1.02 }}
    className="glass-card rounded-2xl p-5 text-center group hover:border-primary/30 transition-all duration-300"
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

// Card de Processo
const ProcessCard = memo(
  ({ icon: Icon, title, text, index }: (typeof PROCESS_STEPS)[0] & { index: number }) => (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card rounded-2xl p-6 group hover:border-primary/40 transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/15 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="flex items-center gap-3 mb-3 relative z-10">
        <div className="p-2 brand-gradient rounded-xl group-hover:scale-110 transition-transform duration-300">
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

// Botões de Ação
const ActionButtons = memo(() => (
  <div className="flex flex-wrap gap-3 pt-4">
    <Button
      asChild
      size="sm"
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
    >
      <Link href="#projetos" aria-label="Ver portfólio">
        <Eye className="w-4 h-4 mr-2" aria-hidden="true" />
        Ver portfólio
        <div className="btn-gradient-hover -z-10" />
      </Link>
    </Button>
    <Button
      asChild
      variant="outline"
      size="sm"
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
    >
      <Link
        href="https://wa.me/5565981278291?text=Olá!%20Vi%20seu%20portfólio%20e%20quero%20conversar."
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
        WhatsApp
        <div className="btn-gradient-hover -z-10" />
      </Link>
    </Button>
    <Button
      asChild
      variant="outline"
      size="sm"
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
    >
      <Link href="/Curriculo_Thalyson_Ribeiro.pdf" download>
        <Download className="w-4 h-4 mr-2" aria-hidden="true" />
        Currículo
        <div className="btn-gradient-hover -z-10" />
      </Link>
    </Button>
  </div>
));
ActionButtons.displayName = "ActionButtons";

// Imagem de Perfil
const ProfileImage = memo(() => (
  <motion.div variants={scaleIn} className="relative w-full">
    <div className="relative w-full max-w-sm lg:max-w-md mx-auto group">
      {/* Glow effect */}
      <div className="absolute -inset-4 brand-gradient rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Container da imagem */}
      <div className="relative glass-card rounded-3xl p-3 group-hover:border-primary/40 transition-all duration-500">
        <div className="relative w-full aspect-[4/5] min-h-[350px] rounded-2xl overflow-hidden">
          <Image
            src="/profile.png"
            alt="Foto de perfil de Thalyson Rafael - Desenvolvedor Full Stack"
            fill
            quality={100}
            priority={true}
            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute inset-0 brand-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        </div>
      </div>

      {/* Info badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-card rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg"
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold whitespace-nowrap">Full Stack Developer</span>
      </motion.div>
    </div>
  </motion.div>
));
ProfileImage.displayName = "ProfileImage";

// Timeline Item - Course Card
const TimelineCourseCard = memo(
  ({ course, side }: { course: (typeof courses_details)[0]; side: "left" | "right" }) => {
    const year = getYearRange(course.courses);
    const isLeft = side === "left";

    return (
      <motion.div
        variants={fadeUp}
        className={`relative flex items-center ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}
      >
        {/* Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`glass-card rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 w-full lg:w-[calc(50%-3rem)]`}
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-lg text-primary">{course.title}</h4>
            {year && (
              <span className="text-xs glass-card rounded-full px-3 py-1 text-muted-foreground">
                {year}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{course.courses}</p>
        </motion.div>

        {/* Linha horizontal conectora - apenas desktop */}
        <div
          className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-0.5 w-12 brand-gradient ${isLeft ? "left-[calc(50%-3rem)]" : "right-[calc(50%-3rem)]"}`}
        />

        {/* Dot na linha central - apenas desktop */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 brand-gradient rounded-full ring-4 ring-background z-10" />
      </motion.div>
    );
  }
);
TimelineCourseCard.displayName = "TimelineCourseCard";

// Timeline Item - Badges Card
const TimelineBadgesCard = memo(
  ({ badges, side }: { badges: string[]; side: "left" | "right" }) => {
    const isLeft = side === "left";

    return (
      <motion.div
        variants={fadeUp}
        className={`relative flex items-center ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}
      >
        {/* Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`glass-card rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 w-full lg:w-[calc(50%-3rem)]`}
        >
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Linha horizontal conectora - apenas desktop */}
        <div
          className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-0.5 w-12 brand-gradient ${isLeft ? "left-[calc(50%-3rem)]" : "right-[calc(50%-3rem)]"}`}
        />

        {/* Dot na linha central - apenas desktop */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 brand-gradient rounded-full ring-4 ring-background z-10" />
      </motion.div>
    );
  }
);
TimelineBadgesCard.displayName = "TimelineBadgesCard";

// Seção de Formação - Timeline Central
const EducationSection = memo(() => (
  <motion.div variants={fadeUp} className="space-y-6">
    <div className="relative">
      {/* Header com linha conectora */}
      <div className="relative inline-block">
        <SectionHeader
          icon={GraduationCap}
          title="Formação"
          gradient="bg-gradient-to-br from-orange-500 to-red-500"
        />

        {/* Linha conectora do título até a timeline - apenas desktop */}
        <div className="hidden lg:block absolute top-7 left-[11.5rem]"></div>
      </div>
    </div>

    {/* Timeline Container */}
    <div className="relative lg:mt-16">
      {/* Linha central vertical - apenas desktop */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 brand-gradient rounded-full" />

      {/* Items da Timeline */}
      <div className="space-y-6 lg:space-y-8">
        {TIMELINE_ITEMS.map((item, index) => (
          <div key={index}>
            {item.type === "course" ? (
              <TimelineCourseCard
                course={item.data as (typeof courses_details)[0]}
                side={item.side as "left" | "right"}
              />
            ) : (
              <TimelineBadgesCard
                badges={item.data as string[]}
                side={item.side as "left" | "right"}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
));
EducationSection.displayName = "EducationSection";

// Componente Principal
export function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen py-24 scroll-mt-20 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <ProfileImage />
            </div>
            <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
              <motion.div variants={fadeUp}>
                <SectionHeader icon={User} title="Sobre mim" />
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Da gastronomia para a tecnologia, levo{" "}
                    <span className="text-foreground font-medium">
                      disciplina, clareza e foco em resultado
                    </span>{" "}
                    para cada projeto. Gosto de transformar ideias em produtos reais, do protótipo
                    ao deploy.
                  </p>
                  <p>
                    Trabalho com front-end moderno e arquiteturas back-end seguras e escaláveis.
                    Priorizo{" "}
                    <span className="text-foreground font-medium">
                      performance, acessibilidade e DX
                    </span>{" "}
                    para evoluir rápido sem perder qualidade.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {TECH_STACK.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="hover:bg-primary/10 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ActionButtons />
              </motion.div>
            </div>
          </div>

          {/* Métricas */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24"
          >
            {METRICS.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </motion.div>

          {/* Processo de Trabalho */}
          <motion.div variants={fadeUp} className="mb-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Como trabalho</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {PROCESS_STEPS.map((step, index) => (
                <ProcessCard key={step.title} {...step} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Formação - Timeline */}
          <EducationSection />
        </motion.div>
      </div>
    </section>
  );
}
