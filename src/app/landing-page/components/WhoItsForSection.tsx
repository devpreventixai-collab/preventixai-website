
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface RoleCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  painPoint: string;
  icon: string;
  color: string;
}

const WhoItsForSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const roles: RoleCard[] = [
    {
      id: 1,
      title: 'Care Workers',
      subtitle: 'Guided Forms',
      description: 'Complete incident reports in 3 minutes with AI-guided prompts that ensure nothing is missed',
      painPoint: 'No more incomplete forms or missing critical details during busy shifts',
      icon: 'UserGroupIcon',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Care Managers',
      subtitle: 'Investigation Workflows',
      description: 'Structured investigation process with automatic timeline creation and evidence tracking',
      painPoint: 'Stop scrambling for information when CQC inspectors arrive unannounced',
      icon: 'ClipboardDocumentCheckIcon',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Residents & Families',
      subtitle: 'Safer Outcomes',
      description: 'AI pattern detection identifies risks before they become incidents, keeping loved ones safe',
      painPoint: 'Peace of mind knowing every incident is properly documented and analyzed',
      icon: 'HeartIcon',
      color: 'from-green-500 to-green-600',
    },
  ];

  const handleCardClick = (id: number) => {
    if (!isHydrated) return;
    setFlippedCard(flippedCard === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-64 mx-auto mb-4" />
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-96 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Built for Everyone in Your Care Home
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From frontline care workers to senior leadership, PreventixAI supports every role with purpose-built tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={role.id}
              className="relative h-96 cursor-pointer perspective-1000 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleCardClick(role.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedCard === role.id ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-full bg-white rounded-2xl shadow-card hover:shadow-xl transition-smooth p-8 flex flex-col items-center justify-center text-center border-2 border-gray-100">
                    <div className={`w-20 h-20 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-smooth`}>
                      <Icon name={role.icon as any} size={40} variant="solid" className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{role.title}</h3>
                    <p className="text-lg text-primary font-semibold mb-4">{role.subtitle}</p>
                    <p className="text-text-secondary mb-6">{role.description}</p>
                    <div className="mt-auto flex items-center gap-2 text-primary font-semibold">
                      <span>Click to see pain point</span>
                      <Icon name="ArrowRightIcon" size={20} variant="outline" />
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className={`h-full bg-gradient-to-br ${role.color} rounded-2xl shadow-card p-8 flex flex-col items-center justify-center text-center text-white`}>
                    <Icon name="ExclamationTriangleIcon" size={48} variant="solid" className="mb-6" />
                    <h4 className="text-xl font-bold mb-4">Common Pain Point</h4>
                    <p className="text-lg leading-relaxed">{role.painPoint}</p>
                    <div className="mt-8 flex items-center gap-2 font-semibold">
                      <span>Click to flip back</span>
                      <Icon name="ArrowPathIcon" size={20} variant="outline" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
