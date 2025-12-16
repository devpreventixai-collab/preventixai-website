
import { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  details: string;
  metric: string;
  image: string;
  imageAlt: string;
  icon: string;
}

const SolutionJourneySection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [imageScale, setImageScale] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const scaleInterval = setInterval(() => {
      setImageScale((prev) => prev === 1 ? 1.1 : 1);
    }, 5000);

    return () => clearInterval(scaleInterval);
  }, [isHydrated, activeStep]);

  useEffect(() => {
    if (!isHydrated) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.8;

      let newStep = 1;

      if (sectionTop < triggerPoint - 600) {
        newStep = 4;
      } else if (sectionTop < triggerPoint - 400) {
        newStep = 3;
      } else if (sectionTop < triggerPoint - 200) {
        newStep = 2;
      }

      setActiveStep(newStep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHydrated]);

  const steps: JourneyStep[] = [
  {
    id: 1,
    title: 'Guided Incident Logging',
    description: 'AI-powered prompts ensure complete, accurate incident reports every time',
    details: 'Care workers answer simple questions while AI fills in the technical details. No training required - just follow the prompts and complete forms in 3 minutes instead of 15.',
    metric: '67% faster reporting',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4eeb096-1764668845076.png",
    imageAlt: 'Care worker using tablet with guided digital form interface showing step-by-step incident reporting prompts in modern care home',
    icon: 'DocumentTextIcon'
  },
  {
    id: 2,
    title: 'AI Analysis & Pattern Detection',
    description: 'Automatic analysis identifies trends and risks across all incidents',
    details: 'PreventixAI analyzes every incident in real-time, detecting patterns that humans might miss. Get alerts about emerging risks before they become serious problems.',
    metric: '85% of risks identified early',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5ca60ec-1764637481617.png",
    imageAlt: 'Digital dashboard displaying colorful data visualization charts and graphs showing incident trend analysis and risk patterns',
    icon: 'ChartBarIcon'
  },
  {
    id: 3,
    title: 'Investigation Management',
    description: 'Structured workflows guide managers through thorough investigations',
    details: 'Automatic timeline creation, witness tracking, and evidence organization. Everything CQC inspectors need, organized and ready to present professionally.',
    metric: '90% investigation-ready',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d18eb0b0-1765802562430.png",
    imageAlt: 'Care manager reviewing comprehensive investigation timeline on computer screen with organized evidence and witness statements',
    icon: 'ClipboardDocumentCheckIcon'
  },
  {
    id: 4,
    title: 'Compliance Reporting',
    description: 'Professional reports generated instantly for CQC and stakeholders',
    details: 'One-click reports with all required details, trends, and action plans. Export to PDF or share securely with inspectors, families, or senior leadership.',
    metric: 'CQC-ready in seconds',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14e4cf9d4-1764663164908.png",
    imageAlt: 'Professional printed compliance report with charts and data on desk next to laptop showing digital report interface',
    icon: 'DocumentCheckIcon'
  }];


  const handleStepClick = (stepId: number) => {
    if (!isHydrated) return;
    setActiveStep(stepId);
    setImageScale(1);
  };

  const currentStep = steps.find((step) => step.id === activeStep) || steps[0];

  if (!isHydrated) {
    return (
    <section id="solution-journey" className="py-20 bg-white" ref={sectionRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-96 mx-auto mb-4" />
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-full max-w-2xl mx-auto" />
          </div>
          <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
        </div>
      </section>);

  }

  return (
    <section id="solution-journey" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Your Four-Step Journey to Better Safety
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From incident to insight in minutes, not days. See how PreventixAI transforms your safety management.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden lg:block" />
          <div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary to-blue-600 -translate-y-1/2 transition-all duration-700 hidden lg:block"
            style={{ width: `${(activeStep - 1) / (steps.length - 1) * 100}%` }} />


          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative">
            {steps.map((step, index) =>
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`relative flex flex-col items-center text-center transition-smooth group ${
              activeStep === step.id ? 'scale-110' : 'hover:scale-105'}`
              }>

                <div
                className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-4 transition-smooth ${
                activeStep === step.id ?
                'bg-gradient-to-r from-primary to-blue-600 shadow-cta' :
                'bg-surface group-hover:bg-muted'}`
                }>

                  <Icon
                  name={step.icon as any}
                  size={32}
                  variant={activeStep === step.id ? 'solid' : 'outline'}
                  className={activeStep === step.id ? 'text-white' : 'text-text-secondary'} />

                </div>
                <div
                className={`text-sm lg:text-base font-semibold mb-1 transition-smooth ${
                activeStep === step.id ? 'text-primary' : 'text-text-secondary'}`
                }>

                  Step {step.id}
                </div>
                <div
                className={`text-xs lg:text-sm font-medium transition-smooth ${
                activeStep === step.id ? 'text-text-primary' : 'text-text-secondary'}`
                }>

                  {step.title}
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Step Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="SparklesIcon" size={20} variant="solid" className="text-primary" />
              <span className="text-sm font-semibold text-primary">{currentStep.metric}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
              {currentStep.title}
            </h3>

            <p className="text-xl text-text-secondary">
              {currentStep.description}
            </p>

            <p className="text-base text-text-secondary leading-relaxed">
              {currentStep.details}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                <span className="text-sm font-semibold text-text-primary">No Training Required</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg">
                <Icon name="ClockIcon" size={20} variant="solid" className="text-success" />
                <span className="text-sm font-semibold text-text-primary">Works Instantly</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg">
                <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-success" />
                <span className="text-sm font-semibold text-text-primary">CQC Compliant</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {activeStep > 1 &&
              <button
                onClick={() => handleStepClick(activeStep - 1)}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary bg-surface rounded-lg hover:bg-muted transition-smooth">

                  <Icon name="ArrowLeftIcon" size={20} variant="outline" />
                  Previous Step
                </button>
              }
              {activeStep < steps.length &&
              <button
                onClick={() => handleStepClick(activeStep + 1)}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-cta hover-scale">

                  Next Step
                  <Icon name="ArrowRightIcon" size={20} variant="outline" />
                </button>
              }
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="transition-transform duration-5000 ease-in-out"
                style={{ transform: `scale(${imageScale})` }}>

                <AppImage
                  src={currentStep.image}
                  alt={currentStep.imageAlt}
                  className="w-full h-auto" />

              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={currentStep.icon as any} size={24} variant="solid" className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Step {currentStep.id} of {steps.length}</p>
                      <p className="text-lg font-bold text-text-primary">{currentStep.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>);

};

export default SolutionJourneySection;
