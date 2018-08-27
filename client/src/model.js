const methodList = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
  Array.prototype.slice,
  Array.prototype.toString,
];

function compareArrays(array1, array2, method) {
  return JSON.stringify(method.call(array1)) === JSON.stringify(array2);
}

function deepCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

function findMethod(inputArray, desiredOutput) {
  const outputArray = [];
  methodList.forEach((firstMethod) => {
    if (compareArrays(deepCopy(inputArray), desiredOutput, firstMethod)) {
      outputArray.push(`.${firstMethod.name}`);
    }
    const inputAfterFirstMethod = firstMethod.call(deepCopy(inputArray));
    if (!Array.isArray(inputAfterFirstMethod)) { return; }
    methodList.forEach((secondMethod) => {
      if (compareArrays(deepCopy(inputAfterFirstMethod), desiredOutput, secondMethod)) {
        outputArray.push(`.${firstMethod.name}.${secondMethod.name}`);
      }
    });
  });

  return outputArray.length > 0 ? outputArray : ['No method found'];
}

module.exports = {
  findMethod,
};
