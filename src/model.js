const methodList = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
  Array.prototype.slice,
  Array.prototype.toString,
];

module.exports = {
  findMethod(inputArray, desiredOutput) {
    const outputArray = [];
    for (const i in methodList) {
      const testArray = inputArray.slice();
      if (JSON.stringify(methodList[i].call(testArray)) === JSON.stringify(desiredOutput)) {
        outputArray.push(`.${methodList[i].name}`);
      }
    }
    if (outputArray.length > 0) {
      return outputArray;
    }
    return ['No method found'];
  },

  workOutType(string) {
    if (string.match(/^'.*'$/)) return string.replace(/[(^')('$)]/g, '');
    if (string.match(/^\d+$/)) return parseInt(string); 
  },
};
