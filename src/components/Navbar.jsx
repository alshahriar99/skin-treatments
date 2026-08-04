import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300 pointer-events-auto">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#1b241c] border border-[#3d4d41] flex items-center justify-center text-[#c6ab82] group-hover:bg-[#c6ab82] group-hover:text-[#080d09] transition-colors duration-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
            Lumina
          </span>
        </a>

        {/* Center Pill Nav (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-lg">
          <a
            href="#home"
            className="px-4 py-1.5 rounded-full bg-[#303d33] text-white text-sm font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#service"
            className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
          >
            Service
          </a>
          <a
            href="#pages"
            className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
          >
            Pages
          </a>
          <a
            href="#blog"
            className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 bg-black/30 hover:bg-white hover:text-black text-white text-sm font-medium backdrop-blur-sm transition-all duration-300 group"
          >
            <span>Book appointment</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-black/40 border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-6 rounded-2xl bg-[#0e1610]/95 border border-white/10 backdrop-blur-xl flex flex-col gap-4 text-center animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#home" className="text-white font-medium text-lg py-1">Home</a>
          <a href="#about" className="text-white/80 font-medium text-lg py-1">About</a>
          <a href="#service" className="text-white/80 font-medium text-lg py-1">Service</a>
          <a href="#pages" className="text-white/80 font-medium text-lg py-1">Pages</a>
          <a href="#blog" className="text-white/80 font-medium text-lg py-1">Blog</a>
          <a href="#contact" className="text-white/80 font-medium text-lg py-1">Contact</a>
          <a
            href="#booking"
            className="mt-2 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[#c6ab82] text-black font-semibold text-sm"
          >
            <span>Book appointment</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
