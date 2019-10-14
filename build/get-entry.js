// build src/index.js

const fs = require('fs');
const path = require('path');

const getComponents = require('./get-components.js');

const upperCamelize = str => (str.charAt(0).toUpperCase() + str.slice(1));

function buildEntry() {
  const components = getComponents();
  const importList = components.map(i => `import ${upperCamelize(i)} from './${i}';`);
  const installList = components.map(i => upperCamelize(i));
  const exportList = installList;

  const content = `
${importList.join('\n')}

const components = [
  ${installList.join(',\n  ')}
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

export {
  ${exportList.join(',\n  ')}
}

export default {
  install
}
`
  fs.writeFileSync(path.join(__dirname, '../src/index.js'), content)
}

buildEntry()

