import React from 'react';
import { Monitor, MapPin, Mail, Phone, ShieldCheck, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Sede summary */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#63359E] flex items-center justify-center text-white shadow-md">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-roboto">
                InfinityPro <span className="text-[#61CE70]">México</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
              Líder mexicano en pantallas planas interactivas 4K UHD, soluciones audiovisuales para aulas híbridas y salas corporativas. Integración oficial Google EDLA, arquitectura modular y soporte directo nacional.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span>Parque Industrial Cuautitlán Izcalli, Estado de México, C.P. 54720</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span>+52 (55) 5870-0000 / Línea Nacional 800-INFINITY</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-300">
                <Mail className="w-4 h-4 text-[#61CE70] shrink-0" />
                <span>contacto@infinitypro.com.mx</span>
              </div>
            </div>
          </div>

          {/* Quick links: Soluciones */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-roboto">
              Soluciones
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#especificaciones" className="hover:text-white transition-colors">Pantalla 65" 4K UHD</a>
              </li>
              <li>
                <a href="#especificaciones" className="hover:text-white transition-colors">Pantalla 75" 4K Pro EDLA</a>
              </li>
              <li>
                <a href="#especificaciones" className="hover:text-white transition-colors">Pantalla 86" Executive</a>
              </li>
              <li>
                <a href="#especificaciones" className="hover:text-white transition-colors">Pantalla 98" Gran Formato</a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-white transition-colors">Módulos OPS Windows 11</a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-white transition-colors">Soportes Móviles y Fijos</a>
              </li>
            </ul>
          </div>

          {/* Quick links: Sectores */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-roboto">
              Sectores & Aplicaciones
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#sectores" className="hover:text-white transition-colors">Educación K-12 y Bachilleratos</a>
              </li>
              <li>
                <a href="#sectores" className="hover:text-white transition-colors">Universidades e Institutos Tecnológicos</a>
              </li>
              <li>
                <a href="#sectores" className="hover:text-white transition-colors">Salas de Consejo y Corporativos</a>
              </li>
              <li>
                <a href="#sectores" className="hover:text-white transition-colors">Gobierno y Cabildos Municipales</a>
              </li>
              <li>
                <a href="#sectores" className="hover:text-white transition-colors">Centros de Control C4/C5</a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">Capacitación y Certificación</a>
              </li>
            </ul>
          </div>

          {/* Certifications & Badges */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 font-roboto">
              Respaldo & Certificaciones
            </h4>
            <div className="space-y-3 text-xs">
              <div className="bg-neutral-800/80 p-3 rounded-xl border border-neutral-700/60">
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#61CE70]" />
                  <span>Google EDLA Official</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Compatibilidad oficial de Google Mobile Services para entornos empresariales.
                </p>
              </div>

              <div className="bg-neutral-800/80 p-3 rounded-xl border border-neutral-700/60">
                <div className="flex items-center gap-2 text-white font-medium mb-1">
                  <CheckCircle className="w-4 h-4 text-[#63359E]" />
                  <span>Normas Oficiales NOM</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Certificado NOM-001-SCFI y NOM-019 para importación y venta legal en México.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} InfinityPro México S.A. de C.V. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Póliza de Garantía Nacional</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
