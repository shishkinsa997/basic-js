const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
    --discard-next excludes the next element of the array from the transformed array.
    --discard-prev excludes the previous element of the array from the transformed array.
    --double-next duplicates the next element of the array in the transformed array.
    --double-prev duplicates the previous element of the array in the transformed array.
 */

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      i++;
    } else if (arr[i] === "--discard-prev") {
      if (res.length > 0 && arr[i - 2] !== "--discard-next") {
        res.pop();
      }
    } else if (arr[i] === "--double-next") {
      if (i + 1 < arr.length) {
        res.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") {
        res.push(arr[i - 1]);
      }
    } else res.push(arr[i]);
  }
  return res;
}

module.exports = {
  transform,
};
