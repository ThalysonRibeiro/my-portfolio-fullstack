"use client"
import { AnimatedBackground } from '@/AnimatedBackground/AnimatedBackground';
import { motion } from 'framer-motion'
import { ChevronDown, CircleCheck, Download } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContac = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="inicio" className="h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]" />
      <div className='max-w-[900px] w-full absolute top-10 -z-10'>
        <AnimatedBackground />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col items-start justify-center" >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Olá, eu sou{' '}
              <span className="bg-linear-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Thalyson Rafael
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">
              Um desenvolvedor fullstack
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Construindo soluções inovadoras para a web com paixão por código limpo e experiência do usuário
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='w-full'
          >
            <div className="w-full flex flex-wrap mt-4">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-fit bg-linear-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Veja meu trabalho
              </button>
              <button
                onClick={scrollToContac}
                className="text-purple-400 px-8 py-3 rounded-lg font-semibold  hover:text-white transition-all duration-300"
              >
                Entre em contato
              </button>
              <a href="/Thalyson.pdf"
                download="Thalyson.pdf"
                className="flex gap-3 text-purple-400 px-8 py-3 rounded-lg font-semibold  hover:text-white transition-all duration-300"
              >
                Curriculo
                <Download />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>
    </section>
  )
}