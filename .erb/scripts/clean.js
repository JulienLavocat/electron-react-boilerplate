import rimraf from 'rimraf';
import webpackPaths from '../configs/webpack.paths.ts';
import process from 'process';

const args = process.argv.slice(2);
const commandMap = {
  dist: webpackPaths.distPath,
  release: webpackPaths.releasePath,
  dll: webpackPaths.dllPath,
  build: webpackPaths.buildPath
};

args.forEach((x) => {
  const pathToRemove = commandMap[x];
  if (pathToRemove !== undefined) {
    rimraf.sync(pathToRemove);
  }
});
