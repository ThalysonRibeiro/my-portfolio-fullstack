"use client"

import { ModeToggle } from "@/app/_components/modeToggle";
import { useMobile } from "@/app/hooks/useMobile";
import { cn } from "@/utils/cn";
import { scrollToSection } from "@/utils/scrollTosection";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

// Constantes
const SCROLL_THRESHOLD = 500;
const MOBILE_BREAKPOINT = 768;

const NAVIGATION_ITEMS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' }
] as const;

interface NavProps {
  className?: string;
  activeSection?: string;
}

export function NavigationHeader() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const isMobile = useMobile(MOBILE_BREAKPOINT);

  // Throttle para melhor performance
  const throttle = useCallback(<T extends (...args: unknown[]) => void>(
    func: T,
    limit: number
  ): T => {
    let inThrottle: boolean;
    return ((...args: Parameters<T>): void => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    }) as T;
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(() => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > SCROLL_THRESHOLD);

      // Detecta seção ativa
      const sections = NAVIGATION_ITEMS.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [throttle]);

  if (!isVisible) return null;

  return isMobile ? (
    <MobileNavigation activeSection={activeSection} />
  ) : (
    <FloatingNavigation activeSection={activeSection} />
  );
}

function Navigation({ className, activeSection }: NavProps) {
  const handleNavClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return (
    <nav
      className={cn("flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8", className)}
      role="navigation"
      aria-label="Navegação principal"
    >
      {NAVIGATION_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className={cn(
            "hover:text-primary transition-all duration-200 cursor-pointer font-medium",
            "text-xs sm:text-sm md:text-base lg:text-lg",
            "focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1",
            activeSection === item.id && "text-primary font-semibold"
          )}
          aria-current={activeSection === item.id ? "page" : undefined}
          type="button"
        >
          {item.label}
        </button>
      ))}

      <Link
        href="https://www.linkedin.com/in/thalyson-rafael-br"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "hover:text-primary transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-1"
        )}
        aria-label="Perfil do LinkedIn"
      >
        <FaLinkedinIn size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </Link>

      <ModeToggle />
    </nav>
  );
}

function FloatingNavigation({ activeSection }: { activeSection?: string }) {
  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50",
        "bg-background/80 backdrop-blur-md border border-border/50",
        "px-4 py-2 rounded-full shadow-lg",
        "animate-in fade-in-0 slide-in-from-top-2 duration-200"
      )}
      role="banner"
    >
      <Navigation activeSection={activeSection} />
    </div>
  );
}

function MobileNavigation({ activeSection }: { activeSection?: string }) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "bg-background/90 backdrop-blur-md border-t border-border/50",
        "px-4 py-3 shadow-lg",
        "animate-in fade-in-0 slide-in-from-bottom-2 duration-200"
      )}
      role="banner"
    >
      <Navigation
        className="justify-between items-center max-w-screen-sm mx-auto"
        activeSection={activeSection}
      />
    </div>
  );
}