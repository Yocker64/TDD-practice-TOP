function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function reverseString(string) {
  let reversedString = '';
  for (let i = 0; i < string.length; i++) {
    reversedString += string[string.length - 1 - i];
  }
  return reversedString;
}

module.exports = {};

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
