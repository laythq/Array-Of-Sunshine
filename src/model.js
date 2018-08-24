const methodList = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
  Array.prototype.slice,
  Array.prototype.toString,
];

function parseString(string) {
  const testString = string.trim();
  if (testString.match(/^\[.*]$/)) return parseArray(testString);
  if (testString.match(/^'.*'$/)) return testString.replace(/[(^')('$)]/g, '');
  if (testString.match(/^".*"$/)) return testString.replace(/[(^")("$)]/g, '');
  if (testString.match(/^\d+$/)) return parseInt(testString, 10);
  if (testString === 'null') return null;
  if (testString === 'true') return true;
  if (testString === 'false') return false;
  return testString;
}

function processInput(inputString) {
  const contents = inputString.replace(/[(^")("$)]/g, '');
  return parseString(contents);
}

function parseArray(string) {
  const contents = string.replace(/^\[/g, '').replace(/]$/g, '');
  return contents.split(',').map(x => parseString(x));
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
  workOutType: parseString,
  workOutArray: parseArray,
  processInput,
};
