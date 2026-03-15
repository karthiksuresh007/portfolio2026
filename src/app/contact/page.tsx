import type { Metadata } from "next";
import { Download, Mail, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button, LiquidLinkButton } from "@/components/ui/liquid-glass-button";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Karthik Suresh for product engineering roles, startup opportunities, and collaborations."
};

export default function ContactPage() {
  return (
    <SectionShell
      eyebrow="Contact"
      title="Reach out if you are building something thoughtful and ambitious."
      intro="I am open to product engineering roles, startup opportunities, and collaborations where frontend quality and full-stack ownership both matter."
      className="pt-14"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <div className="rounded-[2.2rem] border border-black/5 bg-white/75 p-8 shadow-float backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Best ways to reach me</p>
            <h2 className="mt-4 font-serif text-5xl tracking-tight text-ink">
              {siteConfig.availability}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-ink/72">
              {siteConfig.availabilityDetail}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <LiquidLinkButton href="mailto:karthiksuresh897@gmail.com" size="lg" className="px-6">
                <Mail className="size-4" />
                Email me
              </LiquidLinkButton>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="tel:+919496935553">
                  <Phone className="size-4" />
                  Call me
                </a>
              </Button>
              <Button asChild variant="cool" size="lg" className="rounded-full">
                <a href={siteConfig.resumeHref}>
                  <Download className="size-4" />
                  Resume
                </a>
              </Button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {siteConfig.contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  className="rounded-[1.5rem] border border-black/5 bg-paper/70 p-5 text-sm font-medium text-ink transition hover:-translate-y-1 hover:bg-paper"
                >
                  <span className="block text-xs uppercase tracking-[0.3em] text-clay/80">Contact</span>
                  <span className="mt-4 block font-serif text-2xl tracking-tight">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-[2.2rem] border border-black/5 bg-ink p-8 text-paper shadow-panel">
            <p className="text-xs uppercase tracking-[0.3em] text-paper/55">What I enjoy building</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight">AI products, consumer workflows, marketplaces, and polished web platforms.</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-paper/82">
              <p>
                My strongest work usually happens in products where UX quality directly affects trust, conversion, or retention.
              </p>
              <p>
                That includes AI-native experiences, booking systems, commerce journeys, and modern web applications that need both product sensitivity and dependable engineering execution.
              </p>
              <p>
                If that sounds like your team, I would love to hear what you are building.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
