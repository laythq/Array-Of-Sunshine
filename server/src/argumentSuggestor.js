function deepCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

function uniqueValues(array) {
  return array.filter((v, i, a) => a.indexOf(v) === i)
}

function findDifferences(array1, array2) {
  const differences = []
    .concat(array1.filter(x => !array2.includes(x)))
    .concat(array2.filter(y => !array1.includes(y)));
  return uniqueValues(differences);
}

function suggestArguments(inputArray, desiredOutput) {
  let suggestedArguments = [];
  if (Array.isArray(inputArray) && Array.isArray(desiredOutput)) {
    const differences = findDifferences(inputArray, desiredOutput);
    suggestedArguments.push(differences)
    suggestedArguments = suggestedArguments
      .concat(differences);
  }
  suggestedArguments = suggestedArguments
    .concat(deepCopy(inputArray))
    .concat(Array.from(Array(inputArray.length).keys()))
    .concat(inputArray.length);
  return uniqueValues(suggestedArguments);
}

module.exports = {
  suggestArguments,
  deepCopy,
};
