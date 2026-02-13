
import React from 'react';
import { DashboardItem } from '../types';

interface DashboardCardProps {
  dashboard: DashboardItem;
  onClick: (dashboard: DashboardItem) => void;
  index: number;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ dashboard, onClick, index }) => {
  const Icon = dashboard.icon;
  
  const content = (
    <>
      <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
        <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-white text-xl font-bold leading-tight mb-2">
        {dashboard.title}
      </h3>
      
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
        <p className="text-white/90 text-sm font-medium">
          {dashboard.type === 'submenu' ? 'Clique para ver painéis' : 'Abrir no Power BI'}
        </p>
      </div>
      
      <div className="absolute bottom-4 right-6 w-12 h-1 bg-[#F11E26] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
    </>
  );

  const cardClassName = "group relative h-64 cursor-pointer overflow-hidden rounded-3xl gradient-card p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] active:scale-[0.97] flex flex-col items-center justify-center text-center card-stagger-item";

  // Use transition-delay for the stagger effect
  const style = { transitionDelay: `${index * 80}ms` };

  if (dashboard.type === 'link' && dashboard.url) {
    return (
      <a 
        href={dashboard.url}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
        className={cardClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <div 
      onClick={() => onClick(dashboard)}
      style={style}
      className={cardClassName}
    >
      {content}
    </div>
  );
};
