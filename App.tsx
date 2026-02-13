
import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DashboardCard } from './components/DashboardCard';
import { Footer } from './components/Footer';
import { MAIN_DASHBOARDS } from './constants';
import { DashboardItem, ViewState } from './types';
import { ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('main');
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleDashboardClick = (dashboard: DashboardItem) => {
    if (dashboard.type === 'submenu') {
      setViewState('trafego');
      setIsSectionVisible(false); // Reset visibility for the new screen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToHome = () => {
    setViewState('main');
    setIsSectionVisible(false); // Reset visibility for the main screen
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToGrid = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle visibility based on intersection
          // We use a threshold of 0.3 for better responsiveness on mobile devices, 
          // while still fulfilling the 'visible section' requirement.
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
          } else {
            setIsSectionVisible(false);
          }
        });
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [viewState]); // Re-run effect when changing views

  const trafegoData = MAIN_DASHBOARDS.find(d => d.id === 'trafego');

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#F11E26] selection:text-white">
      <Navbar 
        onHomeClick={handleBackToHome} 
        onAnalyticClick={scrollToGrid} 
      />

      <main className="flex-grow">
        {viewState === 'main' ? (
          <>
            <Hero onCtaClick={scrollToGrid} />
            
            <section 
              ref={sectionRef} 
              className={`py-24 px-6 bg-slate-50 scroll-mt-20 transition-all duration-700 ${isSectionVisible ? 'section-active' : ''}`}
            >
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-[#00194C] mb-4">Painel de Navegação</h2>
                  <p className="text-slate-500 max-w-2xl">
                    Selecione uma área abaixo para acessar os indicadores estratégicos. 
                    Links externos serão abertos em uma nova aba.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {MAIN_DASHBOARDS.map((dashboard, index) => (
                    <DashboardCard 
                      key={dashboard.id} 
                      dashboard={dashboard} 
                      onClick={handleDashboardClick} 
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <section 
            ref={sectionRef}
            className={`pt-32 pb-24 px-6 bg-slate-50 min-h-[80vh] transition-all duration-700 ${isSectionVisible ? 'section-active' : ''}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="text-center md:text-left">
                  <h2 className="text-4xl font-extrabold text-[#00194C] mb-2 uppercase tracking-tighter">
                    Tráfego <span className="text-[#F11E26]">– Painéis</span>
                  </h2>
                  <p className="text-slate-500">Acesso aos indicadores específicos do setor de tráfego.</p>
                </div>
                
                <button 
                  onClick={handleBackToHome}
                  className="flex items-center justify-center gap-2 bg-white text-[#00194C] px-6 py-3 rounded-xl font-bold border border-slate-200 shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Voltar ao Painel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {trafegoData?.subItems?.map((dashboard, index) => (
                  <DashboardCard 
                    key={dashboard.id} 
                    dashboard={dashboard} 
                    onClick={() => {}} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
