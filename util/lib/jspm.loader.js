const fs = require('fs');
//const process = require('process');
const jspm = require('jspm');

let settings = {
  path: '.'
};

//region setup environment
jspm.setPackagePath(settings.path);
//endregion

/*process.argv.forEach(function (val, index, array) {
 console.log(index + ': ' + val);

 if(val.indexOf('--asd')) {
 console.log(val.replace('--asd', ''));
 }
 });*/
//console.log(process.env);

// jspm normalize and load via fs
/*jspm.import('fs').then(function(fs) {
  //fs.readFile('../package.json', json => console.log(JSON.stringify(json)));
  //console.log(fs.readFileSync('../package.json'));
});*/

// node jspm loader

const setPath = (path) => {
  jspm.setPackagePath(path);
};
let jspmLoader = new jspm.Loader();

//region examples
/*mySystem.normalize('../package.json!').then(function(normalized) {
  console.log(normalized);
});*/

/*mySystem.import('../package.json!').then(function(module) {
  console.log(module.name);
});*/
//endregion

module.exports = {
  jspmLoader: jspmLoader,
  settings: settings
};
