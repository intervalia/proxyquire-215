/* eslint-env mocha */
const expect = require('chai').expect;
const path = require('path');
const stubs = {
  '../success': () => {
    console.log('Stubbed success.js called');
  },
  '../lazyload/one': () => {
    console.log('Stubbed one.js called');
  }
}

const proxyquire = require('proxyquire').noCallThru();
const load = proxyquire('./lib/load', stubs);

describe('proxyquire issue #215 tests', function() {
  it('should run', function() {
    const rootPath = '../lazyload/one';// path.join(process.cwd(), 'lazyload');
    console.log('TESTING Lazy loading files from', rootPath);
    load(rootPath);
  });
});
