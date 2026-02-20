"use client";
import Link from "next/link";
import content from "@/utils/content.json";
import { useLanguageStore } from "@/store/language-store";

export function Footer() {
  const { lang } = useLanguageStore();
  return (
    <footer className="border-t transition-all duration-300">
      <div className="mx-auto py-4">
        <nav className="flex justify-center gap-4 text-sm">
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
            {content.footer.privacy[lang]}
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            href="/privacy-policy#cookies"
            className="text-muted-foreground hover:text-foreground"
          >
            {content.footer.cookies[lang]}
          </Link>
          <span className="text-muted-foreground">•</span>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("openCookieConsent"))}
            className="text-muted-foreground hover:text-foreground"
          >
            {content.footer.manageCookies[lang]}
          </button>
        </nav>
        <p className="mt-6 text-center text-sm text-muted-foreground md:mt-0">
          © {new Date().getFullYear()} Thalyson Rafael. {content.footer.rights[lang]}
        </p>
      </div>
    </footer>
  );
}
