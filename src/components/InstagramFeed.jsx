import React from 'react';
import { motion } from 'framer-motion';

const InstagramIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const feedImages = [
  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618060932014-4deda4932554?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598661643465-e7f093019808?q=80&w=600&auto=format&fit=crop"
];

export default function InstagramFeed() {
  return (
    <section className="w-full bg-white py-24 lg:py-32 overflow-hidden">
      
      {/* Header Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 mb-20 lg:mb-28 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Instagram Icon Box */}
          <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-8 text-gray-400 hover:text-black hover:border-black transition-colors duration-300 cursor-pointer">
            <InstagramIcon className="w-6 h-6" />
          </div>
          
          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080d09] font-['Outfit'] max-w-2xl leading-[1.2]"
          >
            Stay connected with our dermatology clinic
          </motion.h2>
        </motion.div>
      </div>

      {/* Marquee Gallery */}
      <div className="relative w-full overflow-hidden group py-12">
        <div className="flex w-max animate-marquee-insta group-hover:[animation-play-state:paused]">
          
          {/* Set 1 */}
          <div className="flex gap-6 lg:gap-8 px-3 lg:px-4">
            {feedImages.map((src, index) => (
              <div 
                key={`set1-${index}`} 
                className={`w-[260px] md:w-[300px] lg:w-[350px] aspect-square flex-shrink-0 relative overflow-hidden group/item cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 
                  ${index % 2 === 0 ? 'translate-y-8 lg:translate-y-12' : '-translate-y-8 lg:-translate-y-12'}`}
              >
                <img 
                  src={src} 
                  alt="Clinic aesthetic" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover/item:scale-110" 
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-12 h-12 text-white transform scale-50 group-hover/item:scale-100 transition-transform duration-300 ease-out" />
                </div>
              </div>
            ))}
          </div>

          {/* Set 2 (For seamless looping) */}
          <div className="flex gap-6 lg:gap-8 px-3 lg:px-4">
            {feedImages.map((src, index) => (
              <div 
                key={`set2-${index}`} 
                className={`w-[260px] md:w-[300px] lg:w-[350px] aspect-square flex-shrink-0 relative overflow-hidden group/item cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 
                  ${index % 2 === 0 ? 'translate-y-8 lg:translate-y-12' : '-translate-y-8 lg:-translate-y-12'}`}
              >
                <img 
                  src={src} 
                  alt="Clinic aesthetic" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover/item:scale-110" 
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-12 h-12 text-white transform scale-50 group-hover/item:scale-100 transition-transform duration-300 ease-out" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Global styles for the marquee animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-insta {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-insta {
          animation: marquee-insta 40s linear infinite;
          -webkit-transform: translateZ(0);
          will-change: transform;
        }
        .animate-marquee-insta:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
