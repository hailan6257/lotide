// FUNCTION IMPLEMENTATION
const tail = (array) => {
  let newArr =  [...array];
  if (newArr.length > 1) {
    newArr.splice(0, 1);
    return newArr;
  } else {
    return [];
  }
};

module.exports = tail;