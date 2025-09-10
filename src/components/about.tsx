"use client"

import Image from 'next/image';
import { motion } from "framer-motion";
import { about_me, courses_details } from '@/utils/contants';
import { memo } from 'react';
import { Code, GraduationCap, Layout, Server, Settings, User } from 'lucide-react';
import { Badge } from './ui/badge';

const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  },
  image: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.8
      }
    }
  }
} as const;

interface CourseItemProps {
  course: typeof courses_details[0];
  index: number;
}

export function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center py-16 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AboutContent />
          <ProfileImage />
          <CoursesSection />
          <SkillsCompactSection />

        </motion.div>
      </div>
    </section>
  );
}

const AboutContent = memo(() => (
  <motion.div variants={ANIMATION_CONFIG.item}>
    <header className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
          <User className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
        >
          Sobre mim
        </h2>
      </div>
    </header>

    <div className="space-y-6" role="region" aria-labelledby="about-heading">
      {about_me.map((item) => (
        <motion.p
          key={item.id}
          variants={ANIMATION_CONFIG.item}
          className="text-lg leading-relaxed text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          {item.description}
        </motion.p>
      ))}
    </div>
  </motion.div>
));

const CoursesSection = memo(() => (
  <motion.div variants={ANIMATION_CONFIG.item}>
    <header className="mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
          <GraduationCap className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Formação
        </h3>
      </div>
    </header>

    <div
      className="relative pl-6 border-l-2 border-gradient-to-b from-red-400 to-orange-400 space-y-6"
      role="list"
      aria-label="Lista de cursos e formações"
    >
      {courses_details.map((course, index) => (
        <CourseItem
          key={course.id}
          course={course}
          index={index}
        />
      ))}
    </div>
  </motion.div>
));

const CourseItem = memo(({ course }: CourseItemProps) => (
  <motion.div
    variants={ANIMATION_CONFIG.item}
    className="relative group"
    role="listitem"
  >
    <div className="absolute -left-8 top-2 w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full border-2 border-background shadow-lg group-hover:scale-110 transition-transform duration-200" />

    <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
      <h4 className="font-bold text-lg text-primary mb-2 group-hover:text-red-500 transition-colors">
        {course.title}
      </h4>
      <p className="text-muted-foreground leading-relaxed">
        {course.courses}
      </p>
    </div>
  </motion.div>
));

const ProfileImage = memo(() => (
  <motion.div
    variants={ANIMATION_CONFIG.image}
    className="w-full flex justify-center lg:justify-end"
  >
    <div className="relative w-full max-w-md aspect-square group">

      <div className="relative w-full h-full bg-background rounded-2xl border">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="/profile.png"
            alt="Foto de perfil de Thalyson Rafael - Desenvolvedor Full Stack"
            fill
            quality={100}
            priority={true}
            className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>
      </div>
    </div>
  </motion.div>
));

const SkillsCompactSection = memo(() => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['HTML5', 'CSS3', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'TailwindCSS', 'SASS', 'shadcn'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Fastify', 'Express.js', 'NestJS', 'Prisma', 'PostgreSQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Ferramentas',
      icon: Settings,
      skills: ['Git', 'Docker', 'VS Code', 'Jest', 'Postman'],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <motion.div variants={ANIMATION_CONFIG.item}>
      <header className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
            <Code className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Skills
          </h3>
        </div>
      </header>

      <div className="space-y-4" role="list" aria-label="Categorias de habilidades técnicas">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={ANIMATION_CONFIG.item}
              role="listitem"
              className="group"
            >
              <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-1.5 bg-gradient-to-r ${category.color} rounded-md group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-sm text-primary group-hover:text-red-500 transition-colors">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5" role="list" aria-label={`Tecnologias de ${category.title}`}>
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-600 transition-colors duration-200 cursor-default"
                      role="listitem"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
});

// Display names para debugging
AboutContent.displayName = "AboutContent";
CoursesSection.displayName = "CoursesSection";
CourseItem.displayName = "CourseItem";
ProfileImage.displayName = "ProfileImage";
SkillsCompactSection.displayName = "SkillsCompactSection";