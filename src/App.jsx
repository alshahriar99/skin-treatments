import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080d09] text-white selection:bg-[#c6ab82] selection:text-[#080d09]">
        {/* Fixed Header */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        {/* Luxury Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
