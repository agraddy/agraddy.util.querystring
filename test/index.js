var tap = require('agraddy.test.tap')(__filename);

var mod = require('../');

// THIS MODULE IS NOT NEEDED - originally created this module because I thought I didn't like the way querystring handled duplicates

// Make sure module pulls in each of the node query string methods
tap.assert.equal(typeof mod.escape, 'function', 'Should be a function.');
tap.assert.equal(typeof mod.parse, 'function', 'Should be a function.');
tap.assert.equal(typeof mod.stringify, 'function', 'Should be a function.');
tap.assert.equal(typeof mod.unescape, 'function', 'Should be a function.');


