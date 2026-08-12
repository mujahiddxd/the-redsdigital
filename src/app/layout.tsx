import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mujahid — Portfolio | Web Developer",
  description:
    "Hi, I'm Mujahid. I am a passionate developer crafting high-performance websites, modern interfaces, and scalable web applications that bring ideas to life.",
  keywords: "portfolio, web developer, UI/UX design, web design, frontend, full-stack",
  openGraph: {
    title: "Mujahid — Portfolio",
    description: "I build digital experiences that inspire and bring ideas to life.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
