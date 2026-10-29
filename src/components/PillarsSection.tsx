import React from 'react';
import { ShieldCheck, RefreshCw, Cpu, GraduationCap, CheckCircle2 } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Certificación Google EDLA',
      tag: 'Seguridad Empresarial',
      description:
        'Acceso nativo a Google Play Store, Classroom, Google Drive, Docs y Meet con máxima protección mediante Google Play Protect y gestión unificada de dispositivos (MDM).',
      bullets: [
        'Inicio de sesión directo con Google Workspace',
        'Políticas de privacidad y actualizaciones oficiales OTA',
        'Sin necesidad de instalar APKs inseguros',
      ],
      icon: ShieldCheck,
      accent: '#63359E',
    },
    {
      title: 'Sostenibilidad Modular',
      tag: 'Premio EdTech Digest',
      description:
        'Nuestra Serie E fue galardonada por su diseño inteligente con módulos y componentes reemplazables (tarjeta madre, fuente de poder y PC OPS), previniendo la obsolescencia.',
      bullets: [
        'Ahorro del 60% en costos de renovación tecnológica',
        'Estructura de aluminio reciclable de grado aeronáutico',
        'Consumo energético eficiente Energy Star',
      ],
      icon: RefreshCw,
      accent: '#61CE70',
    },
    {
      title: 'Ecosistema All-in-One',
      tag: 'Cero Cables Sueltos',
      description:
        'Integra en un solo dispositivo: pizarrón blanco infinito multisuario, audio estéreo de alta fidelidad con subwoofer, microfonía inteligente y PC OPS Windows 11 integrada.',
      bullets: [
        'Conexión instantánea USB-C con carga rápida 65W',
        'Proyección inalámbrica hasta 9 pantallas a la vez',
        'Cámara 4K UHD con encuadre automático por IA',
      ],
      icon: Cpu,
      accent: '#63359E',
    },
    {
      title: 'Respaldo y Capacitación Local',
      tag: 'Garantía en México',
      description:
        'Sede central, almacén de refacciones y centro de soporte técnico en Cuautitlán Izcalli. Ofrecemos talleres de certificación práctica a profesores y directivos.',
      bullets: [
        'Atención técnica presencial y remota en español',
        'Refacciones originales en inventario nacional',
        'Capacitación pedagógica y corporativa incluida',
      ],
      icon: GraduationCap,
      accent: '#61CE70',
    },
  ];

  return (
    <section id="pilares" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#61CE70] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#61CE70]" />
            <span className="text-[#248532]">POR QUÉ ELEGIRNOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-roboto mb-4">
            Pilares y Diferenciadores de InfinityPro
          </h2>
          <p className="text-base sm:text-lg text-[#7A7A7A] font-roboto">
            Diseñamos soluciones audiovisuales con ingeniería de vanguardia y respaldo técnico real en toda la República Mexicana.
          </p>
        </div>

        {/* Grid de 4 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#63359E]/40 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: item.accent === '#61CE70' ? '#61CE7018' : '#63359E15',
                        color: item.accent === '#61CE70' ? '#248532' : '#63359E',
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: item.accent === '#61CE70' ? '#61CE7015' : '#63359E10',
                        color: item.accent === '#61CE70' ? '#248532' : '#63359E',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black font-roboto mb-3 group-hover:text-[#63359E] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#7A7A7A] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 pt-4 border-t border-gray-100">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-[#54595F]">
                        <CheckCircle2
                          className="w-3.5 h-3.5 mt-0.5 shrink-0"
                          style={{ color: item.accent === '#61CE70' ? '#248532' : '#63359E' }}
                        />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-xs font-semibold text-[#54595F] group-hover:text-[#63359E] transition-colors">
                  <span>Tecnología comprobada</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
