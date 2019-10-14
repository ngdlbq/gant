const getComponents = require('./get-components.js');
const upperCamelize = str => (str.charAt(0).toUpperCase() + str.slice(1));

const components = {};
getComponents().forEach(i => {
  components[upperCamelize(i)] = `./src/${i}`;
})

module.exports = components