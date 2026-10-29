import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, Send, Phone, Mail } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSector?: string;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialSector = 'Educación',
  initialProduct,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    state: 'Estado de México',
    sector: initialSector || 'Educación',
    displayCount: '1 a 3 pantallas',
    modelInterest: initialProduct || 'Serie Pro-EDLA 75"',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Por favor ingresa tu nombre completo';
    if (!formData.email.trim()) {
      errs.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Ingresa un correo institucional o corporativo válido';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Ingresa tu teléfono a 10 dígitos';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'El teléfono debe tener al menos 10 dígitos';
    }
    if (!formData.organization.trim()) {
      errs.organization = 'Ingresa el nombre de tu colegio, empresa o dependencia';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate fast processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const mexicanStates = [
    'Estado de México',
    'Ciudad de México (CDMX)',
    'Jalisco',
    'Nuevo León',
    'Puebla',
    'Guanajuato',
    'Veracruz',
    'Querétaro',
    'Yucatán',
    'Chihuahua',
    'Baja California',
    'Sonora',
    'Coahuila',
    'San Luis Potosí',
    'Michoacán',
    'Otro Estado de la República',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#F8F9FA] border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#63359E]/10 flex items-center justify-center text-[#63359E]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black font-roboto">
                Solicitud de Cotización y Demostración
              </h3>
              <p className="text-xs text-[#7A7A7A]">
                InfinityPro México • Asesoría técnica directa desde Cuautitlán Izcalli
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-black rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 rounded-full bg-[#61CE70]/20 text-[#248532] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-black mb-2 font-roboto">
                ¡Solicitud Registrada con Éxito!
              </h4>
              <p className="text-sm text-[#7A7A7A] max-w-md mx-auto mb-6">
                Gracias, <strong className="text-black">{formData.name}</strong>. Un ingeniero comercial de InfinityPro México se pondrá en contacto contigo a <span className="text-[#63359E] font-medium">{formData.email}</span> o al teléfono <span className="text-black font-medium">{formData.phone}</span> en menos de 2 horas hábiles para coordinar tu propuesta personalizada y demostración.
              </p>

              <div className="bg-[#F8F9FA] rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2 border border-gray-200 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-500">Organización:</span>
                  <span className="font-semibold text-black">{formData.organization}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Ubicación:</span>
                  <span className="font-semibold text-black">{formData.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sector:</span>
                  <span className="font-semibold text-[#63359E]">{formData.sector}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Volumen estimado:</span>
                  <span className="font-semibold text-black">{formData.displayCount}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#63359E] hover:bg-[#502980] text-white font-medium text-sm transition-all shadow-md cursor-pointer"
                >
                  Regresar al Sitio
                </button>
                <a
                  href="tel:+525558700000"
                  className="px-6 py-2.5 rounded-xl border border-gray-300 text-black font-medium text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#61CE70]" />
                  <span>Llamada Urgente: (55) 5870-0000</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Nombre */}
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Ing. Carlos Mendoza"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                    } focus:border-[#63359E] focus:ring-2 focus:ring-[#63359E]/15 outline-none transition-all`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Correo */}
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">
                    Correo Institucional / Corporativo *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@escuela.edu.mx"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                    } focus:border-[#63359E] focus:ring-2 focus:ring-[#63359E]/15 outline-none transition-all`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">
                    Teléfono a 10 Dígitos (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="55 1234 5678"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                    } focus:border-[#63359E] focus:ring-2 focus:ring-[#63359E]/15 outline-none transition-all`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Organización */}
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">
                    Colegio, Empresa o Dependencia *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Ej. Colegio Anáhuac / Tech Corp México"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.organization ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                    } focus:border-[#63359E] focus:ring-2 focus:ring-[#63359E]/15 outline-none transition-all`}
                  />
                  {errors.organization && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.organization}</p>
                  )}
                </div>

                {/* Estado en México */}
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">
                    Estado en la República Mexicana
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#63359E] focus:ring-2 focus:ring-[#63359E]/15 outline-none transition-all bg-white"
                  >
                    {mexicanStates.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sector */}
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">
                    Sector de Aplicación
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#63359E] focus:ring-2 focus:ring-[#63359E]/15 outline-none transition-all bg-white"
                  >
                    <option value="Sector Educación (K-12 o Universidad)">Sector Educación (K-12 o Universidad)</option>
                    <option value="Sector Corporativo (Empresa o Sala de Consejo)">Sector Corporativo (Empresa o Sala de Consejo)</option>
                    <option value="Sector Gobierno o Público (Cabildo o C4)">Sector Gobierno o Público (Cabildo o C4)</option>
                    <option value="Distribuidor / Integrador Audiovisual">Distribuidor / Integrador Audiovisual</option>
                  </select>
                </div>

                {/* Volumen estimado */}
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">
                    Número estimado de aulas o salas
                  </label>
                  <select
                    value={formData.displayCount}
                    onChange={(e) => setFormData({ ...formData, displayCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#63359E] focus:ring-2 focus:ring-[#63359E]/15 outline-none transition-all bg-white"
                  >
                    <option value="1 a 3 pantallas">1 a 3 pantallas (Piloto)</option>
                    <option value="4 a 10 pantallas">4 a 10 pantallas</option>
                    <option value="11 a 25 pantallas">11 a 25 pantallas</option>
                    <option value="Más de 25 pantallas (Proyecto Campus)">Más de 25 pantallas (Proyecto Campus)</option>
                  </select>
                </div>

                {/* Formato de pantalla */}
                <div>
                  <label className="block text-xs font-semibold text-black mb-1">
                    Formato de interés preferente
                  </label>
                  <select
                    value={formData.modelInterest}
                    onChange={(e) => setFormData({ ...formData, modelInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#63359E] focus:ring-2 focus:ring-[#63359E]/15 outline-none transition-all bg-white"
                  >
                    <option value='65" 4K UHD Pro-EDLA'>65" 4K UHD Pro-EDLA (Espacios pequeños)</option>
                    <option value='75" 4K UHD Pro-EDLA'>75" 4K UHD Pro-EDLA (Aulas estándar)</option>
                    <option value='86" 4K UHD Pro-EDLA'>86" 4K UHD Pro-EDLA (Salas directivas)</option>
                    <option value='98" 4K UHD Pro-EDLA'>98" 4K UHD Pro-EDLA (Auditorios y Cabildos)</option>
                    <option value="Asesoría para seleccionar tamaño ideal">Asesoría para seleccionar tamaño ideal</option>
                  </select>
                </div>

              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-xs font-semibold text-black mb-1">
                  Comentarios o requerimientos específicos (opcional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalles sobre tus aulas, si requieres soporte móvil con ruedas, módulos OPS PC Windows o demostración física en tus instalaciones..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:border-[#63359E] focus:ring-2 focus:ring-[#63359E]/15 outline-none transition-all resize-none"
                />
              </div>

              {/* Bottom security notice & submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#7A7A7A]">
                  <ShieldCheck className="w-4 h-4 text-[#61CE70]" />
                  <span>Datos protegidos bajo Aviso de Privacidad. Cero spam.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#63359E] hover:bg-[#502980] disabled:bg-gray-400 text-white font-semibold text-sm transition-all shadow-md shadow-[#63359E]/25 hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Procesando...</span>
                  ) : (
                    <>
                      <span>Enviar Solicitud</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
