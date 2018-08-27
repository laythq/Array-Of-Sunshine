const zeroArgumentMethods = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
  Array.prototype.toString,
];

const oneArgumentMethods = [
  Array.prototype.slice,
  Array.prototype.concat,
  Array.prototype.fill,
  Array.prototype.indexOf,
  Array.prototype.push,
  Array.prototype.unshift,
];

function compareArrays(array1, array2, method, argument) {
  const sameReturnValue = JSON.stringify(method.call(array1, argument)) === JSON.stringify(array2);
  const changedArrayTest = (JSON.stringify(array1) === JSON.stringify(array2));
  return (sameReturnValue || changedArrayTest);
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

function findDifferences(array1, array2) {
  const inA = array1.filter(x => !array2.includes(x));
  const inB = array2.filter(y => !array1.includes(y));
  return inA.concat(inB);
}

function suggestArguments(inputArray, desiredOutput) {
  let suggestedArguments = [];
  // TODO split string by ',' if desiredOutput is a string.
  if (Array.isArray(inputArray) && Array.isArray(desiredOutput)) {
    suggestedArguments = suggestedArguments.concat(findDifferences(inputArray, desiredOutput));
  }
  return suggestedArguments;
}

function findOneArgumentMethods(inputArray, desiredOutput) {
  const outputArray = [];
  const args = suggestArguments(inputArray, desiredOutput);
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
  if (JSON.stringify(inputArray) === JSON.stringify(desiredOutput)) return 'Same input and output';
  let outputArray = findZeroArgumentMethods(inputArray, desiredOutput);
  outputArray = outputArray.concat(findOneArgumentMethods(inputArray, desiredOutput));
  return outputArray.length > 0 ? outputArray : ['No method found'];
}

module.exports = {
  findMethod,
};
