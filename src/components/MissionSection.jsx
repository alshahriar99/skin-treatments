import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

const missions = [
  {
    title: "Certified hair experts",
    description: "Cutting-edge equipment ensuring precise and reliable procedures with modern clinical standards.",
    image: "https://images.unsplash.com/photo-1583082980638-510065a3f360?q=80&w=1200"
  },
  {
    title: "Advanced treatment technology",
    description: "Modern tools ensuring safe and effective procedures with techniques following updated clinical standards.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200"
  },
  {
    title: "Proven clinical results",
    description: "Achieving consistently high success rates backed by scientific research and years of dermatological expertise.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200"
  },
  {
    title: "Personalized care plans",
    description: "Tailored treatment strategies designed specifically for your unique skin type and individual aesthetic goals.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200"
  }
];

// Helper to get scroll transition ranges for SlidingImage
const getTransitionRanges = (index) => {
  // Trans In:
  let startIn = 0, endIn = 0;
  if (index === 1) { startIn = 0.15; endIn = 0.25; }
  else if (index === 2) { startIn = 0.45; endIn = 0.55; }
  else if (index === 3) { startIn = 0.75; endIn = 0.85; }

  // Trans Out:
  let startOut = 1, endOut = 1;
  if (index === 0) { startOut = 0.15; endOut = 0.25; }
  else if (index === 1) { startOut = 0.45; endOut = 0.55; }
  else if (index === 2) { startOut = 0.75; endOut = 0.85; }

  return { startIn, endIn, startOut, endOut };
};

// GPU-Accelerated Accordion Physics
const AccordionItem = ({ item, index, scrollYProgress }) => {
  // 1. Define the "openness" (0 to 1) of each item based on scroll progress
  const o0 = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const o1 = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const o2 = useTransform(scrollYProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
  const o3 = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  // Current item's openness
  const openness = index === 0 ? o0 : index === 1 ? o1 : index === 2 ? o2 : o3;

  // 2. Calculate shiftY: sum of openness of all items ABOVE this one.
  // This pushes the current item down exactly enough to make room for the open descriptions above it.
  // We use 110px as the reserved space for the description.
  const shiftY = useTransform(
    [o0, o1, o2, o3],
    ([v0, v1, v2, v3]) => {
      let sum = 0;
      if (index > 0) sum += v0;
      if (index > 1) sum += v1;
      if (index > 2) sum += v2;
      return sum * 110; 
    }
  );

  // 3. Local animations for the text
  const ACTIVE_COLOR = "rgba(8, 13, 9, 1)";
  const INACTIVE_COLOR = "rgba(8, 13, 9, 0.4)";
  
  const color = useTransform(openness, [0, 1], [INACTIVE_COLOR, ACTIVE_COLOR]);
  const opacity = useTransform(openness, [0, 1], [0, 1]);
  const descY = useTransform(openness, [0, 1], [-15, 0]);

  return (
    <motion.div 
      style={{ y: shiftY }}
      className="border-t border-gray-200 py-5 lg:py-6 w-full bg-[#fdfcf9] z-10 relative"
    >
      <motion.h3 
        style={{ color }}
        className="text-xl lg:text-2xl font-bold relative z-20 bg-[#fdfcf9]"
      >
        {item.title}
      </motion.h3>

      {/* Description is absolutely positioned below the title so it NEVER causes layout shifts (Zero Stutter!) */}
      <motion.div
        style={{ opacity, y: descY }}
        className="absolute left-0 top-full -mt-2 pt-2 w-full pointer-events-none"
      >
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-sm">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const SlidingImage = ({ item, index, scrollYProgress }) => {
  const { startIn, endIn } = getTransitionRanges(index);

  let yMap;
  if (index === 0) {
    // The first image never slides in (it's already there) and never slides out (it stays underneath)
    yMap = "0%";
  } else {
    // Subsequent images slide UP from 100% to 0% and then stay at 0% covering the previous ones
    yMap = useTransform(scrollYProgress, [startIn, endIn], ["100%", "0%"]);
  }

  // DOM order (index) naturally handles the z-index so later images render on top!
  return (
    <motion.div
      style={{ y: yMap, zIndex: index }}
      className="absolute inset-0 w-full h-full will-change-transform rounded-xl overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
    >
      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
    </motion.div>
  );
};

const BottomBorder = ({ scrollYProgress }) => {
  const o0 = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const o1 = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const o2 = useTransform(scrollYProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
  const o3 = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  // The bottom border shifts by the sum of ALL openness values
  // Since one item is always open (sum = 1), it stays perfectly below the active description!
  const shiftY = useTransform(
    [o0, o1, o2, o3],
    ([v0, v1, v2, v3]) => (v0 + v1 + v2 + v3) * 110
  );

  return <motion.div style={{ y: shiftY }} className="border-t border-gray-200" />;
};

export default function MissionSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a butter-smooth spring physics that NEVER snaps or bounces
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,      // Low stiffness = soft, fluid motion
    damping: 20,        // High damping (overdamped) = no bounce/overshoot
    mass: 0.5,          // Some mass for that heavy, premium feel
    restDelta: 0.0001   // Tiny rest delta = NEVER snaps suddenly at the end (prevents "dakka")
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full bg-[#fdfcf9]">
      {/* Sticky viewport that stays on screen while we scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        <div className="w-full max-w-[1600px] mx-auto flex-1 flex flex-col px-6 sm:px-12 lg:px-24 pt-16 lg:pt-24 pb-20">
          
          {/* TOP ROW: Labels and Headings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 lg:mb-16">
            <div className="lg:col-span-5">
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-semibold text-[#080d09]"
              >
                • Our mission
              </motion.p>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.h2 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-3xl lg:text-5xl font-bold text-[#080d09] font-['Outfit'] leading-[1.2]"
              >
                Why patients choose our expert dermatology
              </motion.h2>
            </div>
          </div>

          {/* BOTTOM ROW: Accordion and Images */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1 min-h-0">
            
            {/* LEFT SIDE: Accordion Content */}
            <div className="lg:col-span-5 flex flex-col z-10">
              <div className="flex flex-col w-full relative pb-[120px]">
                {missions.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    item={item} 
                    index={index} 
                    scrollYProgress={smoothProgress} 
                  />
                ))}
                <BottomBorder scrollYProgress={smoothProgress} />
              </div>
            </div>

            {/* RIGHT SIDE: Sliding Images */}
            <div className="lg:col-span-6 lg:col-start-7 relative w-full h-full min-h-[300px] rounded-xl overflow-hidden bg-gray-100 shadow-2xl">
              {missions.map((item, index) => (
                <SlidingImage 
                  key={index} 
                  item={item} 
                  index={index} 
                  scrollYProgress={smoothProgress} 
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
