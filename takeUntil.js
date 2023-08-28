const takeUntil = function(array, callback) {
  const results = [];

  for (let i of array) {
    if (callback(i)) {
      break;
    } else {
      results.push(i);
    }
  }

  return results;
}

module.exports = takeUntil;