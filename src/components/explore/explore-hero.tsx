import dynamic from "next/dynamic";
import { Allura } from "next/font/google";

import { Reveal } from "@/components/motion/reveal";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { glowPalettes } from "@/lib/glow";

const InfiniteGallery = dynamic(() => import("@/components/ui/3d-gallery-photography"), {
  ssr: false
});

const signature = Allura({
  subsets: ["latin"],
  weight: ["400"]
});

interface ExploreHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  fragments: string[];
  galleryImages: string[];
}

export function ExploreHero({ title, galleryImages }: ExploreHeroProps) {
  const heroImages = galleryImages.map((src, index) => ({
    src,
    alt: `Explore portrait ${index + 1}`
  }));

  return (
    <section className="px-0 pb-8 pt-0 sm:pb-10 lg:pb-12">
      <Reveal>
        <div className="relative min-h-screen overflow-hidden border-b border-black/6 bg-[#0f0d0c]">
          <GlowingEffect
            variant="white"
            spread={42}
            proximity={90}
            inactiveZone={0.18}
            borderWidth={2}
            disabled={true}
            colors={glowPalettes.pearl}
            className="rounded-none"
          />

          <div data-explore-hero-gallery className="absolute inset-0">
            <InfiniteGallery
              images={heroImages}
              speed={1.05}
              visibleCount={11}
              className="h-screen w-full"
              fadeSettings={{
                fadeIn: { start: 0.04, end: 0.22 },
                fadeOut: { start: 0.72, end: 0.92 }
              }}
              blurSettings={{
                blurIn: { start: 0.0, end: 0.08 },
                blurOut: { start: 0.76, end: 0.94 },
                maxBlur: 5
              }}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,9,8,0.3)_0%,rgba(11,9,8,0.12)_26%,rgba(11,9,8,0.52)_100%),radial-gradient(circle_at_center,rgba(15,13,12,0.08)_0%,rgba(15,13,12,0.45)_78%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.8)_0.7px,transparent_0.7px)] [background-size:12px_12px]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(15,13,12,0)_0%,rgba(15,13,12,0.9)_100%)]" />

          <div className="pointer-events-none absolute right-6 top-28 max-w-[15rem] text-right sm:right-10 sm:top-32 lg:right-14 lg:top-36 lg:max-w-[19rem]">
            <p className="text-[10px] uppercase tracking-[0.34em] text-white sm:text-[11px]">
              Personal archive
            </p>
            <p className="mt-3 text-sm leading-6 text-white sm:text-[15px] sm:leading-7">
              Ideas, aesthetics, and obsessions that shape the way I build products.
            </p>
          </div>

          <div className="relative flex min-h-screen items-end px-6 pb-14 pt-28 sm:px-10 sm:pb-16 lg:px-14 lg:pb-20">
            <div className="w-full">
              <h1 className="max-w-4xl font-serif text-[4.5rem] leading-[0.9] tracking-[-0.06em] text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.36)] sm:text-[6.75rem] lg:text-[9rem] xl:text-[10rem]">
                {title}
              </h1>
              <p className={`${signature.className} mt-4 ml-1 text-[2.5rem] leading-none tracking-[0.01em] text-white drop-shadow-[0_10px_26px_rgba(0,0,0,0.28)] sm:text-[3.1rem] lg:ml-2 lg:text-[4.05rem] xl:text-[4.6rem]`}>
                Karthik Suresh
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

