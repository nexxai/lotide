const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', function() {
  it('will return an array with a single item when there is only one instance of a letter in the given sentence', function() {
    assert.deepEqual(letterPositions("hello").h, [0])
  });
  
  it('will return an array with two items when there are two instances of a letter in the given sentence', function() {
    assert.deepEqual(letterPositions("hello").l, [2, 3])
  });
});