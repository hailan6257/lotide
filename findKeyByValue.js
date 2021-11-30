// ACTUAL FUNCTION
const findKeyByValue = (obj, value) => {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
// //TEST CODE
// const bestTVShowsByGenre = {
//   scifi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "scifi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Not The Expanse"), undefined);