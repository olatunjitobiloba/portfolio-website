"use client";

import React from "react";

/**
 * Calm, static architectural background with vertical undulating silk contours.
 * Directly recreates the serene vertical contour lines seen in design references,
 * but 100% static: zero movement, zero CPU/GPU overhead, no distractions.
 */
export function StaticBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Subtle blueprint dot grid for tactile depth */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Static vertical undulating contour lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.55]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="static-silk-contours"
            width="96"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            {/* 3 distinct organic vertical wave contours spaced 32px apart */}
            <path
              d="M 16 0 C 24 60, 8 180, 16 240"
              fill="none"
              stroke="rgba(0, 0, 0, 0.13)"
              strokeWidth="1"
            />
            <path
              d="M 48 0 C 40 65, 56 175, 48 240"
              fill="none"
              stroke="rgba(0, 0, 0, 0.13)"
              strokeWidth="1"
            />
            <path
              d="M 80 0 C 88 55, 74 185, 80 240"
              fill="none"
              stroke="rgba(0, 0, 0, 0.13)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#static-silk-contours)" />
      </svg>
    </div>
  );
}
