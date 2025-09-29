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
        staggerChildren: 0.1,
        delayChildren: 0.05
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
        damping: 25,
        stiffness: 120,
        duration: 0.6
      }
    }
  },
  image: {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  },
  stagger: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
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
      className="min-h-screen flex items-center justify-center py-20 scroll-mt-20 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            <div className="lg:col-span-7 space-y-12">
              <AboutContent />
              <CoursesSection />
            </div>

            <div className="lg:col-span-5 space-y-8">
              <ProfileImage />
              <SkillsCompactSection />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const AboutContent = memo(() => (
  <motion.div variants={ANIMATION_CONFIG.item} className="space-y-6">
    <header>
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <User className="w-7 h-7 text-white" aria-hidden="true" />
        </motion.div>
        <div>
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent"
          >
            Sobre mim
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-2" />
        </div>
      </div>
    </header>

    <motion.div
      variants={ANIMATION_CONFIG.stagger}
      className="space-y-4"
      role="region"
      aria-labelledby="about-heading"
    >
      {about_me.map((item) => (
        <motion.div
          key={item.id}
          variants={ANIMATION_CONFIG.item}
          className="group"
        >
          <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-all duration-300 pl-4 border-l-2 border-transparent group-hover:border-red-400/50">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
));

const CoursesSection = memo(() => (
  <motion.div variants={ANIMATION_CONFIG.item} className="space-y-6">
    <header>
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <GraduationCap className="w-7 h-7 text-white" aria-hidden="true" />
        </motion.div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
            Formação
          </h3>
          <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-2" />
        </div>
      </div>
    </header>

    <motion.div
      variants={ANIMATION_CONFIG.stagger}
      className="relative space-y-6"
      role="list"
      aria-label="Lista de cursos e formações"
    >
      <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-red-300 to-orange-400 opacity-30" />

      {courses_details.map((course, index) => (
        <CourseItem
          key={course.id}
          course={course}
          index={index}
        />
      ))}
    </motion.div>
  </motion.div>
));

const CourseItem = memo(({ course }: CourseItemProps) => (
  <motion.div
    variants={ANIMATION_CONFIG.item}
    className="relative group pl-12"
    role="listitem"
  >
    <motion.div
      className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full border-4 border-background shadow-lg z-10"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", damping: 15 }}
    />

    <motion.div
      className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", damping: 25 }}
    >
      <h4 className="font-bold text-xl text-primary mb-3 group-hover:text-red-500 transition-colors duration-300">
        {course.title}
      </h4>
      <p className="text-muted-foreground leading-relaxed">
        {course.courses}
      </p>
    </motion.div>
  </motion.div>
));

const ProfileImage = memo(() => (
  <motion.div
    variants={ANIMATION_CONFIG.image}
    className="w-full flex justify-center lg:top-24 mb-8 lg:mb-0"
  >
    <div className="relative w-full max-w-sm group">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

      <div className="relative bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-3xl border border-border/50 group-hover:border-red-500/30 transition-all duration-500">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/profile.png"
            alt="Foto de perfil de Thalyson Rafael - Desenvolvedor Full Stack"
            fill
            quality={100}
            priority={true}
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
      color: 'bg-gradient-to-r from-red-500 to-orange-500',
      bgColor: 'bg-card/60'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Fastify', 'Express.js', 'NestJS', 'Prisma', 'PostgreSQL'],
      color: 'bg-gradient-to-r from-red-500 to-orange-500',
      bgColor: 'bg-card/60'
    },
    {
      title: 'Ferramentas',
      icon: Settings,
      skills: ['Git', 'Docker', 'VS Code', 'Jest', 'Postman'],
      color: 'bg-gradient-to-r from-red-500 to-orange-500',
      bgColor: 'bg-card/60'
    }
  ];

  return (
    <motion.div variants={ANIMATION_CONFIG.item} className="space-y-6">
      <header>
        <div className="flex items-center gap-4 mb-6 lg:mt-25">
          <motion.div
            className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <Code className="w-7 h-7 text-white" aria-hidden="true" />
          </motion.div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Skills
            </h3>
            <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-2" />
          </div>
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
              <div className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/5 hover:-translate-y-1`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg shadow-md group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-lg text-red-500 transition-colors duration-300">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2" role="list" aria-label={`Tecnologias de ${category.title}`}>
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-600 cursor-default shadow-sm"
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