import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";
import { CommandPalette } from "@/components/command/CommandPalette";
import { Footer } from "@/components/nav/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ReactBitsBackground } from "@/components/ui/ReactBitsBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwatobiloba Olatunji | AI Engineer",
  description:
    "AI Engineer in Lagos. FastAPI and Flask inference APIs, CI/CD model deployment pipelines, and AI products with real users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen bg-canvas text-ink-primary font-sans antialiased selection:bg-black selection:text-white relative">
        <ReactBitsBackground />
        <SmoothScroll>
          <Navbar />
          <CommandPalette />
          <main className="min-h-screen pt-24 pb-16">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
