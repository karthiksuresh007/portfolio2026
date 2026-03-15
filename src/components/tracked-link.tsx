"use client";

import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface TrackedLinkProps extends PropsWithChildren, LinkProps {
  className?: string;
  event?: AnalyticsEvent;
  eventProps?: Record<string, string>;
  external?: boolean;
}

export function TrackedLink({
  children,
  className,
  event,
  eventProps,
  external,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      className={cn(className)}
      onClick={() => {
        if (event) {
          trackEvent(event, eventProps);
        }
      }}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}

