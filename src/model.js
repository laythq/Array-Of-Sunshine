const methodList = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
];

module.exports = {
  findMethod(inputArray, desiredOutput) {
    for (const i in methodList) {
      const testArray = inputArray.slice()
      if (JSON.stringify(methodList[i].call(testArray)) === JSON.stringify(desiredOutput)) {
        return `.${methodList[i].name}`;
      }
    }
    return 'No method found';
  },
};
