const load = require('./load');

console.log('+++++ app loaded');
module.exports = () => {
  console.log('+++++ app run');
  load('../lazyload/one');
  console.log('done');
};
