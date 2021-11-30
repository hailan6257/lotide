const countLetters = (str) => {
  let result = {};
  for (const letter of str) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;

//Test code
console.log(countLetters("lighthouse in the house"));