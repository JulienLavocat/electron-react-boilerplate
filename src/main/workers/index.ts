import { services } from '../utils/services';
import Worker from './worker';

export default class Workers {
  static workers = new Map<string, Worker>();

  static init() {
    Object.entries(services).forEach(([type, items]) =>
      items.forEach((item) => this.createWorker(`${type}/${item}`))
    );
  }

  static getWorker(id: string) {
    return this.workers.get(id);
  }

  static async createWorker(path: string) {
    if (this.workers.has(path)) return this.getWorker(path);
    console.log('Creating worker', path);
    this.workers.set(path, new Worker(path, path === 'docker-compose'));
    return this.getWorker(path);
  }

  static async killAll() {
    for (const worker of this.workers.values()) await worker.kill();
  }
}
