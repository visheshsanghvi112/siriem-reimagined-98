import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Approach from "./pages/Approach";
import Products from "./pages/Products";
import ACChargers from "./pages/products/ACChargers";
import DCChargers from "./pages/products/DCChargers";
import OnboardChargers from "./pages/products/OnboardChargers";
import ChargingManagementSystem from "./pages/products/ChargingManagementSystem";
import Services from "./pages/Services";
import ChargerServices from "./pages/services/ChargerServices";
import ChargingManagementServices from "./pages/services/ChargingManagementServices";
import Consulting from "./pages/services/Consulting";
import VerticalsPage from "./pages/VerticalsPage";
import Fleets from "./pages/verticals/Fleets";
import Workplace from "./pages/verticals/Workplace";
import Residential from "./pages/verticals/Residential";
import CPOs from "./pages/verticals/CPOs";
import RetailHospitality from "./pages/verticals/RetailHospitality";
import OEMs from "./pages/verticals/OEMs";
import EnergyStorage from "./pages/verticals/EnergyStorage";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import AppWrapper from "./components/AppWrapper";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/ac-chargers" element={<ACChargers />} />
            <Route path="/products/dc-chargers" element={<DCChargers />} />
            <Route path="/products/onboard-chargers" element={<OnboardChargers />} />
            <Route path="/products/charging-management-system" element={<ChargingManagementSystem />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/charger-services" element={<ChargerServices />} />
            <Route path="/services/charging-management-services" element={<ChargingManagementServices />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/verticals" element={<VerticalsPage />} />
            <Route path="/verticals/fleets" element={<Fleets />} />
            <Route path="/verticals/workplace" element={<Workplace />} />
            <Route path="/verticals/residential" element={<Residential />} />
            <Route path="/verticals/cpos" element={<CPOs />} />
            <Route path="/verticals/retail-hospitality" element={<RetailHospitality />} />
            <Route path="/verticals/oems" element={<OEMs />} />
            <Route path="/verticals/energy-storage" element={<EnergyStorage />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            
            {/* Redirect old paths to correct paths */}
            <Route path="/fleets" element={<Navigate to="/verticals/fleets" replace />} />
            <Route path="/workplace" element={<Navigate to="/verticals/workplace" replace />} />
            <Route path="/residential" element={<Navigate to="/verticals/residential" replace />} />
            <Route path="/cpos" element={<Navigate to="/verticals/cpos" replace />} />
            <Route path="/retail-hospitality" element={<Navigate to="/verticals/retail-hospitality" replace />} />
            <Route path="/oems" element={<Navigate to="/verticals/oems" replace />} />
            <Route path="/energy-storage" element={<Navigate to="/verticals/energy-storage" replace />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
