import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Hair restoration',
    description: 'Advanced treatments restoring natural hair growth & confidence',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Anti aging treatments',
    description: 'Effective solutions minimizing aging signs and enhancing skin',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Injectable treatments',
    description: 'Safe injectable treatments for smoother youthful skin',
    image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Mole removal',
    description: 'Advanced mole removal treatment for clear healthy skin',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Laser therapy',
    description: 'Advanced treatments restoring natural hair growth & confidence', // Used exactly from screenshot logic / text provided in screenshot (Laser therapy description looks same as hair restoration in screenshot)
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=600&auto=format&fit=crop', // A different spa/treatment photo
  },
  {
    title: 'Chemical peels',
    description: 'Advanced chemical peel treatment for skin renewal',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop',
  }
];

export default function ServiceList() {
  return (
    <section className="bg-[#f3f4ef] py-24 px-4 sm:px-6 md:px-8 lg:px-12 w-full">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-gray-600 mb-4 flex items-center justify-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gray-800"></span> Our service
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080d09] max-w-4xl mx-auto leading-tight font-['Outfit']">
            Advanced dermatology clinic providing expert skin treatment solutions
          </h2>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: (index % 2) * 0.15 }}
              className="bg-white rounded-xl p-3 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 lg:gap-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Text Content */}
              <div className="flex-1 text-center sm:text-left pl-2 sm:pl-6 lg:pl-8 sm:pr-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#080d09] mb-3 font-['Outfit']">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-500 max-w-[280px] mx-auto sm:mx-0 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full sm:w-[240px] lg:w-[280px] shrink-0 aspect-[6/5] overflow-hidden rounded-md">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
