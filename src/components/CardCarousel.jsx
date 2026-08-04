import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const carouselData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800",
    title: "Restorative treatments",
    desc: "Revitalize your skin with deeply nourishing treatments designed to restore your natural balance and healthy complexion.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800",
    title: "Safe & certified experts",
    desc: "Experienced professionals providing safe, certified treatments with personalized care and trusted skincare expertise.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800",
    title: "Advanced treatment technology",
    desc: "Cutting-edge skincare solutions using modern technology to deliver precise, effective, and long-lasting visible results.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800",
    title: "Acne & scar solutions",
    desc: "Targeted therapies to clear breakouts, reduce scarring, and leave your skin smooth, even-toned, and beautifully radiant.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800",
    title: "Anti-aging treatments",
    desc: "Clinically proven anti-aging solutions to diminish fine lines, improve elasticity, and promote youthful, vibrant skin.",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800",
    title: "Laser hair removal",
    desc: "Safe and effective laser technology for permanent hair reduction, leaving your skin flawlessly smooth and care-free.",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800",
    title: "Deep pore cleansing",
    desc: "Intensive deep-cleansing facials to extract impurities, minimize pores, and refresh your skin from the inside out.",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800",
    title: "Dermatologist consultations",
    desc: "Expert one-on-one consultations to accurately diagnose skin conditions and create highly customized treatment plans.",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1615397323207-6b048590623a?q=80&w=800",
    title: "Chemical peels",
    desc: "Professional-grade peels designed to exfoliate dead skin cells, revealing a brighter, smoother, and completely renewed surface.",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    title: "Holistic skin wellness",
    desc: "A comprehensive approach blending medical dermatology with holistic care for overall skin health and inner confidence.",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800",
    title: "Microdermabrasion",
    desc: "Gentle yet effective mechanical exfoliation to improve skin texture, tone, and significantly enhance product absorption.",
  },
];

// Create a massive array (50 sets) so the user never reaches the physical end
const extendedData = Array(50)
  .fill(carouselData)
  .flat()
  .map((item, i) => ({ ...item, uniqueId: i }));

export default function CardCarousel() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(extendedData.length / 2),
  );
  const [hasInitialized, setHasInitialized] = useState(false);

  // Initial jump to the middle of the massive list
  useEffect(() => {
    if (scrollRef.current && !hasInitialized) {
      const middleIndex = Math.floor(extendedData.length / 2);
      const child = scrollRef.current.children[middleIndex];
      if (child) {
        // Calculate exact left scroll to center this item
        const scrollLeft =
          child.offsetLeft -
          scrollRef.current.clientWidth / 2 +
          child.clientWidth / 2;
        scrollRef.current.scrollTo({ left: scrollLeft, behavior: "auto" });
        setActiveIndex(middleIndex);
        setHasInitialized(true);
      }
    }
  }, [hasInitialized]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const containerCenter =
      scrollRef.current.getBoundingClientRect().left + clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(scrollRef.current.children).forEach((child, index) => {
      const childCenter =
        child.getBoundingClientRect().left + child.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Scroll by exactly one card width + gap to ensure clean snap
      const firstChild = scrollRef.current.children[0];
      const gap = window.innerWidth > 1024 ? 24 : 16;
      const scrollAmount = firstChild
        ? firstChild.clientWidth + gap
        : window.innerWidth * 0.3;

      if (direction === "right") {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#e7e2d9] h-full flex flex-col justify-center pt-0 pb-4 lg:pt-20 lg:pb-16 overflow-hidden relative">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="max-w-[1600px] w-full mx-auto px-6 sm:px-12 lg:px-10 mb-2 sm:mb-4 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080d09] max-w-4xl leading-[1.15] font-['Outfit']">
          Experience personalized skin treatments designed to restore, protect,
          and enhance your natural glow.
        </h2>
        <a
          href="#consultation"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#425045] text-white rounded-full text-sm font-medium hover:bg-[#2d3830] transition-colors whitespace-nowrap shrink-0 shadow-lg hover:shadow-xl"
        >
          Book your consultation <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Carousel Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative group w-full"
      >
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-[40%] -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-xl text-[#080d09] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-105 hidden sm:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-[40%] -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-xl text-[#080d09] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-105 hidden sm:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 lg:gap-6 px-[20vw] lg:px-[37vw] snap-x snap-mandatory scrollbar-hide pt-6 pb-4 items-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {extendedData.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={card.uniqueId}
                className={`relative flex flex-col items-center snap-center shrink-0 w-[60vw] lg:w-[24.5vw] transition-all duration-500 ease-out ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-40 hover:opacity-70"
                }`}
                onClick={() => {
                  if (!isActive && scrollRef.current) {
                    const child = scrollRef.current.children[index];
                    const scrollLeft =
                      child.offsetLeft -
                      scrollRef.current.clientWidth / 2 +
                      child.clientWidth / 2;
                    scrollRef.current.scrollTo({
                      left: scrollLeft,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {/* Polaroid Card */}
                <div
                  className={`w-full bg-[#fdfcf9] p-3 pb-6 rounded-sm cursor-pointer transition-shadow duration-500 ${
                    isActive ? "shadow-2xl" : "shadow-sm"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-5 bg-[#e7e2d9]">
                    <img
                      src={card.img}
                      alt={card.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isActive ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-center font-semibold text-sm sm:text-base lg:text-lg px-2 transition-colors duration-500 ${
                      isActive ? "text-[#080d09]" : "text-[#738276]"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Description Text */}
                <p
                  className={`mt-6 text-center text-[#526356] text-sm leading-relaxed max-w-[85%] transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
