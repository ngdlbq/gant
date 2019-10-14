#! usr/bin/env node

// 新增组件
const shell = require('shelljs');
const inquirer = require('inquirer');
const signale = require('signale');
const path = require('path');

function generateFile(name, zhName) {
  const dir = path.join(__dirname, '../src');

  const lowerName = name.charAt(0).toLowerCase() + name.slice(1);
  shell.mkdir('-p', [`${dir}/${lowerName}/demo`, `${dir}/${lowerName}/src`]);
  
  shell.touch([`${dir}/${lowerName}/README.md`, `${dir}/${lowerName}/index.js`]);
  shell.cat(path.join(__dirname, './demo.vue')).to(`${dir}/${lowerName}/demo/index.vue`);
  shell.cat(path.join(__dirname, './component.vue')).to(`${dir}/${lowerName}/src/index.vue`);

  shell.sed('-i', /component-name/i, name, `${dir}/${lowerName}/src/index.vue`,)

  // init readme.md
  shell.ShellString(`
# ${name} ${zhName}
  `).to(`${dir}/${name}/README.md`);

  // init index.js
  shell.ShellString(`
import ${name} from './src/index.vue';

/* istanbul ignore next */
${name}.install = function(Vue) {
  Vue.component(${name}.name, ${name});
};

export default ${name};
  `).to(`${dir}/${name}/index.js`);
}


inquirer.prompt([
  {
    message: '请输入组件中文名：',
    name: 'zhName'
  },
  {
    message: '请输入组件英文名：',
    name: 'enName'
  }
]).then(res => {
  console.log(res);
  let {zhName, enName} = res;
  zhName = zhName.trim();
  enName = enName.trim();
  if (!zhName || !enName) {
    signale.error('请输入有效的组件名相关信息');
    shell.exit(1)
  }
  signale.start('init starting');
  generateFile(enName, zhName);
  signale.success('init success');
  shell.exec('npm run build:entry');
})