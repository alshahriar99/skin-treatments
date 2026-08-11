import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flower2, Droplets, Sparkles, Sun, Wind, Aperture } from 'lucide-react';

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=600&auto=format&fit=crop', // Plant behind glass-like look
    title: 'Advanced treatments with clinical excellence',
    description: 'Advanced treatments delivered with clinical excellence',
  },
  {
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop', // Woman with leaf
    title: 'Trusted experts delivering proven results',
    description: 'Experienced specialists delivering reliable proven outcomes',
  },
  {
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=600&auto=format&fit=crop', // Potted plant
    title: 'Personalized care backed by expertise',
    description: 'Customized skin care solutions delivered by experienced professionals',
  }
];

const brands = [
  { name: 'Dermalix', icon: Aperture },
  { name: 'Oviroot', icon: Flower2 },
  { name: 'Skinmedic', icon: Droplets },
  { name: 'Serennto', icon: Sparkles },
  { name: 'Clyno Derma', icon: Sun },
  { name: 'Follicare', icon: Wind },
];

export default function TrustSection() {
  return (
    <section className="bg-[#f3f4ef] py-24 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-gray-600 mb-4 flex items-center justify-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gray-800"></span> Proven care excellence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080d09] max-w-3xl mx-auto leading-tight font-['Outfit'] mb-4">
            Why trust our expert skin care clinic
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Personalized care backed by expertise
          </p>
        </motion.div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Area */}
              <div className="w-full aspect-[4/3] overflow-hidden p-2.5 pb-0">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover rounded-t-md transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              
              {/* Text Area */}
              <div className="p-8 flex flex-col items-center text-center flex-1">
                <h3 className="text-xl font-bold text-[#080d09] mb-4 font-['Outfit']">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Looping Marquee Logos */}
        <div className="w-full bg-[#f3f4ef] py-6 relative flex flex-col justify-center overflow-hidden">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f3f4ef] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f3f4ef] to-transparent z-10 pointer-events-none"></div>

          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {/* We duplicate the array 4 times to ensure it loops smoothly without gaps */}
            {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => {
              const Icon = brand.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white h-[90px] w-[220px] flex items-center justify-center gap-3 rounded-lg shadow-sm shrink-0"
                >
                  <Icon className="w-6 h-6 text-[#080d09]" />
                  <span className="font-semibold text-lg text-[#080d09] font-['Outfit']">
                    {brand.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
