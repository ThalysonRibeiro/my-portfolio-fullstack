import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-500">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mt-6 text-center text-sm text-muted-foreground md:mt-0">
            © {new Date().getFullYear()} Thalyson Rafael. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}