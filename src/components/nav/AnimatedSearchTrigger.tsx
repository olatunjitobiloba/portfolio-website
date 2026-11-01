"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SEARCH_SUGGESTIONS = [
  "Loan Prediction API",
  "MLOps CI/CD Pipeline",
  "Covenant (4.83 CGPA)",
  "FocusPilot Chrome Ext",
  "Download CV (PDF)",
  "FedRec Privacy ML",
];

export function AnimatedSearchTrigger({ onClick }: { onClick?: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SEARCH_SUGGESTIONS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-command-palette"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Search portfolio or open command palette"
      className="group relative flex items-center gap-2 pl-2.5 pr-2 py-1 rounded-full bg-black/[0.04] hover:bg-black/[0.08] border border-black/[0.08] hover:border-black/20 transition-all duration-200 cursor-pointer text-left"
    >
      <Search className="w-3.5 h-3.5 text-ink-muted group-hover:text-ink-primary transition-colors shrink-0" />

      {/* Animated Text suggestions (Framer Motion Text Flipper) */}
      <div className="relative h-4 w-32 sm:w-40 overflow-hidden text-[11px] font-mono text-ink-secondary">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="absolute inset-0 truncate font-medium text-ink-primary/90"
          >
            {SEARCH_SUGGESTIONS[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ⌘K Badge */}
      <kbd className="text-[10px] font-mono bg-white/90 group-hover:bg-white px-1.5 py-0.5 rounded border border-black/10 text-ink-secondary flex items-center gap-1 shadow-xs transition-colors shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>⌘K</span>
      </kbd>
    </button>
  );
}

