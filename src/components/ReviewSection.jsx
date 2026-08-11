import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', // Woman smiling 1
    quote: 'Noticeable improvement in pigmentation and texture after customized dermatology plan; truly outstanding clinical care.',
    name: 'Sophia Martinez',
    location: 'Los Angeles'
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', // Woman smiling 2
    quote: 'Clear skin transformation after a tailored plan... precise, effective and confidence-boosting.',
    name: 'Liam Carter',
    location: 'London'
  },
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop', // Man smiling
    quote: 'The experts here completely restored my confidence. Highly recommended for any skin concerns.',
    name: 'Noah Williams',
    location: 'New York'
  },
  {
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop', // Woman smiling 3
    quote: 'Absolutely brilliant service. My skin has never felt better or looked this radiant before.',
    name: 'Emma Davies',
    location: 'Sydney'
  }
];

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Advance by 1 review at a time. This works for both desktop and mobile smoothly.
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // We always get 2 reviews. On mobile, we will hide the second one using Tailwind CSS.
  const visibleReviews = [
    reviews[currentIndex], 
    reviews[(currentIndex + 1) % reviews.length]
  ];

  return (
    <section className="bg-[#f3f4ef] pt-8 pb-24 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-between items-end mb-10"
        >
          <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gray-800"></span> What our clients say
          </p>

          <button 
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#363f2f] text-white flex items-center justify-center hover:bg-[#252c1f] transition-colors rounded-sm shadow-md"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </motion.div>

        {/* Reviews Track */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative min-h-[350px] md:min-h-[400px]"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {visibleReviews.map((review, idx) => (
                <div 
                  key={`${currentIndex}-${idx}`} 
                  className={`flex-col sm:flex-row gap-4 lg:gap-6 items-stretch h-full ${idx === 1 ? 'hidden md:flex' : 'flex'}`}
                >
                  {/* Image */}
                  <div className="w-full sm:w-2/5 shrink-0 overflow-hidden rounded-md h-[300px] sm:h-auto min-h-[250px]">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Text Card */}
                  <div className="w-full sm:w-3/5 bg-white p-6 md:p-8 rounded-md flex flex-col justify-between shadow-sm border border-gray-100">
                    <div>
                      <Quote className="text-[#d8dbd0] w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 fill-current" />
                      <p className="text-lg md:text-xl font-bold text-[#080d09] font-['Outfit'] leading-snug">
                        "{review.quote}"
                      </p>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold text-[#080d09]">{review.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
