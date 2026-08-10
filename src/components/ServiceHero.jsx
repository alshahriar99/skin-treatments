import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform mouse position to slightly move the frame
  const frameX = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const frameY = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);

  // Inverse movement for the inner image so it stays locked to the background!
  const imgX = useTransform(smoothX, [-0.5, 0.5], [35, -35]);
  const imgY = useTransform(smoothY, [-0.5, 0.5], [35, -35]);

  const handleMouseMove = (e) => {
    // Normalize mouse position to -0.5 to 0.5
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#dccbb9]"
    >
      {/* 1. Blurred Background Layer */}
      <img 
        src="/images/service-hero.png" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover scale-[1.05] blur-[12px] brightness-95"
      />

      {/* 2. Left Content */}
      <div className="absolute left-6 sm:left-12 md:left-24 lg:left-40 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-['Outfit'] mb-6 drop-shadow-md">
          Dermatology<br/>professionals
        </h1>
        <button className="pointer-events-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white transition-all flex items-center gap-2 text-sm font-medium">
          Explore now <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* 3. The Moving Mobile Frame */}
      <motion.div 
        style={{ x: frameX, y: frameY }}
        className="relative z-10 w-[320px] sm:w-[380px] md:w-[440px] aspect-[2/3] rounded-[2.5rem] border border-white/40 shadow-2xl overflow-hidden"
      >
        {/* Inner shadow/glare for glass effect */}
        <div className="absolute inset-0 z-20 rounded-[2.5rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] pointer-events-none" />
        
        {/* The Crisp Inner Image (Inverse Parallax) */}
        <motion.img 
          style={{ x: imgX, y: imgY }}
          src="/images/service-hero.png" 
          alt="Crisp Hero" 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh] object-cover pointer-events-none"
        />
      </motion.div>

      {/* 4. Right Bottom Floating Card */}
      <div className="absolute right-6 sm:right-12 md:right-24 lg:right-40 bottom-12 md:bottom-24 z-20 pointer-events-none">
        <div className="bg-white rounded-[2rem] p-6 shadow-xl w-auto max-w-[340px]">
          <div className="flex items-center gap-4 mb-4">
            {/* Avatars */}
            <div className="flex -space-x-4">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Client 1" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Client 2" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Client 3" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
            </div>
            
            {/* 25k Stats */}
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#080d09] leading-none font-['Outfit']">25k</span>
              <span className="text-xs font-medium text-gray-500 mt-1">Satisfied clients</span>
            </div>
          </div>
          
          {/* Subtext */}
          <p className="text-xs font-semibold text-gray-400 mt-2">
            Dermatological facials &bull; Anti-aging &bull; Skin therapy
          </p>
        </div>
      </div>
    </section>
  );
}
