/**
 * Linear Search Algorithm
 * @param {array} array
 * @param {number} target
 * @returns {number} index
 */
const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i;
    }
  }
  return -1;
};

export default linearSearch;
