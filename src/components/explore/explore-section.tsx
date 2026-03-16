import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface ExploreSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function ExploreSection({
  id,
  eyebrow,
  title,
  intro,
  className,
  children
}: ExploreSectionProps) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:px-8 lg:px-10 lg:py-20", className)}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 max-w-3xl lg:mb-14">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.35em] text-clay/80">{eyebrow}</p>
            ) : null}
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {title}
            </h2>
            {intro ? (
              <div className="mt-5 text-base leading-8 text-ink/68 sm:text-lg">{intro}</div>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

