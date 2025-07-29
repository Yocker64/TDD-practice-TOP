function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function reverseString(string) {
  let reversedString = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    reversedString += string[string.length - 1 - i];
  }
  return reversedString;
}

const calc = {
  add: (no1, no2) => no1 + no2,
  substract: (no1, no2) => no1 - no2,
  multiply: (no1, no2) => no1 * no2,
  divide: (no1, no2) => (no2 !== 0 ? no1 / no2 : undefined),
};

module.exports = {};

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calcu = calc;
