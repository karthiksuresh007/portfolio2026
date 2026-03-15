import { ArrowRight, Download, Mail } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracked-link";
import GalleryHoverCarousel from "@/components/ui/gallery-hover-carousel";
import { Button, LiquidLinkButton } from "@/components/ui/liquid-glass-button";
import { SectionShell } from "@/components/ui/section-shell";
import {
  achievements,
  education,
  featuredProjects,
  proofItems,
  siteConfig,
  skillGroups,
  supportingProjects
} from "@/content/site";

export default function HomePage() {
  const spotlightSkills = skillGroups.flatMap((group) => group.items).slice(0, 9);
  const highlightedEducation = education[0];
  const carouselItems = [...featuredProjects, ...supportingProjects].map((project) => ({
    id: project.slug,
    title: project.title,
    summary: project.outcome,
    url: `/work/${project.slug}`,
    image: project.heroImage,
    eyebrow: project.eyebrow,
    tags: project.stack.slice(0, 2)
  }));

  return (
    <>
      <section className="px-5 pb-10 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.8rem] border border-black/5 bg-white/76 p-7 shadow-float backdrop-blur-xl sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.96),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(193,131,75,0.15),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(53,73,63,0.12),transparent_24%)]" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-clay/80">
                  <span className="rounded-full border border-black/5 bg-paper/70 px-4 py-2">
                    {siteConfig.role}
                  </span>
                  <span>{siteConfig.basedIn}</span>
                </div>
                <h1 className="mt-8 font-serif text-[4.6rem] uppercase leading-[0.82] tracking-[-0.06em] text-ink sm:text-[6.8rem] lg:text-[8.8rem]">
                  Karthik
                  <span className="block pl-3 text-clay sm:pl-8">Suresh</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-ink/72 sm:text-lg">
                  Building clean full-stack products with React, Next.js, Node.js, and practical AI integrations.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <LiquidLinkButton href="/work" className="w-full px-7 sm:w-auto" size="xxl">
                    View projects
                    <ArrowRight className="size-4" />
                  </LiquidLinkButton>
                  <Button asChild variant="cool" size="lg" className="w-full rounded-full sm:w-auto">
                    <TrackedLink href={siteConfig.resumeHref} event="resume_click">
                      <Download className="size-4" />
                      Download resume
                    </TrackedLink>
                  </Button>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.6rem] border border-black/5 bg-paper/70 p-4">
                    <p className="font-serif text-3xl text-ink">4</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-clay/80">
                      Strong portfolio projects
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-black/5 bg-paper/70 p-4">
                    <p className="font-serif text-3xl text-ink">AI + Web</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-clay/80">
                      Product and workflow focus
                    </p>
                  </div>
                  <div className="rounded-[1.6rem] border border-black/5 bg-paper/70 p-4">
                    <p className="font-serif text-3xl text-ink">Open</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-clay/80">
                      Roles, internships, startup teams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={0.08}>
              <div className="rounded-[2.2rem] border border-black/5 bg-ink p-7 text-paper shadow-panel">
                <p className="text-xs uppercase tracking-[0.3em] text-paper/55">Quick read</p>
                <h2 className="mt-4 font-serif text-4xl tracking-tight">
                  Recruiter-friendly. Product-minded. Full-stack ready.
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-paper/80">
                  <p>{siteConfig.shortBio}</p>
                  <p>{siteConfig.availability}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {spotlightSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-paper/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="rounded-[2.2rem] border border-black/5 bg-white/76 p-7 shadow-panel backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Education snapshot</p>
                <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink">
                  {highlightedEducation.institution}
                </h2>
                <p className="mt-4 text-sm leading-7 text-ink/72">{highlightedEducation.detail}</p>
                <div className="mt-6 grid gap-3 text-sm text-ink/62">
                  <p>{highlightedEducation.location}</p>
                  <p>{highlightedEducation.timeline}</p>
                  <p>{achievements[0]?.detail}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GalleryHoverCarousel
        sectionId="selected-work"
        heading="Projects that feel strong at a glance and hold up in detail."
        description="A more visual way to explore the portfolio. Each card opens into a full case study with architecture, decisions, and outcomes."
        items={carouselItems}
      />

      <SectionShell
        eyebrow="Strengths"
        title="Clear value, quickly."
        intro="The homepage stays intentionally lighter on copy. The detail lives inside the case studies and resume."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-3">
            {proofItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="h-full rounded-[2rem] border border-black/5 bg-white/72 p-6 shadow-panel backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-clay/80">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink/70">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-black/5 bg-ink p-7 text-paper shadow-panel">
              <p className="text-xs uppercase tracking-[0.3em] text-paper/55">Core stack</p>
              <h3 className="mt-4 font-serif text-4xl tracking-tight">
                React, Next.js, Node.js, Express.js, MongoDB, Firebase.
              </h3>
              <p className="mt-4 text-sm leading-7 text-paper/80">{siteConfig.engineeringPov}</p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Profile"
        title="Education, skills, and proof points in one pass."
        intro="A flexible grid that stays friendly for more cards, carousels, and visual modules later."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-black/5 bg-white/72 p-7 shadow-panel backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Skills</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-[1.5rem] border border-black/5 bg-paper/65 p-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">
                      {group.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-black/5 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-ink/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal>
              <div className="rounded-[2rem] border border-black/5 bg-white/72 p-7 shadow-panel backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Education</p>
                <div className="mt-5 space-y-4">
                  {education.map((item) => (
                    <article
                      key={item.institution}
                      className="rounded-[1.5rem] border border-black/5 bg-paper/65 p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-2xl tracking-tight text-ink">
                            {item.institution}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-ink/72">{item.detail}</p>
                        </div>
                        <p className="text-xs uppercase tracking-[0.22em] text-clay/80">
                          {item.timeline}
                        </p>
                      </div>
                      <p className="mt-3 text-sm text-ink/55">{item.location}</p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-black/5 bg-white/72 p-7 shadow-panel backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Achievements</p>
                <div className="mt-5 grid gap-4">
                  {achievements.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-black/5 bg-paper/65 p-4"
                    >
                      <h3 className="font-serif text-2xl tracking-tight text-ink">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-ink/70">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Contact"
        title="Built for a fast first impression."
        intro="If you want to review the work in depth, open the case studies. If the fit already feels right, reach out directly."
      >
        <Reveal>
          <div className="rounded-[2.5rem] border border-black/5 bg-white/75 p-8 shadow-float backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm leading-8 text-ink/72">{siteConfig.availabilityDetail}</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <LiquidLinkButton href="/contact" className="w-full px-7 sm:w-auto" size="lg">
                    <Mail className="size-4" />
                    Get in touch
                  </LiquidLinkButton>
                  <Button asChild variant="outline" size="lg" className="w-full rounded-full sm:w-auto">
                    <TrackedLink href={siteConfig.resumeHref} event="resume_click">
                      <Download className="size-4" />
                      Download resume
                    </TrackedLink>
                  </Button>
                </div>
              </div>
              <div className="rounded-[2rem] border border-black/5 bg-paper/70 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Direct links</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-ink/70">
                  <p>GitHub: github.com/karthiksuresh007</p>
                  <p>LinkedIn: karthik-suresh007</p>
                  <p>Email: karthiksuresh897@gmail.com</p>
                  <p>Phone: +91 9496935553</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
