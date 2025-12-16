
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from './components/HeroSection';
import WhoItsForSection from './components/WhoItsForSection';
import ProblemSection from './components/ProblemSection';
import SolutionJourneySection from './components/SolutionJourneySection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import GetStartedSection from './components/GetStartedSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import './landing-page.css';

const LandingPageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHydrated]);

  const handleWatchDemo = () => {
    if (!isHydrated) return;
    setShowDemoModal(true);
  };

  const handleCloseDemoModal = () => {
    if (!isHydrated) return;
    setShowDemoModal(false);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-text-secondary">Loading PreventixAI...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header  />
      <main>
        <HeroSection onWatchDemo={handleWatchDemo} />
        <WhoItsForSection />
        <ProblemSection />
        <SolutionJourneySection />
        <FeaturesSection />

        <PricingSection />
        <GetStartedSection />
      </main>
      <Footer />
      <DemoModal isOpen={showDemoModal} onClose={handleCloseDemoModal} />
    </div>
  );
};

export default LandingPageInteractive;
