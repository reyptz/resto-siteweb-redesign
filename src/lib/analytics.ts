/**
 * Privacy-first analytics utility for SMTD-SA
 * Respects user cookie consent and Do Not Track (DNT) browser settings.
 */

export function isAnalyticsAllowed(): boolean {
  if (typeof window === "undefined") return false;

  // Respect browser Do Not Track
  if (navigator.doNotTrack === "1" || (window as unknown as { doNotTrack?: string }).doNotTrack === "1") {
    return false;
  }

  try {
    const raw = localStorage.getItem("smtd_cookie_consent");
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return Boolean(parsed.analytics);
  } catch {
    return false;
  }
}

export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (!isAnalyticsAllowed()) {
    return;
  }

  const payload = {
    event: eventName,
    properties: properties || {},
    url: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  // In production, integrate with internal privacy-compliant analytics or beacon
  if (process.env.NODE_ENV === "development") {
    console.log("[SMTD Analytics Track]", payload);
  }
}

export function trackPageView(url: string) {
  trackEvent("page_view", { url });
}
