const methodList = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
  Array.prototype.slice,
  Array.prototype.toString,
];

function workOutType(string) {
  if (string.match(/^'.*'$/)) return string.replace(/[(^')('$)]/g, '');
  if (string.match(/^".*"$/)) return string.replace(/[(^")("$)]/g, '');
  if (string.match(/^\d+$/)) return parseInt(string);
  return string
}

function workOutArray(inputString) {
  let string = workOutType(inputString)
  if (string.match(/^\[.*\]$/)){
    string = string.replace(/[(^\[)(\]$)]/g, '');
    return string.split(',').map(x => workOutType(x));
  }
}

function findMethod(inputArray, desiredOutput) {
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
}

module.exports = {
  findMethod,
  workOutType,
  workOutArray,
};
