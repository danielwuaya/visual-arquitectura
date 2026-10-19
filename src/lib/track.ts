/**
 * Medición de conversiones. Envía el evento a Google Tag Manager / GA4
 * (dataLayer / gtag) y a Meta Pixel (fbq) si están instalados.
 * Si no hay ninguno configurado, no hace nada.
 */
type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: "generate_lead" | "whatsapp_click" | "phone_click" | "email_click", params: Params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
    window.gtag?.("event", event, params);
    if (window.fbq) {
      if (event === "generate_lead") window.fbq("track", "Lead", params);
      else window.fbq("track", "Contact", { method: event, ...params });
    }
  } catch {
    // La medición nunca debe romper la página.
  }
}
