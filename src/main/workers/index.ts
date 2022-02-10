import { ipcMain, ipcRenderer } from 'electron';
import Worker from './worker';

const services = {
  gateways: ['customers', 'admins', 'clients'],
  services: [
    'app',
    'app-stats',
    'auth',
    'billing',
    'configs',
    'currencies',
    'customers',
    'emails',
    'events-manager',
    'functions',
    'groups',
    'leaderboards',
    'messaging',
    'notifications',
    'payments',
    'players',
    'profiles',
    'shops',
    'stats',
  ],
};

export default class Workers {
  static workers = new Map<string, Worker>();

  static getWorker(id: string) {
    return this.workers.get(id);
  }

  static createWorker(path: string) {
    if (this.workers.has(path)) this.workers.get(path)?.kill();
    this.workers.set(path, new Worker(path));
    return this.getWorker(path);
  }

  static async killAll() {
    for (const worker of this.workers.values()) await worker.kill();
  }
}
