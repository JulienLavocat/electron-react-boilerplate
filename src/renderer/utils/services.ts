import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IDBWorker {
  id: string;
  category: string;
  name: string;
  icon?: IconProp;
  swaggerDoc?: string;
}

export const services: IDBWorker[] = [
  {
    id: 'docker-compose',
    category: 'Misc',
    name: 'docker-compose',
    icon: 'microchip',
  },
  {
    id: 'gateways/customers',
    category: 'Gateways',
    name: 'customers',
    icon: 'microchip',
  },
  {
    id: 'gateways/admins',
    category: 'Gateways',
    name: 'admins',
    icon: 'microchip',
    swaggerDoc: 'http://localhost:3001/api-json',
  },
  {
    id: 'gateways/clients',
    category: 'Gateways',
    name: 'clients',
    icon: 'microchip',
    swaggerDoc: 'http://localhost:3000/api-json',
  },
  { id: 'services/app', category: 'Services', name: 'app', icon: 'microchip' },
  {
    id: 'services/app-stats',
    category: 'Services',
    name: 'app-stats',
    icon: 'microchip',
  },
  {
    id: 'services/auth',
    category: 'Services',
    name: 'auth',
    icon: 'microchip',
  },
  {
    id: 'services/billing',
    category: 'Services',
    name: 'billing',
    icon: 'microchip',
  },
  {
    id: 'services/configs',
    category: 'Services',
    name: 'configs',
    icon: 'microchip',
  },
  {
    id: 'services/currencies',
    category: 'Services',
    name: 'currencies',
    icon: 'microchip',
  },
  {
    id: 'services/emails',
    category: 'Services',
    name: 'emails',
    icon: 'microchip',
  },
  {
    id: 'services/events-manager',
    category: 'Services',
    name: 'events-manager',
    icon: 'microchip',
  },
  {
    id: 'services/functions',
    category: 'Services',
    name: 'functions',
    icon: 'microchip',
  },
  {
    id: 'services/groups',
    category: 'Services',
    name: 'groups',
    icon: 'microchip',
  },
  {
    id: 'services/leaderboards',
    category: 'Services',
    name: 'leaderboards',
    icon: 'microchip',
  },
  {
    id: 'services/messaging',
    category: 'Services',
    name: 'messaging',
    icon: 'microchip',
  },
  {
    id: 'services/notifications',
    category: 'Services',
    name: 'notifications',
    icon: 'microchip',
  },
  {
    id: 'services/payments',
    category: 'Services',
    name: 'payments',
    icon: 'microchip',
  },
  {
    id: 'services/players',
    category: 'Services',
    name: 'players',
    icon: 'microchip',
  },
  {
    id: 'services/profiles',
    category: 'Services',
    name: 'profiles',
    icon: 'microchip',
  },
  {
    id: 'services/shops',
    category: 'Services',
    name: 'shops',
    icon: 'microchip',
  },
  {
    id: 'services/stats',
    category: 'Services',
    name: 'stats',
    icon: 'microchip',
  },
  {
    id: 'services/customers',
    category: 'Services',
    name: 'customers',
    icon: 'microchip',
  },
];
