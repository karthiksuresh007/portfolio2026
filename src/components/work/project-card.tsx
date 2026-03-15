import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { MotionCard } from "@/components/motion/reveal";
import { TrackedLink } from "@/components/tracked-link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { glowPalettes } from "@/lib/glow";
import { Button } from "@/components/ui/liquid-glass-button";
import type { CaseStudyProject } from "@/types/content";

interface ProjectCardProps {
  project: CaseStudyProject;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <MotionCard className="group relative h-full rounded-[2rem] border border-black/5 bg-white/72 p-4 shadow-panel backdrop-blur-xl">
      <GlowingEffect
        spread={38}
        proximity={88}
        inactiveZone={0.18}
        borderWidth={2}
        disabled={false}
        colors={glowPalettes.sage}
        className="rounded-[2rem]"
      />
      <div className="relative overflow-hidden rounded-[1.5rem]">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        <Image
          src={project.heroImage}
          alt={project.heroAlt}
          width={1200}
          height={900}
          className="relative h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="px-2 pb-2 pt-5">
        <p className="text-xs uppercase tracking-[0.3em] text-clay/80">{project.eyebrow}</p>
        <h3 className="mt-3 font-serif text-3xl tracking-tight text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/72">{project.outcome}</p>
        {!compact ? (
          <p className="mt-4 text-sm leading-7 text-ink/56">{project.summary}</p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, compact ? 3 : 5).map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/5 bg-paper/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-clay"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm text-ink/55">{project.role}</p>
          <Button asChild variant="cool" size="sm" className="rounded-full">
            <TrackedLink
              href={`/work/${project.slug}`}
              event="project_open"
              eventProps={{ project: project.slug }}
            >
              Read chapter
              <ArrowUpRight className="size-4" />
            </TrackedLink>
          </Button>
        </div>
      </div>
    </MotionCard>
  );
}
