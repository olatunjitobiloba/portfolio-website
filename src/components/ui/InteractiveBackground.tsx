"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; isHovering: boolean }>({
    x: -1000,
    y: -1000,
    isHovering: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Particle palette matching warm canvas + emerald & amber AI accents
    const palette = [
      "rgba(16, 185, 129, 0.45)",  // Emerald
      "rgba(99, 102, 241, 0.35)",  // Indigo
      "rgba(217, 119, 6, 0.35)",   // Warm Amber
      "rgba(0, 0, 0, 0.20)",        // Deep Ink
    ];

    const particleCount = Math.min(50, Math.floor((width * height) / 22000));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1.2,
        baseAlpha: Math.random() * 0.5 + 0.2,
        color: palette[Math.floor(Math.random() * palette.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isHover = mouseRef.current.isHovering;

      // Draw Cursor Spotlight Glow when mouse is on page
      if (isHover && mx > 0 && my > 0) {
        const spotGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 350);
        spotGrad.addColorStop(0, "rgba(16, 185, 129, 0.08)");
        spotGrad.addColorStop(0.5, "rgba(99, 102, 241, 0.03)");
        spotGrad.addColorStop(1, "transparent");
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off canvas walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse avoidance/repel physics
        if (isHover) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist && dist > 0) {
            const force = (maxDist - dist) / maxDist;
            p.x += (dx / dist) * force * 2.5;
            p.y += (dy / dist) * force * 2.5;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect nearby particles with subtle lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.07 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating Animated Gradient Aurora Clouds */}
      <div
        className="absolute -top-[12%] -left-[10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-40 animate-pulse pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(16, 185, 129, 0) 70%)",
          animationDuration: "8s",
        }}
      />

      <div
        className="absolute top-[35%] -right-[15%] w-[700px] h-[700px] rounded-full blur-[150px] opacity-30 animate-pulse pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(217, 119, 6, 0.30) 0%, rgba(217, 119, 6, 0) 70%)",
          animationDuration: "11s",
        }}
      />

      <div
        className="absolute -bottom-[15%] left-[20%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-35 animate-pulse pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, rgba(99, 102, 241, 0) 70%)",
          animationDuration: "13s",
        }}
      />

      {/* Interactive 60fps Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
