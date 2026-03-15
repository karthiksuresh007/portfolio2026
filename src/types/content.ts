export interface SiteLink {
  label: string;
  href: string;
  event?: "resume_click" | "github_click" | "linkedin_click" | "contact_click" | "project_open";
}

export interface SiteConfig {
  name: string;
  role: string;
  headline: string;
  founderPitch: string;
  engineeringPov: string;
  brandPromise: string;
  shortBio: string;
  longBio: string;
  availability: string;
  availabilityDetail: string;
  basedIn: string;
  yearsLabel: string;
  resumeHref: string;
  primaryLinks: SiteLink[];
  socialLinks: SiteLink[];
  contactLinks: SiteLink[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface CaseStudySection {
  title: string;
  body: string;
}

export interface CaseStudyProject {
  slug: string;
  title: string;
  eyebrow: string;
  outcome: string;
  summary: string;
  role: string;
  timeline: string;
  stack: string[];
  heroImage: string;
  heroAlt: string;
  accent: string;
  metrics: ProjectMetric[];
  chapters: CaseStudySection[];
  lessons: string[];
  projectLinks: SiteLink[];
  featured: boolean;
  templateNote?: string;
}

export interface ProofItem {
  title: string;
  body: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  detail: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  detail: string;
  timeline: string;
}

export interface CredentialItem {
  title: string;
  issuer: string;
  timeline: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
}
