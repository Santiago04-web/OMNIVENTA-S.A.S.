import React, { useState } from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Globe, Shield, FileText, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacidad' | 'terminos' | null>(null);

  const currentYear = 2026;

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Identity & Legal Data */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" />
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm font-bold text-white">OMNIVENTA S.A.S.</p>
              <p className="text-xs text-brand-sky font-semibold">Sigla: OMV | NIT: 860528224-0</p>
              <p className="text-xs text-slate-300">Entidad sin ánimo de lucro (ESAL) con domicilio principal en Bogotá D.C., Colombia.</p>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-sky shrink-0" />
                <span>Kr 26A 39B 15 — Bogotá D.C., Colombia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-sky shrink-0" />
                <a href="tel:3044028134" className="hover:text-white transition-colors">3044028134</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-sky shrink-0" />
                <a href="mailto:soporte@omniventacolombia.online" className="hover:text-white transition-colors">soporte@omniventacolombia.online</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-brand-sky shrink-0" />
                <a href="https://omniventacolombia.online/" target="_blank" rel="noopener noreferrer" className="text-brand-sky hover:underline">
                  https://omniventacolombia.online/
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#hero" className="hover:text-brand-sky transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-brand-sky transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#enfoque" className="hover:text-brand-sky transition-colors">Enfoque</a>
              </li>
              <li>
                <a href="#innovacion" className="hover:text-brand-sky transition-colors">Innovación</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-brand-sky transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Información Legal & Políticas
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cumplimos rigurosamente con los estándares legales y tributarios colombianos para Entidades Sin Ánimo de Lucro (ESAL).
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => setModalType('privacidad')}
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg border border-white/10 transition-colors text-left"
              >
                <Shield className="w-3.5 h-3.5 text-brand-sky" />
                Política de privacidad
              </button>
              <button
                onClick={() => setModalType('terminos')}
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg border border-white/10 transition-colors text-left"
              >
                <FileText className="w-3.5 h-3.5 text-brand-sky" />
                Términos y condiciones
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} OMNIVENTA S.A.S. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Razón Social: OMNIVENTA S.A.S.</span>
            <span>•</span>
            <span>NIT 860528224-0</span>
          </div>
        </div>

      </div>

      {/* Modal Dialog for Legal Texts */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-slate-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacidad' ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-blue" />
                  Política de Privacidad
                </h3>
                <p className="text-xs text-slate-500">Última actualización: 2026 — OMNIVENTA S.A.S.</p>
                <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    <strong>OMNIVENTA S.A.S.</strong> (NIT: 860528224-0), con domicilio en Kr 26A 39B 15, Bogotá D.C., Colombia, informa a los usuarios de su portal oficial <em>https://omniventacolombia.online/</em> sobre el tratamiento de los datos personales recolectados a través del sitio.
                  </p>
                  <p>
                    <strong>1. Recolección de datos:</strong> Los datos recolectados en el formulario de contacto (Nombre, Correo, Teléfono, Mensaje) son utilizados exclusivamente para la gestión de solicitudes e información institucional.
                  </p>
                  <p>
                    <strong>2. Uso de la información:</strong> OMNIVENTA S.A.S. no vende, alquila ni cede datos a terceros con fines comerciales.
                  </p>
                  <p>
                    <strong>3. Derechos ARCO:</strong> Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición enviando un correo a <code>soporte@omniventacolombia.online</code>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-blue" />
                  Términos y Condiciones
                </h3>
                <p className="text-xs text-slate-500">Última actualización: 2026 — OMNIVENTA S.A.S.</p>
                <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    Bienvenido al sitio web oficial de <strong>OMNIVENTA S.A.S.</strong> (NIT 860528224-0). El acceso y uso de este portal implica la aceptación de los siguientes términos:
                  </p>
                  <p>
                    <strong>1. Carácter Institucional:</strong> Este portal tiene una finalidad exclusivamente informativa e institucional sobre la organización, su identidad como ESAL y sus líneas de desarrollo social.
                  </p>
                  <p>
                    <strong>2. Propiedad Intelectual:</strong> Todos los contenidos visuales, logotipos y textos del sitio son propiedad de OMNIVENTA S.A.S. o cuentan con las debidas licencias de uso.
                  </p>
                  <p>
                    <strong>3. Ley Aplicable:</strong> Cualquier controversia derivada del uso del sitio estará sujeta a las leyes de la República de Colombia y a los tribunales de la ciudad de Bogotá D.C.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
