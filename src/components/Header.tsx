import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Enfoque', href: '#enfoque' },
    { name: 'Innovación', href: '#innovacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 py-3' 
        : 'bg-gradient-to-b from-brand-dark/95 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="focus:outline-none focus:ring-2 focus:ring-brand-sky rounded-lg">
            <Logo variant="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-lightBlue hover:from-brand-lightBlue hover:to-brand-blue text-white font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300"
            >
              Contáctanos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-sky"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-brand-navy/95 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-brand-sky py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-lightBlue text-white font-semibold text-base shadow-lg shadow-brand-blue/20"
              >
                Contáctanos
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
