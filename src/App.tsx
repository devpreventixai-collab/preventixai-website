import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingPageInteractive from "./app/landing-page/LandingPageInteractive";
import NotFound from "./pages/NotFound";
import Blog from "./components/sections/Blog";
import FAQ from "./components/sections/FAQ";
import { ContactProvider } from './context/ContactContext';
import Contact from "./components/sections/Contact";
import RiddorPost from "./components/blog/RiddorPost";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ContactProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPageInteractive />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/riddor-explained-what-you-need-to-know/" element={<RiddorPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ContactProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;