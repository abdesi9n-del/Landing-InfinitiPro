import React, { useState } from 'react';
import { Monitor, Cpu, Sparkles, Check, Download, Layers, ShieldCheck, PenTool } from 'lucide-react';

interface DisplayShowcaseProps {
  onOpenQuote: (productName?: string) => void;
}

export const DisplayShowcase: React.FC<DisplayShowcaseProps> = ({ onOpenQuote }) => {
  const [selectedSize, setSelectedSize] = useState<'65' | '75' | '86' | '98'>('75');
  const [activeTab, setActiveTab] = useState<'general' | 'touch' | 'connectivity'>('general');

  const specsMap = {
    '65': {
      diagonal: '65 pulgadas (165 cm)',
      roomType: 'Aulas K-12 y Salas de Juntas Pequeñas (4 a 8 personas)',
      dimensions: '1488 x 897 x 86 mm',
      weight: '38 kg',
      audio: '2 x 16W Altavoces Frontales',
      resolution: '4K UHD (3840 x 2160 @ 60Hz)',
      brightness: '400 cd/m²',
    },
    '75': {
      diagonal: '75 pulgadas (190 cm)',
      roomType: 'Aulas Universitarias y Salas de Consejo Medianas (8 a 16 personas)',
      dimensions: '1709 x 1020 x 88 mm',
      weight: '49 kg',
      audio: '2 x 20W + 15W Subwoofer',
      resolution: '4K UHD (3840 x 2160 @ 60Hz)',
      brightness: '450 cd/m²',
    },
    '86': {
      diagonal: '86 pulgadas (218 cm)',
      roomType: 'Salas de Directores, Auditorios y Salas Híbridas (16 a 30 personas)',
      dimensions: '1957 x 1160 x 90 mm',
      weight: '64 kg',
      audio: '2 x 20W + 20W Subwoofer',
      resolution: '4K UHD (3840 x 2160 @ 60Hz)',
      brightness: '500 cd/m²',
    },
    '98': {
      diagonal: '98 pulgadas (248 cm)',
      roomType: 'Centros de Mando C4/C5, Cabildos y Auditorios Ejecutivos (30+ personas)',
      dimensions: '2216 x 1302 x 95 mm',
      weight: '88 kg',
      audio: '2 x 25W + 25W Subwoofer de Alta Fidelidad',
      resolution: '4K UHD (3840 x 2160 @ 60Hz)',
      brightness: '500 cd/m²',
    },
  };

  const currentSpec = specsMap[selectedSize];

  return (
    <section id="especificaciones" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#63359E] mb-3">
            <span>Ecosistema de Hardware</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-roboto mb-4">
            Serie InfinityPro Pro-EDLA 4K
          </h2>
          <p className="text-base sm:text-lg text-[#7A7A7A] font-roboto">
            Diseñada con cristal templado de grado 7H con tecnología Zero Optical Bonding para la experiencia de escritura táctil más natural del mercado.
          </p>
        </div>

        {/* Size Selector Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['65', '75', '86', '98'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                selectedSize === size
                  ? 'bg-[#63359E] text-white shadow-md shadow-[#63359E]/30 scale-105'
                  : 'bg-[#F8F9FA] text-[#54595F] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>{size}" 4K UHD</span>
              {size === '75' && (
                <span className="text-[10px] bg-[#61CE70] text-black font-bold px-1.5 py-0.5 rounded ml-1">
                  Más Popular
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Detailed Spec Container */}
        <div className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Screen Representation */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-neutral-900 rounded-2xl p-3 shadow-xl border border-gray-800">
                <div className="relative aspect-16/9 bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-xl flex flex-col justify-between p-4 overflow-hidden border border-neutral-700/50">
                  {/* Screen Header */}
                  <div className="flex items-center justify-between text-white/80 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#61CE70]" />
                      <span className="font-semibold font-roboto">Google EDLA Certified</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#61CE70] bg-[#61CE70]/20 px-2 py-0.5 rounded">
                      {selectedSize} Pulgadas
                    </span>
                  </div>

                  {/* Central interactive preview */}
                  <div className="my-auto text-center py-4">
                    <p className="text-3xl sm:text-4xl font-bold text-white font-roboto tracking-tight mb-1">
                      {selectedSize}" 4K UHD
                    </p>
                    <p className="text-xs text-gray-400">Zero Gap Bonding • 50 Puntos Táctiles</p>
                  </div>

                  {/* Bottom UI Bar */}
                  <div className="flex items-center justify-between text-[11px] text-gray-300 border-t border-white/10 pt-2">
                    <span>Android 14 EDLA</span>
                    <span>Ranura OPS Intel i5/i7</span>
                    <span>USB-C 65W</span>
                  </div>
                </div>

                <div className="mt-2 text-center text-[11px] text-gray-400">
                  Marco de aluminio anonizado negro de alta resistencia
                </div>
              </div>

              <p className="text-xs text-[#54595F] mt-3 font-medium text-center">
                Recomendado para: <span className="text-black font-semibold">{currentSpec.roomType}</span>
              </p>
            </div>

            {/* Spec Table and tabs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Secondary Feature Tabs */}
                <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-gray-200 mb-6 max-w-md">
                  <button
                    onClick={() => setActiveTab('general')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeTab === 'general' ? 'bg-[#63359E] text-white shadow-xs' : 'text-[#54595F] hover:text-black'
                    }`}
                  >
                    Especificaciones
                  </button>
                  <button
                    onClick={() => setActiveTab('touch')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeTab === 'touch' ? 'bg-[#63359E] text-white shadow-xs' : 'text-[#54595F] hover:text-black'
                    }`}
                  >
                    Tecnología Táctil
                  </button>
                  <button
                    onClick={() => setActiveTab('connectivity')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activeTab === 'connectivity' ? 'bg-[#63359E] text-white shadow-xs' : 'text-[#54595F] hover:text-black'
                    }`}
                  >
                    Conectividad & OPS
                  </button>
                </div>

                {/* Tab 1: General Specs */}
                {activeTab === 'general' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100">
                      <span className="text-xs text-[#7A7A7A] block">Resolución & Tasa de Refresco</span>
                      <span className="font-semibold text-black">{currentSpec.resolution}</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100">
                      <span className="text-xs text-[#7A7A7A] block">Brillo & Contraste</span>
                      <span className="font-semibold text-black">{currentSpec.brightness} • 4000:1</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100">
                      <span className="text-xs text-[#7A7A7A] block">Dimensiones de Pantalla</span>
                      <span className="font-semibold text-black font-mono text-xs">{currentSpec.dimensions}</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100">
                      <span className="text-xs text-[#7A7A7A] block">Sistema de Audio Frontal</span>
                      <span className="font-semibold text-black">{currentSpec.audio}</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100">
                      <span className="text-xs text-[#7A7A7A] block">Sistema Operativo Nativo</span>
                      <span className="font-semibold text-black">Android 14 (Google EDLA Oficial)</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-gray-100">
                      <span className="text-xs text-[#7A7A7A] block">Vida Útil del Panel</span>
                      <span className="font-semibold text-black">&ge; 50,000 Horas Continuas</span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Touch Specs */}
                {activeTab === 'touch' && (
                  <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-3.5 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#248532] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-black block">50 Puntos Táctiles de Alta Precisión</span>
                        <span className="text-xs text-[#7A7A7A]">Permite escritura simultánea con doble lápiz magnético con puntas de diferente grosor y color.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#248532] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-black block">Cristal Antirreflejante Grado 7H</span>
                        <span className="text-xs text-[#7A7A7A]">Inmune a reflejos molestos de luminarias o luz solar directa; resistente a rayones accidentales.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#61CE70]/20 flex items-center justify-center text-[#248532] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-black block">Latencia Ultra-Baja (&lt;5 ms)</span>
                        <span className="text-xs text-[#7A7A7A]">Sensación de escritura idéntica al lápiz sobre papel con rechazo inteligente de palma.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Connectivity Specs */}
                {activeTab === 'connectivity' && (
                  <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#63359E]/10 flex items-center justify-center text-[#63359E] shrink-0 mt-0.5">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-black block">Módulo OPS PC Windows 11 Opcional</span>
                        <span className="text-xs text-[#7A7A7A]">Ranura Intel JAE estándar de 80 pines. Procesadores Intel Core i5 / i7 con 16GB RAM y 512GB SSD.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#63359E]/10 flex items-center justify-center text-[#63359E] shrink-0 mt-0.5">
                        <Monitor className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-black block">Puertos Frontales & Posteriores</span>
                        <span className="text-xs text-[#7A7A7A]">3x HDMI 2.0 In, 1x HDMI Out, 2x USB-C (Carga 65W + Video + Touch), 4x USB 3.0, 2x RJ45 Gigabit LAN, Salida Óptica SPDIF.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action row */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#7A7A7A] block">¿Requieres ficha técnica completa en PDF?</span>
                  <span className="text-xs font-semibold text-black">Entrega en menos de 2 horas hábiles</span>
                </div>
                <button
                  onClick={() => onOpenQuote(`InfinityPro Serie Pro-EDLA ${selectedSize}"`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#63359E] hover:bg-[#502980] text-white font-medium text-sm transition-all shadow-md shadow-[#63359E]/25 hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Solicitar Cotización de {selectedSize}"</span>
                  <Monitor className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
