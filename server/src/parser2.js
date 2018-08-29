function parseString(string) {
  const testString = string.trim();
  // eslint-disable-next-line
  if (testString.match(/^\[.*]$/)) return parseArray(testString);
  if (testString.match(/^'.*'$/)) return testString.replace(/[(^')('$)]/g, '');
  if (testString.match(/^".*"$/)) return testString.replace(/[(^")("$)]/g, '');
  if (testString.match(/^\d+.\d*$/)) return parseFloat(testString, 10);
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
  return contents.split(/,(?![^[]*])/g).map(x => parseString(x));
}

module.exports = {
  parseString,
  parseArray,
  processInput,
};
