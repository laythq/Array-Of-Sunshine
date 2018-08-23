const methodList = [
  Array.prototype.join,
  Array.prototype.pop,
  Array.prototype.reverse,
  Array.prototype.shift,
  Array.prototype.slice,
  Array.prototype.toString,
];

function processInput(inputString) {
  let contents = inputString.replace(/[(^")("$)]/g, '');
  workOutType(contents);
}

function workOutType(string) {
  if (string.match(/^\[.*]$/)) return workOutArray(string)
  if (string.match(/^'.*'$/) ) return string.replace(/[(^')('$)]/g, '');
  if (string.match(/^".*"$/) ) return string.replace(/[(^")("$)]/g, '');
  if (string.match(/^\d+$/)  ) return parseInt(string);
  if (string === "null"      ) return null
  if (string === "true"      ) return true
  if (string === "false"     ) return false
  return string;
}

function workOutArray(contents) {
  contents = contents.replace(/^\[/g,'').replace(/\]$/g, '');
  return contents.split(',').map(x => workOutType(x));
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
  processInput,
};
