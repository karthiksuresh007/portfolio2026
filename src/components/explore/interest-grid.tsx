import { MotionCard } from "@/components/motion/reveal";

interface InterestItem {
  title: string;
  description: string;
}

interface InterestGridProps {
  items: InterestItem[];
}

export function InterestGrid({ items }: InterestGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <MotionCard key={item.title} className="h-full">
          <article className="h-full rounded-[1.7rem] border border-black/5 bg-white/72 p-5 shadow-panel backdrop-blur-xl transition-colors duration-300 hover:bg-white/82">
            <p className="text-[11px] uppercase tracking-[0.28em] text-clay/78">Curiosity</p>
            <h3 className="mt-4 font-serif text-3xl tracking-tight text-ink">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-ink/68">{item.description}</p>
          </article>
        </MotionCard>
      ))}
    </div>
  );
}

