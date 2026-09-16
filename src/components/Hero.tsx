import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, ShieldCheck, Users, TrendingUp, Lightbulb } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-brand-dark pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-brand-blue/20 via-brand-lightBlue/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-navy/50 rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Discrete Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-sky text-xs font-semibold tracking-wide mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Entidad Sin Ánimo de Lucro — ESAL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Construyendo oportunidades para un <span className="bg-gradient-to-r from-brand-sky via-blue-400 to-white bg-clip-text text-transparent">futuro mejor</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              OMNIVENTA es una organización comprometida con el desarrollo, la innovación y la generación de nuevas oportunidades.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#nosotros"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-lightBlue text-white font-semibold text-base shadow-xl shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:scale-[1.02] transition-all duration-300"
              >
                Conócenos
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-base backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
              >
                Contáctanos
              </a>
            </div>

            {/* Quick Institutional Badges */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-sky">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Institucionalidad</p>
                  <p className="text-sm font-semibold text-white">Transparencia</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-sky">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Comunidad</p>
                  <p className="text-sm font-semibold text-white">Colaboración</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-sky">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Enfoque</p>
                  <p className="text-sm font-semibold text-white">Desarrollo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl bg-gradient-to-b from-brand-navy/80 to-brand-dark/90 p-8 border border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/10 rounded-full blur-xl"></div>
                
                {/* Visual Composition Card 1 */}
                <div className="flex items-start gap-4 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-sky/30 transition-all">
                  <div className="p-3 rounded-xl bg-brand-blue/30 text-brand-sky">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Innovación Social</h3>
                    <p className="text-xs text-slate-300 mt-1">Generación de nuevas metodologías e ideas orientadas al desarrollo sostenible.</p>
                  </div>
                </div>

                {/* Visual Composition Card 2 */}
                <div className="flex items-start gap-4 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-sky/30 transition-all">
                  <div className="p-3 rounded-xl bg-brand-sky/20 text-brand-sky">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Impulso Comunitario</h3>
                    <p className="text-xs text-slate-300 mt-1">Fomento del bienestar colectivo y el fortalecimiento del tejido social.</p>
                  </div>
                </div>

                {/* Visual Composition Card 3 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-sky/30 transition-all">
                  <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-300">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Nuevas Oportunidades</h3>
                    <p className="text-xs text-slate-300 mt-1">Creación de entornos propicios para la evolución y la inclusión activa.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#nosotros" className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors animate-bounce" aria-label="Desplazarse hacia abajo">
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
