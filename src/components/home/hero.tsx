import { Reveal } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="px-5 pb-10 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2.5rem] border border-white/60 bg-white/70 p-6 shadow-float backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.35em] text-clay/80">
                Product-minded full-stack engineering
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.92] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Building modern web products with startup energy and production discipline.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ink/72 sm:text-lg">
                {siteConfig.headline}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/62 sm:text-base">
                {siteConfig.founderPitch}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedLink
                href={siteConfig.primaryLinks[0].href}
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:-translate-y-0.5 hover:bg-moss"
              >
                {siteConfig.primaryLinks[0].label}
              </TrackedLink>
              <TrackedLink
                href={siteConfig.primaryLinks[1].href}
                className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-white/70 px-6 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-paper"
              >
                {siteConfig.primaryLinks[1].label}
              </TrackedLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="min-h-[480px]">
          <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#ece5d7] p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_42%),linear-gradient(145deg,rgba(255,255,255,0.75),rgba(196,164,123,0.08))]" />
            <div className="absolute inset-x-10 top-8 h-36 rounded-[2rem] border border-white/70 bg-white/75 shadow-panel backdrop-blur-xl" />
            <div className="absolute inset-x-5 bottom-5 top-28 overflow-hidden rounded-[2rem] border border-black/5 bg-[linear-gradient(180deg,rgba(108,132,106,0.15),rgba(31,54,44,0.05))]">
              <div className="absolute inset-0 bg-[url('/images/hero-panorama.svg')] bg-cover bg-center opacity-95" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(20,19,18,0.18))]" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="rounded-full border border-black/5 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-clay/90 backdrop-blur">
                  Premium case-study portfolio
                </div>
                <div className="rounded-full border border-black/5 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-clay/90 backdrop-blur">
                  {siteConfig.basedIn}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/70 bg-white/78 p-5 shadow-panel backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.35em] text-clay/80">Builder profile</p>
                  <p className="mt-3 text-sm leading-7 text-ink/70">{siteConfig.engineeringPov}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/70 bg-ink/90 p-5 text-paper shadow-panel">
                  <p className="text-xs uppercase tracking-[0.35em] text-paper/60">Brand promise</p>
                  <p className="mt-3 text-sm leading-7 text-paper/88">{siteConfig.brandPromise}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

