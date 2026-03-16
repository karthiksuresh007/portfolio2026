import { Reveal } from "@/components/motion/reveal";

interface QuoteBlockProps {
  quote: string;
  author: string;
  delay?: number;
}

export function QuoteBlock({ quote, author, delay = 0 }: QuoteBlockProps) {
  return (
    <Reveal delay={delay}>
      <blockquote className="relative rounded-[2rem] border border-black/5 bg-white/74 p-7 shadow-panel backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.86),transparent_42%)]" />
        <div className="relative">
          <p className="font-serif text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl">
            “{quote}”
          </p>
          <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-clay/80">{author}</footer>
        </div>
      </blockquote>
    </Reveal>
  );
}

