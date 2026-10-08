const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const obj = {};

  domains.forEach((domain, i) => {
    arr.push(domain.split(".").reverse());

    arr[i].forEach((_, idx) => {
      const name = "." + arr[i].slice(0, idx + 1).join(".");
      if (obj[name]) {
        obj[name] += 1;
      } else {
        obj[name] = 1;
      }
    });
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
