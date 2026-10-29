import React, { useState } from 'react';
import { ArrowRight, Sparkles, Layers, ShieldCheck, PenTool, Tv, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote, onExploreSolutions }) => {
  const [activeInteractiveMode, setActiveInteractiveMode] = useState<'edla' | 'whiteboard' | 'multitouch'>('edla');

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-white">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#63359E]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#61CE70]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge superior en verde (#61CE70) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#61CE70]/10 border border-[#61CE70]/25 text-[#248532] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#61CE70]" />
              <span>SOBRE INFINITYPRO MÉXICO</span>
            </div>

            {/* H1 Potente */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-black font-roboto leading-[1.12] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
              Transformamos la forma en que las personas <span className="text-[#63359E]">enseñan</span>, <span className="text-[#63359E]">colaboran</span> y <span className="text-[#63359E]">aprenden</span>
            </h1>

            {/* Subtítulo explicativo */}
            <p className="text-lg sm:text-xl text-[#7A7A7A] font-roboto font-normal leading-relaxed mb-8 max-w-2xl">
              Diseñamos e integramos pantallas planas interactivas 4K UHD con certificación oficial Google EDLA y ecosistemas audiovisuales inteligentes que eliminan las barreras tecnológicas en aulas educativas y salas corporativas de todo México.
            </p>

            {/* 2 Botones de acción requeridos */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreSolutions}
                className="px-8 py-3.5 rounded-xl bg-[#63359E] hover:bg-[#502980] text-white font-medium text-base shadow-lg shadow-[#63359E]/25 hover:shadow-xl hover:shadow-[#63359E]/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                <span>Explorar Soluciones</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenQuote}
                className="px-8 py-3.5 rounded-xl border-2 border-[#63359E] text-[#63359E] hover:bg-[#63359E]/5 font-medium text-base transition-all text-center cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Contactar a un Asesor</span>
              </button>
            </div>

            {/* Key trust bullets under hero */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100 w-full">
              <div className="flex items-center gap-2.5 text-xs text-[#54595F]">
                <ShieldCheck className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span className="font-medium">Certificación Google EDLA</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#54595F]">
                <Tv className="w-4 h-4 text-[#63359E] shrink-0" />
                <span className="font-medium">Resolución 4K Ultra HD</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#54595F]">
                <CheckCircle2 className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span className="font-medium">Garantía Directa en México</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Screen Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#63359E]/30 to-[#61CE70]/30 rounded-3xl blur-xl opacity-60 transition duration-1000 group-hover:opacity-100" />

              {/* Display Bezel Wrapper (Simulating the 4K Interactive Flat Panel) */}
              <div className="relative rounded-2xl bg-neutral-900 p-2 sm:p-3 shadow-2xl ring-1 ring-white/20">
                {/* Slim metal display frame */}
                <div className="relative overflow-hidden rounded-xl bg-black aspect-4/3 sm:aspect-16/10">
                  <img
                    src="/src/assets/images/hero_interactive_display_1793305462587.jpg"
                    alt="Pantalla interactiva 4K InfinityPro en aula de colaboración en México"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Interactive Digital Glass Overlay Simulation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                  {/* Interactive touch HUD pill (live interactive state demonstration) */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-[11px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#61CE70] animate-pulse" />
                      <span className="font-semibold tracking-wide">InfinityPro OS • 4K UHD</span>
                    </div>
                    <span className="text-gray-300 font-mono">50 Puntos Táctiles Activos</span>
                  </div>

                  {/* Dynamic interactive feature overlay based on user selection */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white shadow-lg text-black">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#63359E] uppercase tracking-wider">
                        {activeInteractiveMode === 'edla' && '✓ Ecosistema Google EDLA Oficial'}
                        {activeInteractiveMode === 'whiteboard' && '✓ Pizarrón Táctil Zero-Lag'}
                        {activeInteractiveMode === 'multitouch' && '✓ Colaboración Grupal 50 Puntos'}
                      </span>
                      <span className="text-[10px] text-[#7A7A7A]">Toca para cambiar modo:</span>
                    </div>

                    {/* Mode switcher tabs on the interactive display */}
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        onClick={() => setActiveInteractiveMode('edla')}
                        className={`px-2 py-1.5 text-[11px] font-medium rounded-lg transition-all text-center cursor-pointer ${
                          activeInteractiveMode === 'edla'
                            ? 'bg-[#63359E] text-white font-semibold shadow-xs'
                            : 'bg-gray-100 text-[#54595F] hover:bg-gray-200'
                        }`}
                      >
                        Google EDLA
                      </button>
                      <button
                        onClick={() => setActiveInteractiveMode('whiteboard')}
                        className={`px-2 py-1.5 text-[11px] font-medium rounded-lg transition-all text-center cursor-pointer ${
                          activeInteractiveMode === 'whiteboard'
                            ? 'bg-[#63359E] text-white font-semibold shadow-xs'
                            : 'bg-gray-100 text-[#54595F] hover:bg-gray-200'
                        }`}
                      >
                        Pizarrón 4K
                      </button>
                      <button
                        onClick={() => setActiveInteractiveMode('multitouch')}
                        className={`px-2 py-1.5 text-[11px] font-medium rounded-lg transition-all text-center cursor-pointer ${
                          activeInteractiveMode === 'multitouch'
                            ? 'bg-[#63359E] text-white font-semibold shadow-xs'
                            : 'bg-gray-100 text-[#54595F] hover:bg-gray-200'
                        }`}
                      >
                        Multi-Touch
                      </button>
                    </div>

                    <p className="mt-2 text-[11px] text-[#54595F] leading-tight">
                      {activeInteractiveMode === 'edla' &&
                        'Acceso directo a Play Store, Google Classroom, Meet y Google Drive con inicio de sesión seguro mediante código QR o NFC.'}
                      {activeInteractiveMode === 'whiteboard' &&
                        'Escritura fluida con latencia imperceptible (<5ms), reconocimiento de palma y exportación instantánea a PDF/Cloud.'}
                      {activeInteractiveMode === 'multitouch' &&
                        'Hasta 50 toques simultáneos para que múltiples alumnos o ejecutivos anoten y presenten al mismo tiempo.'}
                    </p>
                  </div>
                </div>

                {/* Soundbar / Front Ports indicator bar */}
                <div className="mt-2 px-3 py-1 flex items-center justify-between text-[10px] text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Altavoces Integrados 2x20W + Subwoofer</span>
                  </div>
                  <span className="text-gray-400 font-mono">USB-C 65W • HDMI • OPS Ready</span>
                </div>
              </div>

              {/* Floating badge for Mexican direct support */}
              <div className="absolute -bottom-5 -left-4 bg-white rounded-xl p-3 shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#61CE70]/15 flex items-center justify-center text-[#248532]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-black">Centro de Soluciones en Edo. Méx.</p>
                  <p className="text-[11px] text-[#7A7A7A]">Entrega, instalación y refacciones inmediatas</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
