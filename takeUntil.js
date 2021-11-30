// ACTUAL FUNCTION
const takeUntil = (array, callback) => {
  let res = [];
  for (let ele of array) {
    if (!callback(ele)) {
      res.push(ele);
    } else {
      break;
    }
  }
  return res;
};

module.exports = takeUntil;

// //TEST CODE
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);