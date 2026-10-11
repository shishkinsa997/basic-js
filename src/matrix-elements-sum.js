const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((line, row) => {
    line.forEach((el, col) => {
      if (row === 0) {
        sum += el;
      } else {
        const column = matrix.map((line) => line[col]);
        if (column.slice(0, row).every((el) => el > 0)) {
          sum += el;
        }
      }
    });
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
