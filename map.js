//ACTUAL FUNCTION
const map = function(array) {
  const results = [];
  array.forEach(element => results.push(element[0]));
  return results;
};

module.exports = map;

// //TEST CODE
// const words = ["ground", "control", "to", "major", "tom"];
// assertArraysEqual(map(words), ['g', 'c', 't', 'm', 't']);