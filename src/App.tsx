import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Nosotros } from './components/Nosotros';
import { Enfoque } from './components/Enfoque';
import { Innovacion } from './components/Innovacion';
import { ComunidadImpacto } from './components/ComunidadImpacto';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-brand-neutral text-slate-900 flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Nosotros />
        <Enfoque />
        <Innovacion />
        <ComunidadImpacto />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
