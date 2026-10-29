import React from 'react';
import { ArrowRight, MapPin, Globe, PhoneCall, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onOpenQuote: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-r from-[#63359E] to-[#4A1D80] text-white">
      {/* Decorative background visual elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#61CE70]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#61CE70] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLICITA TU DEMOSTRACIÓN SIN COMPROMISO</span>
          </div>

          {/* Título blanco H2 requerido */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-roboto leading-tight mb-6" style={{ textWrap: 'balance' }}>
            ¿Listo para transformar tus aulas o salas de reuniones?
          </h2>

          {/* Texto de invitación */}
          <p className="text-lg sm:text-xl text-white/90 font-roboto font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Te invitamos a agendar una demostración en vivo en nuestro showroom de Cuautitlán Izcalli o solicita una visita de nuestros ingenieros a tus instalaciones en cualquier parte de México.
          </p>

          {/* Botón blanco con texto en #63359E requerido */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-white hover:bg-gray-50 text-[#63359E] font-bold text-base shadow-2xl hover:shadow-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Cotizar mi Proyecto</span>
              <ArrowRight className="w-5 h-5 text-[#63359E]" />
            </button>

            <a
              href="tel:+525558700000"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/40 hover:bg-white/10 text-white font-medium text-base transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#61CE70]" />
              <span>Llamar a un Especialista</span>
            </a>
          </div>

          {/* Mención obligatoria de ubicación y web */}
          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#61CE70]" />
              <span className="font-medium">Cuautitlán Izcalli, Estado de México</span>
            </div>
            <div className="hidden sm:inline text-white/30">•</div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#61CE70]" />
              <span className="font-medium">infinitypro.com.mx</span>
            </div>
            <div className="hidden sm:inline text-white/30">•</div>
            <div className="text-white/70">
              Distribución y Soporte a Toda la República Mexicana
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
