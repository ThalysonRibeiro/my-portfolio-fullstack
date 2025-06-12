import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./_components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thalyson Rafael - Full Stack Developer (JavaScript | TypeScript)",
  description: "Transformo ideias em experiências digitais envolventes, com atenção aos detalhes no código e no que o usuário realmente precisa.",
  keywords: [],
  openGraph: {
    title: "Thalyson Rafael - Full Stack Developer (JavaScript | TypeScript)",
    // images: [`${process.env.NEXT_PUBLIC_URL}/img-open.png`],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Thalyson Rafael - Full Stack Developer (JavaScript | TypeScript)",
    description: "Transformo ideias em experiências digitais envolventes, com atenção aos detalhes no código e no que o usuário realmente precisa.",
    // images: [`${process.env.NEXT_PUBLIC_URL}/img-open.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster
            position="top-right"
            expand={false}
            theme="dark"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}