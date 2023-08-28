const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 == 1) {
    let middleValueIndex = arr.length / 2 - 0.5;

    return [arr[middleValueIndex]];
  } else {
    let middleValueIndex = arr.length / 2;

    return [arr[middleValueIndex - 1], arr[middleValueIndex]];
  }
}

module.exports = middle;