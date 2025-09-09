"use client";
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';
import {
  Sheet,
  SheetContent, SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { ModeToggle } from '@/app/_components/modeToggle';


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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'border-b border-red-500/50 bg-background/80 backdrop-blur-xs shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="h-15 flex items-center md:justify-end justify-between">
          {mounted && isLargeScreen && (
            <h1 className="text-2xl font-bold bg-linear-to-tr from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              TR
            </h1>
          )}

          <nav className="hidden md:flex items-center space-x-8">
            {['Inicio', 'Projetos', 'Sobre mim', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="hover:text-red-500 transition-colors cursor-pointer text-lg font-medium"
              >
                {item}
              </button>
            ))}
            <Link
              href="www.linkedin.com/in/thalyson-rafael-br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaLinkedinIn size={24} />
            </Link>
            <ModeToggle />

          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} className='hover:text-red-500' />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger className='hidden'>
        </SheetTrigger>
        <SheetContent className='px-6'>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          {['Inicio', 'Projetos', 'Sobre mim', 'Contato'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="hover:text-red-500 transition-colors text-left cursor-pointer"
            >
              {item}
            </button>
          ))}
          <div className='flex justify-between'>
            <Link
              href="www.linkedin.com/in/thalyson-rafael-br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaLinkedinIn size={24} />
            </Link>
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};