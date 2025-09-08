"use client"
import {
  Layout, Server, Settings
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from './ui/badge';
import { motion } from "framer-motion";


const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'TailwindCSS', 'SASS', 'Chakra UI', 'shadcn']
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'TypeScript', 'Express.js', 'Fastify', 'NestJS', 'Prisma', 'PostgreSQL']
    },
    {
      title: 'Tools',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Jest', 'Postman']
    }
  ];

  return (
    <article id="skills" className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
        Habilidades e Tecnologias
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 w-full">
        {skillCategories.map((category, i) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className='list-disc'
          >
            <Card key={category.title} className='relative group hover:border-red-500/50 transition-all duration-300'>
              <div className="absolute -z-[1] -inset-2 bg-linear-to-r from-red-600 to-orange-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
              <CardHeader>
                <CardTitle className='flex gap-1.5 items-center'>{category.icon} {category.title}</CardTitle>
              </CardHeader>
              <CardContent className="relativ backdrop-blur-sm rounded-lg transition-colors duration-300">
                <div className='flex gap-2 flex-wrap'>
                  {category.skills.map(skill => (
                    <Badge key={skill} variant="default">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </article>
  );
};

export default Skills