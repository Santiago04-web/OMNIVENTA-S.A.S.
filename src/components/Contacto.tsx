import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle, Building } from 'lucide-react';

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombre && formData.correo && formData.mensaje) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      }, 500);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200/60">
            Canales Directos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-4 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Ponte en contacto con nuestro equipo para información institucional, peticiones o requerimientos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Institutional Data Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-brand-blue/30 text-brand-sky">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">OMNIVENTA S.A.S.</h3>
                  <p className="text-xs text-brand-sky font-mono mt-0.5">NIT: 860528224-0</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-8 border-b border-white/10 pb-6">
                Entidad Sin Ánimo de Lucro comprometida con la atención responsable de las inquietudes comunitarias e institucionales.
              </p>

              <div className="space-y-5">
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-brand-sky shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400 block">Dirección & Domicilio</span>
                    <span className="text-sm font-semibold text-white">Kr 26A 39B 15</span>
                    <span className="text-xs text-slate-300 block">Bogotá D.C., Colombia</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-brand-sky shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400 block">Teléfono de Contacto</span>
                    <a href="tel:3044028134" className="text-sm font-semibold text-white hover:text-brand-sky transition-colors">
                      3044028134
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-brand-sky shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400 block">Correo Electrónico</span>
                    <a href="mailto:soporte@omniventacolombia.online" className="text-sm font-semibold text-white hover:text-brand-sky transition-colors break-all">
                      soporte@omniventacolombia.online
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-brand-sky shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400 block">Sitio Web Oficial</span>
                    <a href="https://omniventacolombia.online/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-sky hover:underline break-all">
                      https://omniventacolombia.online/
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark">¡Mensaje Enviado!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm">
                    Gracias por comunicarse con OMNIVENTA S.A.S. Responderemos a la brevedad posible a través del correo suministrado.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Formulario Institucional de Contacto</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej: María Rodríguez"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="Ej: 3044028134"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Mensaje / Solicitud *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Escriba aquí su mensaje..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm bg-slate-50/50 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:from-brand-lightBlue hover:to-brand-blue text-white font-semibold text-base shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
