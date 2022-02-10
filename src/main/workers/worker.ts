import { ChildProcess, spawn } from 'child_process';
import treeKill from 'tree-kill';

const IDB_HOME = '/home/julien/Dev/Indiebackend/';

export default class Worker {
  private process: ChildProcess;
  private logs: { from: string; data: string }[];

  constructor(private path: string) {
    this.logs = [];
    this.process = spawn('./dev.bash', {
      cwd: `${IDB_HOME}/${path}`,
      shell: true,
    });

    this.process.stdout?.on('data', (data) => {
      const strData = data.toString();
      if (strData === 'c') {
        this.logs = [];
        return;
      }
      this.logs.push({ from: 'stdout', data: strData });
    });

    this.process.stderr?.on('data', (data) => {
      this.logs.push({ from: 'stderr', data: data.toString() });
    });
  }

  getLogs() {
    return this.logs;
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

    // this.process.kill();
    // if (this.process.pid) process.kill(this.process.pid, 'SIGINT');
  }
}
