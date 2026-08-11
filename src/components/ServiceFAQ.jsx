import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "Do I need an appointment before visiting the clinic?",
    answer: "Yes, appointments are recommended to ensure adequate consultation time, reduced waiting, and personalized attention from specialists."
  },
  {
    id: 2,
    question: "What skin and hair conditions do you treat?",
    answer: "We treat a wide variety of conditions including acne, pigmentation, aging signs, hair loss, eczema, and offer advanced cosmetic dermatology services."
  },
  {
    id: 3,
    question: "Are treatments safe and dermatologist-approved?",
    answer: "Absolutely. All our treatments are FDA-approved, clinically tested, and administered by certified dermatologists to ensure maximum safety and efficacy."
  },
  {
    id: 4,
    question: "How many sessions are required to see results?",
    answer: "The number of sessions varies depending on the individual's skin type and the specific treatment. During your consultation, we will provide a personalized timeline."
  },
  {
    id: 5,
    question: "Do you offer personalized treatment plans?",
    answer: "Yes, every patient receives a customized treatment plan tailored specifically to their unique skin and hair care needs and goals."
  }
];

export default function ServiceFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image and Guide text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <p className="text-sm font-medium text-gray-600 mb-6 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gray-800"></span> Quick help guide
            </p>
            <div className="w-full h-full min-h-[350px] lg:min-h-[480px] rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop" 
                alt="Facial Mask Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080d09] font-['Outfit'] mb-10 leading-tight">
              Frequently asked questions
            </h2>

            <div className="flex flex-col">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={faq.id} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                    >
                      <span className={`text-base md:text-lg font-semibold pr-8 transition-colors duration-300 ${isActive ? 'text-[#080d09]' : 'text-gray-700 group-hover:text-[#080d09]'}`}>
                        {faq.question}
                      </span>
                      
                      <div className="flex-shrink-0 text-gray-400 group-hover:text-gray-800 transition-colors duration-300">
                        {isActive ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="pb-6 pr-8 text-gray-500 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
