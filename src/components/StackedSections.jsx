import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Box, Command } from 'lucide-react';

export default function StackedSections() {
  const containerRef = useRef(null);
  
  // Track scroll progress through the 200vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Panel 2 starts at 100vh (below screen) and moves to 0vh (covers screen)
  const panel2Y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full bg-[#080d09]">
      
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ========================================================= */}
        {/* PANEL 1: Our Difference (Static Back Panel)                 */}
        {/* ========================================================= */}
        <div className="absolute inset-0 z-10">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[#3a4436]">
            <img 
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000" 
              alt="Natural skincare" 
              className="w-full h-full object-cover opacity-80 mix-blend-overlay"
            />
            {/* Gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24">
            <div className="max-w-2xl text-white">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-6"
              >
                <span className="inline-block w-1.5 h-1.5 bg-white" />
                <span>Our difference</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 font-['Outfit']"
              >
                Where expertise meets advanced technology
              </motion.h2>
              <p className="text-base sm:text-lg text-white/80 max-w-md leading-relaxed mb-10">
                We go beyond surface-level care by combining clinical expertise with cutting-edge equipment.
              </p>
              
              <a 
                href="#experts"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2d3830] text-white rounded-full text-sm font-medium hover:bg-[#1f2621] transition-colors"
              >
                Meet our experts <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PANEL 2: Who We Are (Slides up from bottom)                 */}
        {/* ========================================================= */}
        <motion.div 
          style={{ y: panel2Y }}
          className="absolute inset-0 z-20 bg-[#fdfcf9] flex flex-col"
        >
          {/* Top Section: Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 text-center pt-16"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#526356] mb-6">
              <span className="inline-block w-1.5 h-1.5 bg-[#526356]" />
              <span>Who we are</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080d09] max-w-4xl leading-[1.2] mb-6 font-['Outfit']">
              Expert dermatologist providing advanced skin & hair treatment with professional care.
            </h2>
            
            <p className="text-sm sm:text-base text-[#526356] mb-8">
              Expert care delivering safe skin and hair solutions
            </p>
            
            <a 
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#425045] text-white rounded-full text-sm font-medium hover:bg-[#2d3830] transition-colors"
            >
              About us <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Bottom Section: 3-Column Grid */}
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24 pb-12 sm:pb-20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              
              {/* Card 1: Dark with image */}
              <div className="relative h-64 sm:h-72 md:h-80 rounded-sm overflow-hidden bg-black p-8 flex flex-col justify-end text-white">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800" 
                    alt="Skin care application" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
                <div className="relative z-10 flex items-end justify-between">
                  <h3 className="text-5xl lg:text-6xl font-bold font-['Outfit']">53k</h3>
                  <p className="text-sm text-white/80 max-w-[120px] leading-tight">
                    Trusted clients worldwide
                  </p>
                </div>
              </div>

              {/* Card 2: Light Green */}
              <div className="relative h-64 sm:h-72 md:h-80 rounded-sm overflow-hidden bg-[#e1e6d9] p-8 flex flex-col justify-between text-[#080d09]">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Box className="w-5 h-5 text-[#425045]" />
                </div>
                <div>
                  <h3 className="text-5xl lg:text-6xl font-bold font-['Outfit'] mb-4">95%</h3>
                  <p className="text-sm font-medium text-[#425045]">
                    Clinically tested skin treatments for lasting health
                  </p>
                </div>
              </div>

              {/* Card 3: Light Beige */}
              <div className="relative h-64 sm:h-72 md:h-80 rounded-sm overflow-hidden bg-[#e6deda] p-8 flex flex-col justify-between text-[#080d09]">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Command className="w-5 h-5 text-[#425045]" />
                </div>
                <div>
                  <h3 className="text-5xl lg:text-6xl font-bold font-['Outfit'] mb-4">38k</h3>
                  <p className="text-sm font-medium text-[#425045]">
                    Advanced dermatology treatments for healthier skin
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
