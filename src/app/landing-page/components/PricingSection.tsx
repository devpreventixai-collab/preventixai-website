import { useState, useEffect } from 'react';
import { CheckIcon, CreditCardIcon, ClockIcon, SparklesIcon } from 'lucide-react';

const PricingSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const features = [
    'Unlimited incident reports',
    'AI-guided form completion',
    'Automatic investigation workflows',
    'Pattern detection & trend analysis',
    'CQC-ready compliance reports',
    'Multi-home dashboard',
    'Mobile app access',
    'Secure cloud storage',
    'Priority email support',
    'Regular feature updates',
  ];

  const comparisons = [
    { item: 'Paper forms & filing', cost: '£150/month' },
    { item: 'Staff time on manual entry', cost: '£300/month' },
    { item: 'Investigation delays', cost: '£200/month' },
    { item: 'Compliance software', cost: '£250/month' },
  ];

  if (!isHydrated) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-96 mx-auto mb-4" />
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-full max-w-2xl mx-auto" />
          </div>
          <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <SparklesIcon size={20} className="text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600">Limited Time Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your 3-Month Free Trial
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the full power of PreventixAI with no commitment. Cancel anytime during your trial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12 border-2 border-blue-200">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-6 py-2 text-sm font-bold transform rotate-12 translate-x-8 -translate-y-4">
                90 Days Free!
              </div>
              <h3 className="text-3xl font-bold mb-2">PreventixAI Platform</h3>
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl font-bold">£0</span>
                  <span className="text-2xl">/month</span>
                </div>
                <p className="text-lg opacity-90">For the first 3 months</p>
              </div>
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="flex items-center justify-center gap-2 text-sm opacity-90 mb-1">
                  <ClockIcon size={16} />
                  <span>Then just £49/month after trial</span>
                </div>
                <p className="text-xs opacity-75">Cancel anytime before trial ends - no charges</p>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-start gap-3">
                  <CreditCardIcon size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">No Credit Card Required</p>
                    <p className="text-sm text-gray-600">Start your trial instantly without any payment information. Only required if you choose to continue after 90 days.</p>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-6">Everything Included in Your Trial:</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon size={16} className="text-emerald-600" />
                    </div>
                    <span className="text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  What Happens After Your Trial?
                </h4>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Day 90 Reminder</p>
                    <p className="text-xs text-gray-600">We'll email you before your trial ends</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Your Decision</p>
                    <p className="text-xs text-gray-600">Continue for £49/month or cancel free</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-blue-600">3</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Keep Your Data</p>
                    <p className="text-xs text-gray-600">Export everything if you don't continue</p>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                    Start Your Free 3-Month Trial
                  </button>
                  <p className="text-sm text-gray-600 mt-4">
                    No credit card • No commitment • Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Save During Your Trial Period
            </h3>
            <div className="space-y-4">
              {comparisons.map((comparison, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <CheckIcon size={24} className="text-gray-400" />
                    <span className="text-base text-gray-700">{comparison.item}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-red-500 line-through">{comparison.cost}</span>
                    <span className="text-lg font-bold text-emerald-600">£0</span>
                  </div>
                </div>
              ))}
              <div className="border-t-2 border-gray-200 pt-4 mt-4">
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">3-Month Trial Savings</span>
                    <span className="text-3xl font-bold text-emerald-600">£2,700</span>
                  </div>
                  <p className="text-sm text-gray-600">That's £900/month × 3 months you save during your trial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;