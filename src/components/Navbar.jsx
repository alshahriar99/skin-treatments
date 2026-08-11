import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
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
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b241c] border border-[#3d4d41] flex items-center justify-center text-[#c6ab82] group-hover:bg-[#c6ab82] group-hover:text-[#080d09] transition-colors duration-300">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Outfit']">
            Lumina
          </span>
        </Link>

        {/* Center Pill Nav (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-lg">
          <Link
            to="/"
            className={`px-5 py-2 rounded-full text-base font-medium transition-all ${
              location.pathname === '/' 
                ? 'bg-white/10 text-white shadow-sm' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`px-5 py-2 rounded-full text-base font-medium transition-all ${
              location.pathname === '/services' 
                ? 'bg-white/10 text-white shadow-sm' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Service
          </Link>
          <Link
            to="/price"
            className={`px-5 py-2 rounded-full text-base font-medium transition-all ${
              location.pathname === '/price' 
                ? 'bg-white/10 text-white shadow-sm' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Price
          </Link>
          <Link
            to="/blog"
            className={`px-5 py-2 rounded-full text-base font-medium transition-all ${
              location.pathname === '/blog' 
                ? 'bg-white/10 text-white shadow-sm' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`px-5 py-2 rounded-full text-base font-medium transition-all ${
              location.pathname === '/contact' 
                ? 'bg-white/10 text-white shadow-sm' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 bg-black/30 hover:bg-white hover:text-black text-white text-sm font-medium backdrop-blur-sm transition-all duration-300 group"
          >
            <span>Book appointment</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
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
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname === '/' ? 'text-white font-bold' : 'text-white/80 font-medium'} text-lg py-1`}>Home</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname === '/services' ? 'text-white font-bold' : 'text-white/80 font-medium'} text-lg py-1`}>Service</Link>
          <Link to="/price" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname === '/price' ? 'text-white font-bold' : 'text-white/80 font-medium'} text-lg py-1`}>Price</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname === '/blog' ? 'text-white font-bold' : 'text-white/80 font-medium'} text-lg py-1`}>Blog</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`${location.pathname === '/contact' ? 'text-white font-bold' : 'text-white/80 font-medium'} text-lg py-1`}>Contact</Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[#c6ab82] text-black font-semibold text-sm"
          >
            <span>Book appointment</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
