const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const regexp = /([a-z])\1+/gi;
  return str.replace(regexp, (x) => x.length + x[0]);
}

module.exports = {
  encodeLine,
};
