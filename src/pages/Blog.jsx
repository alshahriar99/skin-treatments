import React from 'react';
import BlogHero from '../components/BlogHero';
import BlogArticles from '../components/BlogArticles';
import BlogScrollArticles from '../components/BlogScrollArticles';

export default function Blog() {
  return (
    <main className="relative w-full bg-[#f3f4ef]">
      <BlogHero />
      <BlogArticles />
      <BlogScrollArticles />
    </main>
  );
}
