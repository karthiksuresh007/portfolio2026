import { MotionCard } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface InspirationCardProps {
  title: string;
  caption: string;
  meta?: string;
  className?: string;
}

export function InspirationCard({ title, caption, meta, className }: InspirationCardProps) {
  return (
    <MotionCard className={cn("h-full", className)}>
      <article className="group relative h-full rounded-[1.8rem] border border-black/5 bg-white/72 p-6 shadow-panel backdrop-blur-xl transition-colors duration-300 hover:bg-white/82">
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_45%)] opacity-70" />
        <div className="relative h-full">
          {meta ? (
            <p className="text-[11px] uppercase tracking-[0.28em] text-clay/78">{meta}</p>
          ) : null}
          <h3 className="mt-4 font-serif text-3xl tracking-tight text-ink">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-ink/68">{caption}</p>
        </div>
      </article>
    </MotionCard>
  );
}

