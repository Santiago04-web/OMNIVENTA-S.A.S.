import React from 'react';
import { Cpu, Layers, Sparkles, Shield, Rocket, Network } from 'lucide-react';

export const Innovacion: React.FC = () => {
  return (
    <section id="innovacion" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Subtle Tech Grid & Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-lightBlue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-sky text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Transformación & Futuro
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Innovación con propósito
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              Promovemos una visión orientada al desarrollo y a la generación de nuevas posibilidades para las personas y la comunidad.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-lg bg-brand-blue/30 text-brand-sky shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">Pensamiento Ágil e Innovador</h4>
                  <p className="text-xs text-slate-300 mt-1">Adoptamos enfoques modernos para abordar desafíos institucionales con perspectiva de futuro.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-lg bg-brand-sky/20 text-brand-sky shrink-0">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">Redes Colaborativas</h4>
                  <p className="text-xs text-slate-300 mt-1">Conectamos esfuerzos y recursos para potenciar iniciativas orientadas al bien común.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Visual Tech Canvas Graphic */}
          <div className="lg:col-span-6">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-brand-navy to-brand-dark border border-white/15 shadow-2xl overflow-hidden">
              {/* Graphic Decorative Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-sky tracking-wider uppercase">Modelo Institucional</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">ESAL Activa</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                    <Layers className="w-8 h-8 text-brand-sky mx-auto mb-2" />
                    <h5 className="text-sm font-bold text-white">Estructura</h5>
                    <p className="text-[11px] text-slate-400 mt-1">Solidez Organizacional</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                    <Rocket className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                    <h5 className="text-sm font-bold text-white">Proyección</h5>
                    <p className="text-[11px] text-slate-400 mt-1">Evolución Continua</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-blue/30 to-brand-navy border border-brand-blue/30">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-brand-sky" />
                    <div>
                      <h5 className="text-sm font-bold text-white">Compromiso Ético y Social</h5>
                      <p className="text-xs text-slate-300 mt-0.5">Transparencia en cada proceso de desarrollo.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
