
import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  facility: string;
  quote: string;
  image: string;
  imageAlt: string;
  rating: number;
  metric: string;
}

const TestimonialsSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Deputy Manager',
    facility: 'Oakwood Care Home, Manchester',
    quote: 'PreventixAI transformed our CQC inspection from stressful to straightforward. When inspectors asked for incident documentation, I had everything organized and ready in seconds. The investigation-ready reports impressed them so much they specifically mentioned our incident management in their positive feedback.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10df5a971-1765003957966.png",
    imageAlt: 'Professional woman with brown hair in business attire smiling confidently at camera in care home office',
    rating: 5,
    metric: 'CQC Outstanding Rating'
  },
  {
    id: 2,
    name: 'James Thompson',
    role: 'Registered Manager',
    facility: 'Riverside Care Group, Birmingham',
    quote: 'Managing incidents across three homes used to mean endless phone calls and scattered paperwork. Now I can see everything in one dashboard, spot patterns instantly, and generate reports for our board in minutes. The AI trend detection caught a medication timing issue we would have missed for weeks.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8deec87-1764685463577.png",
    imageAlt: 'Middle-aged man with glasses in professional attire reviewing documents in modern care facility office',
    rating: 5,
    metric: '3 Homes Managed Seamlessly'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Senior Care Worker',
    facility: 'Meadowview Residential, Leeds',
    quote: 'I was skeptical about another digital system, but PreventixAI is genuinely helpful. The guided questions make sure I capture everything important, and I can add photos right from my phone. Best part? It takes less time than our old paper forms, and I never worry about missing details anymore.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9f7a797-1765107320838.png",
    imageAlt: 'Young South Asian woman in care worker uniform smiling warmly while holding tablet in care home corridor',
    rating: 5,
    metric: '3 Minutes Per Report'
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Operations Director',
    facility: 'Harmony Care Homes, London',
    quote: 'The ROI was immediate. We went from spending hours compiling incident data for board meetings to having professional analytics ready instantly. The pattern detection has helped us prevent several potential issues, and our insurance provider was impressed enough to reduce our premiums.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1531fe9-1765040853978.png",
    imageAlt: 'Asian businessman in suit reviewing analytics dashboard on laptop in executive office',
    rating: 5,
    metric: '15% Insurance Reduction'
  }];


  if (!isHydrated) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-96 mx-auto mb-4" />
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-full max-w-2xl mx-auto" />
          </div>
          <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
        </div>
      </section>);

  }

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="success-stories" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="StarIcon" size={20} variant="solid" className="text-primary" />
            <span className="text-sm font-semibold text-primary">Co-designed with care home managers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Trusted by Care Teams Across the UK
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real stories from care professionals who transformed their incident management with PreventixAI
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-surface to-white rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in-up">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-card">
                    <AppImage
                      src={currentTestimonial.image}
                      alt={currentTestimonial.imageAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-cta">
                    <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-1">{currentTestimonial.name}</h4>
                <p className="text-sm text-text-secondary mb-2">{currentTestimonial.role}</p>
                <p className="text-xs text-text-secondary mb-4">{currentTestimonial.facility}</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) =>
                  <Icon key={i} name="StarIcon" size={20} variant="solid" className="text-warning" />
                  )}
                </div>
                <div className="px-4 py-2 bg-success/10 rounded-lg">
                  <p className="text-sm font-semibold text-success">{currentTestimonial.metric}</p>
                </div>
              </div>

              <div className="md:col-span-2">
                <Icon name="ChatBubbleLeftRightIcon" size={48} variant="solid" className="text-primary/20 mb-4" />
                <blockquote className="text-lg md:text-xl text-text-primary leading-relaxed mb-6">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" />
                  <span className="text-sm font-semibold">Verified Care Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((testimonial, index) =>
          <button
            key={testimonial.id}
            onClick={() => setActiveTestimonial(index)}
            className={`transition-smooth ${
            activeTestimonial === index ?
            'w-12 h-3 bg-primary rounded-full' : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'}`
            }
            aria-label={`View testimonial from ${testimonial.name}`} />

          )}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-card p-6 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="UserGroupIcon" size={28} variant="solid" className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-text-primary mb-2">500+</p>
            <p className="text-sm text-text-secondary">Care Workers Using Daily</p>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="BuildingOfficeIcon" size={28} variant="solid" className="text-success" />
            </div>
            <p className="text-3xl font-bold text-text-primary mb-2">50+</p>
            <p className="text-sm text-text-secondary">Care Homes Onboarded</p>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="ClockIcon" size={28} variant="solid" className="text-warning" />
            </div>
            <p className="text-3xl font-bold text-text-primary mb-2">67%</p>
            <p className="text-sm text-text-secondary">Faster Incident Reporting</p>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheckIcon" size={28} variant="solid" className="text-accent" />
            </div>
            <p className="text-3xl font-bold text-text-primary mb-2">100%</p>
            <p className="text-sm text-text-secondary">CQC Compliance Ready</p>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;
