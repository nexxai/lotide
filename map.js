const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const digits = [1,2,3,4,5,6,7,8,9,10];
assertArraysEqual(map(digits, digit => digit * 2), [2,4,6,8,10,12,14,16,18,20]);
assertArraysEqual(map(digits, digit => digit * digit), [1,4,9,16,25,36,49,64,81,100]);

const phones = ['Apple iPhone', 'Samsung Galaxy', 'Google Pixel'];
assertArraysEqual(map(phones, phone => phone.length), [12, 14, 12]);

