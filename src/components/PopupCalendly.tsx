import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import PaymentDialog from "./PaymentDialog";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

interface PopupCalendlyProps {
  variant?: "default" | "hero";
  size?: "default" | "lg";
  className?: string;
}

/** Wait until Calendly's overlay element is fully removed from the DOM, then run cb. */
function waitForCalendlyClose(cb: () => void) {
  const overlay = document.querySelector(".calendly-overlay");
  if (!overlay) {
    // Already gone — open immediately
    cb();
    return;
  }

  const observer = new MutationObserver(() => {
    if (!document.querySelector(".calendly-overlay")) {
      observer.disconnect();
      cb();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

const PopupCalendly: React.FC<PopupCalendlyProps> = ({
  variant = "default",
  size = "default",
  className,
}) => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const calendlyOpened = useRef(false);

  useEffect(() => {
    if (!document.querySelector("#calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    if (!document.querySelector("#calendly-style")) {
      const link = document.createElement("link");
      link.id = "calendly-style";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (!e.data?.event) return;

      if (e.data.event === "calendly.event_type_viewed") {
        calendlyOpened.current = true;
      }

      if (
        calendlyOpened.current &&
        (e.data.event === "calendly.popup_close" ||
          e.data.event === "calendly.event_scheduled")
      ) {
        calendlyOpened.current = false;
        // Wait for Calendly's DOM overlay to fully unmount, then open payment dialog
        waitForCalendlyClose(() => setPaymentOpen(true));
      }
    };

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  const openCalendly = () => {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={openCalendly}>
        Book a Session
      </Button>
      <PaymentDialog open={paymentOpen} onOpenChange={setPaymentOpen} />
    </>
  );
};

export default PopupCalendly;