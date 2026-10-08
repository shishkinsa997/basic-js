const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const regexp = /\(\d\)$/;
  const copy = [];
  return names.map((x, i, arr) => {
    const match = arr.slice(0, i).filter((y) => x === y).length;
    const match2 = copy.filter((y) => x === y).length;

    let isCounted = regexp.test(x);
    let el;
    if (isCounted && match2 > 0) {
      el = x + `(${match2})`;
    } else if (match) {
      el = x + `(${match})`;
    } else {
      el = x;
    }
    copy.push(el);
    return el;
  });
}

module.exports = {
  renameFiles,
};
