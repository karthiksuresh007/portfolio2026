import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionShell } from "@/components/ui/section-shell";
import {
  achievements,
  certificates,
  education,
  siteConfig,
  skillGroups,
  timeline
} from "@/content/site";
import { glowPalettes } from "@/lib/glow";

export const metadata: Metadata = {
  title: "About",
  description: "About Karthik Suresh, a full-stack web developer focused on clean UI, practical systems, and recruiter-ready product work."
};

export default function AboutPage() {
  return (
    <>
      <SectionShell
        eyebrow="About"
        title="A full-stack web developer focused on useful products and clean execution."
        intro={siteConfig.shortBio}
        className="pt-14"
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="relative rounded-[2rem] border border-black/5 bg-white/72 p-7 shadow-panel backdrop-blur-xl">
              <GlowingEffect disabled={true} spread={34} proximity={70} borderWidth={2} colors={glowPalettes.warm} className="rounded-[2rem]" />
              <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Profile</p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink">{siteConfig.role}</h2>
              <p className="mt-5 text-sm leading-7 text-ink/72">{siteConfig.headline}</p>
              <p className="mt-4 text-sm leading-7 text-ink/58">{siteConfig.longBio}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative rounded-[2rem] border border-black/5 bg-ink p-7 text-paper shadow-panel">
              <GlowingEffect variant="white" disabled={true} spread={30} proximity={60} borderWidth={2} className="rounded-[2rem]" />
              <p className="text-xs uppercase tracking-[0.3em] text-paper/55">Current focus</p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight">{siteConfig.availability}</h2>
              <p className="mt-5 text-sm leading-7 text-paper/82">{siteConfig.availabilityDetail}</p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Skills"
        title="Tools and technologies I use most."
        intro="The strongest signal in the portfolio is full-stack web execution, with a growing focus on practical AI workflows."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <article className="relative rounded-[2rem] border border-black/5 bg-white/72 p-6 shadow-panel backdrop-blur-xl">
                <GlowingEffect disabled={true} spread={28} proximity={56} borderWidth={2} colors={glowPalettes.sage} className="rounded-[2rem]" />
                <h3 className="font-serif text-3xl tracking-tight text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/5 bg-paper/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-clay"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Education"
        title="Academic background and progression."
        intro="Alongside project work, these milestones form the technical foundation behind the portfolio."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.institution} delay={index * 0.08}>
              <article className="relative rounded-[2rem] border border-black/5 bg-white/72 p-6 shadow-panel backdrop-blur-xl">
                <GlowingEffect disabled={true} spread={28} proximity={56} borderWidth={2} colors={glowPalettes.pearl} className="rounded-[2rem]" />
                <p className="text-xs uppercase tracking-[0.3em] text-clay/80">{item.timeline}</p>
                <h3 className="mt-4 font-serif text-3xl tracking-tight text-ink">{item.institution}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/70">{item.detail}</p>
                <p className="mt-3 text-sm text-ink/55">{item.location}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Credentials"
        title="Certificates and achievements."
        intro="Additional proof points that support the project work and technical profile."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative rounded-[2rem] border border-black/5 bg-white/72 p-7 shadow-panel backdrop-blur-xl">
              <GlowingEffect disabled={true} spread={34} proximity={70} borderWidth={2} colors={glowPalettes.warm} className="rounded-[2rem]" />
              <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Certificates</p>
              <div className="mt-5 grid gap-4">
                {certificates.map((item) => (
                  <article
                    key={`${item.title}-${item.timeline}`}
                    className="rounded-[1.4rem] border border-black/5 bg-paper/65 p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="max-w-xl font-serif text-2xl tracking-tight text-ink">
                        {item.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.22em] text-clay/80">
                        {item.timeline}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-ink/70">{item.issuer}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={0.08}>
              <div className="relative rounded-[2rem] border border-black/5 bg-ink p-7 text-paper shadow-panel">
                <GlowingEffect variant="white" disabled={true} spread={28} proximity={56} borderWidth={2} className="rounded-[2rem]" />
                <p className="text-xs uppercase tracking-[0.3em] text-paper/55">Achievements</p>
                <div className="mt-5 space-y-4">
                  {achievements.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
                    >
                      <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-paper/82">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="relative rounded-[2rem] border border-black/5 bg-white/72 p-7 shadow-panel backdrop-blur-xl">
                <GlowingEffect disabled={true} spread={34} proximity={70} borderWidth={2} colors={glowPalettes.ember} className="rounded-[2rem]" />
                <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Growth</p>
                <div className="mt-5 space-y-4">
                  {timeline.map((item) => (
                    <article key={item.year} className="rounded-[1.4rem] border border-black/5 bg-paper/65 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-clay/80">{item.year}</p>
                      <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-ink/70">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
