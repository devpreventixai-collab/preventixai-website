import { useState } from 'react';
import { Play, Pause, ExternalLink, ArrowRight, Check, Star, Shield, Brain, BarChart3, Users } from 'lucide-react';

const Product = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // PreventixAI product data
  const productData = {
    title: "OUR REVOLUTIONARY PRODUCT",
    subtitle: "PreventixAI - PREDICT | PREVENT | PROTECT.",
    description: "Transform workplace safety with our AI-powered platform that predicts risks, prevents accidents, and protects your workforce. Our web-SaaS solution combines predictive analytics with generative AI to create safer workplaces and reduce the £21 billion cost of workplace accidents in the UK.",
    
    // Media content
    media: {
      type: 'video',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'PreventixAI workplace safety dashboard demonstration'
    },
    
    // Key features/highlights
    highlights: [
      "Predictive AI Analysis",
      "Real-time Risk Monitoring", 
      "HSE Compliant Reporting",
      "99.9% Platform Uptime"
    ],
    
    // Product stats
    stats: [
      { number: "50%", label: "Accident Reduction" },
      { number: "99.9%", label: "Uptime" },
      { number: "24/7", label: "AI Monitoring" },
      { number: "HSE", label: "Compliant" }
    ],
    
    // Tabs content
    tabs: {
      overview: {
        title: "Platform Overview",
        content: "Our comprehensive AI-powered platform transforms workplace safety management. From incident reporting to predictive risk analysis, PreventixAI helps organizations move from reactive to proactive safety management, reducing accidents by up to 50% while ensuring full HSE compliance."
      },
      features: {
        title: "AI Features",
        content: "Advanced predictive analytics identify accident patterns before they happen. Generative AI provides personalized safety recommendations, automated HSE-compliant reports, and root cause analysis. Our platform learns from your data to continuously improve safety outcomes."
      },
      targeting: {
        title: "Target Markets",
        content: "Specifically designed for high-risk sectors including Healthcare & Care, Construction, Manufacturing, Warehousing, and Agriculture. Perfect for SMEs to large enterprises managing multiple locations who need to reduce accident costs and improve compliance."
      }
    }
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const pricingTiers = [
    {
      name: "Basic",
      price: "£50",
      period: "per location/month",
      target: "SME Companies",
      features: [
        "Core Compliance Tools",
        "Incident Logging & Monitoring", 
        "Basic Analytics Dashboard",
        "HSE Report Generation"
      ]
    },
    {
      name: "Pro", 
      price: "£100",
      period: "per location/month",
      target: "Large Companies",
      features: [
        "Everything in Basic",
        "Predictive AI Analysis",
        "Advanced Analytics",
        "Root Cause Analysis",
        "Onboarding Assistance"
      ],
      popular: true
    },
    {
      name: "Advance",
      price: "£180", 
      period: "per location/month",
      target: "Enterprises",
      features: [
        "Everything in Pro",
        "Generative AI Recommendations",
        "Custom Executive Dashboard",
        "Priority Support",
        "ESG Impact Reporting"
      ]
    }
  ];

  return (
    <section id="product-section" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Workplace Safety Revolution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {productData.title}
          </h2>
          <p className="text-2xl text-purple-600 font-semibold mb-4">
            {productData.subtitle}
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {productData.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productData.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-purple-200">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

  

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Media Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-1">
              <div className="relative rounded-xl overflow-hidden bg-white">
                {productData.media.type === 'video' ? (
                  <div className="relative aspect-video">
                    {!isVideoPlaying ? (
                      <div className="relative">
                        <img
                          src={productData.media.thumbnailUrl}
                          alt={productData.media.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <button
                            onClick={toggleVideo}
                            className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                          >
                            <Play className="w-8 h-8 text-purple-600 ml-1" />
                          </button>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm">
                          Platform Demo
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                          src={productData.media.videoUrl}
                        />
                        <button
                          onClick={toggleVideo}
                          className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                        >
                          <Pause className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <img
                      src={productData.media.imageUrl}
                      alt={productData.media.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border">
              <div className="grid grid-cols-2 gap-4">
                {productData.stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {productData.description}
            </p>

            {/* Key Differentiators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <Brain className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Predictive AI</h4>
                  <p className="text-sm text-gray-600">Prevent accidents before they happen</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BarChart3 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Advanced Analytics</h4>
                  <p className="text-sm text-gray-600">Deep insights and root cause analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">HSE Compliance</h4>
                  <p className="text-sm text-gray-600">Automated compliant reporting</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Multi-Location</h4>
                  <p className="text-sm text-gray-600">Manage safety across all sites</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
                {Object.keys(productData.tabs).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === tab
                        ? 'bg-white text-purple-600 shadow-sm'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {productData.tabs[tab].title}
                  </button>
                ))}
              </div>
              
              <div className="bg-white rounded-xl p-6 border shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  {productData.tabs[activeTab].content}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center">
                <ExternalLink className="mr-2 w-5 h-5" />
                Book Demo
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg border mb-16">
          {productData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

  


        {/* Target Industries */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Built for High-Risk Industries</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Healthcare & Care",
              "Construction", 
              "Manufacturing",
              "Warehousing",
              "Agriculture"
            ].map((industry, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;