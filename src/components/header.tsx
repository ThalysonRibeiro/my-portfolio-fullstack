"use client";

import { useMobile } from "@/app/hooks/useMobile";
import { cn } from "@/utils/cn";
import { scrollToSection } from "@/utils/scrollTosection";
import { useCallback, useEffect, useState } from "react";
import content from "@/utils/content.json";
import { translate } from "@/utils/i18n";
import { Lang, useLanguageStore } from "@/store/language-store";
import { useLanguageHydrate } from "@/app/hooks/use-language-hydrate";
import { SelectLanguage } from "./select-language";

// Constantes
const SCROLL_THRESHOLD = 500;
const MOBILE_BREAKPOINT = 768;

const NAVIGATION_ITEMS = content.header.nav;

interface NavProps {
  className?: string;
  activeSection?: string;
  lang: Lang;
}

export function NavigationHeader() {
  useLanguageHydrate();
  const { lang, hydrated } = useLanguageStore();
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
  if (!hydrated) return null;

  return isMobile ? (
    <MobileNavigation lang={lang} activeSection={activeSection} />
  ) : (
    <FloatingNavigation lang={lang} activeSection={activeSection} />
  );
}

function Navigation({ className, activeSection, lang }: NavProps) {
  const handleNavClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return (
    <nav
      className={cn("grid grid-cols-4 w-full border h-12", className)}
      role="navigation"
      aria-label={translate(content.header.ariaLabel, lang)}
    >
      {NAVIGATION_ITEMS.map((item, index) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className={cn(
            index === 0 ? "border-r" : "border-r",
            "w-full h-full text-sm md:text-base",
            "hover:bg-accent/50 transition-colors duration-300 cursor-pointer font-medium",
            activeSection === item.id && "text-primary font-semibold"
          )}
          aria-current={activeSection === item.id ? "page" : undefined}
          type="button"
        >
          {translate(item.label, lang)}
        </button>
      ))}
    </nav>
  );
}

function FloatingNavigation({ activeSection, lang }: { activeSection?: string; lang: Lang }) {
  return (
    <div
      className={cn(
        "w-full border-b flex justify-center transition-all duration-300",
        "fixed top-0 z-50",
        "bg-card/50 backdrop-blur-md",
        "animate-in fade-in-0 slide-in-from-top-2 duration-200"
      )}
      role="banner"
    >
      <Navigation
        lang={lang}
        activeSection={activeSection}
        className="max-w-screen-sm border-y-0"
      />
      <SelectLanguage />
    </div>
  );
}

function MobileNavigation({ activeSection, lang }: { activeSection?: string; lang: Lang }) {
  return (
    <div
      className={cn(
        "w-full flex transition-all duration-300",
        "fixed bottom-0 left-0 right-0 z-50 w-full",
        "bg-card/50 backdrop-blur-md",
        "animate-in fade-in-0 slide-in-from-bottom-2 duration-200"
      )}
      role="banner"
    >
      <Navigation
        lang={lang}
        className="justify-between items-center h-12"
        activeSection={activeSection}
      />
      <SelectLanguage />
    </div>
  );
}
