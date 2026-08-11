import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogs';

export default function BlogArticles() {
  // Only show the first 2 articles in this section as requested
  const rowArticles = blogData.slice(0, 2);

  return (
    <section className="bg-[#f3f4ef] pt-24 pb-0 w-full">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {rowArticles.map((article, index) => (
            <Link 
              to={`/blog/${article.id}`}
              key={article.id}
              className="relative flex flex-col group cursor-pointer"
            >
              {/* Image Container with strict 16:9 aspect ratio */}
              <div className="w-full aspect-[16/9] overflow-hidden rounded-sm mb-6 relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Meta Data */}
              <div className="flex items-center justify-between text-xs font-semibold text-[#080d09] mb-4">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
              
              {/* Thin Bottom Line */}
              <div className="w-full h-px bg-gray-300 mb-5 relative">
                <div className="absolute right-0 top-0 h-full w-1/4 bg-[#080d09] group-hover:w-full transition-all duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#080d09] leading-snug group-hover:text-[#b28b6d] transition-colors pr-8">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
