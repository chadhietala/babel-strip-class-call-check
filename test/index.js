var babel = require('babel-core');
var fs = require('fs');
var path = require('path');
var stripClassCallCheck = require('../index');
var assert = require('assert');

function testFixture(name) {
  it(name, function() {
    var fixturePath = path.resolve(__dirname, 'fixtures', name, 'fixture.js');
    var expectedPath = path.resolve(__dirname, 'fixtures', name, 'expected.js');
    var expected = fs.readFileSync(expectedPath).toString();
    var result = babel.transformFileSync(fixturePath, {
      externalHelpers: true,
      plugins: [{ transformer: stripClassCallCheck, position: 'after' }]
    });

    assert.strictEqual(result.code, expected);
  });
}

describe('babel-strip-class-call-check', function() {
  describe('basic', function() {
    testFixture('classes');
  });
});
