
import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-[#00194C] text-white pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center mb-12">
          <img 
            src="https://acandido.com.br/wp-content/uploads/2021/12/logo-white-1024x219.png" 
            alt="Logo A.Cândido" 
            className="h-10 mb-6 object-contain opacity-90"
          />
          <p className="text-white/60 text-sm text-center max-w-md leading-relaxed">
            HUB Setor de Dados — Transformando informações em decisões inteligentes para o Grupo A.Cândido.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Sub-footer / Credits Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-xs font-medium tracking-wider uppercase">
            © {year} A.Cândido • Todos os direitos reservados
          </div>
          
          <a 
            href="https://github.com/JaumPauulo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="h-[1px] w-4 bg-white/20 group-hover:w-8 group-hover:bg-[#F11E26] transition-all duration-300"></div>
            <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">Desenvolvido por</span>
            <span className="text-white/80 text-xs font-semibold tracking-wide transition-colors duration-300 group-hover:text-[#F11E26]">
              JOÃO PAULO .Z
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
