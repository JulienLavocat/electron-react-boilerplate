import { ChildProcess, spawn } from 'child_process';

const IDB_HOME = '/home/julien/Dev/Indiebackend/';

export default class Worker {
  private process: ChildProcess;
  private logs: { from: string; data: string }[];

  constructor(private path: string) {
    this.logs = [];
    this.process = spawn('sh', ['dev.bash'], {
      cwd: `${IDB_HOME}/${path}`,
    });

    this.process.stdout?.on('data', (data) => {
      this.logs.push({ from: 'stdout', data: data.toString() });
    });

    this.process.stderr?.on('data', (data) => {
      this.logs.push({ from: 'stderr', data: data.toString() });
    });
  }

  getLogs() {
    return this.logs;
  }

  kill() {
    console.log('Killing worker', this.path);
    this.process.kill();
    if (this.process.pid) process.kill(this.process.pid, 'SIGINT');
  }
}
