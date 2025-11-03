const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) return 'Invalid date!'

  try {
    date.getTime();
  } catch (err) {
    throw new Error("Invalid date!");
  }
  
  const m = date.getMonth();
  if (m === 2 || m === 3 || m === 4) return 'spring'
  if (m === 5 || m === 6 || m === 7) return 'summer'
  if (m === 8 || m === 9 || m === 10) return 'autumn'
  if (m === 0 || m === 1 || m === 11) return 'winter'
  return true;
}

module.exports = {
  getSeason
};
