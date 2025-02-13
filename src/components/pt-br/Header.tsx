"use client";
import React, { useState, useEffect } from 'react';
import { Linkedin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import LanguageSwitcher from '../language';

export function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsLargeScreen(mediaQuery.matches);
    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20 md:justify-end justify-between">
          {mounted && isLargeScreen && (
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Thalyson Rafael
            </h1>
          )}

          <nav className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Sobre mim', 'Projetos', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                {item}
              </button>
            ))}
            <LanguageSwitcher />
            <Link
              href="https://www.linkedin.com/in/thalyson-ribeiro-978b682a0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition-colors"
            >
              <Linkedin size={24} />
            </Link>

          </nav>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {['Home', 'About Me', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-300 hover:text-purple-500 transition-colors text-left"
                >
                  {item}
                </button>
              ))}
              <Link
                href="https://www.linkedin.com/in/thalyson-ribeiro-978b682a0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <LanguageSwitcher />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};