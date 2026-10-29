import React, { useState } from 'react';
import { Menu, X, ArrowRight, Monitor, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-[#63359E] flex items-center justify-center text-white shadow-md shadow-[#63359E]/20 group-hover:scale-105 transition-transform">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-black font-roboto flex items-center gap-1">
                InfinityPro <span className="text-[#63359E] font-medium text-sm px-1.5 py-0.5 rounded bg-[#63359E]/10">México</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#54595F]">
            <a href="#hero" className="hover:text-[#63359E] transition-colors whitespace-nowrap shrink-0">
              Inicio
            </a>
            <a href="#quienes-somos" className="hover:text-[#63359E] transition-colors whitespace-nowrap shrink-0">
              Quiénes Somos
            </a>
            <a href="#mision-vision" className="hover:text-[#63359E] transition-colors whitespace-nowrap shrink-0">
              Misión y Visión
            </a>
            <a href="#pilares" className="hover:text-[#63359E] transition-colors whitespace-nowrap shrink-0">
              Diferenciadores
            </a>
            <a href="#sectores" className="hover:text-[#63359E] transition-colors whitespace-nowrap shrink-0">
              Sectores
            </a>
            <a href="#especificaciones" className="hover:text-[#63359E] transition-colors whitespace-nowrap shrink-0">
              Pantallas 4K
            </a>
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+525558700000"
              className="hidden lg:flex items-center gap-2 text-xs font-medium text-[#54595F] hover:text-[#63359E] px-3 py-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#61CE70]" />
              <span>(55) 5870-0000</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#63359E] hover:bg-[#502980] rounded-xl shadow-md shadow-[#63359E]/25 hover:shadow-lg hover:shadow-[#63359E]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>Cotizar Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#54595F] hover:text-[#63359E] hover:bg-gray-100 rounded-lg focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-[#63359E]/5 hover:text-[#63359E]"
            >
              Inicio
            </a>
            <a
              href="#quienes-somos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-[#63359E]/5 hover:text-[#63359E]"
            >
              Quiénes Somos
            </a>
            <a
              href="#mision-vision"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-[#63359E]/5 hover:text-[#63359E]"
            >
              Misión y Visión
            </a>
            <a
              href="#pilares"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-[#63359E]/5 hover:text-[#63359E]"
            >
              Diferenciadores
            </a>
            <a
              href="#sectores"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-[#63359E]/5 hover:text-[#63359E]"
            >
              Sectores
            </a>
            <a
              href="#especificaciones"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-[#63359E]/5 hover:text-[#63359E]"
            >
              Pantallas 4K
            </a>
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#63359E] rounded-xl shadow-md cursor-pointer"
              >
                Cotizar Proyecto
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
