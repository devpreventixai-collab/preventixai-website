
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
  
    ],
    company: [

      { label: 'Contact', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: 'https://www.iubenda.com/privacy-policy/30950813' },
      // { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: 'https://www.iubenda.com/privacy-policy/30950813/cookie-policy' },
      // { label: 'GDPR Compliance', href: '#' },
    ],
 
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'AtSymbolIcon', href: '#' },
    { name: 'LinkedIn', icon: 'BuildingOfficeIcon', href: '#' },
    { name: 'Facebook', icon: 'UserGroupIcon', href: '#' },
  ];

  if (!isHydrated) {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="h-64 bg-gray-800 rounded-lg animate-pulse" />
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img src="https://preventix-website-media.s3.eu-west-2.amazonaws.com/preventix-logo-new-removebg-preview+(1).png" className="w-5 h-5 text-white" />
              <span className="text-xl font-bold">PreventixAI</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AI-powered incident management platform built specifically for UK care homes. Transform reactive logging into proactive safety intelligence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-smooth"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

       
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Icon name="EnvelopeIcon" size={24} variant="outline" className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold mb-1">Email</p>
                <a href="mailto:hello@preventixai.com" className="text-gray-400 hover:text-white transition-smooth">
                  hello@preventixai.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="PhoneIcon" size={24} variant="outline" className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold mb-1">Phone</p>
                <a href="tel:+442012345678" className="text-gray-400 hover:text-white transition-smooth">
                  +44 7880 228191
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="MapPinIcon" size={24} variant="outline" className="text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold mb-1">Address</p>
                <p className="text-gray-400">
                London, UK 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Icon name="ShieldCheckIcon" size={24} variant="solid" className="text-success" />
              <span className="text-sm text-gray-400">CQC Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="LockClosedIcon" size={24} variant="solid" className="text-success" />
              <span className="text-sm text-gray-400">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="GlobeAltIcon" size={24} variant="solid" className="text-success" />
              <span className="text-sm text-gray-400">UK Data Hosting</span>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} PreventixAI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
