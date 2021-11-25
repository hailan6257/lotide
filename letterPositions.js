//Test functions
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

//Actual functions
const letterPositions = function(sentence) {
  const results = {}, le = sentence.length;
  for (let i = 0; i < le; i ++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};



//Test code
const expectedObj = {
  h : [0],
  e : [1],
  l : [2, 3],
  o : [4],
};

assertArraysEqual(letterPositions("hello")['h'], [0]);
assertArraysEqual(letterPositions("hello")['l'], [2, 3]);
