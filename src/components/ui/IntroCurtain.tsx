"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroCurtain() {
  const [showIntro, setShowIntro] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Only play once per session
    const hasSeen = sessionStorage.getItem("hasSeenIntro");
    if (!hasSeen) {
      setShowIntro(true);
      const timer = setTimeout(() => {
        setIsAnimatingOut(true);
      }, 1400);

      const hideTimer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("hasSeenIntro", "true");
      }, 2300);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  const handleSkip = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 700);
  };

  if (!showIntro) return null;

  return (
    <div
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      aria-label="Skip intro animation"
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden select-none"
    >
      {/* 5 Column Vertical Wipe Columns (Abraham Adelodun / Awwwards Style) */}
      <div className="absolute inset-0 flex pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: isAnimatingOut ? "-100%" : 0 }}
            transition={{
              duration: 0.75,
              delay: isAnimatingOut ? i * 0.06 : 0,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="h-full w-1/5 bg-[#111111]"
          />
        ))}
      </div>

      {/* Center Reveal Typography */}
      <AnimatePresence>
        {!isAnimatingOut && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative z-10 text-center space-y-2 pointer-events-none px-4"
          >
            <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Oluwatobiloba Olatunji
            </h1>
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              AI Engineer &middot; Production ML Systems
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
