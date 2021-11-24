// FUNCTION IMPLEMENTATION
const eqArrays = (array1, array2) => {
  let aLength = array1.length, bLength = array2.length;
  //let res = false;
  if (aLength !== bLength) {
    return false;
  }
  for (let i = 0; i < aLength; i ++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  /*if (aLength === bLength) {
    res = true;
    for (let i = 0; i < aLength; i ++) {
      if (array1[i] !== array2[i]) {
        res = false;
      }
    }
  }
  return res;//true or false*/
};

const assertArraysEqual = (aArray, bArray) => {
  console.log((eqArrays(aArray, bArray)) ? `✅Passed: ${aArray} === ${bArray}` : `🛑Failed: ${aArray} !== ${bArray}`);
};

const without = (source, itemsToRemove) => {
  let res = [];
  for (let ele of source) {
    if (!itemsToRemove.includes(ele)) {
      res.push(ele);
    }
  }
  return res;
};

// TEST CODE
console.log(without([1, 2, 3], [4, '2', 3]));
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);