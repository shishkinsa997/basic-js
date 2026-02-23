const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(v) {
    this.chain.push(v);
    return this;
  },
  removeLink(i) {
    if (!Number.isInteger(i) || i < 1 || i > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(i - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map((item) => `( ${item} )`).join("~~");
    this.chain = [];
    return result;
  },
};
console.log(
  chainMaker
    .addLink("GHI")
    .addLink(null)
    .reverseChain()
    .addLink(333)
    .reverseChain()
    .reverseChain()
    .addLink(0)
    .reverseChain()
    .reverseChain()
    .addLink("GHI")
    .finishChain(),
);

module.exports = {
  chainMaker,
};
