"use client"
import { motion } from 'framer-motion'
import React from 'react';
import { Github, ExternalLink, ArrowBigLeft, ArrowBigDown } from 'lucide-react';
import Link from 'next/link';
import { Carousel } from './Carousel';


export function Projects() {
  const projects = [
    {
      id: '01',
      title: 'BarberPro 💈',
      projectType: 'Fullstack',
      app: '',
      description: 'BarberHub é um sistema web completo para gerenciamento de barbearias, oferecendo funcionalidades abrangentes para administração de clientes, serviços e planos.',
      tech: ['Next.js', 'React', 'Chakra UI', 'TypeScript', 'JWTdecode', 'Nookies', 'Axios', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Stripe', 'Bcrypt',],
      github: 'https://github.com/ThalysonRibeiro/barberpro-web',
      githubBackend: 'https://github.com/ThalysonRibeiro/barberpro-backend',
      appLink: '',
      live: 'https://barberpro-web.vercel.app/',
      images: [
        {
          title: "photo-barberpro-1",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399212/home_zzdju9.png"
        },
        {
          title: "photo-barberpro-2",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399212/login_cwd82h.png"
        },
        {
          title: "photo-barberpro-3",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399211/register_sxgovy.png"
        },
        {
          title: "photo-barberpro-4",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399211/conta_avm8ry.png"
        },
        {
          title: "photo-barberpro-5",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399211/cel-inicio_ukivog.png"
        },
        {
          title: "photo-barberpro-6",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739399210/logado_ov38cb.png"
        },
      ]
    },
    {
      id: '02',
      title: 'Goal List ',
      projectType: 'Fullstack',
      app: '',
      description: 'Uma aplicação web moderna para gerenciamento de metas e objetivos, permitindo que você organize suas tarefas diárias ou semanais de forma eficiente.',
      tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'React Hook Form', 'Zod', 'Axios', 'JWT Decode', 'Radix UI', 'Node.js', 'API RESTful', 'Date-fns', 'Fastify', 'Prisma', 'PostgreSQL', 'BCrypt',],
      github: 'https://github.com/ThalysonRibeiro/goal.list-web',
      githubBackend: 'https://github.com/ThalysonRibeiro/goallist-backend',
      appLink: '',
      live: 'https://goal-list-web.vercel.app/',
      images: [
        {
          title: "photo-goallist-1",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409341/home_qzyca9.png"
        },
        {
          title: "photo-goallist-2",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409341/login_ptmx41.png"
        },
        {
          title: "photo-goallist-3",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409340/register_zmm1zi.png"
        },
        {
          title: "photo-goallist-4",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409339/dashboard_vrilru.png"
        },
        {
          title: "photo-goallist-5",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409338/criar-meta_m5g7dv.png"
        },
        {
          title: "photo-goallist-6",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409339/moile-home_yvbqlj.png"
        },
        {
          title: "photo-goallist-7",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739409339/mobile-dashboard_yklrfh.png"
        },
      ]
    },
    {
      id: '03',
      title: 'Blend House',
      projectType: "Fullstack",
      app: 'Mobile',
      description: 'Aplicativo web moderno para gerenciar pedidos de restaurantes com eficiência. API de backend criada com Node.js, Express e Prisma. Aplicativo móvel para atendentes fazer pedidos.',
      tech: ['Next.js', 'React ', 'TypeScript', 'Axios', 'Sass', 'Sonner', 'Lucide React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Cloudinary', 'bcryptjs', 'React Native', 'Expo', 'React Navigation', 'AsyncStorage'],
      github: 'https://github.com/ThalysonRibeiro/blend-house-frontend',
      githubBackend: 'https://github.com/ThalysonRibeiro/blend-house-backend',
      appLink: 'https://expo.dev/accounts/thalysonribeiro/projects/mobile-blend-house/builds/0aa905a2-8928-47e5-b17f-506de0310bba',
      live: 'https://blend-house.vercel.app',
      images: [
        {
          title: "photo-blend-house-1",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418251/bh-login_toxxlh.png"
        },
        {
          title: "photo-blend-house-2",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418251/bh-register_s1j7ks.png"
        },
        {
          title: "photo-blend-house-3",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418250/bh-dashboard_dzpw5b.png"
        },
        {
          title: "photo-blend-house-4",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418250/bh-modal_ipmmsn.png"
        },
        {
          title: "photo-blend-house-5",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418249/bh-categoria_gn24qb.png"
        },
        {
          title: "photo-blend-house-6",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418249/bh-produto_ty6snf.png"
        },
        {
          title: "photo-blend-house-7",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1739418252/bh-mobile_mr4gmb.png"
        },
      ]
    },
    // {
    //   id: '04',
    //   title: '',
    //   projectType: "Fullstack",
    //   app:'',
    //   description: '',
    //   tech: ['','','','','','','','','',],
    //   github: '',
    //   githubBackend:'',
    //   live: '',
    //   images: [
    //     {
    //       title: "photo-1",
    //       image: ""
    //     },
    //     {
    //       title: "photo-2",
    //       image: ""
    //     },
    //     {
    //       title: "photo-3",
    //       image: ""
    //     },
    //     {
    //       title: "photo-4",
    //       image: ""
    //     },
    //     {
    //       title: "photo-5",
    //       image: ""
    //     },
    //     {
    //       title: "photo-6",
    //       image: ""
    //     },
    //   ]
    // },
  ];

  return (
    <section id="projetos" className="flex items-center justify-center flex-col min-h-screen p-6">
      <div className="max-w-7xl backdrop-blur rounded-2xl p-8 md:p-12 max-sm:place-items-center">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:w-[280px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                key={project.id}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
                <div className="w-full relative bg-gray-950/50 backdrop-blur rounded-lg p-4 border border-gray-800/50 hover:border-purple-500/50 transition-colors">

                  <div className='min-md:w-96 max-sm:w-64'>
                    <Carousel images={project.images} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-purple-400 rounded text-md">{project.projectType}</p>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-900/50 backdrop-blur text-purple-400 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 space-x-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </Link>
                    {project.projectType === 'Fullstack' && (
                      <Link
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <Github size={20} className="mr-1" />
                        Backend
                      </Link>
                    )}
                    {project.app === 'Mobile' && (
                      <Link
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <ArrowBigDown size={20} className="mr-1" />
                        App
                      </Link>
                    )}
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};