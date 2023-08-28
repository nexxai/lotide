const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', function() {
  it('will return the first key matching the passed in callback', function() {
    assert.equal(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), 'noma');
  });
});