//test code
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require("chai").assert;
const middle = require('../middle');
// assertArraysEqual([], middle([1]));
// assertArraysEqual([], middle([1, 2]));
// assertArraysEqual([2], middle([1, 2, 3]));
// assertArraysEqual([3], middle([1, 2, 3, 4, 5]));
// assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
// assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6]));
describe('#midddle', function() {
  it("should return [] for [1]", function() {
    const mid = middle([1]);
    console.log(mid);
    assert.deepEqual(mid, []);
  });
});