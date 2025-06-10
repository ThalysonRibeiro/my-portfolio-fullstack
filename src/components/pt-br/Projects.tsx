"use client"
import { motion } from 'framer-motion'
import React from 'react';
import { Github, ExternalLink, ArrowBigLeft, ArrowBigDown } from 'lucide-react';
import Link from 'next/link';
import { Carousel } from './Carousel';
import { projectsPT_BR } from '@/utils/contants';



export function Projects() {


  return (
    <section id="projetos" className="flex items-center justify-center flex-col min-h-screen p-6">
      <div className="max-w-7xl backdrop-blur rounded-2xl p-8 md:p-12 max-sm:place-items-center">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsPT_BR.map((project, index) => (
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

                  <div>
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
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Github size={20} className="mr-1" />
                      Code web
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
                        App mobile
                      </Link>
                    )}
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