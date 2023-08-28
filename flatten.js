const flatten = function(arr) {
  let newArray = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((arrItem) => {
        newArray.push(arrItem);
      });
    } else {
      newArray.push(item);
    }
  });

  return newArray;
}

module.exports = flatten;