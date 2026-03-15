import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyLayout } from "@/components/work/case-study-layout";
import { allProjects } from "@/content/site";

interface WorkDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: WorkDetailPageProps): Metadata {
  const project = allProjects.find((item) => item.slug === params.slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.outcome
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = allProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = allProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return <CaseStudyLayout project={project} nextProject={nextProject} />;
}
