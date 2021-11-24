// TEST/ASSERTION FUNCTIONS
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

// is a number even?
const isEven = (number) =>{
  return (number % 2 === 0) ? true : false;
};
//ACTUAL FUNCTION
const middle = (array) => {
  let length = array.length, result = [], m = parseInt(length / 2);
  if (length > 2) {
    if (!isEven(length)) {
      result.push(array[m]);
    } else {
      result.push(array[m - 1]);
      result.push(array[m]);
    }
  }
  return result;
};

//test code
assertArraysEqual([], middle([1]));
assertArraysEqual([], middle([1, 2]));
assertArraysEqual([2], middle([1, 2, 3]));
assertArraysEqual([3], middle([1, 2, 3, 4, 5]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6]));


/*
1.For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []
2.For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
3.For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
*/
