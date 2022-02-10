import { ChildProcessWithoutNullStreams, spawn } from 'child_process';

const IDB_HOME = '/home/julien/Dev/Indiebackend';

export const createProcess = (
  path: string,
  onData: (data: any, stream: string) => void
) => {
  let process: ChildProcessWithoutNullStreams;

  switch (path) {
    case 'docker-compose':
      process = spawn(
        'docker-compose',
        [
          '-f',
          `'${IDB_HOME}/docker-compose.yml'`,
          '-p',
          "'indiebackend'",
          'logs',
          '-f',
          '--tail',
          '100',
        ],
        {
          cwd: `${IDB_HOME}`,
          shell: true,
        }
      );
      break;

    default:
      process = spawn('./dev.bash', {
        cwd: `${IDB_HOME}/${path}`,
        shell: true,
      });
      break;
  }

  process.stdout?.on('data', (data) => onData(data, 'stdout'));
  process.stderr?.on('data', (data) => onData(data, 'stderr'));

  return process;
};
