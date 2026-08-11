import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogs';

const rows = [
  { id: 'row1', title: 'Trending Articles', articles: blogData.slice(2, 11) },
  { id: 'row2', title: 'Clinical Perspectives', articles: [...blogData.slice(2, 11)].reverse() },
  { id: 'row3', title: 'Skincare Guides', articles: [...blogData.slice(6, 11), ...blogData.slice(2, 6)] },
];

export default function BlogScrollArticles() {
  return (
    <section className="bg-[#f3f4ef] pt-8 lg:pt-12 pb-12 lg:pb-20 w-full overflow-hidden">
      
      {rows.map((row) => (
        <div key={row.id} className="mb-6 lg:mb-8 last:mb-0 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#080d09] font-['Outfit'] mb-6">
            {row.title}
          </h2>

          {/* Horizontal Scroll Container */}
          <div className="w-full">
            <div className="flex gap-6 lg:gap-12 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
              {row.articles.map((article, index) => (
                <Link 
                  to={`/blog/${article.id}`}
                  key={`${row.id}-${article.id}`}
                  className="relative flex flex-col group cursor-pointer w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-2rem)] shrink-0 snap-start"
                >
                  {/* Image */}
                  <div className="w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-sm mb-5 relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Meta Data */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[#080d09] mb-3 px-1">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  {/* Bottom Line */}
                  <div className="relative w-full h-[1px] bg-gray-300/80 mb-4 overflow-hidden">
                    <div className="absolute right-0 top-0 h-full w-1/4 bg-[#080d09] group-hover:w-full transition-all duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#080d09] leading-snug group-hover:text-[#b28b6d] transition-colors px-1 pr-4">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
