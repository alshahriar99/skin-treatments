import React from 'react';
import { motion } from 'framer-motion';

export default function PricingHero() {
  return (
    <div className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center overflow-hidden bg-[#080d09] pt-[120px] lg:pt-[140px] pb-12">
      {/* Background with luxury feel */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1600&auto=format&fit=crop" 
            alt="Luxury Clinic Background" 
            className="w-full h-full object-cover object-[center_40%]"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d09] via-[#080d09]/80 to-transparent"></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6">
            <span className="text-[#c6ab82] text-sm font-medium uppercase tracking-wider">Transparent Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-['Outfit'] leading-tight">
            Invest in your skin's <br className="hidden sm:block" /> future today.
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Premium dermatological treatments tailored to your unique needs. No hidden fees, just clear, honest pricing for world-class clinical care.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
