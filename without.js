const without = (source, itemsToRemove) => {
  let res = [];
  for (let ele of source) {
    if (!itemsToRemove.includes(ele)) {
      res.push(ele);
    }
  }
  return res;
};
module.exports = without;
// // TEST CODE
// console.log(without([1, 2, 3], [4, '2', 3]));
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);