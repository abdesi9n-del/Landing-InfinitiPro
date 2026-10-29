import React from 'react';
import { Tv, ShieldCheck, Cpu, MapPin } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      metric: '4K UHD',
      badge: 'Zero Optical Bonding',
      label: 'Resolución Ultranítida',
      description: 'Hasta 50 puntos táctiles simultáneos y cristal templado antirreflejo de dureza 7H.',
      icon: Tv,
      accentColor: '#63359E',
    },
    {
      metric: 'Google EDLA',
      badge: 'Certificación Oficial',
      label: 'Seguridad Google Enterprise',
      description: 'Acceso nativo a Google Play Store, Workspace, Meet y protección Play Protect.',
      icon: ShieldCheck,
      accentColor: '#61CE70',
    },
    {
      metric: 'Dual OS',
      badge: 'Android + Windows 11',
      label: 'Ecosistema Híbrido Flexible',
      description: 'Ecosistema fluido Android 14 + ranura estándar OPS PC para Windows sin cableado.',
      icon: Cpu,
      accentColor: '#63359E',
    },
    {
      metric: '100% México',
      badge: 'Atención Nacional',
      label: 'Soporte y Garantía Directa',
      description: 'Soporte técnico local, refacciones en stock y garantía directa desde Cuautitlán Izcalli.',
      icon: MapPin,
      accentColor: '#61CE70',
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-16 border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header subtitle / context for metrics */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold text-[#63359E] uppercase tracking-widest mb-2">
            Rendimiento, Seguridad y Soporte Certificado
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-black font-roboto">
            Estándares de clase mundial para la colaboración moderna en México
          </h2>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#63359E]/30 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-[#54595F] bg-[#F8F9FA] px-2.5 py-1 rounded-md border border-gray-100">
                      {item.badge}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: item.accentColor === '#61CE70' ? '#61CE7018' : '#63359E18',
                        color: item.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold font-roboto text-black tracking-tight mb-1">
                    {item.metric}
                  </h3>
                  <h4 className="text-sm font-semibold text-[#54595F] mb-3">
                    {item.label}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7A7A7A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-medium text-[#63359E]">
                  <span>Especificación homologada</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
