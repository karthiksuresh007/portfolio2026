"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

export interface ExpandCardItem {
  name: string;
  note: string;
  image: string;
  category?: string;
}

interface ExpandCardsProps {
  items: ExpandCardItem[];
  className?: string;
}

export default function ExpandCards({ items, className }: ExpandCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const safeIndex = useMemo(() => {
    if (!items.length) {
      return -1;
    }

    return Math.min(expandedIndex, items.length - 1);
  }, [expandedIndex, items.length]);

  if (!items.length) {
    return null;
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="hidden gap-3 lg:flex">
        {items.map((item, index) => {
          const isExpanded = index === safeIndex;

          return (
            <article
              key={item.name}
              className={cn(
                "group relative h-[29rem] overflow-hidden rounded-[2rem] border border-black/6 bg-[#ece7df] shadow-[0_24px_70px_rgba(25,20,14,0.08)] transition-[width,transform,box-shadow] duration-500 ease-out",
                isExpanded ? "w-[25rem]" : "w-[5.75rem] hover:w-[8rem]"
              )}
              onMouseEnter={() => setExpandedIndex(index)}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes={isExpanded ? "400px" : "96px"}
                className={cn(
                  "object-cover object-center transition-transform duration-700 ease-out",
                  isExpanded ? "scale-[1.01]" : "scale-100"
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/18 to-black/8 transition-opacity duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/18" />

              <div
                className={cn(
                  "absolute inset-x-4 bottom-4 rounded-[1.6rem] border border-white/20 bg-[linear-gradient(180deg,rgba(250,246,241,0.94),rgba(234,225,215,0.84))] p-5 shadow-[0_18px_50px_rgba(20,16,12,0.18)] backdrop-blur-xl transition-all duration-500 ease-out",
                  isExpanded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                )}
              >
                <p className="text-[0.66rem] uppercase tracking-[0.34em] text-clay/70">
                  {item.category ?? "Influence"}
                </p>
                <h3 className="mt-3 font-serif text-[2rem] leading-none tracking-tight text-ink">
                  {item.name}
                </h3>
                <p className="mt-3 max-w-[26ch] text-sm leading-7 text-ink/74">{item.note}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="grid gap-4 lg:hidden sm:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.name}
            className="group relative h-[22rem] overflow-hidden rounded-[1.9rem] border border-black/6 bg-[#ece7df] shadow-[0_20px_60px_rgba(25,20,14,0.08)]"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/66 via-black/16 to-black/10" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/18" />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.45rem] border border-white/20 bg-[linear-gradient(180deg,rgba(250,246,241,0.94),rgba(234,225,215,0.84))] p-5 shadow-[0_18px_50px_rgba(20,16,12,0.18)] backdrop-blur-xl">
              <p className="text-[0.64rem] uppercase tracking-[0.34em] text-clay/70">
                {item.category ?? "Influence"}
              </p>
              <h3 className="mt-3 font-serif text-[1.7rem] leading-none tracking-tight text-ink">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/74">{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
