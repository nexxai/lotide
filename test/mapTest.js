const assert = require('chai').assert;
const map = require('../map');

describe('#map', function() {
  it('will perform the given callback on each item in the given array and return the results in a new array', function() {
    const digits = [1,2,3,4,5,6,7,8,9,10];
    assert.deepEqual(map(digits, digit => digit * 2), [2,4,6,8,10,12,14,16,18,20]);
    assert.deepEqual(map(digits, digit => digit * digit), [1,4,9,16,25,36,49,64,81,100]);


    const phones = ['Apple iPhone', 'Samsung Galaxy', 'Google Pixel'];
    assert.deepEqual(map(phones, phone => phone.length), [12, 14, 12]);
  });
});