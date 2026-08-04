import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#050806] text-white pt-20 pb-12 px-6 sm:px-12 lg:px-16 border-t border-white/10 z-20">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-16">
        
        {/* Call to Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#121c15] to-[#0c140e] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c6ab82] mb-2 block">
              Begin Your Skin Journey
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-white">
              Ready for smooth, radiant skin?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg">
              Schedule your private consultation with our aesthetic specialists today.
            </p>
          </div>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c6ab82] hover:bg-white text-black font-semibold transition-all duration-300 shadow-xl group"
          >
            <span>Book Appointment Now</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#c6ab82]/20 flex items-center justify-center text-[#c6ab82]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="font-['Outfit'] text-2xl font-bold tracking-tight text-white">
                Lumina
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Pioneering clinical skin care and medical aesthetic treatments tailored for timeless beauty.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#c6ab82] mb-4">
              Treatments
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hair Restoration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tattoo Removal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Injectables & Fillers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laser Resurfacing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#c6ab82] mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#service" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Latest Articles</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Clinic</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#c6ab82] mb-4">
              Clinic Location
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              742 Evergreen Aesthetics Blvd,<br />
              Suite 400, Beverly Hills, CA 90210
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Mon — Sat: 9:00 AM - 7:00 PM
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4"
        >
          <p>© {new Date().getFullYear()} Lumina Skin Treatment Clinic. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
