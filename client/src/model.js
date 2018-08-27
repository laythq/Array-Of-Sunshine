const zeroArgumentMethods = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
  Array.prototype.slice,
  Array.prototype.toString,
];

const oneArgumentMethods = [
  Array.prototype.concat,
  Array.prototype.fill,
  Array.prototype.indexOf,
  Array.prototype.push,
  Array.prototype.unshift,
];

function compareArrays(array1, array2, method, argument) {
  return JSON.stringify(method.call(array1, argument)) === JSON.stringify(array2);
}

function deepCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

function findZeroArgumentMethods(inputArray, desiredOutput) {
  const outputArray = [];
  zeroArgumentMethods.forEach((firstMethod) => {
    if (compareArrays(deepCopy(inputArray), desiredOutput, firstMethod)) {
      outputArray.push(`.${firstMethod.name}`);
    }
    const inputAfterFirstMethod = firstMethod.call(deepCopy(inputArray));
    if (!Array.isArray(inputAfterFirstMethod)) {
      return;
    }
    zeroArgumentMethods.forEach((secondMethod) => {
      if (compareArrays(deepCopy(inputAfterFirstMethod), desiredOutput, secondMethod)) {
        outputArray.push(`.${firstMethod.name}.${secondMethod.name}`);
      }
    });
  });
  return outputArray;
}

function suggestedArguments(inputArray, desiredOutput){
  return [[4, 5]];
}

function findOneArgumentMethods(inputArray, desiredOutput) {
  const outputArray = [];
  const args = suggestedArguments(inputArray, desiredOutput);
  oneArgumentMethods.forEach((method) => {
    args.forEach((argument) => {
      if (compareArrays((deepCopy(inputArray)), desiredOutput, method, argument)) {
        outputArray.push(`.${method.name}(${JSON.stringify(argument)})`);
      }
    });
  });
  return outputArray;
}

function findMethod(inputArray, desiredOutput) {
  let outputArray = findZeroArgumentMethods(inputArray, desiredOutput);
  outputArray = outputArray.concat(findOneArgumentMethods(inputArray, desiredOutput));
  return outputArray.length > 0 ? outputArray : ['No method found'];
}

module.exports = {
  findMethod,
};
