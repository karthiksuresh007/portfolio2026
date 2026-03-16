import { Reveal } from "@/components/motion/reveal";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { glowPalettes } from "@/lib/glow";

interface ExploreHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  fragments: string[];
}

export function ExploreHero({ eyebrow, title, description, fragments }: ExploreHeroProps) {
  return (
    <section className="px-5 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.8rem] border border-black/5 bg-white/76 px-7 py-10 shadow-float backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <GlowingEffect
              spread={42}
              proximity={90}
              inactiveZone={0.2}
              borderWidth={2}
              disabled={true}
              colors={glowPalettes.pearl}
              className="rounded-[2.8rem]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.94),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(193,131,75,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.18),transparent)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgba(20,19,18,0.28)_0.7px,transparent_0.7px)] [background-size:12px_12px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-clay/80">{eyebrow}</p>
                <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[5.75rem]">
                  {title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
                  {description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {fragments.map((fragment) => (
                  <div
                    key={fragment}
                    className="rounded-[1.6rem] border border-black/5 bg-paper/72 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-clay/80">Fragment</p>
                    <p className="mt-3 font-serif text-2xl tracking-tight text-ink">{fragment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

