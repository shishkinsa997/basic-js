const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 1,
    additionSeparator = "|",
  },
) {
  str = str !== undefined ? String(str) : "";
  addition = addition !== undefined ? String(addition) : "";
  const res = [];
  for (let i = 0; i < repeatTimes; i++) {
    const add = [];
    for (let j = 0; j < additionRepeatTimes; j++) {
      add.push(addition);
    }
    res.push(str + add.join(additionSeparator));
  }
  return res.join(separator);
}

module.exports = {
  repeater,
};
