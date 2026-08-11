import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Price from './pages/Price';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#080d09] text-white selection:bg-[#c6ab82] selection:text-[#080d09]">
        {/* Fixed Header */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/price" element={<Price />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Luxury Footer */}
        <Footer />
      </div>
    </Router>
  );
}
