const Suggestor = require('./argumentSuggestor');

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

function testMethod(inputArray, desiredOutput, method, outputArray, prefix = '') {
  if (compareArrays(deepCopy(inputArray), desiredOutput, method)) {
    outputArray.push(`${prefix}${method.name}`);
  }
  return method.call(deepCopy(inputArray));
}

function findZeroArgumentMethods(inputArray, desiredOutput, outputArray, prefix = '') {
  if (!Array.isArray(inputArray)) return {};
  const triedMethods = [];
  zeroArgumentMethods.forEach((firstMethod) => {
    triedMethods.push([
      firstMethod,
      testMethod(inputArray, desiredOutput, firstMethod, outputArray, prefix),
      '',
    ]);
  });
  return triedMethods;
}

function findOneArgumentMethods(inputArray, desiredOutput, outputArray, prefix = '') {
  const triedMethods = [];
  const args = Suggestor.suggestArguments(inputArray, desiredOutput);
  oneArgumentMethods.forEach((method) => {
    args.forEach((argument) => {
      if (compareArrays((deepCopy(inputArray)), desiredOutput, method, argument)) {
        outputArray.push(`${prefix}${method.name}(${JSON.stringify(argument)})`);
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
    findZeroArgumentMethods(array, desiredOutput, outputArray, prefix);
    findOneArgumentMethods(array, desiredOutput, outputArray, prefix);
  });
}

function findMethod(inputArray, desiredOutput){
  if (areTheSame(inputArray, desiredOutput)) return 'Same input and output';
  const successfulMethods = [];
  const triedMethods = [].concat(
    findZeroArgumentMethods(inputArray, desiredOutput, successfulMethods),
    findOneArgumentMethods(inputArray, desiredOutput, successfulMethods),
  );
  if (successfulMethods.length === 0) {
    lookForChainedMethods(triedMethods, desiredOutput, successfulMethods);
  }
  return successfulMethods.length > 0 ? successfulMethods : ['No method found'];
}

module.exports = {
  findMethod,
};
