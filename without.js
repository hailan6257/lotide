// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  let res = false, aLength = array1.length, bLength = array2.length;
  if (aLength === bLength) {
    res = true;
    for (let i = 0; i < aLength; i ++) {
      if (array1[i] !== array2[i]) {
        res = false;
      }
    }
  }
  return res;//true or false
};

const assertArraysEqual = function(aArray, bArray) {
  if (eqArrays(aArray, bArray)) {
    console.log(`✅✅✅Assertion Passed: ${aArray} and ${bArray} are same array!`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${aArray} and ${bArray} are different array!`);
  }
};

const without = function(source, itemsToRemove) {
  let res = [], dec;
  for (let ele of source) {
    dec = true;
    for (let item of itemsToRemove) {
      if (item === ele) {
        dec = false;
      }
    }
    if (dec) {
      res.push(ele);
    }
  }
  return res;
};

// TEST CODE

console.log(without([1, 2, 3], ['1', 2, 3]));
console.log(without([1, 2, 3], [4, '2', 3]));
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);