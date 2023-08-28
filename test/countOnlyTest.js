const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', function() {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }); 

  it('can count how many items exist in an array', function() {
    assert.deepEqual(result1["Jason"], 1);
    assert.deepEqual(result1["Karima"], undefined);
    assert.deepEqual(result1["Fang"], 2);
    assert.deepEqual(result1["Agouhanna"], undefined);
  });
});