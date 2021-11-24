// FUNCTION IMPLEMENTATION
const eqArrays = (array1, array2) => {
  let aLength = array1.length, bLength = array2.length;
  if (aLength !== bLength) {
    return false;
  }
  for (let i = 0; i < aLength; i ++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (aArray, bArray) => {
  console.log((eqArrays(aArray, bArray)) ? `✅Passed: ${aArray} === ${bArray}` : `🛑Failed: ${aArray} !== ${bArray}`);
};


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], ['1', 2, 3]);
assertArraysEqual([1, 2, 3], [4, 2, 3]);
/*

*/