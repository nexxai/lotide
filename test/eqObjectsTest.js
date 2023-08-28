const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', function() {
  it('will return true when two objects are the same', function() {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.equal(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it('will return false when two objects are not the same', function() {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.equal(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it('will return true when the objects are the same but defined in different orders', function() {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.equal(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it('will return false if all keys do not match', function() {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.equal(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false)
  });
});