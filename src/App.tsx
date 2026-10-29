import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsBar } from './components/MetricsBar';
import { AboutSection } from './components/AboutSection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { PillarsSection } from './components/PillarsSection';
import { SectorsSection } from './components/SectorsSection';
import { DisplayShowcase } from './components/DisplayShowcase';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedSectorForQuote, setSelectedSectorForQuote] = useState<string>('Educación');
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('Serie Pro-EDLA 75"');

  const handleOpenQuote = (productName?: string) => {
    if (productName) {
      setSelectedProductForQuote(productName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectSector = (sectorTitle: string) => {
    setSelectedSectorForQuote(sectorTitle);
    setIsQuoteModalOpen(true);
  };

  const scrollToSolutions = () => {
    const el = document.getElementById('especificaciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-roboto selection:bg-[#63359E]/15 selection:text-[#63359E] flex flex-col">
      {/* Top Bar Header */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenQuote={() => handleOpenQuote()}
          onExploreSolutions={scrollToSolutions}
        />

        {/* 2. Barra de Cifras / Métricas Clave (Grid de 4 columnas en #F8F9FA) */}
        <MetricsBar />

        {/* 3. Quiénes Somos (Layout 2 columnas) */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 4. Misión y Visión (2 Tarjetas elegantes con borde superior en #63359E) */}
        <MissionVisionSection />

        {/* 5. Pilares y Diferenciadores (Grid de 4 tarjetas) */}
        <PillarsSection />

        {/* 6. Sectores a los que servimos (3 Columnas con tags) */}
        <SectorsSection onSelectSector={handleSelectSector} />

        {/* Soluciones y Especificaciones 4K */}
        <DisplayShowcase onOpenQuote={(product) => handleOpenQuote(product)} />

        {/* 7. CTA Final (Banner de ancho completo degradado #63359E a #4A1D80) */}
        <FinalCta onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Interactive Lead Capture Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialSector={selectedSectorForQuote}
        initialProduct={selectedProductForQuote}
      />
    </div>
  );
}
