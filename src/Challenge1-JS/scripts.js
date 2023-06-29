// @ts-check
const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

/**
 * Checks if a string contains only numbers
 * @param {string} str -The input string to be checked.
 * @returns {boolean} - Returns true if a string contains only numbers,otherwise it returns false
 */
const containsOnlyNumbers = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      return false;
    }
  }
  return true;
}

const primaryValid = containsOnlyNumbers(primaryPhone);
const secondaryValid = containsOnlyNumbers(secondaryPhone);

console.log('Primary phone contains only numbers:', primaryValid);
console.log('Secondary phone contains only numbers:', secondaryValid);


