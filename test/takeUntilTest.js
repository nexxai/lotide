const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', function() {
  it('will return a new array with all of the items in the given array until it reaches the stopping point defined by the given callback', function() {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it('will return a new array with all of the items in the given array until it reaches the stopping point defined by the given callback (v2)', function() {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);
  });
});