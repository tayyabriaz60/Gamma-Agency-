type FbqCommand = "init" | "track" | "trackCustom";
type StandardEvent =
  | "PageView"
  | "Lead"
  | "InitiateCheckout"
  | "Purchase"
  | "CompleteRegistration"
  | "Contact"
  | "Schedule"
  | "ViewContent";

declare global {
  interface Window {
    fbq: (
      command: FbqCommand,
      event: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}

/**
 * No-op: pixel is initialized via the inline script in index.html.
 * Kept as a hook so callers don't need to change if init logic moves.
 */
export function initPixel(): void {
  if (typeof window !== "undefined" && typeof window.fbq !== "function") {
    console.warn("[MetaPixel] fbq not found — check the pixel script in index.html");
  }
}

export function trackEvent(
  event: StandardEvent | string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

export function trackPageView(): void {
  trackEvent("PageView");
}

export function trackLead(params?: Record<string, unknown>): void {
  trackEvent("Lead", params);
}

export function trackInitiateCheckout(params?: Record<string, unknown>): void {
  trackEvent("InitiateCheckout", params);
}