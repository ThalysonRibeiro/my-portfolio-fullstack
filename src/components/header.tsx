"use client";

import { useMobile } from "@/app/hooks/useMobile";
import { cn } from "@/utils/cn";
import { scrollToSection } from "@/utils/scrollTosection";
import { useCallback, useEffect, useState } from "react";

// Constantes
const SCROLL_THRESHOLD = 500;
const MOBILE_BREAKPOINT = 768;

const NAVIGATION_ITEMS = [
  { label: "Início", id: "inicio" },
  { label: "Projetos", id: "projetos" },
  { label: "Sobre", id: "sobre" },
  { label: "Contato", id: "contato" }
] as const;

interface NavProps {
  className?: string;
  activeSection?: string;
}

export function NavigationHeader() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const isMobile = useMobile(MOBILE_BREAKPOINT);

  // Throttle para melhor performance
  const throttle = useCallback(
    <T extends (...args: unknown[]) => void>(func: T, limit: number): T => {
      let inThrottle: boolean;
      return ((...args: Parameters<T>): void => {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      }) as T;
    },
    []
  );

  useEffect(() => {
    const throttledScroll = throttle(() => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > SCROLL_THRESHOLD);

      // Detecta seção ativa
      const sections = NAVIGATION_ITEMS.map((item) => item.id);
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

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
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
      className={cn("grid grid-cols-4 w-full border h-12", className)}
      role="navigation"
      aria-label="Navegação principal"
    >
      {NAVIGATION_ITEMS.map((item, index) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className={cn(
            index === 0 ? "border-r" : "border-r",
            "min-w-25 w-full h-full",
            "hover:bg-accent/50 transition-colors duration-300 cursor-pointer font-medium",
            activeSection === item.id && "text-primary font-semibold"
          )}
          aria-current={activeSection === item.id ? "page" : undefined}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

function FloatingNavigation({ activeSection }: { activeSection?: string }) {
  return (
    <div
      className={cn(
        "w-full border-b flex justify-center",
        "fixed top-0 z-50",
        "bg-card/50 backdrop-blur-md",
        "animate-in fade-in-0 slide-in-from-top-2 duration-200"
      )}
      role="banner"
    >
      <Navigation activeSection={activeSection} className="max-w-screen-sm border-y-0" />
    </div>
  );
}

function MobileNavigation({ activeSection }: { activeSection?: string }) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 w-full",
        "bg-card/50 backdrop-blur-md",
        "animate-in fade-in-0 slide-in-from-bottom-2 duration-200"
      )}
      role="banner"
    >
      <Navigation className="justify-between items-center h-15" activeSection={activeSection} />
    </div>
  );
}
