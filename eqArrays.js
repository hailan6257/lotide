// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  console.log((actual === expected) ? `✅Passed: ${actual} === ${expected}` : `🛑Failed: ${actual} !== ${expected}`);
};

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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
/*
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
*/