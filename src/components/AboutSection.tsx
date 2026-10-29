import React from 'react';
import { MapPin, Truck, CheckCircle2, Award, Users } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="quienes-somos" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Imagen de alta calidad de sala de reuniones inteligente */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
              <img
                src="/src/assets/images/smart_boardroom_meeting_1793305475627.jpg"
                alt="Reunión corporativa ejecutiva colaborando con pantalla interactiva 4K InfinityPro México"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-102 transition-transform duration-700 aspect-4/3"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim for media overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Trust Badge at bottom of the image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#63359E]/10 flex items-center justify-center text-[#63359E] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black font-roboto">Sede Central & Showroom</p>
                    <p className="text-[11px] text-[#7A7A7A]">Cuautitlán Izcalli, Estado de México</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#248532] bg-[#61CE70]/15 px-2.5 py-1 rounded-md">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Cobertura Nacional</span>
                </div>
              </div>
            </div>

            {/* Accent badge behind card */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#63359E]/10 rounded-2xl -z-10 blur-xl" />
          </div>

          {/* Columna Derecha: Título H2 en Roboto Slab y los 2 párrafos requeridos */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#63359E] mb-3">
              <span>Quiénes Somos</span>
              <span className="w-8 h-[1px] bg-[#63359E]" />
            </div>

            {/* Título H2 en Roboto Slab */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] text-black font-slab font-normal leading-tight mb-6">
              Tecnología interactiva que conecta ideas y personas
            </h2>

            {/* Párrafo 1 */}
            <p className="text-base sm:text-lg text-[#7A7A7A] font-roboto font-normal leading-relaxed mb-5">
              En <strong className="text-black font-medium">InfinityPro México</strong> nos especializamos en transformar entornos de aprendizaje y centros de toma de decisiones a través de pantallas interactivas de última generación y soluciones audiovisuales integrales. Creemos que la verdadera innovación tecnológica debe ser intuitiva, accesible y capaz de derribar la distancia entre expositores, alumnos y colaboradores.
            </p>

            {/* Párrafo 2 */}
            <p className="text-base sm:text-lg text-[#7A7A7A] font-roboto font-normal leading-relaxed mb-8">
              Con sede estratégica en <strong className="text-black font-medium">Cuautitlán Izcalli, Estado de México</strong>, coordinamos un sólido centro de distribución y servicio técnico que abastece a instituciones educativas, universidades, corporativos y dependencias gubernamentales en toda la República Mexicana. Nuestro compromiso no culmina en la entrega de equipos: brindamos asesoría técnica consultiva, capacitación continua a docentes y ejecutivos, y refacciones originales con garantía directa nacional sin intermediarios.
            </p>

            {/* Credibility highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 border-t border-gray-100 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#61CE70]/15 flex items-center justify-center text-[#248532] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black">Almacén & Refacciones</h4>
                  <p className="text-xs text-[#7A7A7A]">Stock permanente en Edo. de México para sustitución inmediata.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#63359E]/10 flex items-center justify-center text-[#63359E] shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black">Certificación Oficial</h4>
                  <p className="text-xs text-[#7A7A7A]">Google EDLA y normativas oficiales NOM para México.</p>
                </div>
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-[#63359E] hover:bg-[#502980] text-white font-medium text-sm transition-all shadow-md shadow-[#63359E]/20 hover:shadow-lg hover:shadow-[#63359E]/30 cursor-pointer flex items-center gap-2"
            >
              <span>Conoce Nuestro Showroom y Asesoría</span>
              <span className="text-lg leading-none">→</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
