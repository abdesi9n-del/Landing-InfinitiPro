import React from 'react';
import { Target, Compass, Sparkles, Check } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section id="mision-vision" className="py-20 md:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#63359E] mb-3">
            <span>Propósito y Rumbo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-roboto mb-4">
            Misión y Visión
          </h2>
          <p className="text-base sm:text-lg text-[#7A7A7A] font-roboto">
            Guiados por la convicción de que la tecnología debe adaptarse al ser humano, impulsando la creatividad y el trabajo colaborativo.
          </p>
        </div>

        {/* 2 Tarjetas elegantes con borde superior en #63359E */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Tarjeta Misión */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#63359E] border-x border-b border-gray-100 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#63359E]/10 flex items-center justify-center text-[#63359E] group-hover:scale-110 group-hover:bg-[#63359E] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#63359E] bg-[#63359E]/5 px-3 py-1 rounded-full">
                  Nuestro Propósito
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-black font-roboto mb-4">
                Nuestra Misión
              </h3>

              <p className="text-base text-[#7A7A7A] leading-relaxed mb-6">
                Empoderar la interacción humana y optimizar el aprendizaje dinámico y colaborativo en instituciones educativas y corporaciones de México. Facilitamos la integración de ecosistemas táctiles inteligentes, accesibles y robustos que enriquecen la experiencia del expositor y motivan la participación activa de cada participante.
              </p>

              {/* Actionable pillars inside mission */}
              <ul className="space-y-3 pt-4 border-t border-gray-100 text-sm text-[#54595F]">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#248532] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Eliminar la fricción tecnológica en el aula y sala de juntas.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#248532] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Fomentar pedagogías activas y reuniones productivas sin cables.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#248532] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Acompañar a los usuarios con capacitación práctica y continua.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-50 flex items-center text-xs font-semibold text-[#63359E]">
              <span>Compromiso con la excelencia operativa</span>
            </div>
          </div>

          {/* Tarjeta Visión */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#63359E] border-x border-b border-gray-100 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#61CE70]/15 flex items-center justify-center text-[#248532] group-hover:scale-110 group-hover:bg-[#61CE70] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#248532] bg-[#61CE70]/10 px-3 py-1 rounded-full">
                  Hacia el Futuro
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-black font-roboto mb-4">
                Nuestra Visión
              </h3>

              <p className="text-base text-[#7A7A7A] leading-relaxed mb-6">
                Consolidarnos como el referente número uno en colaboración digital interactiva y pantallas planas 4K en México y Latinoamérica. Ser reconocidos por nuestra capacidad de innovación continua, sostenibilidad en el diseño modular de hardware y la cercanía incondicional con nuestros clientes mediante una red de soporte y servicio inigualable.
              </p>

              {/* Actionable pillars inside vision */}
              <ul className="space-y-3 pt-4 border-t border-gray-100 text-sm text-[#54595F]">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#248532] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Liderazgo en adopción de certificaciones Google EDLA en México.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#248532] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Arquitecturas modulares para una vida útil extendida de +10 años.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#248532] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Expansión con centros de demostración interactiva en todo el país.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-50 flex items-center text-xs font-semibold text-[#248532]">
              <span>Visión 2030 para la educación y la empresa mexicana</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
