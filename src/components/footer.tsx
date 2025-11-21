"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto py-4">
        <nav className="flex justify-center gap-4 text-sm">
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
            Política de Privacidade
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link
            href="/privacy-policy#cookies"
            className="text-muted-foreground hover:text-foreground"
          >
            Política de Cookies
          </Link>
          <span className="text-muted-foreground">•</span>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("openCookieConsent"))}
            className="text-muted-foreground hover:text-foreground"
          >
            Gerenciar Cookies
          </button>
        </nav>
        <p className="mt-6 text-center text-sm text-muted-foreground md:mt-0">
          © {new Date().getFullYear()} Thalyson Rafael. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
