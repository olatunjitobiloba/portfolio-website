"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Personalized Cinematic Intro Loader (Inspired by Dribbble, 21st.dev & Awwwards)
 * Sequences through: "Builder." -> "Thinker." -> "Learner." -> "Oluwatobiloba Olatunji"
 * Then transitions out with a fluid curved bottom curtain wipe.
 */
export function IntroCurtain() {
  const [showIntro, setShowIntro] = useState(false);
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [isLifting, setIsLifting] = useState(false);

  const handleFinish = useCallback(() => {
    setIsLifting(true);
    setTimeout(() => {
      setShowIntro(false);
      try {
        sessionStorage.setItem("hasSeenIntro", "true");
      } catch {
        // Safe fallback if sessionStorage is restricted
      }
    }, 950);
  }, []);

  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem("hasSeenIntro");
      if (hasSeen) return;
    } catch {
      // Continue
    }

    setShowIntro(true);

    // Sequence through words: Builder (0) -> Thinker (1) -> Learner (2) -> Final Lockup (3) -> Lift (4)
    const t1 = setTimeout(() => setStep(1), 700);  // Thinker.
    const t2 = setTimeout(() => setStep(2), 1400); // Learner.
    const t3 = setTimeout(() => setStep(3), 2100); // Tobi reveal
    const t4 = setTimeout(() => handleFinish(), 3100); // Trigger fluid lift

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleFinish]);

  if (!showIntro) return null;

  const words = ["Builder.", "Thinker.", "Learner."];

  return (
    <div
      aria-label="Intro presentation"
      className="fixed inset-0 z-50 overflow-hidden select-none pointer-events-auto"
      onClick={handleFinish}
    >
      {/* Main Lifting Curtain Overlay */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isLifting ? "-105%" : 0 }}
        transition={{
          duration: 0.95,
          ease: [0.76, 0, 0.24, 1], // Smooth exponential cubic-bezier
        }}
        className="relative w-full h-full bg-[#0A0A0B] text-white flex flex-col justify-between p-6 sm:p-12 shadow-2xl"
      >
        {/* Top Bar: Live Status & Skip Pill */}
        <div className="flex items-center justify-between w-full max-w-5xl mx-auto z-20">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OLUWATOBILOBA.DEV</span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleFinish();
            }}
            className="text-xs font-mono tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            Skip [Esc]
          </button>
        </div>

        {/* Centerpiece Typographic Choreography */}
        <div className="flex-1 flex flex-col items-center justify-center text-center z-10 px-4">
          <AnimatePresence mode="wait">
            {step < 3 ? (
              // Step 0, 1, 2: Kinetic cycling of "Builder.", "Thinker.", "Learner."
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -28, filter: "blur(6px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3"
              >
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-400">
                  Phase 0{step + 1}
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-white tracking-tight">
                  {words[step]}
                </h1>
              </motion.div>
            ) : (
              // Step 3: Synthesis Lockup — "Builder · Thinker · Learner" & Oluwatobiloba Olatunji
              <motion.div
                key="final-lockup"
                initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 max-w-xl"
              >
                {/* 3 Pillars Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-400/30 bg-emerald-950/40 text-emerald-300 text-xs font-mono uppercase tracking-widest">
                  <span>Builder</span>
                  <span className="text-emerald-500">&middot;</span>
                  <span>Thinker</span>
                  <span className="text-emerald-500">&middot;</span>
                  <span>Learner</span>
                </div>

                {/* Name */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight">
                  Oluwatobiloba Olatunji
                </h1>

                {/* Tagline */}
                <p className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest">
                  AI Engineer &middot; Production ML Systems
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom subtle instruction */}
        <div className="w-full max-w-5xl mx-auto flex items-center justify-between text-[11px] font-mono text-zinc-400 z-10">
          <span>PORTFOLIO 2026</span>
          <span className="hidden sm:inline">CLICK ANYWHERE TO ENTER</span>
          <span>LAGOS, NG</span>
        </div>

        {/* Fluid Curved Bottom Transition Edge (Awwwards / Dribbble Signature) */}
        <div className="absolute -bottom-16 left-0 right-0 h-16 pointer-events-none">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full text-[#0A0A0B] fill-current"
          >
            <path d="M0,0 L1440,0 C1080,75 360,75 0,0 Z" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
