export const AGENCY_NAME = "The Gamma Agency";

export const WHATSAPP = {
  display: "+92 308 8410262",
  tel: "+923088410262",
  url: "https://wa.me/923088410262",
  defaultMessage:
    "Hello! I'd like to discuss digital transformation services with The Gamma Agency.",
};

export const BUSINESS_EMAIL = "gammaagency97@gmail.com";

export const OFFICE_ADDRESS = "Burj Al Saeed Plaza, Ichra, Lahore";

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
