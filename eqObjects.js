// TEST FUNCTION
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

// ACTUAL FUNCTION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1), keys2 = Object.keys(object2), alert = true;
  if (eqArrays(keys1, keys2)) {
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        alert = false;
      }
    }
  } else {
    alert = false;
  }
  return alert;
};


//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), false);



const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), false);


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd2, cd2), true);