import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@/components/google-analytics";
import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const siteUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Thalyson Rafael | Full Stack Developer & Software Architect",
  description:
    "Especialista em Next.js, NestJS e TypeScript. Construo aplicações escaláveis com foco em performance, custos e experiência do usuário.",
  keywords: [
    "Thalyson Rafael",
    "Desenvolvedor Full Stack",
    "Software Architect",
    "Next.js Developer",
    "NestJS Expert",
    "TypeScript",
    "React",
    "Node.js",
    "Arquitetura Monorepo",
    "SaaS Architecture"
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Thalyson Rafael | Full Stack Developer",
    description:
      "985+ commits | 22+ projetos. Foco em arquiteturas escaláveis e decisões orientadas a dados.",
    url: siteUrl,
    siteName: "Thalyson Rafael Portfolio",
    images: [
      {
        url: "/og-image.webp", // Nome padrão para facilidade
        width: 1200,
        height: 630,
        alt: "Thalyson Rafael - Full Stack Developer Portfolio"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Thalyson Rafael | Full Stack Developer",
    description: "Construo produtos full stack focados em performance e resultado.",
    images: ["/og-image.webp"],
    creator: "@thalyson_rb"
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.webp"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" expand={false} theme="dark" />
        <GoogleAnalytics />
        <CookieConsent />
        <Script id="jsonld-person" type="application/ld+json" strategy="afterInteractive">
          {`
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Thalyson Rafael",
                "jobTitle": "Full Stack Developer",
                "url": "${process.env.NEXT_PUBLIC_URL ?? ""}",
                "sameAs": [
                  "https://github.com/ThalysonRibeiro",
                  "https://www.linkedin.com/in/thalyson-rafael-br"
                ]
              }
            `}
        </Script>
        {children}
        <Footer />
      </body>
    </html>
  );
}
