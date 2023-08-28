const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', function() {
  it('returns ([]) for middle([1])', function() {
    assert.deepEqual(middle([1]), []);
  });

  it('returns ([]) for middle([1,2])', function() {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns ([2]) for middle([1,2,3])', function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns ([3]) for middle([1,2,3,4,5])', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns ([2,3]) for middle([1,2,3,4])', function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns ([3,4]) for middle([1,2,3,4,5,6])', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
