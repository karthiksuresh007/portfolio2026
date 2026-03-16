"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <div aria-hidden className="h-[92px] sm:h-[98px]" />
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div
            className={cn(
              "relative rounded-[1.8rem] border border-white/70 bg-white/68 px-3 py-3 backdrop-blur-2xl transition-all duration-300 supports-[backdrop-filter]:bg-white/60",
              scrolled
                ? "translate-y-0 shadow-[0_26px_70px_rgba(20,19,18,0.12)]"
                : "shadow-[0_18px_44px_rgba(20,19,18,0.07)]"
            )}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.68),rgba(255,255,255,0.28))]" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/80" />

            <div className="relative flex items-center justify-between gap-3">
              <TrackedLink href="/" className="flex min-w-0 items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-ink text-sm font-semibold uppercase tracking-[0.24em] text-paper shadow-[0_10px_24px_rgba(20,19,18,0.18)]">
                  KS
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink">
                    {siteConfig.name}
                  </span>
                  <span className="block truncate text-[10px] uppercase tracking-[0.28em] text-clay/75 sm:text-[11px]">
                    {siteConfig.role}
                  </span>
                </span>
              </TrackedLink>

              <div className="hidden flex-1 justify-center md:flex">
                <nav className="inline-flex items-center gap-1 rounded-full border border-black/5 bg-white/55 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_10px_24px_rgba(20,19,18,0.04)]">
                  {navItems.map((item) => {
                    const active = isActiveLink(item.href);

                    return (
                      <TrackedLink
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "rounded-full px-4 py-2 text-sm font-medium text-ink/62 transition-all duration-200 hover:bg-white/70 hover:text-ink",
                          active &&
                            "border border-black/5 bg-white text-ink shadow-[0_6px_18px_rgba(20,19,18,0.08)]"
                        )}
                      >
                        {item.label}
                      </TrackedLink>
                    );
                  })}
                </nav>
              </div>

              <div className="hidden md:flex">
                <TrackedLink
                  href="/explore"
                  className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/72 px-4 py-2 text-sm font-medium text-ink shadow-[0_10px_22px_rgba(20,19,18,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_28px_rgba(20,19,18,0.09)]"
                >
                  Explore
                  <ArrowUpRight className="size-4 text-clay" />
                </TrackedLink>
              </div>

              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white/72 text-ink shadow-[0_10px_22px_rgba(20,19,18,0.06)] transition-colors duration-200 hover:bg-white md:hidden"
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>

            <div
              className={cn(
                "grid transition-all duration-300 md:hidden",
                mobileOpen ? "grid-rows-[1fr] pt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="rounded-[1.5rem] border border-black/5 bg-white/58 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item) => {
                      const active = isActiveLink(item.href);

                      return (
                        <TrackedLink
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "rounded-2xl px-4 py-3 text-sm font-medium text-ink/68 transition-all duration-200 hover:bg-white/70 hover:text-ink",
                            active &&
                              "border border-black/5 bg-white text-ink shadow-[0_10px_22px_rgba(20,19,18,0.06)]"
                          )}
                        >
                          {item.label}
                        </TrackedLink>
                      );
                    })}
                  </nav>

                  <TrackedLink
                    href="/explore"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-black/8 bg-ink px-4 py-3 text-sm font-medium text-paper transition-all duration-200 hover:bg-ink/92"
                  >
                    Explore
                    <ArrowUpRight className="size-4" />
                  </TrackedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
