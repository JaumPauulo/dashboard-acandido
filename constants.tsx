
import { 
  Calculator, 
  Users, 
  UserRound, 
  Truck, 
  Wrench, 
  ShoppingCart, 
  CheckCircle,
  Monitor,
  BarChart4,
  Map,
  AlertTriangle
} from 'lucide-react';
import { DashboardItem } from './types';

export const MAIN_DASHBOARDS: DashboardItem[] = [
  {
    id: 'contabilidade',
    title: 'Contabilidade',
    icon: Calculator,
    type: 'link',
    url: 'https://app.powerbi.com/view?r=LINK_CONTABILIDADE'
  },
  {
    id: 'rh',
    title: 'Recurso Humano',
    icon: Users,
    type: 'link',
    url: 'https://app.powerbi.com/view?r=LINK_RECURSOS_HUMANOS'
  },
  {
    id: 'dp',
    title: 'Departamento Pessoal',
    icon: UserRound,
    type: 'link',
    url: 'https://app.powerbi.com/view?r=LINK_DEPARTAMENTO_PESSOAL'
  },
  {
    id: 'trafego',
    title: 'Tráfego',
    icon: Truck,
    type: 'submenu',
    subItems: [
      { 
        id: 'cco', 
        title: 'CCO', 
        icon: Monitor, 
        type: 'link', 
        url: 'https://app.powerbi.com/view?r=LINK_TRAFEGO_CCO' 
      },
      { 
        id: 'cmo', 
        title: 'CMO', 
        icon: BarChart4, 
        type: 'link', 
        url: 'https://app.powerbi.com/view?r=LINK_TRAFEGO_CMO' 
      },
      { 
        id: 'planejamento', 
        title: 'Planejamento', 
        icon: Map, 
        type: 'link', 
        url: 'https://app.powerbi.com/view?r=LINK_TRAFEGO_PLANEJAMENTO' 
      },
      { 
        id: 'ocorrencias', 
        title: 'Ocorrências', 
        icon: AlertTriangle, 
        type: 'link', 
        url: 'https://app.powerbi.com/view?r=LINK_TRAFEGO_OCORRENCIAS' 
      }
    ]
  },
  {
    id: 'manutencao',
    title: 'Manutenção',
    icon: Wrench,
    type: 'link',
    url: 'https://app.powerbi.com/view?r=LINK_MANUTENCAO'
  },
  {
    id: 'compras',
    title: 'Compras',
    icon: ShoppingCart,
    type: 'link',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiMmQ3YWMxMGItZWUzMS00YTBlLThjMjAtMmZiM2YxYTg2OTJmIiwidCI6ImEwN2U5OWVjLWYzOTQtNDJlOS1hODQyLTQ5MjZiM2NmMGJjZSJ9'
  },
  {
    id: 'qualidade',
    title: 'Qualidade',
    icon: CheckCircle,
    type: 'link',
    url: 'https://app.powerbi.com/view?r=LINK_QUALIDADE'
  }
];
