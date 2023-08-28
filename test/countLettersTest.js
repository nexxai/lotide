const assert = require('chai').assert;
const countLetters = require('../countLetters')

describe('#countLetters', function() {
  it('can tell you how many letters are in a sentence', function() {
    assert.deepEqual(countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 });
  });
});