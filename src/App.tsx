import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import Solutions from "./pages/Solutions";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
