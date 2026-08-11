import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const pricingFaqs = [
  {
    id: 1,
    question: "Do you accept health insurance for clinical treatments?",
    answer: "We accept most major health insurance plans for medically necessary dermatological treatments (e.g., severe acne, eczema, mole removal). Cosmetic procedures like laser hair removal or anti-aging facials are typically out-of-pocket."
  },
  {
    id: 2,
    question: "Are there any hidden fees not shown in the pricing?",
    answer: "No, we believe in complete transparency. The prices listed include the consultation, the treatment itself, and standard aftercare products. Any additional recommended medical-grade skincare is optional."
  },
  {
    id: 3,
    question: "Do you offer payment plans or financing options?",
    answer: "Yes, we partner with CareCredit and other healthcare financing services to offer flexible, 0% interest payment plans for up to 12 months for eligible premium treatment packages."
  },
  {
    id: 4,
    question: "What is your cancellation and refund policy?",
    answer: "We require a 24-hour notice for appointment cancellations. Cancellations within 24 hours may incur a $50 fee. Refunds for prepaid packages are handled on a case-by-case basis, generally prorated for services already rendered."
  },
  {
    id: 5,
    question: "Can I upgrade my single session to a package later?",
    answer: "Absolutely! If you decide to commit to a package after your first session, we will happily apply the cost of your single session towards the total package price."
  }
];

export default function PricingFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f3f4ef] py-24 w-full">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080d09] mb-4 font-['Outfit']">
            Billing & Policies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Clear answers regarding our pricing, payment options, and clinic policies.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100"
        >
          <div className="flex flex-col">
            {pricingFaqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={faq.id} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                  >
                    <span className={`text-base md:text-lg font-semibold pr-8 transition-colors duration-300 ${isActive ? 'text-[#080d09]' : 'text-gray-700 group-hover:text-[#080d09]'}`}>
                      {faq.question}
                    </span>
                    
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'border-[#3b4334] bg-[#3b4334] text-white' : 'border-gray-200 text-gray-400 group-hover:border-[#3b4334] group-hover:text-[#3b4334]'}`}>
                      <motion.div
                        initial={false}
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </motion.div>
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
                        <div className="pb-8 pr-12 text-gray-500 text-sm md:text-base leading-relaxed">
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
    </section>
  );
}
