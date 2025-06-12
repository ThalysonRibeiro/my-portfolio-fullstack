"use client"
import Image from 'next/image'
import prolifeImg from "@/assets/12.30.11_00305ce8.jpg";
import Skills from './skills';
import { motion } from "framer-motion";
import { about_me, courses_details } from '@/utils/contants';

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
              {about_me.map((item, i) => (
                <motion.p
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="leading-relaxed"
                >
                  {item.description}
                </motion.p>
              ))}
            </div>

            <div className='mt-4'>
              <h3 className='text-3xl font-bold mb-6 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Cursos
              </h3>
              <ul className='pl-3.5 border-l border-foreground space-y-4'>
                {courses_details.map((course, i) => (
                  <motion.li
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='list-disc'
                  >
                    <p><span className='text-purple-500 font-semibold'>
                      {course.title}
                    </span>
                      <br />
                      {course.courses}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center lg:justify-end'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='relative w-full aspect-square'
            >
              <Image
                src={prolifeImg}
                alt="Thalyson Rafael"
                fill
                quality={100}
                priority={true}
                className="rounded-lg shadow-2xl object-contain"
                sizes="(max-width:480px) 100vw (max-width: 1024px) 75vw, 60vw"
              />
            </motion.div>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  )
}