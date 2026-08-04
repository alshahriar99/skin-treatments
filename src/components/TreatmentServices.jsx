import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, ShieldCheck, HeartPulse, Clock, Award } from 'lucide-react';

const treatments = [
  {
    id: 'hair-restoration',
    title: 'Hair Restoration',
    category: 'Regenerative Therapy',
    description: 'Advanced PRP and stem-cell hair follicle stimulation to restore natural thickness and healthy growth.',
    tag: 'Popular',
  },
  {
    id: 'tattoo-removal',
    title: 'Pico-Laser Tattoo Removal',
    category: 'Laser Aesthetics',
    description: 'Target ink pigments with high-precision picosecond lasers with minimal discomfort and zero scarring.',
    tag: 'Precision',
  },
  {
    id: 'injectable-treatments',
    title: 'Injectable Treatments',
    category: 'Facial Sculpting',
    description: 'Custom hyaluronic acid fillers and targeted neuromodulators for smooth, youthful facial contours.',
    tag: 'Instant Results',
  },
  {
    id: 'laser-resurfacing',
    title: 'Fractional Skin Resurfacing',
    category: 'Dermal Renewal',
    description: 'Promote collagen regeneration and reverse sun damage for silky smooth, luminous skin texture.',
    tag: 'Restorative',
  },
];

export default function TreatmentServices() {
  return (
    <section id="service" className="relative bg-[#080d09] text-white py-24 px-6 sm:px-12 lg:px-16 z-20">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#c6ab82] uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-['Outfit'] text-white">
              Curated Aesthetic Treatments
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm sm:text-base">
            Every skin journey is unique. Our board-certified dermatologists design bespoke regimens using state-of-the-art medical technology.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-[#0f1712] border border-white/10 hover:border-[#c6ab82]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#c6ab82]">
                    {item.category}
                  </span>
                  <span className="text-xs text-emerald-400/90 font-mono tracking-wider">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 font-['Outfit'] group-hover:text-[#c6ab82] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300/80 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500 font-medium">Consultation required</span>
                <a
                  href="#booking"
                  className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#c6ab82] text-white group-hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#c6ab82]/10 flex items-center justify-center text-[#c6ab82]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">FDA Approved</h4>
              <p className="text-xs text-gray-400">Certified safe procedures</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#c6ab82]/10 flex items-center justify-center text-[#c6ab82]">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Personalized Care</h4>
              <p className="text-xs text-gray-400">Custom tailored plan</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#c6ab82]/10 flex items-center justify-center text-[#c6ab82]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Zero Downtime</h4>
              <p className="text-xs text-gray-400">Fast painless recovery</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#c6ab82]/10 flex items-center justify-center text-[#c6ab82]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Expert Doctors</h4>
              <p className="text-xs text-gray-400">Top dermatologists</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
