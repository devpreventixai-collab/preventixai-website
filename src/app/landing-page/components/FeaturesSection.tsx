
import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: number;
  role: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  color: string;
  icon: string;
}

const FeaturesSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFeature, setActiveFeature] = useState(1);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const features: Feature[] = [
  {
    id: 1,
    role: 'Care Workers',
    title: 'Complete Forms in 3 Minutes',
    description: 'AI-guided incident logging that ensures nothing is missed, even during the busiest shifts',
    benefits: [
    'Simple questions in plain English',
    'AI fills technical details automatically',
    'Photo and voice note capture',
    'Works offline, syncs when connected'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14c968347-1764642437513.png",
    imageAlt: 'Smiling care worker in blue scrubs using tablet to complete digital incident form while standing in bright care home corridor',
    color: 'from-blue-500 to-blue-600',
    icon: 'UserIcon'
  },
  {
    id: 2,
    role: 'Care Managers',
    title: 'Investigation Dashboard',
    description: 'Structured workflows that guide you through thorough investigations with automatic documentation',
    benefits: [
    'Automatic timeline creation',
    'Witness tracking and reminders',
    'Evidence organization',
    'One-click CQC-ready reports'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cec7b6ac-1765212939526.png",
    imageAlt: 'Professional care manager reviewing investigation dashboard on laptop showing organized timeline and evidence in modern office',
    color: 'from-purple-500 to-purple-600',
    icon: 'BriefcaseIcon'
  },
  {
    id: 3,
    role: 'Leadership',
    title: 'AI Analytics & Insights',
    description: 'Real-time trend analysis and pattern detection across all homes with actionable intelligence',
    benefits: [
    'Cross-home trend analysis',
    'Risk prediction alerts',
    'Compliance status tracking',
    'Executive summary reports'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19b704768-1764842443814.png",
    imageAlt: 'Executive viewing comprehensive analytics dashboard with colorful charts showing incident trends and risk patterns across multiple facilities',
    color: 'from-green-500 to-green-600',
    icon: 'ChartBarIcon'
  }];


  const currentFeature = features.find((f) => f.id === activeFeature) || features[0];

  if (!isHydrated) {
    return (
      <section className="py-20 bg-surface">
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
    <section id="features" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Purpose-Built Tools for Every Role
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From frontline care to executive oversight, PreventixAI gives everyone the tools they need to excel
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature) =>
          <button
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${
            activeFeature === feature.id ?
            `bg-gradient-to-r ${feature.color} text-white shadow-cta` :
            'bg-white text-text-secondary hover:bg-muted'}`
            }>

              <div className="flex items-center gap-2">
                <Icon
                name={feature.icon as any}
                size={20}
                variant={activeFeature === feature.id ? 'solid' : 'outline'} />

                <span>{feature.role}</span>
              </div>
            </button>
          )}
        </div>

        {/* Feature Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${currentFeature.color} text-white rounded-full`}>
              <Icon name={currentFeature.icon as any} size={20} variant="solid" />
              <span className="text-sm font-semibold">{currentFeature.role}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
              {currentFeature.title}
            </h3>

            <p className="text-xl text-text-secondary">
              {currentFeature.description}
            </p>

            <div className="space-y-4 pt-4">
              {currentFeature.benefits.map((benefit, index) =>
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-card animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}>

                  <div className={`w-8 h-8 bg-gradient-to-r ${currentFeature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name="CheckIcon" size={20} variant="solid" className="text-white" />
                  </div>
                  <p className="text-base text-text-primary font-medium">{benefit}</p>
                </div>
              )}
            </div>

            <div className="pt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-cta hover-scale">
                See {currentFeature.role} Demo
                <Icon name="PlayIcon" size={20} variant="solid" />
              </button>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-smooth">
              <AppImage
                src={currentFeature.image}
                alt={currentFeature.imageAlt}
                className="w-full h-auto" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary mb-1">Time Saved</p>
                      <p className="text-2xl font-bold text-text-primary">12 min/incident</p>
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${currentFeature.color} rounded-full flex items-center justify-center`}>
                      <Icon name="ClockIcon" size={32} variant="solid" className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card p-4 animate-float">
              <div className="flex items-center gap-2">
                <Icon name="UserGroupIcon" size={24} variant="solid" className="text-primary" />
                <div>
                  <p className="text-xs text-text-secondary">Active Users</p>
                  <p className="text-lg font-bold text-text-primary">500+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default FeaturesSection;
