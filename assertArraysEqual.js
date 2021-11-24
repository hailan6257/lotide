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


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [4, 2, 3]);
/*

*/