import type { PropsWithChildren, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionShellProps extends PropsWithChildren {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
}

export function SectionShell({
  id,
  className,
  eyebrow,
  title,
  intro,
  children
}: SectionShellProps) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 lg:px-10", className)}>
      {(eyebrow || title || intro) && (
        <div className="mx-auto mb-12 max-w-6xl">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.35em] text-clay/80">{eyebrow}</p>
          ) : null}
          {title ? (
            <h2 className="mt-3 max-w-4xl font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {title}
            </h2>
          ) : null}
          {intro ? (
            <div className="mt-5 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">
              {intro}
            </div>
          ) : null}
        </div>
      )}
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
