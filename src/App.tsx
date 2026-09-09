/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { DedicatedSection } from './components/DedicatedSection';
import { WhyChooseBanner } from './components/WhyChooseBanner';
import { ServicesDetailed } from './components/ServicesDetailed';
import { AreasLisboa } from './components/AreasLisboa';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceCategory } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceCategory>('domestica');

  const handleOpenQuote = (serviceType: ServiceCategory = 'domestica') => {
    setSelectedServiceForModal(serviceType);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenQuote={() => handleOpenQuote('domestica')} />

      {/* Hero Section (Matching modelo-referencia.jpeg) */}
      <main className="flex-1">
        <Hero onOpenQuote={() => handleOpenQuote('domestica')} />

        {/* Section 2: High Quality Cleaning Solutions (Matching reference 4-card grid) */}
        <SolutionsSection onOpenQuote={() => handleOpenQuote('comercial')} />

        {/* Section 3: Dedicated to Clean, Committed to You (Matching reference wide dual banner) */}
        <DedicatedSection onOpenQuote={() => handleOpenQuote('domestica')} />

        {/* Section 4: Experience Cleaning Like Never Before (Matching reference coral pink banner) */}
        <WhyChooseBanner onOpenQuote={() => handleOpenQuote('domestica')} />

        {/* Specialized Breakdown: Residencial, Comercial, Pós-Obra */}
        <ServicesDetailed onSelectService={(s) => handleOpenQuote(s)} />

        {/* Coverage Areas: Lisboa e arredores */}
        <AreasLisboa onOpenQuote={() => handleOpenQuote('domestica')} />

        {/* Social Proof & FAQs */}
        <FaqSection />
      </main>

      {/* Footer matching reference */}
      <Footer onOpenQuote={() => handleOpenQuote('domestica')} />

      {/* Interactive Quote & WhatsApp Booking Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialService={selectedServiceForModal}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
