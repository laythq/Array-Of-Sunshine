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
  if (string.match(/^\d+$/) ) return parseInt(string);
  if (string === "null"     ) return null
  if (string === "true"     ) return true
  if (string === "false"    ) return false
  return string;
}

function workOutArray(inputString) {
  let contents = workOutType(inputString);
  if (typeof contents === 'string' && contents.match(/^\[.*]$/)) {
    contents = contents.replace(/[(^[)(\]$)]/g, '');
    return contents.split(',').map(x => workOutType(x));
  }
  return contents;
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
