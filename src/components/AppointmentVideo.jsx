import React, { useRef, useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AppointmentVideo() {
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
    <section className="bg-[#464f43] py-24 px-4 sm:px-6 md:px-8 lg:px-12 w-full">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 font-['Outfit']">
              Dermatology appointment request
            </h2>
            <a 
              href="mailto:info@example.com" 
              className="text-xl md:text-2xl font-semibold underline underline-offset-8 decoration-2 hover:text-gray-300 transition-colors"
            >
              info@example.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Link to="/contact" className="bg-white text-[#080d09] px-6 py-2.5 rounded-full font-medium text-sm sm:text-base flex items-center gap-2 hover:bg-gray-200 transition-colors">
              Contact us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Video Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-2xl"
        >
          <video
            ref={videoRef}
            src="/images/video/service-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>

          {/* Custom Controls Overlays */}
          <div className="absolute top-6 right-6 z-10">
            <button 
              onClick={togglePlay}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 md:w-5 md:h-5 fill-white" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5 fill-white" />
              )}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
