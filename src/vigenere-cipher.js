const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(Boolean = true) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.isDirect = Boolean;
  }
  encrypt(string, key) {
    return this.crypt(string, key, true);
  }

  decrypt(string, key) {
    return this.crypt(string, key, false);
  }

  crypt(string, key, encrypt) {
    this.areValid(string, key);

    string = string.toUpperCase();
    key = key.toUpperCase().repeat(Math.ceil(string.length / key.length));

    let res = "";
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (!this.alphabet.includes(string[i])) {
        res += string[i];
      } else {
        if (encrypt) {
          res += String.fromCharCode(
            ((string[i].charCodeAt(0) + key[j].charCodeAt(0) - 130) % 26) + 65,
          );
        } else {
          res += String.fromCharCode(
            ((string[i].charCodeAt(0) - key[j].charCodeAt(0) + 26) % 26) + 65,
          );
        }
        j++;
      }
    }
    return this.convertSentence(res);
  }

  convertSentence(string) {
    if (this.isDirect) {
      return string;
    }

    let res = "";
    for (let w of string) {
      res = w + res;
    }

    return res;
  }

  areValid(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
