const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array.from(matrix, (x) => Array.from(x, () => 0));
  const inc = (m, r, c) => {
    if (m?.[r]?.[c] !== undefined) m[r][c] += 1;
  };
  result.forEach((line, rowI) => {
    line.forEach((el, colI) => {
      if (matrix[rowI][colI]) {
        inc(result, rowI - 1, colI - 1);
        inc(result, rowI - 1, colI);
        inc(result, rowI - 1, colI + 1);
        inc(result, rowI, colI - 1);
        inc(result, rowI, colI + 1);
        inc(result, rowI + 1, colI - 1);
        inc(result, rowI + 1, colI);
        inc(result, rowI + 1, colI + 1);
      }
    });
  });
  return result;
}

module.exports = {
  minesweeper,
};
