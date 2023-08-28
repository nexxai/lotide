const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', function() {
  it('will return a new flattened array', function() {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});