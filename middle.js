//ACTUAL FUNCTION
const middle = array => {
  const isEven = number => number % 2 === 0;// is a number even?
  let length = array.length, result = [], m = parseInt(length / 2);
  if (length > 2) {
    if (!isEven(length)) {
      result.push(array[m]);
    } else {
      result.push(array[m - 1]);
      result.push(array[m]);
    }
  }
  return result;
};

module.exports = middle;