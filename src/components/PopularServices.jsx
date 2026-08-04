import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Hydrafacial therapy",
    description: "Instant glow with deep hydration",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800",
  },
  {
    id: 2,
    title: "Microneedling",
    description: "Stimulates collagen for firmer, youthful skin",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800",
  },
  {
    id: 3,
    title: "Laser skin resurfacing",
    description: "Improves tone, texture, and fine lines",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800",
  },
  {
    id: 4,
    title: "Chemical Peels",
    description: "Exfoliates for a smoother, brighter complexion",
    image: "https://images.unsplash.com/photo-1615397323207-6b048590623a?q=80&w=800",
  },
  {
    id: 5,
    title: "Dermal Fillers",
    description: "Restores volume and smooths facial wrinkles",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800",
  },
  {
    id: 6,
    title: "Laser Hair Removal",
    description: "Safe and permanent hair reduction",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800",
  },
];

export default function PopularServices() {
  return (
    <section className="w-full bg-[#edf0ec] py-20 lg:py-32 overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center px-6 mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs sm:text-sm font-semibold tracking-widest text-[#080d09] mb-4"
        >
          • Popular services
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080d09] font-['Outfit']"
        >
          Results-driven treatments you can trust
        </motion.h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full group">
        
        {/* We use two identical blocks of cards to create the seamless loop.
            The animate-marquee class shifts them by -50% to create the infinite scroll. */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-4 sm:gap-6 px-2 sm:px-3">
          
          {/* First Set */}
          {services.map((service) => (
            <div 
              key={`first-${service.id}`} 
              className="relative w-[320px] sm:w-[480px] lg:w-[650px] xl:w-[750px] aspect-square rounded-xl overflow-hidden cursor-pointer group/card"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:p-12 flex flex-col justify-end">
                <h3 className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* Second Set (Duplicate for seamless loop) */}
          {services.map((service) => (
            <div 
              key={`second-${service.id}`} 
              className="relative w-[320px] sm:w-[480px] lg:w-[650px] xl:w-[750px] aspect-square rounded-xl overflow-hidden cursor-pointer group/card"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:p-12 flex flex-col justify-end">
                <h3 className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      {/* Bottom Pill */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 flex justify-center px-6"
      >
        <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 sm:px-8 sm:py-4 shadow-sm border border-gray-100">
          <div className="text-gray-400">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-gray-600">
            Safe and clinically proven dermatology treatments for radiant skin and strong hair.
          </p>
        </div>
      </motion.div>

      {/* Inject custom keyframe animation for the marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          -webkit-transform: translateZ(0); /* Fix for Safari flickering */
        }
        .animate-marquee:hover {
          animation-play-state: paused !important;
        }
      `}} />
    </section>
  );
}
