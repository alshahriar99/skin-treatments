import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Command, Layers, Hexagon } from 'lucide-react';

export default function ProvenTreatment() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1] // Very smooth Apple-style ease
      } 
    }
  };

  const features = [
    {
      title: "Advanced skin treatment technology",
      icon: Command,
    },
    {
      title: "Safe effective medical procedures",
      icon: Layers,
    },
    {
      title: "Personalized skin care solutions",
      icon: Hexagon,
    }
  ];

  return (
    <section className="w-full bg-[#3e4637] py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Image with Parallax/Reveal Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-[500px] lg:h-[700px] rounded-3xl overflow-hidden group"
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200" 
            alt="Dermatology Treatment" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay for better contrast if needed, but keeping it clean like the screenshot */}
          <div className="absolute inset-0 bg-black/5" />
        </motion.div>

        {/* Right Side: Text & Features Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {/* Section Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-white font-medium text-sm tracking-wide mb-6 flex items-center gap-2"
          >
            <span className="text-white/60">•</span> Proven treatment
          </motion.p>

          {/* Main Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Outfit'] leading-[1.1]"
          >
            Professional dermatology clinic<br className="hidden sm:block" /> Care advantages
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-white/80 text-base lg:text-lg mb-10 max-w-xl leading-relaxed"
          >
            We go beyond surface-level care by combining clinical expertise with cutting-edge equipment.
          </motion.p>

          {/* Outline Button */}
          <motion.div variants={itemVariants}>
            <button className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-[#3e4637] transition-all duration-300">
              Meet our experts
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.div>

          {/* Features List */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex flex-col gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  <span className="text-white font-bold text-lg lg:text-xl font-['Outfit']">
                    {feature.title}
                  </span>
                </div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
