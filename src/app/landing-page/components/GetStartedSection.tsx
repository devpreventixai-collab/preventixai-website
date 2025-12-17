
import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  email: string;
  fullName: string;
  facilityName: string;
  role: string;
  homeCount: string;
}

const GetStartedSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    fullName: '',
    facilityName: '',
    role: '',
    homeCount: '1',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const roles = [
    'Care Worker',
    'Senior Care Worker',
    'Deputy Manager',
    'Registered Manager',
    'Operations Director',
    'Owner',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleNextStep = () => {
    if (!isHydrated) return;
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (!isHydrated) return;
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

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
      </section>
    );
  }

  if (showSuccess) {
    return (
      <section id="get-started" className="py-20 bg-gradient-to-br from-success/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={64} variant="solid" className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Welcome to PreventixAI!
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              We're setting up your account and analyzing your current incident management process. You'll receive an email with your login details in the next few minutes.
            </p>
            <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Check your email</p>
                    <p className="text-sm text-text-secondary">Login credentials sent to {formData.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Quick setup wizard</p>
                    <p className="text-sm text-text-secondary">Customize PreventixAI for {formData.facilityName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Start logging incidents</p>
                    <p className="text-sm text-text-secondary">Your team can begin using the platform immediately</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-text-secondary">
              Need help? Contact our support team at support@preventixai.com
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to Transform Your Incident Management?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Start using PreventixAI in 30 seconds. No credit card required.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-smooth ${
                    currentStep >= step
                      ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-cta'
                      : 'bg-gray-200 text-text-secondary'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 md:w-24 h-1 mx-2 transition-smooth ${
                      currentStep > step ? 'bg-gradient-to-r from-primary to-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-scale-in">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Email */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      Let's get started
                    </h3>
                    <p className="text-text-secondary">
                      Enter your work email to create your free account
                    </p>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-smooth"
                      placeholder="your.name@carehome.co.uk"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={!formData.email}
                    className="w-full px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-cta hover-scale disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
                  >
                    Continue
                  </button>
                  <p className="text-xs text-text-secondary text-center">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      Tell us about yourself
                    </h3>
                    <p className="text-text-secondary">
                      Help us personalize your PreventixAI experience
                    </p>
                  </div>
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-smooth"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-text-primary mb-2">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-smooth"
                    >
                      <option value="">Select your role</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 px-6 py-4 text-lg font-semibold text-primary bg-surface rounded-lg hover:bg-muted transition-smooth"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={!formData.fullName || !formData.role}
                      className="flex-1 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-cta hover-scale disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Facility Details */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      About your care home
                    </h3>
                    <p className="text-text-secondary">
                      Final step - tell us about your facility
                    </p>
                  </div>
                  <div>
                    <label htmlFor="facilityName" className="block text-sm font-semibold text-text-primary mb-2">
                      Care Home Name *
                    </label>
                    <input
                      type="text"
                      id="facilityName"
                      name="facilityName"
                      value={formData.facilityName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-smooth"
                      placeholder="Oakwood Care Home"
                    />
                  </div>
                  <div>
                    <label htmlFor="homeCount" className="block text-sm font-semibold text-text-primary mb-2">
                      Number of Homes You Manage *
                    </label>
                    <select
                      id="homeCount"
                      name="homeCount"
                      value={formData.homeCount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-smooth"
                    >
                      <option value="1">1 home</option>
                      <option value="2-5">2-5 homes</option>
                      <option value="6-10">6-10 homes</option>
                      <option value="11+">11+ homes</option>
                    </select>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Icon name="ClockIcon" size={24} variant="solid" className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-text-primary mb-1">
                          Estimated setup time: 30 seconds
                        </p>
                        <p className="text-xs text-text-secondary">
                          Your team can start logging incidents immediately after signup
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 px-6 py-4 text-lg font-semibold text-primary bg-surface rounded-lg hover:bg-muted transition-smooth"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.facilityName || isSubmitting}
                      className="flex-1 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-cta hover-scale disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Creating Account...
                        </span>
                      ) : (
                        'Create Free Account'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-text-secondary">
              <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-success" />
              <span className="text-sm">Bank-level security</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <Icon name="LockClosedIcon" size={20} variant="solid" className="text-success" />
              <span className="text-sm">GDPR compliant</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-success" />
              <span className="text-sm">CQC Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
