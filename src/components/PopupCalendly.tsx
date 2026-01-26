import { useEffect } from "react";
import { Button } from "@/components/ui/button";
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

interface PopupCalendlyProps {
  variant?: "default" | "hero";
  size?: "default" | "lg";
  className?: string;
}

const PopupCalendly: React.FC<PopupCalendlyProps> = ({
  variant = "default",
  size = "default",
  className,
}) => {
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
  }, []);

  const openCalendly = () => {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <Button variant={variant} size={size} className={className} onClick={openCalendly}>
      Book a Session
    </Button>
  );
};

export default PopupCalendly;
