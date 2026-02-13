
import { LucideIcon } from 'lucide-react';

export interface DashboardItem {
  id: string;
  title: string;
  icon: LucideIcon;
  type: 'link' | 'submenu';
  url?: string;
  subItems?: DashboardItem[];
}

export type ViewState = 'main' | 'trafego';
