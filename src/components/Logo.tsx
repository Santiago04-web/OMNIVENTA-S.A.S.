import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', showSubtitle = true }) => {
  const isLight = variant === 'light';
  
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue via-brand-navy to-brand-dark p-0.5 shadow-md shadow-brand-blue/10 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue/20 to-transparent"></div>
          <svg className="w-6 h-6 text-brand-sky relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold text-xl tracking-tight ${isLight ? 'text-white' : 'text-brand-dark'}`}>
            OMNIVENTA
          </span>
          <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-brand-blue/20 text-brand-sky border border-brand-blue/30">
            S.A.S.
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[10px] tracking-widest font-medium uppercase ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
            Sigla: OMV
          </span>
        )}
      </div>
    </div>
  );
};
