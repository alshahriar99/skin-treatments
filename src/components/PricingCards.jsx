import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const pricingPlans = [
  {
    name: "Essential Care",
    price: "$149",
    description: "Perfect for maintaining healthy, glowing skin on a regular basis.",
    features: [
      "Deep cleansing facial",
      "Basic extraction",
      "Hydrating mask application",
      "Personalized skincare advice",
      "30-minute session"
    ],
    popular: false,
  },
  {
    name: "Advanced Renewal",
    price: "$299",
    description: "Our most popular treatment for targeting specific skin concerns.",
    features: [
      "Everything in Essential Care",
      "Chemical peel or Microdermabrasion",
      "LED light therapy (15 mins)",
      "Targeted serum infusion",
      "60-minute session"
    ],
    popular: true,
  },
  {
    name: "Clinical Premium",
    price: "$499",
    description: "Comprehensive care combining our most advanced technologies.",
    features: [
      "Everything in Advanced Renewal",
      "Laser skin resurfacing",
      "Advanced extraction & milia removal",
      "Premium collagen mask",
      "Post-treatment care kit included"
    ],
    popular: false,
  }
];

export default function PricingCards() {
  return (
    <section className="bg-[#f3f4ef] py-24 w-full relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080d09] mb-4 font-['Outfit']">
            Treatment Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Choose the level of care that best suits your skin's needs. All plans include a complimentary digital skin analysis.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
              className={`relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                plan.popular ? 'border-2 border-[#3b4334] md:-translate-y-4' : 'border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3b4334] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#080d09] mb-2 font-['Outfit']">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{plan.description}</p>
              
              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-bold text-[#080d09] font-['Outfit']">{plan.price}</span>
                <span className="text-gray-500 font-medium">/ session</span>
              </div>
              
              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#f3f4ef] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#3b4334]" />
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors ${
                plan.popular 
                  ? 'bg-[#3b4334] text-white hover:bg-[#252a20]' 
                  : 'bg-[#f3f4ef] text-[#080d09] hover:bg-[#e2e4dc]'
              }`}>
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
