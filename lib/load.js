console.log('____ load.js loaded');
const success = require('../success');
success();

module.exports = fname => {
  console.log('____ load.js run');
  console.log('loading', fname);
  const mod = require(fname);
  console.log('running', fname);
  mod();
};
