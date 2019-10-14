const fs = require('fs');
const path = require('path');
const excludes = ['.DS_Store', 'index.js', 'Index.js'];

module.exports = function() {
  let dirs = fs.readdirSync(path.join(__dirname, '../src'));
  
  dirs = dirs.filter(i => !excludes.includes(i));
  return dirs;
}