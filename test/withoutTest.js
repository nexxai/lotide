const assert = require('chai').assert;
const without = require('../without');

describe('#without', function() {
  it('return an array with only the items that were not to be removed', function() {
    assert.deepEqual(without([1, 2, 3], [1]), [2,3]);
  });

  it('will only remove items of exactly the same type (type coercion is NOT supported)', function() {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);
  });

  it('will return the original array if the given item(s) are not found', function() {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});