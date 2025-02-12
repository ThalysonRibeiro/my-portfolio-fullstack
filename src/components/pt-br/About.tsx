"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import prolifeImg from "@/assets/profile.png";
import Skills from './Skills';

export function About() {
  return (
    <section id="about-me" className=" min-h-screen bg-[#0a0118]/50 p-6 flex items-center justify-center">
      <div className="max-w-7xl w-full h-full flex flex-col">
        <div className="flex flex-col lg:flex-row p-6 justify-items-center items-center mt-12 gap-6">
          <div className='flex-1 lg:mr-8'>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Sobre mim</h2>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  Minha jornada no desenvolvimento web começou com uma transição inesperada do mundo da gastronomia. A natureza rápida e detalhista das artes culinárias ajudou a moldar minha abordagem à codificação - onde precisão, criatividade e resolução de problemas são primordiais.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  Hoje, sou especialista em criar interfaces front-end intuitivas, mantendo um profundo entendimento da arquitetura back-end. Minha experiência em ambientes de alta pressão aprimorou minha capacidade de entregar soluções eficientes, mantendo a qualidade do código e a experiência do usuário.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 90 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  Meu objetivo é contribuir para projetos inovadores que expandam os limites da tecnologia web e, ao mesmo tempo, ofereçam soluções de alto impacto que façam a diferença.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex-1'>
              <Image
                src={prolifeImg}
                alt="Thalyson Rafael"
                width={500}
                height={500}
                quality={100}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
        <Skills />
      </div>
    </section>
  )
}