const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', function() {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', function() {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
    assert.strictEqual(words.length, 3);
  });
});