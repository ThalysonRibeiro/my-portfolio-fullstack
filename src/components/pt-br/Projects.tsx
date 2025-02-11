"use client"
import { motion } from 'framer-motion'
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Carousel } from './Carousel';


export function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management and payment processing.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: 'https://github.com/thalysonrafael/ecommerce',
      live: 'https://ecommerce.thalyson.dev',
      images: [
        {
          title: "imgame 1 projeto",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1738510759/conta_t0wvk6.webp"
        },
        {
          title: "imgame 2 projeto",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1738510759/finalizar_xfvxvm.webp"
        },
        {
          title: "imgame 2 projeto",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1737505109/ptwry2qefkmigjqwghcw.jpg"
        },
      ]
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/thalysonrafael/taskmanager',
      live: 'https://tasks.thalyson.dev',
      images: [
        {
          title: "imgame 1 projeto",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1738510759/conta_t0wvk6.webp"
        },
        {
          title: "imgame 2 projeto",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1738510759/finalizar_xfvxvm.webp"
        },
      ]
    },
    {
      title: 'Recipe Sharing Platform',
      description: 'A platform for chefs and food enthusiasts to share and discover recipes.',
      tech: ['React', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com/thalysonrafael/recipes',
      live: 'https://recipes.thalyson.dev',
      images: [
        {
          title: "imgame 1 projeto",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1738510759/conta_t0wvk6.webp"
        },
        {
          title: "imgame 2 projeto",
          image: "https://res.cloudinary.com/duxqtpghn/image/upload/v1738510759/finalizar_xfvxvm.webp"
        },
      ]
    },
  ];

  return (
    <section id="projects" className="flex items-center justify-center flex-col min-h-screen p-6">
      <div className="max-w-7xl backdrop-blur rounded-2xl p-8 md:p-12 max-sm:place-items-center">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:w-[280px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                key={project.title}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
                <div className="w-full relative bg-gray-950/50 backdrop-blur rounded-lg p-4 border border-gray-800/50 hover:border-purple-500/50 transition-colors">

                  <div className='min-md:w-96 max-sm:w-64'>
                    <Carousel images={project.images} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
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
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Link href="/projects-en" className='mb-12'>
        <button
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
        >
          See more projects
        </button>
      </Link>
    </section>
  );
};