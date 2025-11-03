const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(m) {
  if (!Array.isArray(m)) return false;
  let list = []
  for (let i = 0; i < m.length; i++) {
    if (typeof m[i] !== 'string') continue
    list.push(m[i].trim().toUpperCase()[0])
  }
  return list.sort().join('')
}


module.exports = {
  createDreamTeam
};
