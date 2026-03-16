"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ParticleDot = {
  id: string;
  dx: number;
  dy: number;
  size: number;
  color: string;
  delay: number;
};

type ClickBurst = {
  id: number;
  x: number;
  y: number;
  dots: ParticleDot[];
};

const particlePalette = [
  "rgba(193, 131, 75, 0.92)",
  "rgba(53, 73, 63, 0.82)",
  "rgba(114, 95, 79, 0.72)",
  "rgba(20, 19, 18, 0.48)"
];

function createDots() {
  return Array.from({ length: 7 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 7 + Math.random() * 0.28;
    const distance = 18 + Math.random() * 26;

    return {
      id: `${index}-${distance}`,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance - 8,
      size: 4 + Math.random() * 3,
      color: particlePalette[index % particlePalette.length],
      delay: index * 0.015
    };
  });
}

export function GlobalClickParticles() {
  const [bursts, setBursts] = useState<ClickBurst[]>([]);
  const burstId = useRef(0);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      reduceMotionRef.current = mediaQuery.matches;
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    const handlePointerDown = (event: PointerEvent) => {
      if (reduceMotionRef.current || event.button !== 0) {
        return;
      }

      const nextBurst: ClickBurst = {
        id: burstId.current++,
        x: event.clientX,
        y: event.clientY,
        dots: createDots()
      };

      setBursts((current) => [...current, nextBurst]);

      window.setTimeout(() => {
        setBursts((current) => current.filter((burst) => burst.id !== nextBurst.id));
      }, 720);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]">
      <AnimatePresence>
        {bursts.map((burst) => (
          <div key={burst.id}>
            {burst.dots.map((dot) => (
              <motion.span
                key={`${burst.id}-${dot.id}`}
                className="absolute rounded-full blur-[0.3px]"
                style={{
                  left: burst.x,
                  top: burst.y,
                  width: dot.size,
                  height: dot.size,
                  backgroundColor: dot.color
                }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                animate={{ x: dot.dx, y: dot.dy, opacity: [0, 1, 0], scale: [0.4, 1, 0.7] }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.58,
                  delay: dot.delay,
                  ease: [0.22, 1, 0.36, 1]
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
