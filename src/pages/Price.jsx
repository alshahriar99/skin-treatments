import React from 'react';
import PricingHero from '../components/PricingHero';
import PricingCards from '../components/PricingCards';
import PricingPackages from '../components/PricingPackages';
import PricingFAQ from '../components/PricingFAQ';
import PricingVideoCTA from '../components/PricingVideoCTA';

export default function Price() {
  return (
    <main className="relative w-full bg-[#f3f4ef]">
      {/* Hero Section */}
      <PricingHero />
      
      {/* Core Pricing Plans */}
      <PricingCards />

      {/* Memberships & Packages */}
      <PricingPackages />

      {/* Billing & Policies FAQ */}
      <PricingFAQ />

      {/* Video CTA Section */}
      <PricingVideoCTA />
    </main>
  );
}
