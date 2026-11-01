"use client";

import React from "react";

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Subtle Matrix Dot Grid (ReactBits style) */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating Ambient Glow Orb 1 (Sage / Emerald tint) */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0) 70%)",
          animationDuration: "9s",
        }}
      />

      {/* Floating Ambient Glow Orb 2 (Warm Amber / Sand tint) */}
      <div
        className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(217, 119, 6, 0.20) 0%, rgba(217, 119, 6, 0) 70%)",
          animationDuration: "12s",
        }}
      />

      {/* Floating Ambient Glow Orb 3 (Soft Indigo tint near bottom) */}
      <div
        className="absolute -bottom-[10%] left-[25%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-20 animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(99, 102, 241, 0) 70%)",
          animationDuration: "14s",
        }}
      />
    </div>
  );
}

