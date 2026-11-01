"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { AnimatedSearchTrigger } from "@/components/nav/AnimatedSearchTrigger";

export interface NavbarProps {
  onOpenCommand?: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Reads", href: "/reads" },
];

export function Navbar({ onOpenCommand }: NavbarProps) {
  const pathname = usePathname();

  const handleOpenCommand = () => {
    if (onOpenCommand) {
      onOpenCommand();
    } else if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-command-palette"));
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary navigation"
        className="pointer-events-auto backdrop-blur-md bg-white/85 border border-black/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.05)] rounded-full px-3 sm:px-4 py-2 flex items-center justify-between w-full max-w-2xl gap-2 sm:gap-3"
      >
        <Link
          href="/"
          className="text-xs sm:text-sm font-semibold text-ink-primary hover:opacity-75 transition-opacity tracking-tight shrink-0 pl-1"
        >
          Tobi
        </Link>

        <div className="flex items-center gap-1 sm:gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs sm:text-sm px-2.5 py-1 rounded-full transition-colors ${
                  isActive
                    ? "text-ink-primary font-medium bg-black/[0.05]"
                    : "text-ink-secondary hover:text-ink-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <a
            href="/Oluwatobiloba_Olatunji_AI_Engineer_CV.pdf"
            download
            className="text-xs sm:text-sm px-2.5 py-1 rounded-full text-ink-secondary hover:text-ink-primary transition-colors inline-flex items-center gap-1"
            title="Download CV (PDF)"
          >
            <span>CV</span>
            <Download size={14} className="shrink-0" />
          </a>
        </div>

        <AnimatedSearchTrigger onClick={handleOpenCommand} />
      </nav>
    </header>
  );
}

export default Navbar;
