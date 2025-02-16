import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex space-x-6">
            <Link
              href="https://github.com/ThalysonRibeiro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/thalyson-rafael/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:rafinha.head@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground md:mt-0">
            © {new Date().getFullYear()} Thalyson Rafael. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}