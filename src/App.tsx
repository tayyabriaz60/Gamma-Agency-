import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { initPixel } from "@/lib/metaPixel";
import { usePageViewTracking } from "@/hooks/usePageViewTracking";
import { WHATSAPP } from "@/lib/contact";

const queryClient = new QueryClient();

const MetaPixelTracker = () => {
  useEffect(() => {
    initPixel();
  }, []);

  usePageViewTracking();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MetaPixelTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton
          phoneNumber={WHATSAPP.tel}
          message={WHATSAPP.defaultMessage}
        />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
