import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play, ArrowDown } from 'lucide-react';

export default function BlogHero() {
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
    <section className="relative w-full flex flex-col lg:flex-row h-auto lg:h-[80vh] overflow-hidden">
      
      {/* Left Side: Image & Floating Card */}
      <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-full">
        <img 
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop" 
          alt="Woman with beautiful skin" 
          className="w-full h-full object-cover object-[center_30%]"
        />

        {/* Floating Video Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12 bg-white p-4 rounded-md shadow-2xl flex items-center gap-5 w-[280px] sm:w-[320px]"
        >
          {/* Video Thumbnail Area */}
          <div className="relative w-32 h-28 rounded-md overflow-hidden shrink-0">
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/video/service-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Card Content */}
          <div className="flex flex-col gap-2">
            <button 
              onClick={togglePlay}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[#080d09] hover:bg-gray-50 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>
            <p className="text-sm font-bold text-[#080d09] leading-tight">
              Advanced <br/> skincare
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Solid Color & Content */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full bg-[#b28b6d] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 lg:py-0 pt-[100px]">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-['Outfit'] leading-[1.1] tracking-tight">
            Latest dermatology insights articles
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-16 font-medium">
            Professional dermatology knowledge resources
          </p>

          <div className="flex flex-col items-start gap-4">
            <span className="text-white text-sm font-semibold tracking-wide">Browse now</span>
            <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#b28b6d] transition-all duration-300 group">
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
