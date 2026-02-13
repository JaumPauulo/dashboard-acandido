
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 gradient-hero text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-700">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Central de Dashboards – <br />
            <span className="text-[#F11E26]">Setor de Dados</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
            Acesso rápido e organizado aos principais painéis estratégicos do negócio. 
            Sua central de inteligência para decisões baseadas em dados.
          </p>
          <button 
            onClick={onCtaClick}
            className="bg-[#F11E26] hover:bg-[#d41920] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-red-900/20 flex items-center gap-3 group"
          >
            Acessar Painéis
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
