
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  isScrolled?: boolean;
}

const Header = ({ isScrolled: externalScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [internalScrolled, setInternalScrolled] = useState(false);

  const isScrolled = externalScrolled !== undefined ? externalScrolled : internalScrolled;

  const navigationItems = [
    { label: 'How It Works', anchor: '#how-it-works', description: 'Four-step solution journey' },
    { label: 'Features', anchor: '#features', description: 'Role-specific capabilities' },
    { label: 'Pricing', anchor: '#pricing', description: 'Free pricing details' },
    { label: 'Success Stories', anchor: '#success-stories', description: 'Pilot user testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setInternalScrolled(scrollTop > 50);

      const sections = navigationItems.map(item => item.anchor.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-card' 
            : 'bg-transparent'
        }`}
      >
        {/* Scroll Progress Indicator */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20 lg:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 transition-opacity hover:opacity-80"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path 
                    d="M12 2L2 7L12 12L22 7L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 17L12 22L22 17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 12L12 17L22 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-text-primary">
                PreventixAI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navigationItems.map((item) => (
                <a
                  key={item.anchor}
                  href={item.anchor}
                  onClick={(e) => handleAnchorClick(e, item.anchor)}
                  className={`text-base font-medium transition-colors relative group ${
                    activeSection === item.anchor
                      ? 'text-primary' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                      activeSection === item.anchor 
                        ? 'scale-x-100' :'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href="#get-started"
                onClick={(e) => handleAnchorClick(e, '#get-started')}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-lg hover:bg-primary-hover transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get Started Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-text-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} 
                size={24} 
                variant="outline"
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden"
          onClick={toggleMobileMenu}
        >
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />
          
          <div 
            className="absolute top-20 left-0 right-0 bg-white shadow-card animate-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.anchor}
                    href={item.anchor}
                    onClick={(e) => handleAnchorClick(e, item.anchor)}
                    className={`flex flex-col py-3 px-4 rounded-lg transition-colors ${
                      activeSection === item.anchor
                        ? 'bg-primary/5 text-primary' :'text-text-secondary hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    <span className="text-base font-semibold">{item.label}</span>
                    <span className="text-sm text-text-secondary mt-1">
                      {item.description}
                    </span>
                  </a>
                ))}
                
                <a
                  href="#get-started"
                  onClick={(e) => handleAnchorClick(e, '#get-started')}
                  className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-4"
                >
                  Get Started Free
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 250ms ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
