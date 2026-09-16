import React from 'react';
import { Users, Heart, Globe2, Handshake, Target } from 'lucide-react';

export const ComunidadImpacto: React.FC = () => {
  const pillars = [
    {
      title: 'Personas',
      icon: Users,
      description: 'El ser humano es el centro de todas las iniciativas institucionales. Promovemos el respeto, la inclusión y la participación activa.',
    },
    {
      title: 'Desarrollo',
      icon: Target,
      description: 'Creemos en la formación continua y en el fortalecimiento de habilidades colectivas que conduzcan al progreso sostenible.',
    },
    {
      title: 'Colaboración',
      icon: Handshake,
      description: 'Fomentamos sinergias entre diversos actores sociales para potenciar el alcance de las iniciativas de interés comunitario.',
    },
    {
      title: 'Oportunidades',
      icon: Globe2,
      description: 'Diseñamos y apoyamos puentes de acceso a nuevas posibilidades socioeconómicas, científicas y culturales.',
    },
  ];

  return (
    <section id="comunidad" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Compromiso Social
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-4 mb-4">
            Personas, oportunidades e impacto
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Trabajamos con convicción para contribuir positivamente a la sociedad a través de acciones orientadas al bien común.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-blue/30 transition-all duration-300 hover:shadow-md flex items-start gap-6"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-brand-blue to-brand-navy text-white shrink-0 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy text-white text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <Heart className="w-10 h-10 text-brand-sky mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Construcción Colectiva</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              En OMNIVENTA S.A.S. mantenemos una visión integradora y transparente, impulsando proyectos y alianzas enfocados en crear verdaderos escenarios de crecimiento comunitario.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
