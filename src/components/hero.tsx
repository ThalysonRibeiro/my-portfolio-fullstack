"use client"

import { ChevronDown, Download } from 'lucide-react';
import { AnimatedBackground } from './animatedBackground';
import { Button } from './ui/button';

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
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[44px_44px]" />
      <div className='max-w-[900px] w-full absolute top-10 -z-10'>
        <AnimatedBackground />
      </div>
      <div className="container mx-auto px-4 inset-0">
        <div className="w-full flex flex-col items-center justify-center space-y-4">

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center flex gap-2 flex-col lg:flex-row">
            Olá, eu sou{' '}
            <span className="bg-linear-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Thalyson Rafael
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl">
            Um desenvolvedor fullstack
          </h2>
          <p className="text-lg md:text-xl max-w-2xl">
            Transformo ideias em experiências digitais envolventes, com atenção aos detalhes no código e no que o usuário realmente precisa.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 w-full md:max-w-3xl gap-4">
            <Button
              onClick={scrollToProjects}
              className="cursor-pointer col-span-2 md:col-span-1 w-full bg-linear-to-bl from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 shadow-lg"
            >
              Veja meu trabalho
            </Button>
            <Button
              onClick={scrollToContac}
              className='cursor-pointer'
            >
              Entre em contato
            </Button>
            <Button variant={'outline'} className='cursor-pointer'>
              <a href="/Thalyson.pdf"
                download="Thalyson.pdf"
                className='flex gap-1.5'
              >
                Curriculo
                <Download />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>
    </section>
  )
}