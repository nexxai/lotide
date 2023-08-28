const countLetters = function(sentence) {
  const results = {};

  for (let letter of sentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
}

module.exports = countLetters;