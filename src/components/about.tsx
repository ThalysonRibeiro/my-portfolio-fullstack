"use client"
import Image from 'next/image'
import prolifeImg from "@/assets/12.30.11_00305ce8.jpg";
import Skills from './skills';

export function About() {
  return (
    <section id="sobre-mim" className="flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 mt-12">

          <div className='lg:w-1/2 w-full'>
            <h2 className="text-3xl font-bold mb-6 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sobre mim
            </h2>
            <div className="space-y-4">

              <p className="leading-relaxed">
                Minha jornada no desenvolvimento web começou com uma transição inesperada do mundo da gastronomia. A natureza rápida e detalhista das artes culinárias ajudou a moldar minha abordagem à codificação - onde precisão, criatividade e resolução de problemas são primordiais.
              </p>

              <p className="leading-relaxed">
                Atualmente, crio interfaces front-end intuitivas, enquanto expando meus conhecimentos em arquitetura back-end. Minha experiência em ambientes de alta pressão aprimorou minha capacidade de entregar soluções eficientes, mantendo a qualidade do código e garantindo uma excelente experiência ao usuário.
              </p>

              <p className="leading-relaxed">
                Meu objetivo é contribuir para projetos inovadores que expandam os limites da tecnologia web e, ao mesmo tempo, ofereçam soluções de alto impacto que façam a diferença.
              </p>
            </div>
          </div>

          <div className='lg:w-1/2 w-full flex justify-center lg:justify-end'>
            <div className='relative w-full md:w-140 h-120'>
              <Image
                src={prolifeImg}
                alt="Thalyson Rafael"
                fill
                quality={100}
                priority={true}
                className="rounded-lg shadow-2xl object-cover"
                sizes="(max-width:480px) 100vw (max-width: 1024px) 75vw, 60vw"
              />
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  )
}