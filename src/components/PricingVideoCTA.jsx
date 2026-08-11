import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Pause, ArrowUpRight } from 'lucide-react';

export default function PricingVideoCTA() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/video/price-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Play/Pause Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={togglePlay}
          className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 mb-8 backdrop-blur-sm"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-white" />
          ) : (
            <Play className="w-5 h-5 fill-white ml-0.5" />
          )}
        </motion.button>

        {/* Text */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-['Outfit'] leading-tight"
        >
          Need a personalized <br className="hidden sm:block" />
          dermatology treatment quote?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto"
        >
          Every skin condition needs personalized treatment and pricing.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black text-white text-sm font-medium backdrop-blur-md transition-all duration-300 group"
          >
            <span>Book an appointment</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
