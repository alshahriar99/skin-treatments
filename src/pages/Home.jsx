import React from 'react';
import CinematicHero from '../components/CinematicHero';
import CardCarousel from '../components/CardCarousel';
import StackedSections from '../components/StackedSections';
import MissionSection from '../components/MissionSection';
import PopularServices from '../components/PopularServices';
import WhyChooseUs from '../components/WhyChooseUs';
import ProvenTreatment from '../components/ProvenTreatment';
import CaseStudies from '../components/CaseStudies';
import MeetOurTeam from '../components/MeetOurTeam';
import InstagramFeed from '../components/InstagramFeed';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-10 bg-[#080d09]">
        <CinematicHero />
      </div>
      
      {/* Normal Carousel Section */}
      <div className="relative z-10 w-full bg-[#e7e2d9] pb-0">
        <CardCarousel />
      </div>

      {/* Stacked Sections */}
      <div className="relative z-10 w-full bg-[#080d09]">
        <StackedSections />
      </div>

      {/* Mission Section (Sticky Accordion) */}
      <div className="relative z-10 w-full bg-[#fdfcf9]">
        <MissionSection />
      </div>
      
      {/* Popular Services Marquee */}
      <div className="relative z-10 w-full bg-[#edf0ec]">
        <PopularServices />
      </div>

      {/* Why Choose Us (Bento Grid) */}
      <div className="relative z-10 w-full bg-white">
        <WhyChooseUs />
      </div>

      {/* Proven Treatment */}
      <div className="relative z-10 w-full bg-[#3e4637]">
        <ProvenTreatment />
      </div>

      {/* Case Studies (Sticky Scroll) */}
      <div className="relative z-10 w-full bg-white">
        <CaseStudies />
      </div>

      {/* Meet Our Team */}
      <div className="relative z-10 w-full bg-[#efebe4]">
        <MeetOurTeam />
      </div>

      {/* Instagram Feed (Staggered Marquee) */}
      <div className="relative z-10 w-full bg-white">
        <InstagramFeed />
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 w-full bg-[#fdfcf9]">
        <FAQ />
      </div>
    </main>
  );
}
