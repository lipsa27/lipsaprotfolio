import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import LenisProvider from "@/components/LenisProvider";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lipsa Faldu | Premium UI/UX & AI-Powered Product Designer",
  description: "Portfolio of Lipsa Faldu, a premium UI/UX Designer & AI-Powered Product Designer with 2.5+ years of experience specializing in Enterprise SaaS, Design Systems, and AI-Assisted Workflows.",
  keywords: [
    "Lipsa Faldu",
    "UI/UX Designer",
    "Product Designer",
    "AI Product Designer",
    "UX Research",
    "Design Systems",
    "Enterprise SaaS Products",
    "Figma AI",
    "Cursor",
  ],
  authors: [{ name: "Lipsa Faldu" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${inter.variable} h-full antialiased`}
      style={{ colorScheme: "dark light" }}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-200">
        <ThemeProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
