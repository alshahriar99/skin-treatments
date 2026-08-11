import React from 'react';
import ServiceHero from '../components/ServiceHero';
import ServiceList from '../components/ServiceList';
import AppointmentVideo from '../components/AppointmentVideo';
import CaseStudies from '../components/CaseStudies';
import TrustSection from '../components/TrustSection';
import ReviewSection from '../components/ReviewSection';
import ServiceFAQ from '../components/ServiceFAQ';

export default function Services() {
  return (
    <main className="relative">
      {/* Service Page Hero Section */}
      <div className="relative z-10 bg-[#080d09]">
        <ServiceHero />
      </div>
      
      {/* Service List Section */}
      <ServiceList />

      {/* Appointment Video Section */}
      <AppointmentVideo />

      {/* Case Studies Section (Reused from Home) */}
      <div className="relative z-10 w-full bg-white">
        <CaseStudies />
      </div>

      {/* Trust & Brand Logos Section */}
      <div className="relative z-10 w-full">
        <TrustSection />
      </div>

      {/* Reviews Section */}
      <div className="relative z-10 w-full">
        <ReviewSection />
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 w-full">
        <ServiceFAQ />
      </div>
    </main>
  );
}
