import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogs';

export default function BlogDetails() {
  const { id } = useParams();
  
  // Find the blog post based on the ID, fallback to the first one if not found
  const blogId = parseInt(id) || 1;
  const currentBlog = blogData.find(b => b.id === blogId) || blogData[0];

  // Scroll to top when loading a new blog post
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="w-full bg-white relative">
      {/* 
        HERO IMAGE 
        We use the current blog's image for the hero section
      */}
      <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative">
        <img 
          src={currentBlog.image} 
          alt={currentBlog.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* LEFT SIDEBAR - AUTHOR CARD */}
          <aside className="w-full lg:w-[300px] shrink-0">
            {/* Sticky container so it stays visible while scrolling the article */}
            <div className="sticky top-32 bg-[#f9f9f9] p-8 flex flex-col items-center text-center rounded-sm">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                  alt={currentBlog.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[#080d09] text-lg">{currentBlog.author}</h3>
              <p className="text-gray-500 text-sm mb-6">Senior Author</p>
              
              <div className="w-full h-px bg-gray-200 mb-6"></div>
              
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{currentBlog.date}, 2024</span>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN - ARTICLE BODY */}
          <article className="w-full max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#080d09] leading-tight mb-8 font-['Outfit']">
              {currentBlog.title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                <strong>Introduction</strong><br/>
                Maintaining healthy, glowing skin requires a combination of routine care, premium products, and dermatological expertise. 
                Whether you're dealing with acne, signs of aging, or just want to improve your skin's overall texture, understanding the 
                science behind skin treatments is crucial. This article delves deep into professional skincare methods.
              </p>

              <h3 className="text-xl font-bold text-[#080d09] mt-8 mb-4">What this article covers</h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li>Detailed breakdowns of various skin types and their specific treatments.</li>
                <li>Expert advice on integrating active ingredients like retinoids and AHAs.</li>
                <li>Safety guidelines for at-home chemical peels and exfoliators.</li>
                <li>How to maintain results after professional clinical procedures like microneedling.</li>
              </ul>

              <div className="w-full my-10 aspect-[21/9] overflow-hidden rounded-sm">
                <img 
                  src={currentBlog.image} 
                  alt="Woman applying face mask" 
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-[#080d09] mt-8 mb-4">Important text for the content</h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li>Always consult a dermatologist before starting intensive treatments.</li>
                <li>Patch testing is essential when introducing new, potent active ingredients.</li>
                <li>Sunscreen is non-negotiable; always wear SPF 30+ daily regardless of weather.</li>
              </ul>

              <h3 className="text-xl font-bold text-[#080d09] mt-8 mb-4">Key dermatology topics explained</h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li><strong>Collagen Production:</strong> How treatments stimulate structural proteins for youthful skin.</li>
                <li><strong>Hyperpigmentation:</strong> Addressing dark spots using Vitamin C, Niacinamide, and laser therapies.</li>
                <li><strong>Skin Barrier Health:</strong> The importance of ceramides and fatty acids in preventing moisture loss.</li>
                <li><strong>Acne Management:</strong> Differentiating between hormonal breakouts and bacterial acne.</li>
              </ul>

              <div className="w-full my-10 aspect-[21/9] overflow-hidden rounded-sm">
                <img 
                  src={currentBlog.image} 
                  alt="Dermatologist examining patient" 
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-[#080d09] mt-8 mb-4">Benefits for readers</h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li>Gain a scientifically-backed understanding of how anti-aging products work.</li>
                <li>Learn to build a skincare routine tailored specifically to your needs.</li>
                <li>Make informed decisions when booking clinical aesthetic treatments.</li>
              </ul>

              <p>
                <strong>Conclusion</strong><br/>
                Taking care of your skin is a lifelong journey. By staying informed about the latest dermatological advancements and 
                consistently following a routine prescribed by professionals, you can achieve and maintain radiant, healthy skin for years to come.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* RECENT ARTICLES SECTION */}
      <section className="w-full bg-[#f3f4ef] py-16 lg:py-24">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#080d09] font-['Outfit'] mb-10">
            Recent articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                id: 4,
                image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
                author: "Sandra Bell",
                date: "12 Apr",
                title: "Medically reviewed articles supporting effective skin treatment choices"
              },
              {
                id: 5,
                image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
                author: "Martin Cloypool",
                date: "10 Apr",
                title: "Clinical perspectives on preventive and corrective skin treatments"
              },
              {
                id: 6,
                image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop",
                author: "Sarah Jenkins",
                date: "08 Apr",
                title: "Practical skincare guidance from board-certified dermatologists"
              }
            ].map((article) => (
              <Link 
                to={`/blog/${article.id}`} 
                key={article.id} 
                className="relative flex flex-col group cursor-pointer"
              >
                <div className="w-full aspect-[16/9] overflow-hidden rounded-sm mb-5 relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="flex items-center justify-between text-xs font-semibold text-[#080d09] mb-3 px-1">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
                
                <div className="relative w-full h-[1px] bg-gray-300/80 mb-4 overflow-hidden">
                  <div className="absolute right-0 top-0 h-full w-1/4 bg-[#080d09] group-hover:w-full transition-all duration-500" />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-[#080d09] leading-snug group-hover:text-[#b28b6d] transition-colors px-1 pr-4">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
