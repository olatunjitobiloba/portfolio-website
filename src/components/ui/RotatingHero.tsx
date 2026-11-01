"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ROTATING_WORDS = ["ships.", "scales.", "lasts."];
const ROTATION_INTERVAL_MS = 2500;
const FADE_TRANSITION_MS = 250;

interface RotatingHeroProps {
  className?: string;
}

export function RotatingHero({ className }: RotatingHeroProps) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const intervalId = setInterval(() => {
      setIsVisible(false);
      timeoutId = setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsVisible(true);
      }, FADE_TRANSITION_MS);
    }, ROTATION_INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={cn("space-y-4", className)}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink-primary">
        <span>Building AI that </span>
        <span
          className={cn(
            "inline-block font-serif italic text-ink-primary transition-all duration-300 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          )}
        >
          {ROTATING_WORDS[index]}
        </span>
      </h1>
      <p className="max-w-2xl text-base sm:text-lg text-ink-secondary leading-relaxed">
        FastAPI &amp; Flask inference APIs, CI/CD model pipelines, and AI products
        with real users. Based in Lagos.
      </p>
    </div>
  );
}
