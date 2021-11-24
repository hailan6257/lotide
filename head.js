// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  console.log((actual === expected) ? `✅Passed: ${actual} === ${expected}` : `🛑Failed: ${actual} !== ${expected}`);
};

const head = (array) => {
  return array[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");