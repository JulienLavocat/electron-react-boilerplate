import { ChildProcess } from 'child_process';
import treeKill from 'tree-kill';
import { createProcess } from '../utils/createProcess';

export default class Worker {
  private process!: ChildProcess;
  private logs: { from: string; data: string }[];

  constructor(private path: string) {
    this.logs = [];
    this.run();
  }

  run() {
    this.process = createProcess(this.path, (data, stream) => {
      const strData = data.toString() as string;
      if (strData === 'c') {
        this.logs = [];
        return;
      }
      strData
        .split('\n')
        .filter((e) => Boolean(e))
        .forEach((e) => this.logs.push({ from: stream, data: e }));
    });
  }

  getLogs() {
    return this.logs;
  }

  async restart() {
    console.log('Got restart request');
    this.logs = [{ from: 'process-manager', data: 'Killing worker...' }];
    await this.kill();
    this.logs = [{ from: 'process-manager', data: 'Starting worker...' }];
    this.run();
  }

  async kill() {
    return new Promise<void>((resolve, reject) => {
      console.log('Killing worker', this.path);
      if (this.process.pid)
        treeKill(this.process.pid, (err) => {
          if (err) reject(err);
          console.log('Killed worker', this.path, this.process.pid);
          resolve();
        });
    });
  }
}
