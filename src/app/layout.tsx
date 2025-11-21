import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./_components/theme-provider";
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

export const metadata: Metadata = {
  title: "Thalyson Rafael - Full Stack Developer (JavaScript | TypeScript)",
  description:
    "Transformo ideias em experiências digitais envolventes, com atenção aos detalhes no código e no que o usuário realmente precisa.",
  keywords: [],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "http://localhost:3000"),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL
  },
  openGraph: {
    title: "Thalyson Rafael - Full Stack Developer (JavaScript | TypeScript)",
    images: ["/opengraph-image"],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Thalyson Rafael - Full Stack Developer (JavaScript | TypeScript)",
    description:
      "Transformo ideias em experiências digitais envolventes, com atenção aos detalhes no código e no que o usuário realmente precisa.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
