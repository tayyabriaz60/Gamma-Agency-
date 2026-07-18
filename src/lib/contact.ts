export const AGENCY_NAME = "The Gamma Agency";

export const WHATSAPP = {
  display: "+92 308 8410262",
  tel: "+923088410262",
  url: "https://wa.me/923088410262",
  defaultMessage:
    "Hello! I'd like to discuss digital transformation services with The Gamma Agency.",
};

/** Placeholder — replace when business email is confirmed */
export const EMAIL_PLACEHOLDER = "TODO: Add business email";

/** Placeholder — replace when office address is confirmed */
export const OFFICE_ADDRESS_PLACEHOLDER = "TODO: Add office address";

export const CTA = {
  primary: "Book Your Free Consultation",
  secondaryWhatsApp: "Chat on WhatsApp",
};

export function scrollToContact(): void {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function openWhatsApp(message?: string): void {
  const text = encodeURIComponent(message ?? WHATSAPP.defaultMessage);
  window.open(`${WHATSAPP.url}?text=${text}`, "_blank", "noopener,noreferrer");
}
