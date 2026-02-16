const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(n, speed) {
  const turns = 2 ** n - 1;
  const seconds = Math.floor(turns * 3600/ speed);
  return {turns: turns, seconds: seconds}
}
console.log(calculateHanoi(9, 4308))
module.exports = {
  calculateHanoi
};
