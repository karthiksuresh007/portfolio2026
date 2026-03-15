import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="px-5 pb-8 pt-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-panel backdrop-blur-xl md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-clay/80">Karthik Suresh</p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            Full-stack web developer building responsive products with clean UI and dependable systems.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink/70 sm:text-base">
            Portfolio focused on AI-enabled tools, modern web apps, backend workflows, and recruiter-ready project depth.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Explore</p>
            <div className="mt-4 space-y-3 text-sm text-ink/75">
              <TrackedLink href="/">Home</TrackedLink>
              <TrackedLink href="/work">Work</TrackedLink>
              <TrackedLink href="/about">About</TrackedLink>
              <TrackedLink href="/contact">Contact</TrackedLink>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-clay/80">Links</p>
            <div className="mt-4 space-y-3 text-sm text-ink/75">
              {siteConfig.socialLinks.map((link) => (
                <TrackedLink
                  key={link.label}
                  href={link.href}
                  event={link.event}
                  external={link.href.startsWith("http")}
                >
                  {link.label}
                </TrackedLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
