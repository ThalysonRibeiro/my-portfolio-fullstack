"use client"

import { ChevronsDown, Download } from 'lucide-react';
import { AnimatedBackground } from './animatedBackground';
import { Button } from './ui/button';
import { motion } from "framer-motion";

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
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ff00000a_1px,transparent_1px),linear-gradient(to_bottom,#ff00000a_1px,transparent_1px)] bg-size-[44px_44px]" />
      <div className='max-w-[900px] w-full absolute top-10 -z-10'>
        <AnimatedBackground />
      </div>
      <div className="container mx-auto px-4 inset-0">
        <div className="w-full flex flex-col items-center justify-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center flex gap-2 flex-col lg:flex-row">
              Olá, eu sou{' '}
              <span className="bg-linear-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Thalyson Rafael
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl">
              Um desenvolvedor fullstack
            </h2>

            <p className="text-lg md:text-xl max-w-2xl">
              Transformo ideias em experiências digitais envolventes, com atenção aos detalhes no código e no que o usuário realmente precisa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 w-full md:max-w-3xl gap-4"
          >
            <Button
              aria-label='scroll para projetos'
              onClick={scrollToProjects}
              className="cursor-pointer col-span-2 md:col-span-1 w-full bg-linear-to-bl from-red-600/0 to-orange-600/0 hover:from-orange-600 hover:to-red-600 hover:text-white transition-colors duration-300"
              variant={'outline'}
            >
              Veja meu trabalho
            </Button>
            <Button
              aria-label='scroll para contao'
              onClick={scrollToContac}
              className='cursor-pointer bg-linear-to-bl from-red-600/0 to-orange-600/0 hover:from-orange-600 hover:to-red-600 hover:text-white transition-colors duration-300'
              variant={'outline'}
            >
              Entre em contato
            </Button>
            <Button
              aria-label='baixar curriculo'
              variant={'outline'}
              className='cursor-pointer bg-linear-to-bl from-red-600/0 to-orange-600/0 hover:from-orange-600 hover:to-red-600 hover:text-white transition-colors duration-300'>
              <a href="/Curriculo_Thalyson_Ribeiro.pdf"
                download="Curriculo_Thalyson_Ribeiro.pdf"
                className='flex gap-1.5'
              >
                Curriculo
                <Download />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronsDown aria-label='baixar curriculo' size={32} className="text-red-400" />
      </div>
    </section>
  )
}