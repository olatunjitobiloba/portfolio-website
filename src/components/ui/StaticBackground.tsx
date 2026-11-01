"use client";

import React from "react";

/**
 * Calm, tactile, non-moving architectural background.
 * Clearly visible dot matrix and subtle engineering guidelines on warm stone canvas.
 * Zero distracting motion or CPU usage.
 */
export function StaticBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Visible Architectural Dot Matrix */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0, 0, 0, 0.16) 1.25px, transparent 1.25px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle Engineering Guidelines Grid */}
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />
    </div>
  );
}
