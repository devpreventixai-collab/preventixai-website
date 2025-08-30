import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Floating geometric shapes for visual interest - hidden on mobile */}
      <div className="hidden lg:block absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 blur-sm"></div>
      <div className="hidden lg:block absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-30 blur-sm"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-25 blur-sm"></div>

      {/* Main container with proper responsive layout */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 min-h-screen">
            
            {/* Content - left side */}
            <div className="flex items-center py-12 lg:py-0 pt-20 lg:pt-12">
              <div className="w-full">
                {/* Main headline */}
                <h1 className="text-slate-800 mb-6 lg:mb-8">
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 lg:mb-4">
                    Safety is priority.
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      WE KNOW BETTER.
                    </span>
                  </div>
                </h1>

                {/* Subheadline */}
                <p className="text-lg lg:text-xl xl:text-2xl text-slate-600 mb-8 lg:mb-12 leading-relaxed font-light">
                  Easy-to-use workplace safety platform: incident reporting, risk analysis, compliance tracking, and AI-powered predictions. All in one place.
                </p>

                {/* CTA section */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/50">
                    <input
                      type="email"
                      placeholder="What's your work email?"
                      className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-slate-800 placeholder-slate-500 border-0 focus:outline-none bg-transparent text-sm sm:text-base"
                    />
                    <button className="bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-all duration-200 shadow-lg text-sm sm:text-base">
                      Get started for free
                    </button>
                  </div>
                </div>

                {/* Features preview - centered and with overflow handling */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-6 lg:mb-8 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>AI-Powered Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Real-time Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Compliance Ready</span>
                  </div>
                </div>

                {/* Explore product link */}
                <div className="mb-8 lg:mb-16">
                  <a href="https://preventixai-dev.web.app/login" className="text-slate-600 hover:text-slate-800 flex items-center space-x-2 group transition-colors duration-200">
                    <span className="underline decoration-2 underline-offset-4 decoration-orange-400">Explore product</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Product showcase - right side */}
            <div className="flex items-center justify-center lg:justify-end py-8 lg:py-12">
              <div className="w-full max-w-sm lg:max-w-lg h-64 sm:h-80 lg:h-96 xl:h-[500px] relative">
                {/* Main safety image */}
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm border border-white/50">
                    <img 
                      src="https://preventixai-dev-media-bucket.s3.eu-west-2.amazonaws.com/luke-chesser-JKUTrJ4vK00-unsplash.jpg" 
                      alt="Modern workplace safety technology dashboard"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10"></div>
                  </div>
                  
                  {/* Floating secondary image - adjusted for mobile */}
                  <div className="absolute -top-4 lg:-top-8 -left-4 lg:-left-8 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden shadow-xl bg-white/95 backdrop-blur-sm border border-white/60">
                    <img 
                      src="https://preventixai-dev-media-bucket.s3.eu-west-2.amazonaws.com/carlos-muza-hpjSkU2UYSU-unsplash.jpg" 
                      alt="Safety equipment and hard hat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Small floating badge - adjusted for mobile */}
                  <div className="absolute -bottom-3 lg:-bottom-6 -right-3 lg:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg bg-white/95 backdrop-blur-sm border border-white/60 flex items-center justify-center">
                    <img 
                      src="https://preventixai-dev-media-bucket.s3.eu-west-2.amazonaws.com/Screenshot+2025-08-28+at+01.58.26.png" 
                      alt="Safety Analysis chart"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent - softer approach, hidden on small screens */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300 to-amber-300 transform rotate-45 translate-x-16 translate-y-16 opacity-20 blur-sm"></div>
      <div className="hidden lg:block absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full opacity-30 blur-sm"></div>
    </section>
  );
};

export default Hero;