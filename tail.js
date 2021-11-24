// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  console.log((actual === expected) ? `✅Passed: ${actual} === ${expected}` : `🛑Failed: ${actual} !== ${expected}`);
};

const tail = (array) => {
  let newArr =  [...array];
  if (newArr.length > 1) {
    newArr.splice(0, 1);
    return newArr;
  } else {
    return [];
  }
};

//Test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!