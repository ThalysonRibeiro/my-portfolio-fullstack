"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    console.log(formData);

    fetch('https://api-email-topaz.vercel.app/api/send', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Erro ao enviar e-mail');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        window.location.href = "../obrigado";
      })
      .catch((error) => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o e-mail. Tente novamente.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="bg-[#0a0118]/50 flex items-center justify-center">

      <div className="max-w-7xl w-full p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Entre em contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6 text-start">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-950/50 border border-gray-800/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-950/50 border border-gray-800/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Enviar mensagem
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informações de contato</h3>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={20} className="text-purple-400" />
                  <a href="mailto:rafinha.head@gmail.com" className="hover:text-purple-400 transition-colors">
                    rafinha.head@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Mídias sociais</h3>
                <div className="flex space-x-6">
                  <Link
                    href="https://www.linkedin.com/in/thalyson-rafael/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title='Linkedin'
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin size={24} />
                  </Link>
                  <Link
                    href="https://github.com/ThalysonRibeiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    title='GitHub'
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github size={24} />
                  </Link>
                  <Link
                    href="https://wa.me/65981278291?text=Oi! Deixe sua mensagem que respondo assim que puder."
                    target="_blank"
                    rel="noopener noreferrer"
                    title='WhatsApp'
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Phone size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};