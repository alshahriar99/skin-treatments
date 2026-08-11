import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="w-full py-20 lg:py-32 bg-[#f3f4ef]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Image and Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="w-full aspect-[4/3] rounded-sm overflow-hidden mb-10">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop" 
                alt="Dermatology Consultation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[#080d09] pb-6 border-b border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="font-semibold text-lg">Call us: <span className="font-normal">(888) 1234-567</span></p>
              </div>
              
              <div className="flex items-center gap-4 text-[#080d09] pb-6 border-b border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold text-lg">Email us: <span className="font-normal">info@example.com</span></p>
              </div>
              
              <p className="text-gray-500 pt-4 text-sm max-w-sm leading-relaxed font-semibold">
                Ready to start your journey toward healthier, glowing skin with our expert care?
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col pt-4 lg:pt-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080d09] font-['Outfit'] leading-tight mb-4">
              Request expert<br className="hidden lg:block"/> dermatology advice now
            </h2>
            <p className="text-gray-500 mb-12">
              Specialized advice for better skin.
            </p>

            <form className="space-y-10">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none focus:border-[#080d09] transition-colors placeholder:text-[#080d09] text-[#080d09]"
                />
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none focus:border-[#080d09] transition-colors placeholder:text-[#080d09] text-[#080d09]"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none focus:border-[#080d09] transition-colors placeholder:text-[#080d09] text-[#080d09]"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none focus:border-[#080d09] transition-colors placeholder:text-[#080d09] text-[#080d09]"
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none focus:border-[#080d09] transition-colors text-[#080d09] appearance-none cursor-pointer">
                    <option value="" disabled selected>Custom consultation type</option>
                    <option value="acne">Acne Treatment</option>
                    <option value="anti-aging">Anti-Aging</option>
                    <option value="general">General Checkup</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-1/2 -translate-y-[15px] h-4 w-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none focus:border-[#080d09] transition-colors text-[#080d09] appearance-none cursor-pointer">
                    <option value="" disabled selected>Choose time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (1pm - 4pm)</option>
                    <option value="evening">Evening (5pm - 8pm)</option>
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-1/2 -translate-y-[15px] h-4 w-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Row 4 */}
              <div className="pt-2">
                <textarea 
                  placeholder="Type message" 
                  rows="1"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none focus:border-[#080d09] transition-colors placeholder:text-[#080d09] text-[#080d09] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="button" 
                  className="px-8 py-3 bg-[#2b3528] hover:bg-[#1a2118] text-white rounded-full font-semibold flex items-center gap-2 transition-all group"
                >
                  Inquire now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
