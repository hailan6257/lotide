// TEST FUNCTION
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;

//TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), false);



// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), false);


// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd2, cd2), true);