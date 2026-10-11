const { NotImplementedError } = require("../lib");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrays = arr.reduce(
    (acc, curr, i) => {
      if (curr === -1) {
        acc[0].push(i);
      } else {
        acc[1].push(curr);
      }
      return acc;
    },
    [[], []],
  );
  arrays[1].sort((a, b) => a - b);
  arrays[0].forEach((i) => {
    arrays[1].splice(i, 0, -1);
  });
  return arrays[1];
}
module.exports = {
  sortByHeight,
};
