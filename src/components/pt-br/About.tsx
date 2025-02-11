"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import prolifeImg from "@/assets/profile.png";
import Skills from './Skills';

export function About() {
  return (
    <section id="about-me" className=" min-h-screen bg-[#0a0118]/50 p-6">
      <div className="max-w-7xl w-full h-full flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">

          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</h2>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  My journey into web development began with an unexpected transition from the world of gastronomy. The fast-paced, detail-oriented nature of the culinary arts helped shape my approach to coding - where precision, creativity, and problem-solving are paramount.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  Today, I specialize in creating intuitive front-end interfaces while maintaining a deep understanding of back-end architecture. My experience in high-pressure environments has honed my ability to deliver efficient solutions while maintaining code quality and user experience.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 90 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <p className="text-gray-300 leading-relaxed">
                  My goal is to contribute to innovative projects that push the boundaries of web technology while delivering high-impact solutions that make a difference.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center'
          >
            <div className='max-w-[500px]'>
              <Image
                src={prolifeImg}
                alt="Thalyson Rafael"
                width={500}
                height={500}
                quality={100}
                priority={true}
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
        <Skills />
      </div>
    </section>
  )
}