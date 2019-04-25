/* eslint-disable no-console */

const { execSync } = require('child_process');

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  });

console.log('Building CommonJS modules ...');

exec('babel src -d . --ignore src/__tests__', {
  BABEL_ENV: 'cjs',
});

console.log('\nBuilding ES modules ...');

exec('babel src -d es --ignore src/__tests__', {
  BABEL_ENV: 'es',
});
