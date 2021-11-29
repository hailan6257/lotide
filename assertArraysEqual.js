// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

const assertArraysEqual = (aArray, bArray) => {
  console.log((eqArrays(aArray, bArray)) ? `✅Passed: ${aArray} === ${bArray}` : `🛑Failed: ${aArray} !== ${bArray}`);
};

module.exports = assertArraysEqual;