import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-start overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          src="/images/skin-care.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center"
        ></video>
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a110a]/90 via-[#1a110a]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#b28b6d]"></div>
            <span className="text-[#b28b6d] font-semibold text-sm tracking-wider uppercase">Contact us</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight font-['Outfit'] mb-8"
          >
            Consult dermatology experts for treatment
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            Speak with experienced dermatologists to receive trusted advice, safe procedures, personalized treatments, and comprehensive care for achieving long-term healthy skin results.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
