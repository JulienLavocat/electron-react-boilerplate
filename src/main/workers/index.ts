import Worker from './worker';

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
