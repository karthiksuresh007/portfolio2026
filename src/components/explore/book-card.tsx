import { MotionCard } from "@/components/motion/reveal";

interface BookCardProps {
  title: string;
  author: string;
  note: string;
}

export function BookCard({ title, author, note }: BookCardProps) {
  return (
    <MotionCard className="h-full">
      <article className="relative flex h-full min-h-[17rem] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(244,240,232,0.9))] p-6 shadow-panel backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,rgba(193,131,75,0.4),rgba(53,73,63,0.2),rgba(114,95,79,0.28))]" />
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-clay/78">Learning shelf</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink">{title}</h3>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-ink/45">{author}</p>
        </div>
        <p className="mt-6 text-sm leading-7 text-ink/66">{note}</p>
      </article>
    </MotionCard>
  );
}

