import React from 'react';
import { GraduationCap, Building2, Landmark, Check, ArrowRight } from 'lucide-react';

interface SectorsSectionProps {
  onSelectSector: (sector: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onSelectSector }) => {
  const sectors = [
    {
      id: 'educacion',
      title: 'Sector Educación',
      subtitle: 'K-12, Colegios y Universidades',
      icon: GraduationCap,
      accent: '#63359E',
      badge: 'Pedagogía Dinámica',
      description:
        'Transforma aulas tradicionales en espacios inmersivos de aprendizaje activo. Fomenta el trabajo en equipo, la escritura táctil intuitiva y la integración transparente con Google Classroom y plataformas LMS.',
      tags: ['Aulas Híbridas', 'Laboratorios STEM', 'Auditorios Universitarios', 'Salas de Docentes'],
      specs: 'Pantallas sugeridas: 65", 75" y 86"',
      highlights: [
        'Acceso directo a herramientas Google Workspace for Education',
        'Hasta 50 toques para dinámicas simultáneas de alumnos',
        'Cristal templado resistente a impactos y fácil limpieza',
        'Software de pizarrón blanco con plantillas de matemáticas y ciencias',
      ],
    },
    {
      id: 'corporativo',
      title: 'Sector Corporativo',
      subtitle: 'Salas de Juntas, Directivas y Capacitación',
      icon: Building2,
      accent: '#61CE70',
      badge: 'Productividad Ágil',
      description:
        'Acelera la toma de decisiones con presentaciones de alto impacto, videoconferencias fluidas en 4K y colaboración inalámbrica sin enredos de cables ni adaptadores perdidos.',
      tags: ['Salas de Consejo', 'Salas de Reunión Híbridas', 'Centros de Capacitación', 'Showrooms'],
      specs: 'Pantallas sugeridas: 75", 86" y 98"',
      highlights: [
        'Compartir pantalla inalámbrico desde Mac, Windows, iOS y Android',
        'Compatibilidad nativa con Microsoft Teams, Zoom y Google Meet',
        'Cámara 4K AI con seguimiento de orador y micrófonos con cancelación de eco',
        'Integración con PC OPS Windows 11 Pro para máxima confidencialidad',
      ],
    },
    {
      id: 'gobierno',
      title: 'Sector Gobierno y Público',
      subtitle: 'Salas de Cabildo y Centros de Monitoreo',
      icon: Landmark,
      accent: '#63359E',
      badge: 'Alta Disponibilidad',
      description:
        'Equipamiento robusto diseñado para sesiones legislativas, cabildos municipales, centros de mando C4/C5 y salas de crisis que demandan operación continua y máxima seguridad de datos.',
      tags: ['Salas de Cabildo', 'Centros de Mando C4/C5', 'Dependencias Públicas', 'Tribunales y Juzgados'],
      specs: 'Pantallas sugeridas: 86" y 98"',
      highlights: [
        'Cumplimiento con normas mexicanas NOM-NYCE y seguridad EDLA',
        'Operación continua 24/7 con baja emisión de calor',
        'Ranura OPS segura con cifrado de hardware TPM 2.0',
        'Contratación por licitación pública o adjudicación directa con RFC en México',
      ],
    },
  ];

  return (
    <section id="sectores" className="py-20 md:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#63359E] mb-3">
            <span>Soluciones Especializadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-roboto mb-4">
            Sectores a los que Servimos
          </h2>
          <p className="text-base sm:text-lg text-[#7A7A7A] font-roboto">
            Diseñamos soluciones a la medida de los requerimientos específicos de cada organización en la República Mexicana.
          </p>
        </div>

        {/* 3 Columnas requeridas con tags */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#63359E]/40 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-13 h-13 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: sector.accent === '#61CE70' ? '#61CE7018' : '#63359E15',
                        color: sector.accent === '#61CE70' ? '#248532' : '#63359E',
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{
                        backgroundColor: sector.accent === '#61CE70' ? '#61CE7015' : '#63359E10',
                        color: sector.accent === '#61CE70' ? '#248532' : '#63359E',
                      }}
                    >
                      {sector.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-black font-roboto mb-1 group-hover:text-[#63359E] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#54595F] mb-4">
                    {sector.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#7A7A7A] leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Tags requeridos */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-black uppercase tracking-wider mb-2.5">
                      Aplicaciones Clave:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs text-[#54595F] bg-[#F8F9FA] border border-gray-200 px-2.5 py-1 rounded-lg font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
                    {sector.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#54595F]">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            backgroundColor: sector.accent === '#61CE70' ? '#61CE7020' : '#63359E18',
                            color: sector.accent === '#61CE70' ? '#248532' : '#63359E',
                          }}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Suggested Sizes */}
                  <div className="text-xs text-[#7A7A7A] font-medium bg-[#F8F9FA] p-2.5 rounded-lg border border-gray-100 mb-6">
                    <span className="text-black font-semibold">Formatos:</span> {sector.specs}
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={() => onSelectSector(sector.title)}
                  className="w-full py-3 px-4 rounded-xl border border-[#63359E] text-[#63359E] hover:bg-[#63359E] hover:text-white font-medium text-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-md"
                >
                  <span>Cotizar para {sector.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
