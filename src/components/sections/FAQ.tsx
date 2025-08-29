import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { useContact } from '@/context/ContactContext';

const faqs = [
  {
    id: 1,
    question: "What is the purpose of this platform?",
    answer: "Our platform aims to provide insightful content on prediction, prevention, and protection strategies through expertly curated articles and resources."
  },
  {
    id: 2,
    question: "How often is new content published?",
    answer: "We publish new articles weekly, with Editor's Picks updated monthly to highlight the best content."
  },
  {
    id: 3,
    question: "Can I contribute to the blog?",
    answer: "Yes! We welcome guest contributions. Please contact our editorial team through the submission form on the Contact page."
  },
  {
    id: 4,
    question: "How can I stay updated with new posts?",
    answer: "Subscribe to our newsletter or follow us on social media platforms like X for real-time updates on new content."
  },
  {
    id: 5,
    question: "Is there a mobile app available?",
    answer: "Currently, we offer a fully responsive website, but a mobile app is in development and will be announced soon."
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const { setShowContactModal } = useContact();

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="pt-24"> {/* Added top padding to prevent header overlap */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-16 px-4 max-w-[90rem] mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg border-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: faq.id * 0.1 }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left text-lg font-semibold text-foreground group"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className="group-hover:text-primary transition-colors">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
         <motion.button
    onClick={() => setShowContactModal(true)}
    whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
    whileTap={{ scale: 0.95 }}
    className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium transition-colors duration-300"
  >
    Still Have Questions? Contact Us
  </motion.button>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;