"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Matter from "matter-js";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { getStackIconDataUri } from "@/data/stackIcons";

interface SkillPill {
  id: string;
  label: string;
  category: "ml" | "infra" | "backend" | "core";
}

const SKILL_ITEMS: SkillPill[] = [
  { id: "1", label: "PyTorch", category: "ml" },
  { id: "2", label: "scikit-learn", category: "ml" },
  { id: "3", label: "FastAPI", category: "backend" },
  { id: "4", label: "Flask", category: "backend" },
  { id: "5", label: "Docker", category: "infra" },
  { id: "6", label: "MLOps", category: "infra" },
  { id: "7", label: "GitHub Actions", category: "infra" },
  { id: "8", label: "Python", category: "core" },
  { id: "9", label: "pytest", category: "backend" },
  { id: "10", label: "Render", category: "infra" },
  { id: "11", label: "PostgreSQL", category: "backend" },
  { id: "12", label: "Supabase", category: "infra" },
];

export function PhysicsPills({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  const [hasTriggeredDrop, setHasTriggeredDrop] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Trigger drop when the section is visibly in the user's viewport
  useEffect(() => {
    if (!containerRef.current || hasTriggeredDrop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasTriggeredDrop(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasTriggeredDrop]);

  // Handle "Start over" click
  const handleStartOver = useCallback(() => {
    setHasTriggeredDrop(true);
    setResetKey((k) => k + 1);
  }, []);

  // Initialize Matter.js simulation
  useEffect(() => {
    if (!sceneRef.current || !hasTriggeredDrop) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Constraint,
      Events,
    } = Matter;

    const container = sceneRef.current;
    const width = container.clientWidth || 800;
    const height = 280;

    // Create Engine with natural gravity
    const engine = Engine.create({
      gravity: { x: 0, y: 1.0, scale: 0.001 },
    });
    engineRef.current = engine;

    // Pre-cache authentic SVG logos for canvas rendering
    const iconMap: Record<string, HTMLImageElement> = {};
    for (const item of SKILL_ITEMS) {
      const img = new Image();
      img.src = getStackIconDataUri(item.label);
      iconMap[item.label] = img;
    }

    // Create Canvas Renderer (1:1 coordinate space for 100% pointer accuracy)
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: 1,
      },
    });

    Render.run(render);

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Static Boundaries (Floor, Left, Right)
    const wallOptions: Matter.IChamferableBodyDefinition = {
      isStatic: true,
      render: { visible: false },
    };

    const wallThickness = 100;
    const ground = Bodies.rectangle(
      width / 2,
      height + wallThickness / 2 - 4,
      width * 2,
      wallThickness,
      wallOptions
    );
    const leftWall = Bodies.rectangle(
      -wallThickness / 2 + 4,
      height / 2,
      wallThickness,
      height * 2,
      wallOptions
    );
    const rightWall = Bodies.rectangle(
      width + wallThickness / 2 - 4,
      height / 2,
      wallThickness,
      height * 2,
      wallOptions
    );

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Color accents per category
    const dotColors: Record<string, string> = {
      ml: "#10B981",
      infra: "#0EA5E9",
      backend: "#8B5CF6",
      core: "#111827",
    };

    // Staggered cascade from above view
    const pillBodies: Matter.Body[] = SKILL_ITEMS.map((item, index) => {
      // Comfortably sized pill width accommodating 18x18 logo + text + padding
      const pillWidth = Math.max(114, item.label.length * 9.5 + 52);
      const pillHeight = 38;
      const slotX = (width / (SKILL_ITEMS.length + 1)) * (index + 1);
      const jitter = (Math.random() - 0.5) * 40;
      const startX = Math.min(width - 70, Math.max(70, slotX + jitter));
      const startY = -40 - index * 38;

      const body = Bodies.rectangle(startX, startY, pillWidth, pillHeight, {
        chamfer: { radius: 19 },
        restitution: 0.65,
        friction: 0.15,
        frictionAir: 0.012,
        render: {
          fillStyle: "#FFFFFF",
          strokeStyle: "rgba(0, 0, 0, 0.12)",
          lineWidth: 1.5,
        },
      });

      (body as unknown as { labelText: string; category: string }).labelText = item.label;
      (body as unknown as { labelText: string; category: string }).category = item.category;

      return body;
    });

    Composite.add(engine.world, pillBodies);

    // =========================================================================
    // ROCK-SOLID POINTER INTERACTIVITY (DRAG & FLING PILLS)
    // Directly maps getBoundingClientRect to canvas coordinates, bypassing
    // browser zoom, Windows DPI scaling, and smooth scroll offsets.
    // =========================================================================
    const canvas = render.canvas;
    canvas.style.touchAction = "none";
    canvas.style.userSelect = "none";

    let activeConstraint: Matter.Constraint | null = null;
    let draggedBody: Matter.Body | null = null;
    let lastPos = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };

    const getCanvasCoords = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      const pos = getCanvasCoords(e);

      // Find pill directly under pointer or within grab radius
      const clicked = Matter.Query.point(pillBodies, pos);
      if (clicked.length > 0) {
        const target = clicked[0];
        draggedBody = target;
        lastPos = pos;
        velocity = { x: 0, y: 0 };

        Matter.Sleeping.set(target, false);

        activeConstraint = Constraint.create({
          pointA: { x: pos.x, y: pos.y },
          bodyB: target,
          pointB: { x: pos.x - target.position.x, y: pos.y - target.position.y },
          stiffness: 0.9,
          damping: 0.05,
          render: { visible: false },
        });

        Composite.add(engine.world, activeConstraint);
        canvas.setPointerCapture(e.pointerId);
        canvas.style.cursor = "grabbing";
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const pos = getCanvasCoords(e);

      if (activeConstraint && draggedBody) {
        velocity = {
          x: pos.x - lastPos.x,
          y: pos.y - lastPos.y,
        };
        lastPos = pos;
        activeConstraint.pointA = { x: pos.x, y: pos.y };
        Matter.Sleeping.set(draggedBody, false);
      } else {
        // Dynamic hover cursor
        const hovered = Matter.Query.point(pillBodies, pos);
        canvas.style.cursor = hovered.length > 0 ? "grab" : "default";
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (activeConstraint) {
        Composite.remove(engine.world, activeConstraint);
        activeConstraint = null;
      }
      if (draggedBody) {
        // Impart fluid fling velocity on release
        Matter.Body.setVelocity(draggedBody, {
          x: Math.max(-25, Math.min(25, velocity.x * 0.9)),
          y: Math.max(-25, Math.min(25, velocity.y * 0.9)),
        });
        Matter.Sleeping.set(draggedBody, false);
        draggedBody = null;
      }
      try {
        if (canvas.hasPointerCapture(e.pointerId)) {
          canvas.releasePointerCapture(e.pointerId);
        }
      } catch {}
      canvas.style.cursor = "default";
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    // Canvas typography & Logo drawing
    Events.on(render, "afterRender", () => {
      const ctx = render.context;
      ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

      for (const body of pillBodies) {
        const { x, y } = body.position;
        const angle = body.angle;
        const meta = body as unknown as { labelText?: string; category?: string };
        const text = meta.labelText || "";
        const icon = iconMap[text];

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        const iconSize = 18;
        const textWidth = ctx.measureText(text).width;
        const spacing = 8;
        const totalContentWidth = iconSize + spacing + textWidth;
        const startX = -totalContentWidth / 2;

        // Draw authentic technology SVG logo
        if (icon && icon.complete && icon.naturalWidth > 0) {
          ctx.drawImage(icon, startX, -iconSize / 2, iconSize, iconSize);
        } else {
          // Fallback colored dot
          ctx.fillStyle = dotColors[meta.category || "core"] || "#10B981";
          ctx.beginPath();
          ctx.arc(startX + 8, 0, 3, 0, 2 * Math.PI);
          ctx.fill();
        }

        // Draw crisp label text
        ctx.fillStyle = "#111827";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(text, startX + iconSize + spacing, 0.5);

        ctx.restore();
      }
    });

    // Cleanup
    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, [hasTriggeredDrop, resetKey]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-2xl border border-black/[0.08] bg-white/80 backdrop-blur-sm overflow-hidden p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
        className
      )}
    >
      {/* Clean Header Bar: title and "Start over" */}
      <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] text-xs font-mono">
        <span className="font-semibold text-ink-primary tracking-tight">
          Interactive Stack
        </span>

        <button
          type="button"
          onClick={handleStartOver}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-ink-primary transition-colors cursor-pointer text-xs font-mono"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Start over</span>
        </button>
      </div>

      {/* Canvas Area */}
      <div
        ref={sceneRef}
        className="w-full h-[280px] select-none relative overflow-hidden"
      >
        {!hasTriggeredDrop && (
          <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-ink-muted">
            <span className="bg-canvas/90 px-3.5 py-1.5 rounded-full border border-black/[0.06]">
              Scroll down to watch stack cascade
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
