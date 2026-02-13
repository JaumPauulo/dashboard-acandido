
import React from 'react';
import { LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  onAnalyticClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onAnalyticClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00194C] shadow-lg border-b border-white/10 h-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={onHomeClick}
        >
          <img 
            src="https://acandido.com.br/wp-content/uploads/2021/12/logo-white-1024x219.png" 
            alt="Logo A.Cândido" 
            className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden lg:block w-[2px] h-8 bg-white/20 mx-2"></div>
          <span className="hidden md:block text-white/90 text-sm md:text-base font-medium tracking-wide">
            Indicadores Estratégicos – Painel de Navegação
          </span>
        </div>

        <button 
          onClick={onAnalyticClick}
          className="bg-white/10 hover:bg-white/20 text-white px-4 md:px-6 py-2 rounded-full transition-all flex items-center gap-2 text-sm font-semibold border border-white/20 backdrop-blur-sm"
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>Visão Detalhada</span>
        </button>
      </div>
    </nav>
  );
};
