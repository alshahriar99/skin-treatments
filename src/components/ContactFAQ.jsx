import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Do I need an appointment before visiting the clinic?",
    answer: "Yes, appointments are recommended to ensure adequate consultation time, reduced waiting, and personalized attention from specialists."
  },
  {
    question: "What skin and hair conditions do you treat?",
    answer: "We treat a wide variety of conditions including acne, eczema, psoriasis, hair loss, hyperpigmentation, and signs of aging."
  },
  {
    question: "Are treatments safe and dermatologist-approved?",
    answer: "Absolutely. All our treatments and procedures are FDA-approved and administered by board-certified dermatologists."
  },
  {
    question: "How many sessions are required to see results?",
    answer: "This varies entirely by treatment type and individual skin condition. Your specialist will provide a detailed timeline during your first consultation."
  },
  {
    question: "Do you offer personalized treatment plans?",
    answer: "Yes, every patient receives a customized treatment plan tailored specifically to their skin type, concerns, and goals."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#f3f4ef] pb-20 lg:pb-32">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
              <span className="text-gray-500 font-semibold text-sm tracking-wide">Quick help guide</span>
            </div>
            
            <div className="w-full aspect-[4/3] rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop" 
                alt="Green face mask treatment" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col pt-4 lg:pt-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080d09] font-['Outfit'] leading-tight mb-10">
              Frequently asked questions
            </h2>

            <div className="flex flex-col w-full border-t border-gray-300">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div key={index} className="border-b border-gray-300 overflow-hidden">
                    <button 
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className="text-[#080d09] font-semibold text-lg md:text-xl pr-8 group-hover:text-[#b28b6d] transition-colors">
                        {faq.question}
                      </h3>
                      <div className="shrink-0 text-gray-400">
                        <motion.svg 
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="pb-8 text-gray-500 leading-relaxed pr-8">
                            {faq.answer}
                          </p>
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
