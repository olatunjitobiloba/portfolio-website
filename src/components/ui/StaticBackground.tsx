"use client";

import React from "react";

/**
 * Calm, tactile, non-moving architectural background.
 * Subtle dot grid on warm stone canvas with zero distraction or motion.
 */
export function StaticBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Subtle Architectural Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0, 0, 0, 0.09) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}

