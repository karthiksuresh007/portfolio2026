"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";

interface ParticleButtonProps extends ButtonProps {
  onSuccess?: () => void;
  successDuration?: number;
}

function createParticleOffsets() {
  return Array.from({ length: 6 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 6;
    const distance = 20 + Math.random() * 24;

    return {
      id: `${index}-${distance}`,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance - 10
    };
  });
}

function SuccessParticles({
  buttonRef
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
}) {
  const rect = buttonRef.current?.getBoundingClientRect();
  const dots = React.useMemo(() => createParticleOffsets(), []);

  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    <AnimatePresence>
      {dots.map((dot, index) => (
        <motion.div
          key={dot.id}
          className="fixed h-1.5 w-1.5 rounded-full bg-ink/70"
          style={{ left: centerX, top: centerY }}
          initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0.65],
            x: [0, dot.dx],
            y: [0, dot.dy],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 0.52,
            delay: index * 0.03,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      ))}
    </AnimatePresence>
  );
}

function ParticleButton({
  children,
  onClick,
  onSuccess,
  successDuration = 900,
  className,
  ...props
}: ParticleButtonProps) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    setShowParticles(true);
    onSuccess?.();

    window.setTimeout(() => {
      setShowParticles(false);
    }, successDuration);
  };

  return (
    <>
      {showParticles ? <SuccessParticles buttonRef={buttonRef} /> : null}
      <Button
        ref={buttonRef}
        onClick={handleClick}
        className={cn(
          "relative gap-2",
          showParticles && "scale-[0.98]",
          "transition-transform duration-100",
          className
        )}
        {...props}
      >
        {children}
        <MousePointerClick className="h-4 w-4" />
      </Button>
    </>
  );
}

export { ParticleButton };
