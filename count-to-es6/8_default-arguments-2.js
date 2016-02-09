module.exports = (inputString, numberOfExlamations = inputString.length) => `${inputString}${"!".repeat(numberOfExlamations)}`;
