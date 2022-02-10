import { ChildProcessWithoutNullStreams, spawn } from 'child_process';

const IDB_HOME = '/home/julien/Dev/Indiebackend';

const commands: Record<string, [string, string[]]> = {
  'docker-compose': [
    'docker-compose',
    [
      '-f',
      `'${IDB_HOME}/docker-compose.yml'`,
      '-p',
      "'indiebackend'",
      'up',
      // '-f',
      // '--tail',
      // '100',
    ],
  ],
};

export const createProcess = (
  path: string,
  onData: (data: any, stream: string) => void
) => {
  let process: ChildProcessWithoutNullStreams;

  switch (path.split('/')[0]) {
    case 'gateways':
      process = spawnProcess(path, './dev.bash');
      break;

    case 'services':
      process = spawnProcess(path, './dev.bash');
      break;

    case 'web':
      process = spawnProcess(path, './dev.bash');
      break;

    case 'scripts':
      process = spawnProcess('scripts', `./${path.split('/')[1]}.sh`);
      break;

    default:
      const [cmd, args] = commands[path];
      process = spawnProcess('', cmd, args);
      break;
  }

  process.stdout?.on('data', (data) => onData(data, 'stdout'));
  process.stderr?.on('data', (data) => onData(data, 'stderr'));

  return process;
};

function spawnProcess(path: string, cmd: string, args?: string[]) {
  return spawn(cmd, args, {
    cwd: `${IDB_HOME}/${path}`,
    shell: true,
  });
}
