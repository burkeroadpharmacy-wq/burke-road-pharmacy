import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileActionBar from "./components/MobileActionBar";
import Home from "./pages/Home";
import Compounding from "./pages/Compounding";
import Conditions from "./pages/Conditions";
import ConditionDetail from "./pages/ConditionDetail";
import Practitioners from "./pages/Practitioners";
import Prescribers from "./pages/Prescribers";
import KnowledgeCentre from "./pages/KnowledgeCentre";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import UploadPrescription from "./pages/UploadPrescription";
import TravelHealth from "./pages/TravelHealth";
import ChemistCareNow from "./pages/ChemistCareNow";
import Vaccinations from "./pages/Vaccinations";
import Delivery from "./pages/Delivery";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/compounding" component={Compounding} />
        <Route path="/conditions" component={Conditions} />
        <Route path="/conditions/:slug" component={ConditionDetail} />
        <Route path="/practitioners" component={Practitioners} />
        <Route path="/prescribers" component={Prescribers} />
        <Route path="/knowledge-centre" component={KnowledgeCentre} />
        <Route path="/knowledge-centre/:slug" component={ArticleDetail} />
        <Route path="/services" component={Services} />
        <Route path="/services/travel-health" component={TravelHealth} />
        <Route path="/services/chemist-care-now" component={ChemistCareNow} />
        <Route path="/services/vaccinations" component={Vaccinations} />
        <Route path="/services/delivery" component={Delivery} />
        <Route path="/upload-prescription" component={UploadPrescription} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          {/* Global floating UI */}
          <WhatsAppButton />
          <MobileActionBar />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
