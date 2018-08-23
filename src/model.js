const methodList = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
  Array.prototype.slice,
  Array.prototype.toString,
];

function workOutType(string) {
  if (string.match(/^\[.*]$/)) return workOutArray(string);
  if (string.match(/^'.*'$/)) return string.replace(/[(^')('$)]/g, '');
  if (string.match(/^".*"$/)) return string.replace(/[(^")("$)]/g, '');
  if (string.match(/^\d+$/)) return parseInt(string, 10);
  if (string === 'null') return null;
  if (string === 'true') return true;
  if (string === 'false') return false;
  return string;
}

function processInput(inputString) {
  const contents = inputString.replace(/[(^")("$)]/g, '');
  workOutType(contents);
}

function workOutArray(string) {
  const contents = string.replace(/^\[/g, '').replace(/]$/g, '');
  return contents.split(',').map(x => workOutType(x));
}

function compareArrays(testArray, desiredOutput, method) {
  return JSON.stringify(method.call(testArray)) === JSON.stringify(desiredOutput);
}

function findMethod(inputArray, desiredOutput) {
  const outputArray = [];
  methodList.forEach((method) => {
    if (compareArrays(inputArray.slice(), desiredOutput, method)) {
      outputArray.push(`.${method.name}`);
    }
  });

  return outputArray.length > 0 ? outputArray : ['No method found'];
}

module.exports = {
  findMethod,
  workOutType,
  workOutArray,
  processInput,
};
