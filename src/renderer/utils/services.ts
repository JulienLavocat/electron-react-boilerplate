import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IDBWorker {
  id: string;
  name: string;
  icon?: IconProp;
  swaggerDoc?: string;
}

export const services: IDBWorker[] = [
  { id: 'docker-compose', name: 'docker-compose', icon: 'microchip' },
  { id: 'gateways/customers', name: 'customers', icon: 'microchip' },
  {
    id: 'gateways/admins',
    name: 'admins',
    icon: 'microchip',
    swaggerDoc: 'http://localhost:3001/api-json',
  },
  {
    id: 'gateways/clients',
    name: 'clients',
    icon: 'microchip',
    swaggerDoc: 'http://localhost:3000/api-json',
  },
  { id: 'services/app', name: 'app', icon: 'microchip' },
  { id: 'services/app-stats', name: 'app-stats', icon: 'microchip' },
  { id: 'services/auth', name: 'auth', icon: 'microchip' },
  { id: 'services/billing', name: 'billing', icon: 'microchip' },
  { id: 'services/configs', name: 'configs', icon: 'microchip' },
  { id: 'services/currencies', name: 'currencies', icon: 'microchip' },
  { id: 'services/emails', name: 'emails', icon: 'microchip' },
  { id: 'services/events-manager', name: 'events-manager', icon: 'microchip' },
  { id: 'services/functions', name: 'functions', icon: 'microchip' },
  { id: 'services/groups', name: 'groups', icon: 'microchip' },
  { id: 'services/leaderboards', name: 'leaderboards', icon: 'microchip' },
  { id: 'services/messaging', name: 'messaging', icon: 'microchip' },
  { id: 'services/notifications', name: 'notifications', icon: 'microchip' },
  { id: 'services/payments', name: 'payments', icon: 'microchip' },
  { id: 'services/players', name: 'players', icon: 'microchip' },
  { id: 'services/profiles', name: 'profiles', icon: 'microchip' },
  { id: 'services/shops', name: 'shops', icon: 'microchip' },
  { id: 'services/stats', name: 'stats', icon: 'microchip' },
  { id: 'services/customers', name: 'customers', icon: 'microchip' },
];
