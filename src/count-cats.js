const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix === '^^') {
      return 1;
  }

  if (!Array.isArray(matrix)) {
      return 0;
  }

  return matrix.reduce((sum, item) => sum + countCats(item), 0);
}

module.exports = {
  countCats
};
