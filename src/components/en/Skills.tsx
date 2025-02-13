"use client"
import { motion } from 'framer-motion'
import React from 'react';
import {
  Layout, Server, Settings
} from 'lucide-react';


const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'TailwindCSS', 'SASS', 'Chakra UI']
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'Fastify', 'NestJS', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      title: 'Tools',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Jest', 'Insomnia']
    }
  ];

  return (
    <section id="skills" className="flex items-center justify-center p-6">
      <div className="max-w-7xl">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                // key={category.title}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
                <div className="relative bg-gray-950/50 backdrop-blur rounded-lg p-6 border border-gray-800/50 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="text-purple-400 mr-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-900/50 backdrop-blur text-gray-300 rounded-full text-sm hover:bg-purple-500 hover:text-white transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills