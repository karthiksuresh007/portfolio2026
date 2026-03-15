"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { glowPalettes } from "@/lib/glow";
import { cn } from "@/lib/utils";

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  eyebrow?: string;
  tags?: string[];
}

const defaultItems: GalleryHoverCarouselItem[] = [
  {
    id: "item-1",
    title: "Build Modern UIs",
    summary: "Create polished product interfaces with thoughtful hierarchy and motion.",
    url: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    eyebrow: "Frontend",
    tags: ["React", "UX"]
  },
  {
    id: "item-2",
    title: "Product Systems",
    summary: "Design scalable backends and workflows that support user-facing experiences.",
    url: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    eyebrow: "Backend",
    tags: ["APIs", "Data"]
  }
];

export default function GalleryHoverCarousel({
  heading = "Featured Projects",
  description = "A curated set of projects that balance product thinking, frontend quality, and full-stack implementation.",
  items = defaultItems,
  sectionId
}: {
  heading?: string;
  description?: string;
  items?: GalleryHoverCarouselItem[];
  sectionId?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const normalizedItems = useMemo(() => items.filter(Boolean), [items]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = node.scrollWidth - node.clientWidth;
      setCanScrollPrev(node.scrollLeft > 8);
      setCanScrollNext(node.scrollLeft < maxScrollLeft - 8);
    };

    updateScrollState();
    node.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      node.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [normalizedItems.length]);

  const scrollByAmount = (direction: "prev" | "next") => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    const card = node.querySelector<HTMLElement>("[data-carousel-card]");
    const amount = card ? card.offsetWidth + 20 : node.clientWidth * 0.82;
    node.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth"
    });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      node.scrollBy({ left: event.deltaY, behavior: "auto" });
    }
  };

  return (
    <section id={sectionId} className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-clay/80">Selected work</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollByAmount("prev")}
              disabled={!canScrollPrev}
              className="h-11 w-11 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollByAmount("next")}
              disabled={!canScrollNext}
              className="h-11 w-11 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-2"
        >
          {normalizedItems.map((item) => (
            <div
              key={item.id}
              data-carousel-card
              className="w-[86%] shrink-0 snap-start md:w-[48%] xl:w-[38%]"
            >
              <Link href={item.url} className="group block h-full">
                <Card className="relative h-[420px] overflow-hidden rounded-[2.2rem] border border-black/5 bg-white/70">
                  <GlowingEffect
                    blur={0}
                    spread={44}
                    proximity={96}
                    inactiveZone={0.12}
                    borderWidth={2}
                    disabled={false}
                    colors={glowPalettes.warm}
                    className="rounded-[2.2rem]"
                  />
                  <Image
                    width={900}
                    height={1200}
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover brightness-[1.04] saturate-[0.94] transition duration-700 group-hover:scale-[1.04] group-hover:-translate-y-1 group-hover:brightness-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/24" />
                  <div className="absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-3 p-6">
                    <div className="rounded-full border border-white/35 bg-[rgba(255,249,242,0.42)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-ink/80 backdrop-blur-md transition duration-500 group-hover:bg-[rgba(255,252,248,0.58)]">
                      {item.eyebrow ?? "Project"}
                    </div>
                    {item.tags?.length ? (
                      <div className="flex flex-wrap justify-end gap-2">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/30 bg-[rgba(255,249,242,0.42)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/72 backdrop-blur-md transition duration-500 group-hover:bg-[rgba(255,252,248,0.56)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="overflow-hidden rounded-[1.7rem] border border-white/45 bg-[linear-gradient(180deg,rgba(255,252,248,0.82),rgba(237,226,213,0.72))] p-5 shadow-[0_18px_60px_rgba(20,19,18,0.14)] backdrop-blur-2xl transition duration-500 group-hover:-translate-y-1 group-hover:bg-[linear-gradient(180deg,rgba(255,252,248,0.94),rgba(246,238,230,0.88))] group-hover:shadow-[0_28px_80px_rgba(20,19,18,0.16)]">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-3xl tracking-tight text-ink">{item.title}</h3>
                          <p className="mt-3 max-w-md text-sm leading-7 text-ink/84 transition duration-500 group-hover:text-ink">
                            {item.summary}
                          </p>
                        </div>
                        <div
                          className={cn(
                            "flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/84 text-ink transition duration-500",
                            "group-hover:-translate-y-0.5 group-hover:rotate-[-18deg] group-hover:bg-ink group-hover:text-paper"
                          )}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
