/**
 * 100KRAFT Studio Analytics Event Architecture
 * Lightweight, privacy-conscious event bus ready for Google Analytics 4, Plausible, or custom endpoint.
 */

export type AnalyticsEvent =
  | { name: "start_project_click"; location: string }
  | { name: "project_form_start" }
  | { name: "project_form_submit"; service?: string; stage?: string; hasFiles: boolean }
  | { name: "file_upload"; fileType: string; fileSizeMb: number }
  | { name: "email_click"; address: string; location: string }
  | { name: "store_click"; destination: string; location: string }
  | { name: "project_view"; slug: string; projectName: string }
  | { name: "service_view"; slug: string; title: string };

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    plausible?: (eventName: string, options?: { props: Record<string, unknown> }) => void;
  }
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  if (import.meta.env.DEV) {
    console.debug("[Analytics Event]", event.name, event);
  }

  if (typeof window.gtag === "function") {
    const { name, ...params } = event;
    window.gtag("event", name, params);
  }

  if (typeof window.plausible === "function") {
    const { name, ...params } = event;
    window.plausible(name, { props: params });
  }
}
