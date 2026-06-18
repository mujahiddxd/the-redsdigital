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

export const metadata = {
  title: "Yami — Digital Agency | Web Development & Design",
  description:
    "Yami is a premium digital agency specializing in high-conversion web development, modern UI/UX design, and full-stack engineering. We build websites that transform visitors into loyal customers.",
  keywords: "digital agency, web development, UI/UX design, web design, frontend, full-stack",
  openGraph: {
    title: "Yami — Digital Agency",
    description: "We build websites that convert visitors into customers.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
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
