// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  console.log((actual === expected) ? `✅Passed: ${actual} === ${expected}` : `🛑Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 3);
