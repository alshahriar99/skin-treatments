import React from 'react';
import { motion } from 'framer-motion';

export default function ContactLocation() {
  return (
    <section className="w-full bg-[#f3f4ef] pb-20 lg:pb-32">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] rounded-sm overflow-hidden"
        >
          {/* Main Clinic Image */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Clinic Reception" 
            className="w-full h-full object-cover"
          />

          {/* Floating Location Card */}
          <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-[#1a110a]/90 backdrop-blur-sm p-3 md:p-4 rounded-none w-[280px] md:w-[320px] shadow-2xl">
            {/* Video Player */}
            <div className="w-full h-32 md:h-40 rounded-none overflow-hidden mb-4 relative">
              <video 
                src="/images/video/service-video.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              ></video>
            </div>

            {/* Address Info */}
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Find our clinic</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  123 Riverbend,<br />
                  California 94025, USA
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
