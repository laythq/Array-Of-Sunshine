const methodList = [
  Array.prototype.join,
];

module.exports = {
  findMethod(inputArray, desiredOutput) {
    for (const i in methodList) {
      const testArray = inputArray.slice();
      if (methodList[i].call(testArray) === desiredOutput) {
        return `.${methodList[i].name}`;
      }
    }
    return 'No method found';
  },
};
