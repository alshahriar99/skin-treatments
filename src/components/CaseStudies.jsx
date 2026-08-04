import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    image: "/images/case-1.png",
    title: "Anti aging treatments"
  },
  {
    id: 2,
    image: "/images/case-2.png",
    title: "Acne scar removal"
  },
  {
    id: 3,
    image: "/images/case-3.png",
    title: "Skin pigmentation correction"
  }
];

export default function CaseStudies() {
  const containerRef = useRef(null);
  
  // Track scroll progress of the entire 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Stacking Cards Logic: 
  // Card 1 stays pinned, scales down and darkens as Card 2 slides UP over it.
  // Card 2 stays pinned, scales down and darkens as Card 3 slides UP over it.

  // Image Slide (Y translation)
  const imgYRanges = [
    [[0, 1], ["0%", "0%"]], 
    [[0, 0.33, 0.66, 1], ["100%", "100%", "0%", "0%"]], 
    [[0, 0.66, 1.0], ["100%", "100%", "0%"]] 
  ];

  // Image Scale (Depth effect)
  const imgScaleRanges = [
    [[0, 0.33, 0.66, 1], [1, 1, 0.9, 0.85]], 
    [[0, 0.33, 0.66, 1], [1, 1, 1, 0.9]], 
    [[0, 1], [1, 1]] 
  ];

  // Dark Overlay Opacity (Shadowing the card underneath)
  const overlayOpacityRanges = [
    [[0, 0.33, 0.66, 1], [0, 0, 0.6, 0.8]], 
    [[0, 0.33, 0.66, 1], [0, 0, 0, 0.6]],
    [[0, 1], [0, 0]]
  ];

  // Blur Effect (Gradually blurring out the image underneath)
  const blurRanges = [
    [[0, 0.33, 0.66, 1], ["blur(0px)", "blur(0px)", "blur(12px)", "blur(16px)"]], 
    [[0, 0.33, 0.66, 1], ["blur(0px)", "blur(0px)", "blur(0px)", "blur(12px)"]],
    [[0, 1], ["blur(0px)", "blur(0px)"]]
  ];

  // Title Fade and Slide
  const titleOpacityRanges = [
    [[0, 0.25, 0.35], [1, 1, 0]], 
    [[0.45, 0.66, 0.75, 0.85], [0, 1, 1, 0]], 
    [[0.85, 1.0], [0, 1]] 
  ];

  const titleYRanges = [
    [[0, 0.25, 0.35], ["0px", "0px", "-20px"]],
    [[0.45, 0.66, 0.75, 0.85], ["20px", "0px", "0px", "-20px"]],
    [[0.85, 1.0], ["20px", "0px"]]
  ];

  return (
    <section className="w-full bg-white relative">
       {/* Height is 300vh for 3 panels of scrolling */}
       <div ref={containerRef} className="relative h-[300vh] w-full">
          
          {/* Sticky Container */}
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-20 pb-10 px-6 lg:px-12 bg-[#fdfcf9]">
             
             {/* Header Section */}
             <div className="text-center mb-8 lg:mb-12 w-full">
               <motion.p 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                 className="text-xs sm:text-sm font-semibold tracking-widest text-[#080d09] mb-4"
               >
                 • Our case study
               </motion.p>
               <motion.h2 
                 initial={{ opacity: 0, y: 80 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080d09] font-['Outfit']"
               >
                 Dermatology treatment<br className="hidden sm:block" /> case studies
               </motion.h2>
             </div>

             {/* Image Stack Container */}
             <div className="relative w-full max-w-[1300px] flex-1 max-h-[600px] lg:max-h-[800px] overflow-hidden bg-transparent perspective-[1000px]">
                {cases.map((caseItem, index) => {
                  
                  const y = useTransform(scrollYProgress, imgYRanges[index][0], imgYRanges[index][1]);
                  const scale = useTransform(scrollYProgress, imgScaleRanges[index][0], imgScaleRanges[index][1]);
                  const overlayOpacity = useTransform(scrollYProgress, overlayOpacityRanges[index][0], overlayOpacityRanges[index][1]);
                  const filter = useTransform(scrollYProgress, blurRanges[index][0], blurRanges[index][1]);

                  return (
                    <motion.div
                      key={`img-${caseItem.id}`}
                      className="absolute inset-0 w-full h-full origin-top overflow-hidden"
                      style={{
                        y,
                        scale,
                        filter,
                        zIndex: index,
                        // Add a subtle top shadow to simulate physical stacking for incoming cards
                        boxShadow: index > 0 ? "0 -20px 40px rgba(0,0,0,0.15)" : "none"
                      }}
                    >
                      <img 
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay for depth */}
                      <motion.div 
                        className="absolute inset-0 bg-black"
                        style={{ opacity: overlayOpacity }}
                      />
                    </motion.div>
                  )
                })}
             </div>

             {/* Titles Container */}
             <div className="w-full max-w-[1300px] mt-6 lg:mt-8 relative h-14 overflow-hidden">
                {cases.map((caseItem, index) => {
                  const opacity = useTransform(
                    scrollYProgress,
                    titleOpacityRanges[index][0],
                    titleOpacityRanges[index][1]
                  );
                  
                  const y = useTransform(
                    scrollYProgress,
                    titleYRanges[index][0],
                    titleYRanges[index][1]
                  );

                  return (
                    <motion.div
                      key={`title-${caseItem.id}`}
                      className="absolute inset-0 flex justify-between items-center bg-[#fdfcf9]"
                      style={{ opacity, y, zIndex: index, pointerEvents: 'none' }}
                    >
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#080d09] font-['Outfit']">
                        {caseItem.title}
                      </h3>
                      {/* Arrow Button */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 bg-white pointer-events-auto cursor-pointer hover:bg-[#080d09] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                  )
                })}
             </div>

          </div>
       </div>
    </section>
  )
}
