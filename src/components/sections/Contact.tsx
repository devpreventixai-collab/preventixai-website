import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Phone, MessageSquare, CheckSquare } from 'lucide-react';
import { useContact } from '../../context/ContactContext';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Contact: React.FC = () => {
  const { setShowContactModal } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  // Use useEffect to read prefilled email after component mounts
  useEffect(() => {
    try {
      const prefilledEmail = sessionStorage.getItem('prefilledEmail');
      console.log('Reading from sessionStorage - prefilledEmail:', prefilledEmail);
      if (prefilledEmail && prefilledEmail.trim()) {
        setFormData(prev => ({ ...prev, email: prefilledEmail.trim() }));
        sessionStorage.removeItem('prefilledEmail');
        console.log('Email prefilled successfully:', prefilledEmail.trim());
      } else {
        console.log('No prefilled email found in sessionStorage');
      }
    } catch (error) {
      // Handle cases where sessionStorage is not available
      console.warn('SessionStorage not available:', error);
    }
  }, []);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // Remove the useForm hook as we're handling submission manually

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '', message: '', consent: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Create a plain JavaScript object with the form data
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        consent: formData.consent
      };
      
      // Submit the form data directly
      await fetch('https://formspree.io/f/mgvnrprl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend)
      });

      // Manually trigger success state
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '', consent: false });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
    setErrors((prev) => ({ ...prev, consent: '' }));
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="pt-16"> 
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="py-16 px-4 max-w-[90rem] mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have questions or need assistance? Fill out the form below, and our team will get back to you promptly.
          </p>

          <motion.div
            className="max-w-lg mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl flex items-center gap-2"
                >
                  <CheckSquare className="w-5 h-5" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-y min-h-[120px]`}
                    placeholder="Tell us how we can help"
                  />
                </div>
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleConsentChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-200 rounded"
                  />
                  <span>
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and consent to being contacted.
                  </span>
                </label>
                {errors.consent && <p className="mt-1 text-xs text-red-500">{errors.consent}</p>}
              </div>

              <button
                type="submit"
                disabled={submitSuccess}
                className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-xl text-base font-medium text-white ${
                  submitSuccess
                    ? 'bg-primary/70 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50'
                }`}
              >
                {submitSuccess ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => setShowContactModal(true)}
              whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium transition-colors duration-300"
            >
              Need Immediate Help? Contact Sales
            </motion.button>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;