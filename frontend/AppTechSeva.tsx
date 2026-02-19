import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import NotFound from "./pages/NotFound";

// Servesetu Pages
import ServeruetuLanding from "./pages/servesetu/Landing";
import ServeruetuMarketplace from "./pages/servesetu/Marketplace";
import TechnicianProfile from "./pages/servesetu/TechnicianProfile";
import BookingFlow from "./pages/servesetu/BookingFlow";
import CustomerDashboard from "./pages/servesetu/CustomerDashboard";
import TechnicianDashboard from "./pages/servesetu/TechnicianDashboard";

function Router() {
  return (
    <Switch>
      {/* Servesetu Routes */}
      <Route path="/servesetu" component={ServeruetuLanding} />
      <Route path="/servesetu/marketplace" component={ServeruetuMarketplace} />
      <Route path="/servesetu/technician/:id" component={TechnicianProfile} />
      <Route path="/servesetu/booking/:technicianId" component={BookingFlow} />
      <Route path="/servesetu/customer-dashboard" component={CustomerDashboard} />
      <Route path="/servesetu/technician-dashboard" component={TechnicianDashboard} />
      
      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppServesetu() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default AppServesetu;
