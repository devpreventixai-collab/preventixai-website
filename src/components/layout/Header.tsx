import { Button } from "@/components/ui/button";
import { Shield, Menu, Book, Briefcase, HelpCircle, Play, Newspaper, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllPopovers = () => {
    setOpenProduct(false);
    setOpenResources(false);
    setOpenSupport(false);
    setOpenFeatures(false);
    setOpenFAQ(false);
  };

  // Smooth scroll function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    closeAllPopovers();
    setMobileMenuOpen(false);
  };

  const PopoverItem = ({ children, isOpen, onOpenChange, onMouseEnter, onMouseLeave, trigger, content }) => {
    let leaveTimeout;

    const handleMouseEnter = () => {
      clearTimeout(leaveTimeout);
      onMouseEnter();
    };

    const handleMouseLeave = () => {
      leaveTimeout = setTimeout(() => {
        onMouseLeave();
      }, 150);
    };

    return (
      <Popover open={isOpen} onOpenChange={onOpenChange}>
        <PopoverTrigger 
          className={`
            relative text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 ease-out
            hover:text-blue-600 hover:bg-blue-50 hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-blue-200
            ${isOpen ? "text-blue-600 bg-blue-100 shadow-md" : "text-gray-600"}
          `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {trigger}
          <div className={`
            absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
            transition-all duration-300 ease-out
            ${isOpen ? "w-full opacity-100" : "w-0 opacity-0"}
          `} />
        </PopoverTrigger>
        <PopoverContent 
          sideOffset={8} 
          className={`
            border-0 shadow-2xl bg-white/95 backdrop-blur-xl rounded-2xl p-0 overflow-hidden
            animate-in slide-in-from-top-2 duration-200 ease-out
          `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-6">
            {content}
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <>
      <header className={`
        fixed top-0 w-full z-50 transition-all duration-500 ease-out
        ${scrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50" 
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100/30"
        }
      `}>
        <div className="container mx-auto flex items-center justify-between h-20 px-6">
          {/* Logo with enhanced styling */}
          <div className="flex items-center space-x-3 group">
          <div className={`
  w-10 h-10
  flex items-center justify-center transition-all duration-300 ease-out
  group-hover:scale-110 group-hover:rotate-3
`}>
  <img 
    src="https://preventixai-misc.s3.eu-west-2.amazonaws.com/preventix-logo-new.png" 
    alt="Preventix AI Logo" 
    className="w-12 h-12 object-contain"
  />
</div>
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                <a href="/" className="hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Preventix AI
                </a>
              </span>
              <span className="text-xs text-gray-500 font-semibold tracking-wider">
                PREDICT | PREVENT | PROTECT
              </span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-2">
            <PopoverItem
              isOpen={openProduct}
              onOpenChange={setOpenProduct}
              onMouseEnter={() => {
                closeAllPopovers();
                setOpenProduct(true);
              }}
              onMouseLeave={() => setOpenProduct(false)}
              trigger="Product"
              content={
                <div className="w-64">
                  <h4 className="font-bold text-lg mb-4 text-gray-900">Our Product</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Discover our comprehensive AI-powered incident management solution.
                  </p>
                  <button 
                    onClick={() => smoothScrollTo('product-section')}
                    className="w-full flex items-center justify-center space-x-2 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200 cursor-pointer group"
                  >
                    <Play className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium text-blue-600">
                      View Product Details
                    </span>
                  </button>
                </div>
              }
            />

            <PopoverItem
              isOpen={openResources}
              onOpenChange={setOpenResources}
              onMouseEnter={() => {
                closeAllPopovers();
                setOpenResources(true);
              }}
              onMouseLeave={() => setOpenResources(false)}
              trigger="Resources"
              content={
                <div className="w-64">
                  <h4 className="font-bold text-lg mb-4 text-gray-900">Learn More</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer group">
                      <Book className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                      <a href="/blog" className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                        Blog
                      </a>
                    </li>
                    <li 
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                      onClick={() => smoothScrollTo('why-us-section')}
                    >
                      <Newspaper className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                        Why Choose Us?
                      </span>
                    </li>
                  </ul>
                </div>
              }
            />

            <PopoverItem
              isOpen={openSupport}
              onOpenChange={setOpenSupport}
              onMouseEnter={() => {
                closeAllPopovers();
                setOpenSupport(true);
              }}
              onMouseLeave={() => setOpenSupport(false)}
              trigger="Support"
              content={
                <div className="w-64">
                  <h4 className="font-bold text-lg mb-4 text-gray-900">Get Help</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer group">
                      <HelpCircle className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                      <a href="/contact" className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                        Contact Us
                      </a>
                    </li>
                    <li className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer group">
                      <Play className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                      <a href="/contact" className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                        Request Demo
                      </a>
                    </li>
                  </ul>
                </div>
              }
            />

            <PopoverItem
              isOpen={openFeatures}
              onOpenChange={setOpenFeatures}
              onMouseEnter={() => {
                closeAllPopovers();
                setOpenFeatures(true);
              }}
              onMouseLeave={() => setOpenFeatures(false)}
              trigger="Features"
              content={
                <div className="w-80 flex justify-center">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-900">Key Features</h4>
                    <ul className="space-y-4">
                      <li 
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                        onClick={() => smoothScrollTo('features-section')}
                      >
                        <Book className="w-5 h-5 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                        <div>
                          <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200 block">
                            Record Incidents
                          </span>
                          <span className="text-xs text-gray-500">Easily document and track incidents</span>
                        </div>
                      </li>
                      <li 
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                        onClick={() => smoothScrollTo('features-section')}
                      >
                        <Shield className="w-5 h-5 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                        <div>
                          <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200 block">
                            AI-Powered Insights
                          </span>
                          <span className="text-xs text-gray-500">Get intelligent analysis from our Super AI Model</span>
                        </div>
                      </li>
                      <li 
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                        onClick={() => smoothScrollTo('features-section')}
                      >
                        <Newspaper className="w-5 h-5 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                        <div>
                          <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200 block">
                            Advanced Filtering
                          </span>
                          <span className="text-xs text-gray-500">Filter and organize incidents efficiently</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              }
            />

            <PopoverItem
              isOpen={openFAQ}
              onOpenChange={setOpenFAQ}
              onMouseEnter={() => {
                closeAllPopovers();
                setOpenFAQ(true);
              }}
              onMouseLeave={() => setOpenFAQ(false)}
              trigger="FAQ"
              content={
                <div className="w-64">
                  <h4 className="font-bold text-lg mb-4 text-gray-900">Frequently Asked Questions</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer group">
                      <HelpCircle className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                      <a href="/faq" className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                        View FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              }
            />
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://preventixai-dev.web.app/incident-records"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:block"
            >
              <Button className={`
                bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold
                px-6 py-3 rounded-xl shadow-lg hover:shadow-xl
                transform transition-all duration-300 ease-out
                hover:scale-105 hover:from-purple-500 hover:to-blue-600
                focus:ring-4 focus:ring-blue-200
              `}>
                Get Started
              </Button>
            </a>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className={`
                lg:hidden p-2 rounded-xl transition-all duration-300 ease-out
                hover:bg-blue-50 hover:scale-110
                ${mobileMenuOpen ? "bg-blue-100 rotate-180" : ""}
              `}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out
        ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className={`
          absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6
          transform transition-all duration-300 ease-out
          ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
        `}>
          <nav className="space-y-4">
            <button 
              onClick={() => smoothScrollTo('product-section')}
              className="block w-full text-left py-3 px-4 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              Product
            </button>
            <button 
              onClick={() => smoothScrollTo('why-us-section')}
              className="block w-full text-left py-3 px-4 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              Why Choose Us?
            </button>
            <a 
              href="/contact"
              className="block w-full text-left py-3 px-4 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              Support
            </a>
            <button 
              onClick={() => smoothScrollTo('features-section')}
              className="block w-full text-left py-3 px-4 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              Features
            </button>
            <a 
              href="/faq"
              className="block w-full text-left py-3 px-4 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              FAQ
            </a>
            <div className="pt-4 border-t border-gray-200">
              <a
                href="https://preventixai-dev.web.app/incident-records"
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg">
                  Get Started
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;