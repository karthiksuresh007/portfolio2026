import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { ProjectCard } from "@/components/work/project-card";
import { featuredProjects, supportingProjects } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies across AI products, backend systems, and full-stack web development."
};

export default function WorkPage() {
  return (
    <>
      <SectionShell
        eyebrow="Work"
        title="Case studies built for quick scanning and deeper technical review."
        intro="These are the strongest projects in the portfolio, written to help recruiters understand scope, stack, and engineering ownership without too much noise."
        className="pt-14"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </SectionShell>
      <SectionShell
        eyebrow="More builds"
        title="Supporting proof across MERN and product-focused web apps."
        intro="Additional work that reinforces the same theme: responsive UI, practical backend logic, and clean product structure."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
