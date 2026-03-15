export type AnalyticsEvent =
  | "resume_click"
  | "github_click"
  | "linkedin_click"
  | "contact_click"
  | "project_open";

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(eventName: AnalyticsEvent, props?: Record<string, string>) {
  if (typeof window === "undefined") {
    return;
  }

  window.plausible?.(eventName, { props });
}

