import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracked-link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button, LiquidLinkButton } from "@/components/ui/liquid-glass-button";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/content/site";
import { glowPalettes } from "@/lib/glow";
import type { CaseStudyProject } from "@/types/content";

interface CaseStudyLayoutProps {
  project: CaseStudyProject;
  nextProject?: CaseStudyProject;
}

export function CaseStudyLayout({ project, nextProject }: CaseStudyLayoutProps) {
  return (
    <>
      <section className="px-5 pb-8 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="relative rounded-[2.5rem] border border-black/5 bg-white/70 p-7 shadow-panel backdrop-blur-xl">
              <GlowingEffect disabled={false} spread={42} proximity={100} inactiveZone={0.16} borderWidth={2} colors={glowPalettes.warm} className="rounded-[2.5rem]" />
              <p className="text-xs uppercase tracking-[0.35em] text-clay/80">{project.eyebrow}</p>
              <h1 className="mt-5 font-serif text-5xl tracking-tight text-ink sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 text-base leading-8 text-ink/72">{project.outcome}</p>
              <p className="mt-5 text-sm leading-7 text-ink/58">{project.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.4rem] border border-black/5 bg-paper/60 p-4">
                    <p className="font-serif text-3xl text-ink">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-clay/80">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/70 p-4 shadow-panel backdrop-blur-xl">
              <GlowingEffect disabled={false} spread={42} proximity={100} inactiveZone={0.16} borderWidth={2} colors={glowPalettes.sage} className="rounded-[2.5rem]" />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
              <Image
                src={project.heroImage}
                alt={project.heroAlt}
                width={1600}
                height={1200}
                className="relative h-full min-h-[420px] w-full rounded-[2rem] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <SectionShell
        eyebrow="Case-study structure"
        title="Result first. Context second. Decisions where they matter."
        intro="Each story is structured for fast recruiter scanning first, with enough technical depth to show how the implementation holds together."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {project.chapters.map((chapter, index) => (
            <Reveal key={chapter.title} delay={index * 0.06}>
              <article className="relative h-full rounded-[1.75rem] border border-black/5 bg-white/70 p-6 shadow-panel backdrop-blur-xl">
                <GlowingEffect disabled={true} spread={30} proximity={56} borderWidth={2} colors={index % 2 === 0 ? glowPalettes.pearl : glowPalettes.ember} className="rounded-[1.75rem]" />
                <p className="text-xs uppercase tracking-[0.3em] text-clay/80">
                  Chapter {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink">{chapter.title}</h2>
                <p className="mt-4 text-sm leading-7 text-ink/70">{chapter.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>
      <SectionShell
        eyebrow="Execution notes"
        title="The developer details that support the product story."
        intro="This is the layer that shows systems, flow, stack decisions, and the technical signal behind the product."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative rounded-[2rem] border border-black/5 bg-white/72 p-7 shadow-panel backdrop-blur-xl">
              <GlowingEffect disabled={true} spread={34} proximity={70} borderWidth={2} colors={glowPalettes.sage} className="rounded-[2rem]" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Role</p>
                  <p className="mt-3 text-sm leading-7 text-ink/72">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Project type</p>
                  <p className="mt-3 text-sm leading-7 text-ink/72">{project.timeline}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/5 bg-paper/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-clay"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Button asChild variant="cool" size="lg" className="rounded-full">
                    <TrackedLink
                      href={project.projectLinks[0].href}
                      event={project.projectLinks[0].event}
                      external={project.projectLinks[0].href.startsWith("http")}
                    >
                      {project.projectLinks[0].label}
                      <ArrowUpRight className="size-4" />
                    </TrackedLink>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative rounded-[2rem] border border-black/5 bg-ink p-7 text-paper shadow-panel">
              <GlowingEffect variant="white" disabled={true} spread={28} proximity={56} borderWidth={2} className="rounded-[2rem]" />
              <p className="text-xs uppercase tracking-[0.3em] text-paper/55">What this project proves</p>
              <div className="mt-5 space-y-4">
                {project.lessons.map((lesson) => (
                  <div key={lesson} className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-paper/85">
                    {lesson}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>
      <SectionShell
        eyebrow="Continue the story"
        title="A good portfolio chapter should naturally lead to the next one."
        intro={siteConfig.availability}
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
          {nextProject ? (
            <div className="relative rounded-[2rem] border border-black/5 bg-white/72 p-7 shadow-panel backdrop-blur-xl">
              <GlowingEffect disabled={true} spread={34} proximity={70} borderWidth={2} colors={glowPalettes.pearl} className="rounded-[2rem]" />
              <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Next project</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink">{nextProject.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70">{nextProject.outcome}</p>
              <Button asChild variant="outline" size="lg" className="mt-6 rounded-full">
                <TrackedLink
                  href={`/work/${nextProject.slug}`}
                  event="project_open"
                  eventProps={{ project: nextProject.slug }}
                >
                  Open next case study
                  <ArrowRight className="size-4" />
                </TrackedLink>
              </Button>
            </div>
          ) : null}
          <div className="relative rounded-[2rem] border border-black/5 bg-white/72 p-7 shadow-panel backdrop-blur-xl">
            <GlowingEffect disabled={false} spread={36} proximity={80} inactiveZone={0.2} borderWidth={2} colors={glowPalettes.warm} className="rounded-[2rem]" />
            <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Connect</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink">
              Interested in building something together?
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink/70">
              If you are looking for a full-stack developer who can handle polished UI, practical backend work, and clear product execution, I would love to hear from you.
            </p>
            <LiquidLinkButton href="/contact" className="mt-6 px-7" size="lg">
              <Mail className="size-4" />
              Go to contact
            </LiquidLinkButton>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
