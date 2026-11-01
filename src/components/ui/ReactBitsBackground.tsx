"use client";

import React from "react";
import Waves from "@/components/ui/Waves";

/**
 * Official ReactBits Background (reactbits.dev/backgrounds/waves)
 * Dense flowing mathematical lines that sway like silk, bend around the cursor,
 * and spring back into place with real-time mouse interaction & click ripples.
 */
export function ReactBitsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Subtle Tactile Matrix Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.30]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Official React Bits Waves Component */}
      <Waves
        lineColor="rgba(0, 0, 0, 0.075)"
        accentColor="rgba(16, 185, 129, 0.45)"
        backgroundColor="transparent"
        spacing={20}
        amplitude={28}
        speed={0.55}
        twist={0.12}
        mouseInteraction={true}
        mouseRadius={180}
        mouseStrength={0.6}
        clickRipple={true}
        opacity={0.85}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
