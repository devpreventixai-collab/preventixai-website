
import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const ProblemSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeView, setActiveView] = useState<'before' | 'after'>('before');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveView((prev) => prev === 'before' ? 'after' : 'before');
    }, 4000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const problems = [
  {
    icon: 'DocumentTextIcon',
    title: 'Incomplete Forms',
    description: 'Critical details missing because staff are rushed or forms are confusing'
  },
  {
    icon: 'FolderOpenIcon',
    title: 'Scattered Information',
    description: 'Incident reports buried in filing cabinets across multiple homes'
  },
  {
    icon: 'ClockIcon',
    title: 'Investigation Delays',
    description: 'Hours wasted tracking down witnesses and piecing together timelines'
  },
  {
    icon: 'ExclamationTriangleIcon',
    title: 'Compliance Stress',
    description: 'Panic when CQC inspectors request incident documentation'
  }];


  if (!isHydrated) {
    return (
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-96 mx-auto mb-4" />
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-full max-w-2xl mx-auto" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
            <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>);

  }

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.1) 35px, rgba(0,0,0,.1) 70px)'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            The Reality in Care Homes Today
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Incident reporting shouldn't be this hard. Yet every day, care teams struggle with the same preventable problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Before State */}
          <div className={`transition-all duration-700 ${activeView === 'before' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
                  <Icon name="XCircleIcon" size={28} variant="solid" className="text-error" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Current Reality</h3>
              </div>
              <div className="relative rounded-xl overflow-hidden mb-6">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_165b4245d-1764848508876.png"
                  alt="Stressed care worker surrounded by scattered paper incident forms and folders on cluttered desk in dimly lit office"
                  className="w-full h-64 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Chaos & Confusion</p>
                </div>
              </div>
              <div className="space-y-3">
                {problems.map((problem, index) =>
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-error/5 rounded-lg animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}>

                    <Icon name={problem.icon as any} size={24} variant="outline" className="text-error flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-text-primary">{problem.title}</p>
                      <p className="text-sm text-text-secondary">{problem.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* After State */}
          <div className={`transition-all duration-700 ${activeView === 'after' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircleIcon" size={28} variant="solid" className="text-success" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">With PreventixAI</h3>
              </div>
              <div className="relative rounded-xl overflow-hidden mb-6">
                <AppImage
                  src="https://firebasestorage.googleapis.com/v0/b/unlimitedastro-62d27.firebasestorage.app/o/images%2FPreventixai%20LOGO%201%20(1).png?alt=media&token=9b8f2a49-4a28-47ba-83d8-c043824b3cff"
                  alt="Confident care manager smiling while reviewing organized digital incident reports on tablet in modern bright care home office"
                  className="w-full h-64 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Organized & Confident</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg animate-slide-in-right">
                  <Icon name="SparklesIcon" size={24} variant="solid" className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">AI-Guided Forms</p>
                    <p className="text-sm text-text-secondary">Every field completed with intelligent prompts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                  <Icon name="MagnifyingGlassIcon" size={24} variant="solid" className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">Instant Search</p>
                    <p className="text-sm text-text-secondary">Find any incident in seconds across all homes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  <Icon name="BoltIcon" size={24} variant="solid" className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">Automatic Timelines</p>
                    <p className="text-sm text-text-secondary">Investigation documentation built as you work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                  <Icon name="ShieldCheckIcon" size={24} variant="solid" className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text-primary">CQC-Ready Reports</p>
                    <p className="text-sm text-text-secondary">Professional documentation at your fingertips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Indicator */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveView('before')}
            className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${
            activeView === 'before' ?
            'bg-error text-black shadow-card' : 'bg-white text-text-secondary hover:bg-gray-50'}`
            }>

            Current Reality
          </button>
          <button
            onClick={() => setActiveView('after')}
            className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${
            activeView === 'after' ? 'bg-success text-black shadow-card' : 'bg-white text-text-secondary hover:bg-gray-50'}`
            }>

            With PreventixAI
          </button>
        </div>
      </div>
    </section>);
};

export default ProblemSection;
