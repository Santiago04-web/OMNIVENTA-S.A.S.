import React from 'react';
import { Building2, FileText, MapPin, Hash, CheckCircle2 } from 'lucide-react';

export const Nosotros: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Identidad Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-4 mb-4">
            Quiénes somos
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            OMNIVENTA S.A.S. es una entidad sin ánimo de lucro con domicilio en Bogotá D.C.
          </p>
        </div>

        {/* Institutional Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-blue" />
                Compromiso Institucional
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Como organización legalmente constituida en Colombia bajo el marco de las entidades sin ánimo de lucro (ESAL), nuestra labor se orienta hacia la estructuración de iniciativas que promuevan la equidad, el desarrollo participativo y la innovación social.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">Entidad legalmente registrada y verificable</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">Orientada al bienestar colectivo e impacto social</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">Gestión transparente con altos estándares profesionales</span>
                </div>
              </div>
            </div>
          </div>

          {/* Official Business Data Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark text-white p-8 sm:p-10 shadow-2xl overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-brand-blue/20 rounded-full blur-2xl"></div>

              <div className="flex items-center justify-between pb-6 border-b border-white/15 mb-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-sky font-semibold">Datos Oficiales</span>
                  <h3 className="text-2xl font-bold text-white mt-1">OMNIVENTA S.A.S.</h3>
                </div>
                <div className="p-3 rounded-xl bg-white/10 text-brand-sky border border-white/10">
                  <FileText className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-brand-sky text-xs font-semibold mb-1">
                    <FileText className="w-4 h-4" />
                    Razón Social
                  </div>
                  <p className="text-base font-bold text-white">OMNIVENTA S.A.S.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-brand-sky text-xs font-semibold mb-1">
                    <Hash className="w-4 h-4" />
                    Sigla Oficial
                  </div>
                  <p className="text-base font-bold text-white">OMV</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-brand-sky text-xs font-semibold mb-1">
                    <Hash className="w-4 h-4" />
                    NIT
                  </div>
                  <p className="text-base font-bold text-white">860528224-0</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-brand-sky text-xs font-semibold mb-1">
                    <MapPin className="w-4 h-4" />
                    Domicilio
                  </div>
                  <p className="text-base font-bold text-white">Bogotá D.C., Colombia</p>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Tipo de Entidad: Entidad sin ánimo de lucro / ESAL</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
