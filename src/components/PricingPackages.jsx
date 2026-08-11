import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Gift } from 'lucide-react';

const packages = [
  {
    icon: Sparkles,
    title: "Bridal Glow Package",
    price: "$899",
    duration: "3 Months Before Wedding",
    description: "A comprehensive 3-month timeline designed to ensure your skin is absolutely flawless for your big day.",
    includes: ["2x Advanced Renewal", "1x Clinical Premium", "Bridal Homecare Kit"]
  },
  {
    icon: Calendar,
    title: "Annual Clear Skin Membership",
    price: "$199",
    duration: "Billed Monthly",
    description: "For clients dedicated to maintaining their results long-term with consistent, professional care.",
    includes: ["1x Essential Care per month", "15% off all retail products", "Priority booking"]
  }
];

export default function PricingPackages() {
  return (
    <section className="bg-white py-24 w-full border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-medium text-gray-600 mb-6 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#c6ab82]"></span> Memberships & Packages
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080d09] mb-6 font-['Outfit'] leading-tight">
              Invest in long-term skin health.
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
              Our curated packages and memberships offer the best value for patients committed to achieving and maintaining their skincare goals. Enjoy exclusive perks and priority access to our top specialists.
            </p>
            <button className="flex items-center gap-2 font-bold text-[#3b4334] hover:text-[#080d09] transition-colors group">
              <Gift className="w-5 h-5" />
              <span>Gift a package to a loved one</span>
            </button>
          </motion.div>

          {/* Right Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  className="bg-[#f9f9f8] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#3b4334] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#080d09] mb-2 font-['Outfit']">{pkg.title}</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-2xl font-bold text-[#080d09]">{pkg.price}</span>
                    <span className="text-gray-500 text-sm font-medium pb-1">{pkg.duration}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-gray-200/60">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Includes:</p>
                    <ul className="space-y-2 text-sm text-[#080d09] font-medium">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
