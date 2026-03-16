import type { Metadata } from "next";

import { BookCard } from "@/components/explore/book-card";
import { ExploreHero } from "@/components/explore/explore-hero";
import { ExploreSection } from "@/components/explore/explore-section";
import { InspirationCard } from "@/components/explore/inspiration-card";
import { InterestGrid } from "@/components/explore/interest-grid";
import { QuoteBlock } from "@/components/explore/quote-block";
import { Reveal } from "@/components/motion/reveal";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  admiredPeople,
  builderMindset,
  cinemaFeatures,
  closingReflection,
  csCuriosity,
  exploreHero,
  learningShelf,
  musicShelf,
  quoteFragments,
  strategySections
} from "@/content/explore";
import { siteConfig } from "@/content/site";
import { glowPalettes } from "@/lib/glow";

export const metadata: Metadata = {
  title: "Explore",
  description: `The ideas, art, thinkers, and systems that shape how ${siteConfig.name} builds.`
};

export default function ExplorePage() {
  return (
    <>
      <ExploreHero {...exploreHero} />

      <ExploreSection
        id="builder-mindset"
        eyebrow="Builder mindset"
        title="How I think about building"
        intro="The parts of engineering that keep pulling me back are rarely only technical. They sit at the intersection of product judgment, system design, and craft."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {builderMindset.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="relative h-full rounded-[2rem] border border-black/5 bg-white/74 p-6 shadow-panel backdrop-blur-xl">
                <GlowingEffect
                  spread={28}
                  proximity={72}
                  inactiveZone={0.26}
                  borderWidth={2}
                  disabled={true}
                  colors={glowPalettes.pearl}
                  className="rounded-[2rem]"
                />
                <p className="text-[11px] uppercase tracking-[0.28em] text-clay/78">0{index + 1}</p>
                <h3 className="mt-5 font-serif text-3xl tracking-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/68">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </ExploreSection>

      <ExploreSection
        id="people"
        eyebrow="People I admire"
        title="Thinkers, builders, and creators with unusually strong signals"
        intro="Some people influence technique. Others influence standards. The most memorable ones change the way ambition itself looks."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {admiredPeople.map((person) => (
            <InspirationCard
              key={person.name}
              title={person.name}
              meta={person.category}
              caption={person.note}
            />
          ))}
        </div>
      </ExploreSection>

      <ExploreSection
        id="learning-shelf"
        eyebrow="Learning shelf"
        title="Books I return to for clarity, leverage, and structure"
        intro="Not a complete library. Just the kind of shelf that changes how you think after the page is closed."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {learningShelf.map((book) => (
            <BookCard key={book.title} title={book.title} author={book.author} note={book.note} />
          ))}
        </div>
      </ExploreSection>

      <ExploreSection
        id="cinema-music"
        eyebrow="Story and sound"
        title="Cinema, storytelling, and music that sharpen the emotional side of craft"
        intro="Great films and great soundtracks do more than entertain. They teach pacing, ambition, restraint, and how atmosphere changes the meaning of everything else."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-clay/78">Cinema and storytelling</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {cinemaFeatures.map((film) => (
                <InspirationCard
                  key={film.title}
                  title={film.title}
                  meta={film.meta}
                  caption={film.note}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-clay/78">Music and sound</p>
            <div className="grid gap-4">
              {musicShelf.map((artist) => (
                <InspirationCard
                  key={artist.title}
                  title={artist.title}
                  meta={artist.meta}
                  caption={artist.note}
                />
              ))}
            </div>
          </div>
        </div>
      </ExploreSection>

      <ExploreSection
        id="cs-curiosity"
        eyebrow="Computer science curiosity"
        title="Topics that keep expanding the map"
        intro="These are the areas that continue to reward attention because each one opens into deeper questions about abstraction, scale, and decision-making."
      >
        <InterestGrid items={csCuriosity} />
      </ExploreSection>

      <ExploreSection
        id="strategy"
        eyebrow="Games and strategy"
        title="The appeal of pressure, structure, and competitive intelligence"
        intro="I like domains where choices compound. Chess and football are both interesting because they turn timing, pattern recognition, and tactical tradeoffs into something visible."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {strategySections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.08}>
              <article className="relative rounded-[2rem] border border-black/5 bg-white/74 p-7 shadow-panel backdrop-blur-xl">
                <GlowingEffect
                  spread={28}
                  proximity={70}
                  inactiveZone={0.24}
                  borderWidth={2}
                  disabled={true}
                  colors={index === 0 ? glowPalettes.sage : glowPalettes.ember}
                  className="rounded-[2rem]"
                />
                <p className="text-[11px] uppercase tracking-[0.28em] text-clay/78">Strategic lens</p>
                <h3 className="mt-4 font-serif text-4xl tracking-tight text-ink">{section.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-ink/68">
                  {section.fragments.map((fragment) => (
                    <p key={fragment}>{fragment}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </ExploreSection>

      <ExploreSection
        id="quotes"
        eyebrow="Quotes and fragments"
        title="Small lines that stay useful for a long time"
        intro="I like quotes that compress a way of seeing into a sentence and still feel relevant years later."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {quoteFragments.map((item, index) => (
            <QuoteBlock
              key={item.quote}
              quote={item.quote}
              author={item.author}
              delay={index * 0.06}
            />
          ))}
        </div>
      </ExploreSection>

      <ExploreSection
        id="closing"
        eyebrow="Closing reflection"
        title="A builder is partly the sum of the things they keep studying"
      >
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-ink px-8 py-10 text-paper shadow-float sm:px-10 sm:py-12">
            <GlowingEffect
              variant="white"
              spread={36}
              proximity={92}
              inactiveZone={0.16}
              borderWidth={2}
              disabled={true}
              className="rounded-[2.5rem]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
            <p className="relative max-w-4xl font-serif text-3xl leading-[1.2] tracking-tight sm:text-4xl lg:text-[2.8rem]">
              {closingReflection}
            </p>
          </div>
        </Reveal>
      </ExploreSection>
    </>
  );
}

