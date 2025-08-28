import { useState } from 'react';
import { Play, Pause, ExternalLink, ArrowRight, Check, Star } from 'lucide-react';

const Product = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - replace with your actual product data
  const productData = {
    title: "Our Revolutionary Product",
    subtitle: "Experience the future of business automation",
    description: "Transform your workflow with our cutting-edge solution that combines AI-powered analytics, seamless integrations, and intuitive design to help your business scale efficiently.",
    
    // Media content
    media: {
      type: 'video', // 'video' or 'image'
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', // Replace with your video
      thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Product demonstration'
    },
    
    // Key features/highlights
    highlights: [
      "AI-Powered Analytics",
      "Real-time Collaboration",
      "99.9% Uptime Guarantee",
      "Enterprise Security"
    ],
    
    // Product stats
    stats: [
      { number: "500K+", label: "Active Users" },
      { number: "99.9%", label: "Uptime" },
      { number: "24/7", label: "Support" },
      { number: "50+", label: "Integrations" }
    ],
    
    // Tabs content
    tabs: {
      overview: {
        title: "Product Overview",
        content: "Our comprehensive platform streamlines your entire workflow, from initial concept to final delivery. Built with modern technologies and designed for scalability."
      },
      features: {
        title: "Key Features",
        content: "Advanced automation, intelligent reporting, seamless integrations, and enterprise-grade security make our product the ideal solution for growing businesses."
      },
      integration: {
        title: "Integrations",
        content: "Connect with your existing tools effortlessly. We support 50+ popular business applications including CRM, accounting, and project management tools."
      }
    }
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section id="product-section" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {productData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {productData.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productData.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border">
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
                Try Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center">
                <ExternalLink className="mr-2 w-5 h-5" />
                View Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg border">
          {productData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Customer Testimonial */}
        {/* <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-4xl mx-auto">
            "This product has completely transformed how we operate. The efficiency gains and cost savings have been incredible."
          </blockquote>
          <cite className="text-purple-200">
            — Sarah Johnson, CEO at TechCorp
          </cite>
        </div> */}
      </div>
    </section>
  );
};

export default Product;