import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

const teamMembers = [
  { id: 1, name: "Dr. Sarah Jenkins", role: "Laser Specialist", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Dr. Michael Chen", role: "Dermatologist", image: "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Dr. Emily Roberts", role: "Cosmetic Surgeon", image: "https://plus.unsplash.com/premium_photo-1664475543697-229156438e1e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Dr. James Wilson", role: "Skin Therapist", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Dr. Olivia Davis", role: "Clinical Director", image: "https://plus.unsplash.com/premium_photo-1674760948483-e6ff62807356?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Dr. Daniel Lee", role: "Aesthetic Doctor", image: "https://images.unsplash.com/photo-1657551734497-30a09e6567bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, name: "Dr. Marcus Johnson", role: "Anti-aging Expert", image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Dr. Sophia Patel", role: "Pediatric Dermatologist", image: "https://plus.unsplash.com/premium_photo-1661341423936-40b48564a5bf?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const satisfiedClients = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
];

export default function MeetOurTeam() {
  // Container variants for staggering
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  const headingVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  return (
    <section className="w-full bg-[#efebe4] py-24 lg:py-32 overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

        {/* Left Column (Sticky Content) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {/* Header */}
            <motion.p variants={fadeUpVariant} className="text-[#080d09] font-medium text-sm tracking-wide mb-6 flex items-center gap-2">
              <span className="text-[#080d09]/50">•</span> Meet our team
            </motion.p>

            {/* Main Title */}
            <motion.h2 variants={headingVariant} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#080d09] mb-10 font-['Outfit'] leading-[1.1]">
              Professional dermatology providing advanced skin therapy
            </motion.h2>

            {/* Button */}
            <motion.div variants={fadeUpVariant}>
              <button className="group flex items-center gap-2 px-8 py-4 bg-[#3e4637] text-white rounded-full text-sm font-medium hover:bg-[#2b3126] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Learn more
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeUpVariant} className="w-full h-[1px] bg-gray-300/60 my-16" />

            {/* Satisfied Clients */}
            <motion.div variants={fadeUpVariant} className="flex items-center gap-6">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-4">
                {satisfiedClients.map((img, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-2 border-[#efebe4] overflow-hidden hover:-translate-y-2 transition-transform duration-300 relative z-10 hover:z-20 shadow-md"
                  >
                    <img src={img} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-[#080d09] font-['Outfit']">25k+</span>
                  <div className="flex text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <span className="text-sm text-gray-500 font-medium">Satisfied clients</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column (Team Grid) */}
        <div className="lg:col-span-7 lg:pl-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={imageVariant}
                className="group relative w-full aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-200"
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Overlay (Glassmorphism) - Slides up on hover */}
                <div className="absolute inset-x-2 bottom-2 translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out backdrop-blur-md bg-white/70 border border-white/50 p-4 rounded-xl shadow-lg flex flex-col items-center text-center">
                  <h4 className="text-[#080d09] font-bold text-sm lg:text-base font-['Outfit'] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {member.name}
                  </h4>
                  <p className="text-xs text-[#3e4637] font-medium mt-1">
                    {member.role}
                  </p>
                </div>

                {/* Subtle dark gradient at the bottom for default contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
