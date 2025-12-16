
import { useState, useEffect } from 'react';
import CTAButton from '@/components/common/CTAButton';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  onWatchDemo: () => void;
}

const HeroSection = ({ onWatchDemo }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [incidentCount, setIncidentCount] = useState(12847);
  const fullText = 'AI-powered incident & safety platform built for care homes';

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;

    const counterInterval = setInterval(() => {
      setIncidentCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(counterInterval);
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="h-20 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-3/4" />
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="h-14 bg-gray-200 rounded-lg animate-pulse w-48" />
                <div className="h-14 bg-gray-200 rounded-lg animate-pulse w-48" />
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>);

  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) =>
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }} />

        )}
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                {typedText}
                <span className="inline-block w-1 h-12 bg-primary ml-1 animate-blink" />
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary">
                Transform reactive logging into proactive safety intelligence
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                text="Get Started Free"
                href="#get-started"
                variant="primary"
                size="lg"
                trackingId="hero-primary-cta" />

              <button
                onClick={onWatchDemo}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">

                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-card">
                <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-text-primary">CQC Compliance Ready</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-card">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-text-primary">No Setup Costs</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-card">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs text-text-secondary">Incidents Analyzed</span>
                  <span className="text-sm font-bold text-primary">{incidentCount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-smooth">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_11dd292e2-1764667687408.png"
                alt="Modern care home facility with professional staff member reviewing digital tablet showing incident management dashboard in bright reception area"
                className="w-full h-auto" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-semibold mb-2">Trusted by care teams across the UK</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) =>
                    <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white" />
                    )}
                  </div>
                  <span className="text-sm">500+ care workers using daily</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">67%</p>
                  <p className="text-sm text-text-secondary">Faster Reporting</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">90%</p>
                  <p className="text-sm text-text-secondary">Complete Forms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default HeroSection;
