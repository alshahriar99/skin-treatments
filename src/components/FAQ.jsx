import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How often should I get a professional facial treatment?",
    answer: "For optimal results, we recommend scheduling a professional facial every 4 to 6 weeks. This aligns with your skin's natural renewal cycle, helping to maintain a healthy glow, clear congestion, and address ongoing concerns effectively."
  },
  {
    id: 2,
    question: "Are your advanced laser treatments safe for sensitive skin?",
    answer: "Yes, absolutely. Before any procedure, our dermatologists conduct a comprehensive skin analysis. We customize the laser intensity and wavelength to match your specific skin type and sensitivity level, ensuring maximum safety and comfort."
  },
  {
    id: 3,
    question: "What precautions should I take before a chemical peel?",
    answer: "We advise avoiding direct sun exposure, tanning beds, and the use of strong exfoliants or retinoids for at least 72 hours prior to your chemical peel. Detailed pre-care instructions will be provided during your initial consultation."
  },
  {
    id: 4,
    question: "Is there any downtime after acne scar removal procedures?",
    answer: "Downtime varies depending on the specific treatment. Micro-needling typically involves 1-2 days of mild redness, while deeper laser resurfacing may require 5-7 days of healing. We always discuss expected recovery times before starting any procedure."
  },
  {
    id: 5,
    question: "Do you offer personalized skincare routines?",
    answer: "Yes! Our clinical experts don't just treat your skin in the clinic; we also curate a customized daily skincare regimen using medical-grade products to protect your investment and maintain your results long-term."
  }
];

// Premium treatment images for the background slideshow
const bgImages = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1600&auto=format&fit=crop"
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  // Background slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 4500); // Change image every 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full relative py-16 lg:py-20 overflow-hidden">
      
      {/* Background Slideshow & Premium Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-[#080d09]">
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={bgIndex}
            src={bgImages[bgIndex]} 
            alt="FAQ Background Treatment" 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
          />
        </AnimatePresence>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#080d09]/80 transition-all duration-1000" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* Left Column: Sticky Headers */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white font-medium text-sm tracking-wide mb-6 flex items-center gap-2">
              <span className="text-white/50">•</span> Frequently asked questions
            </p>
            <motion.h2 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 font-['Outfit'] leading-[1.1]"
            >
              Everything you need to know
            </motion.h2>
            <p className="text-white/80 text-base lg:text-lg mb-10 max-w-md leading-relaxed">
              Find answers to common questions about our dermatological treatments, safety protocols, and what to expect during your visit.
            </p>
            
            {/* Contact Support Button */}
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/40 text-white rounded-full text-sm font-bold hover:border-white hover:bg-white hover:text-[#080d09] transition-all duration-300 w-max">
              Still have questions?
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/20"
          >
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div 
                  key={faq.id} 
                  className={`border-b border-white/20 overflow-hidden transition-colors duration-300 ${isActive ? 'bg-black/20 backdrop-blur-sm' : 'hover:bg-white/5 backdrop-blur-none'}`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-5 lg:py-6 px-2 sm:px-6 text-left focus:outline-none group"
                  >
                    <span 
                      className={`text-lg sm:text-xl lg:text-2xl font-bold font-['Outfit'] pr-8 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/90 group-hover:text-white'}`}
                    >
                      {faq.question}
                    </span>
                    
                    {/* Animated Plus/Minus Icon */}
                    <div 
                      className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'border-white bg-white text-[#080d09]' : 'border-white/30 text-white/60 group-hover:border-white group-hover:text-white'}`}
                    >
                      <motion.div
                        initial={false}
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </motion.div>
                    </div>
                  </button>

                  {/* Accordion Content with Framer Motion AnimatePresence */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="pb-8 px-2 sm:px-6 text-white/70 text-base lg:text-lg leading-relaxed max-w-2xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
