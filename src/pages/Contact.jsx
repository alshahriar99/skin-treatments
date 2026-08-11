import React, { useEffect } from 'react';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactLocation from '../components/ContactLocation';
import ContactFAQ from '../components/ContactFAQ';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-[#f3f4ef] min-h-screen relative overflow-hidden">
      <ContactHero />
      <ContactForm />
      <ContactLocation />
      <ContactFAQ />
    </main>
  );
}
