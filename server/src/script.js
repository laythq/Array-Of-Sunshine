const Suggestor = require('./argumentSuggestor');

const methodsWithZeroArguments = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
  Array.prototype.toString,
  Array.prototype.sort,
];

const methodsWithOneArgument = [
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

function testMethod(inputArray, desiredOutput, method, outputArray, prefix = '') {
  if (compareArrays(deepCopy(inputArray), desiredOutput, method)) {
    outputArray.push(`.${prefix}${method.name}()`);
  }
  return method.call(deepCopy(inputArray));
}

function testMethodsWithZeroArguments(inputArray, desiredOutput, outputArray, prefix = '') {
  if (!Array.isArray(inputArray)) return {};
  const triedMethods = [];
  methodsWithZeroArguments.forEach((firstMethod) => {
    triedMethods.push([
      firstMethod,
      testMethod(inputArray, desiredOutput, firstMethod, outputArray, prefix),
      '',
    ]);
  });
  return triedMethods;
}

function testMethodsWithOneArgument(inputArray, desiredOutput, outputArray, prefix = '.') {
  const triedMethods = [];
  const args = Suggestor.suggestArguments(inputArray, desiredOutput);
  methodsWithOneArgument.forEach((method) => {
    args.forEach((argument) => {
      if (method === Array.prototype.slice && argument > desiredOutput.length - 1) return;
      if (compareArrays((deepCopy(inputArray)), desiredOutput, method, argument)) {
        outputArray.push(`.${prefix}${method.name}(${JSON.stringify(argument)})`);
      } else {
        triedMethods.push([method, method.call(deepCopy(inputArray), argument), argument]);
      }
    });
  });
  return triedMethods;
}
function areTheSame(inputArray, desiredOutput) {
  return JSON.stringify(inputArray) === JSON.stringify(desiredOutput);
}

function lookForChainedMethods(triedMethods, desiredOutput, outputArray) {
  triedMethods.forEach((methodAndOutCome) => {
    const method = methodAndOutCome[0];
    const array = methodAndOutCome[1];
    const arg = methodAndOutCome[2];
    if (!Array.isArray(array)) return;
    const prefix = `${method.name}(${arg}).`;
    testMethodsWithZeroArguments(array, desiredOutput, outputArray, prefix);
    testMethodsWithOneArgument(array, desiredOutput, outputArray, prefix);
    testMapMethods(array, desiredOutput, outputArray, prefix);
  });
}

function accessSpecificElement(inputArray, desiredOutput, outputArray) {
  if (!inputArray.includes(desiredOutput)) {
    inputArray.forEach((element, i) => {
      if (Array.isArray(element) && element.includes(desiredOutput)) {
        outputArray.push(`input[${i}][${element.indexOf(desiredOutput)}]`);
      }
    });
    return;
  }
  const index = inputArray.indexOf(desiredOutput);
  outputArray.push(`input[${index}]`);
}

function isANumber(element) {
  return typeof element === 'number';
}

function sumAnArray(inputArray, desiredOutput, outputArray) {
  if (inputArray.every(isANumber)) {
    if (deepCopy(inputArray).reduce((a, b) => a + b) === desiredOutput) {
      outputArray.push('reduce((a, b) => a + b)');
    }
  }
}

function joinAnArrayOfWords(inputArray, desiredOutput, outputArray) {
  if (deepCopy(inputArray).join(' ') === desiredOutput) {
    outputArray.push("join(' ')");
  }
}

function filterOutNullValues(inputArray, desiredOutput,outputArray) {
  const arrayWithoutNullValues = deepCopy(inputArray).filter(e => e === 0 || e);
  if (JSON.stringify(arrayWithoutNullValues) === JSON.stringify(desiredOutput)) {
    outputArray.push('filter(e => e === 0 || e)');
    return [Array.prototype.filter, arrayWithoutNullValues, 'e => e === 0 || e'];
  }
  return [];
}

function areBothArraysOfNumbers(inputArray, desiredOutput) {
  return Array.isArray(desiredOutput)
      && inputArray.every(isANumber)
      && desiredOutput.every(isANumber);
}

function testMapMethods(inputArray, desiredOutput, successfulMethods, prefix = '') {
  if (areBothArraysOfNumbers(inputArray, desiredOutput)) {
    const multiple = desiredOutput[0] / inputArray[0];
    if (JSON.stringify(inputArray.map(x => x * multiple)) === JSON.stringify(desiredOutput)) {
      successfulMethods.push(`${prefix}map(x => x * ${multiple})`);
      return [Array.prototype.map, inputArray.map(x => x * multiple), `x => x * ${multiple}`];
    }
  }
  return [];
}

function findMethod(inputArray, desiredOutput) {
  if (areTheSame(inputArray, desiredOutput)) return 'Same input and output';
  const successfulMethods = [];
  const triedMethods = [].concat(
    testMethodsWithZeroArguments(inputArray, desiredOutput, successfulMethods),
    testMethodsWithOneArgument(inputArray, desiredOutput, successfulMethods),
    filterOutNullValues(inputArray, desiredOutput, successfulMethods),
    testMapMethods(inputArray, desiredOutput, successfulMethods),
  );
  accessSpecificElement(inputArray, desiredOutput, successfulMethods);
  if (successfulMethods.length === 0) {
    joinAnArrayOfWords(inputArray, desiredOutput, successfulMethods)
    sumAnArray(inputArray, desiredOutput, successfulMethods);
    lookForChainedMethods(triedMethods, desiredOutput, successfulMethods);
  }
  return successfulMethods.length > 0 ? successfulMethods : ['No method found'];
}

module.exports = {
  findMethod,
};
