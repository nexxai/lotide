const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', function() {
  it('will return true when two arrays of numbers are equivalent', function() {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('will return false when two arrays of numbers are not equal', function() {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it('will return true when two arrays of strings are equivalent', function() {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('will return false when two arrays of strings are not equal', function() {
      assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});