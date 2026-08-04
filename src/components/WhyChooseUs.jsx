import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Headset, UserCog, ChevronLeft, ChevronRight, ArrowRight, Droplets, Leaf, Activity, Sparkles, ShieldPlus, Sun, Star } from 'lucide-react';

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Handle both mouse and touch events
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handleMouseDown = (e) => {
    handleDrag(e);
    window.addEventListener('mousemove', handleDrag);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleDrag);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    handleDrag(e);
    window.addEventListener('touchmove', handleDrag, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchEnd = () => {
    window.removeEventListener('touchmove', handleDrag);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  const imgUrl = "/images/before-after.png";

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] lg:h-full lg:absolute lg:inset-0 rounded-3xl overflow-hidden cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Before Image (Left Half of the stitched image) */}
      <div className="absolute inset-0 w-full h-full bg-gray-200 overflow-hidden">
        <img 
          src={imgUrl} 
          alt="Before treatment" 
          className="absolute top-0 left-0 w-[200%] h-full max-w-none object-cover"
          draggable="false"
        />
        {/* Overlay gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* After Image (Right Half of the stitched image, clipped dynamically) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src={imgUrl} 
          alt="After treatment" 
          className="absolute top-0 left-[-100%] w-[200%] h-full max-w-none object-cover"
          draggable="false"
        />
        {/* Overlay gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-gray-200">
          <ChevronLeft className="w-4 h-4 text-gray-600 -mr-1" />
          <ChevronRight className="w-4 h-4 text-gray-600 -ml-1" />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-0 left-0 w-full p-8 text-center z-20 pointer-events-none">
        <h3 className="text-white font-bold text-xl lg:text-2xl mb-2">
          Advanced anti aging skin treatment
        </h3>
        <p className="text-white/80 text-sm flex items-center justify-center gap-2">
          <span className="w-4 h-4 border border-white/50 rounded flex items-center justify-center text-[10px]">🗓</span>
          3-4 Weeks
        </p>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const smallImages = [
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=200",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=200",
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=200",
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=200",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=200"
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100"
  ];

  const logos = [
    { name: "Clyno Derma", icon: Sparkles },
    { name: "Follicare", icon: Leaf },
    { name: "Dermalix", icon: Droplets },
    { name: "Oviroot", icon: Activity },
    { name: "Skinmedic", icon: ShieldPlus },
    { name: "Serennto", icon: Sun },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#080d09] mb-4"
          >
            • Why choose us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080d09] font-['Outfit'] max-w-2xl leading-tight"
          >
            Advanced dermatology solutions for healthy skin
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Top Left Card: 25+ Years */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#e9e4de] rounded-3xl p-6 lg:p-8 flex-1 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-[#080d09] mb-1 font-['Outfit']">
                  25+ <span className="text-xl font-medium">years</span>
                </h3>
                <p className="text-[#080d09]/70 text-xs font-medium mb-4">
                  Proven treatment experience
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="border-b border-black/10 pb-3">
                  <p className="text-xs font-medium text-[#080d09]">
                    <span className="text-black/40 mr-2">•</span> Expert dermatology care services
                  </p>
                </div>
                <div className="border-b border-black/10 pb-3">
                  <p className="text-xs font-medium text-[#080d09]">
                    <span className="text-black/40 mr-2">•</span> Advanced skin treatment solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Card: Efficiency & Small Images */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#f6f5f2] rounded-3xl p-6 flex-1 flex flex-col items-center justify-center overflow-hidden"
            >
              <p className="text-xs font-medium text-gray-500 mb-1">Efficiency</p>
              <h4 className="text-lg font-bold text-[#080d09] mb-4">Advanced features</h4>
              
              {/* Scattered Small Images that load sequentially */}
              <div className="relative w-full h-[140px] flex justify-center items-center">
                {smallImages.map((src, idx) => {
                  // Pre-calculate positions for a scattered look
                  const positions = [
                    { x: -140, y: 10, rotate: -6 },
                    { x: -70, y: -20, rotate: 4 },
                    { x: 0, y: 15, rotate: -2 },
                    { x: 70, y: -10, rotate: 6 },
                    { x: 140, y: 20, rotate: -4 },
                  ];
                  return (
                    <motion.img
                      key={idx}
                      src={src}
                      alt="Feature"
                      initial={{ opacity: 0, scale: 0.5, y: 50 }}
                      whileInView={{ 
                        opacity: 1, 
                        scale: 1, 
                        y: positions[idx].y, 
                        x: positions[idx].x,
                        rotate: positions[idx].rotate
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + (idx * 0.15), 
                        type: "spring",
                        stiffness: 100
                      }}
                      className="absolute w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-xl shadow-lg border-2 border-white"
                      style={{ zIndex: 10 - Math.abs(2 - idx) }}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* MIDDLE COLUMN: Before/After Slider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <BeforeAfterSlider />
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Top Right Card: Deals & Avatars */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f3f4ef] rounded-3xl p-6 lg:p-8 flex-[2] flex flex-col items-center justify-center text-center"
            >
              {/* Top badges */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-sm font-medium text-gray-600">Save up to</span>
                <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <span className="font-bold text-[#080d09]">30%</span>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-500 mb-2">Best deals</p>
              <h4 className="text-2xl font-bold text-[#080d09] mb-8 max-w-[200px] leading-tight">
                Professional hair restoration treatment
              </h4>
              
              <button className="bg-[#3e4637] hover:bg-[#2c3327] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors mb-8 shadow-md">
                Book now <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex flex-col items-center gap-3 mt-auto">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img 
                      key={i} 
                      src={src} 
                      className="w-10 h-10 rounded-full border-2 border-[#f3f4ef] object-cover" 
                      alt="Patient"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-gray-600">
                  <Star className="w-3 h-3 fill-[#080d09] text-[#080d09]" />
                  <span>25k+ trusted happy patients</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Card: Support */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#e9e4de] rounded-3xl p-6 lg:p-8 flex-1 flex items-center gap-4 justify-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-700">
                  <Headset className="w-5 h-5" />
                </div>
                <span className="text-gray-400 font-medium">+</span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-700">
                  <UserCog className="w-5 h-5" />
                </div>
                <span className="text-gray-400 font-medium ml-1">=</span>
              </div>
              <p className="text-sm font-bold text-[#080d09] leading-tight max-w-[120px]">
                Professional support after treatment
              </p>
            </motion.div>
          </div>

        </div>

        {/* Logo Cloud Row (Rolling Marquee) */}
        <div className="mt-16 pt-8 border-t border-gray-100 overflow-hidden relative group">
          <div className="flex w-max animate-marquee-logos group-hover:[animation-play-state:paused] gap-4 lg:gap-6 py-4">
            
            {/* First Set */}
            {logos.map((logo, i) => {
              const Icon = logo.icon;
              return (
                <div
                  key={`logo1-${i}`}
                  className="bg-white border border-gray-200 px-6 lg:px-8 py-4 flex items-center gap-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-max"
                >
                  <Icon className="w-5 h-5 text-gray-400" />
                  <span className="font-bold text-[#080d09] text-sm lg:text-base font-['Outfit'] tracking-wide">
                    {logo.name}
                  </span>
                </div>
              );
            })}

            {/* Second Set (For seamless loop) */}
            {logos.map((logo, i) => {
              const Icon = logo.icon;
              return (
                <div
                  key={`logo2-${i}`}
                  className="bg-white border border-gray-200 px-6 lg:px-8 py-4 flex items-center gap-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-max"
                >
                  <Icon className="w-5 h-5 text-gray-400" />
                  <span className="font-bold text-[#080d09] text-sm lg:text-base font-['Outfit'] tracking-wide">
                    {logo.name}
                  </span>
                </div>
              );
            })}

            {/* Third Set (Extra safety for very wide screens since logos are small) */}
            {logos.map((logo, i) => {
              const Icon = logo.icon;
              return (
                <div
                  key={`logo3-${i}`}
                  className="bg-white border border-gray-200 px-6 lg:px-8 py-4 flex items-center gap-2 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-max"
                >
                  <Icon className="w-5 h-5 text-gray-400" />
                  <span className="font-bold text-[#080d09] text-sm lg:text-base font-['Outfit'] tracking-wide">
                    {logo.name}
                  </span>
                </div>
              );
            })}

          </div>
        </div>

      </div>

      {/* Inject custom keyframe animation for the marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-logos {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-33.333% - 0.5rem)); } /* Shift by exactly one set (1/3 of total width) plus gap */
        }
        .animate-marquee-logos {
          animation: marquee-logos 25s linear infinite;
          -webkit-transform: translateZ(0); /* Fix for Safari flickering */
        }
        .animate-marquee-logos:hover {
          animation-play-state: paused !important;
        }
      `}} />
    </section>
  );
}
