import React from 'react';
import { Lightbulb, TrendingUp, Users, Compass } from 'lucide-react';

export const Enfoque: React.FC = () => {
  const cards = [
    {
      title: 'Innovación',
      icon: Lightbulb,
      description: 'Impulsamos nuevas ideas y herramientas modernas orientadas a la resolución de retos comunitarios e institucionales.',
      badge: 'Estrategia',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Desarrollo',
      icon: TrendingUp,
      description: 'Promovemos esquemas de crecimiento sostenible y estructurado para fortalecer el entorno social y organizacional.',
      badge: 'Crecimiento',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Comunidad',
      icon: Users,
      description: 'Trabajamos con un enfoque participativo en el que la integración y el valor de las personas son el eje fundamental.',
      badge: 'Impacto Social',
      color: 'from-indigo-600 to-blue-700',
    },
    {
      title: 'Oportunidades',
      icon: Compass,
      description: 'Facilitamos vías y mecanismos que permitan abrir nuevos caminos de progreso e inclusión para la sociedad.',
      badge: 'Futuro',
      color: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <section id="enfoque" className="py-24 bg-slate-50 relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200/60">
            Ejes de Trabajo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-4 mb-4">
            Nuestro Enfoque
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Fundamentamos nuestra labor institucional en principios clave para generar valor duradero y constante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-md shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
                  <span className="text-xs font-semibold text-brand-blue group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Ver más
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
