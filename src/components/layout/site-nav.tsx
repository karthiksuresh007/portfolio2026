"use client";

import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

import { TrackedLink } from "@/components/tracked-link";
import { LiquidLinkButton } from "@/components/ui/liquid-glass-button";
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

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/75 px-4 py-3 shadow-panel backdrop-blur-xl">
        <TrackedLink href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold uppercase tracking-[0.24em] text-paper">
            KS
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-medium text-ink">{siteConfig.name}</span>
            <span className="block text-xs uppercase tracking-[0.25em] text-clay/80">
              {siteConfig.role}
            </span>
          </span>
        </TrackedLink>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <TrackedLink
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm text-ink/70 transition hover:bg-ink/5 hover:text-ink",
                  active && "bg-ink text-paper hover:bg-ink hover:text-paper"
                )}
              >
                {item.label}
              </TrackedLink>
            );
          })}
        </nav>
        <LiquidLinkButton href="/contact" size="sm" className="px-4">
          Contact
          <ArrowRight className="size-4" />
        </LiquidLinkButton>
      </div>
    </div>
  );
}
