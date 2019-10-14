const path = require('path');
const shell = require('shelljs');
const exec = shell.exec;
const signale = require('signale');
const inquirer = require('inquirer');
shell.config.silent = true;

if (exec('git symbolic-ref --short -q HEAD').stdout.trim() !== 'master') {
  signale.warn('please checkout branch master');
  return;
}

async function inputVersion() {
  const version = await inquirer.prompt([
    {
      message: 'Enter release version: ',
      name: 'version'
    }
  ]);
  let v = version.version;
  v = v.trim();
  if (!v) {
    return Promise.reject('please enter release version')
  }
  exec(`npm version ${v} --no-git-tag-version`);
  return Promise.resolve(v);
}

inputVersion().then(VERSION => {
  // delete
  shell.rm('-rf', path.join(__dirname, '../lib'));
  shell.rm(path.join(__dirname, '../src/index.js'));
  signale.success('delete success');

  // build
  signale.start('building...');
  exec('npx cross-env NODE_ENV=production webpack --hide-modules --config build/build-lib.js');
  exec('node build/get-entry.js');
  exec('npx cross-env NODE_ENV=production webpack --hide-modules --config build/build-entry.js');
  signale.success('construction complete');

  // commit
  exec('git add .');
  exec(`git commit -m 'release ${VERSION}'`);
  exec('git push origin master');

  signale.start('publish...');
  // publish
  if (exec('npm publish').code !== 0) {
    shell.echo('Error: npm publish failed');
    shell.exit(1);
  }
  signale.success('npm publish success');
}).catch(err => signale.error(err));






