const exec = require('child_process').exec
const findMethod = require('./script.js').findMethod;
const argumentSuggestor = require('./argumentSuggestor.js');

function runRuby(input, output, args, rubyRes) {
  exec(`ruby ./server/src/script.rb ${JSON.stringify(input)} ${JSON.stringify(output)}`, function (error, stdout, stderr) {
    return rubyRes.send(stdout);
  });
}


function runPython(input, output, res) {
  exec(`python ./server/src/script.py ${JSON.stringify(input)} ${JSON.stringify(output)}`,
    (error, stdout, stderr) => res.send(stdout));
}

function runJavascript(input, output, jsRes) {
  return jsRes.send(findMethod(input, output));
}

function returnMethods(language, input, output, res) {
  const args = argumentSuggestor.suggestArguments(input, output);
  switch (language) {
    case 'ruby':
      runRuby(input, output, args, res)
      break;
    case 'python':
      runPython(input, output, res)
      break;
    case 'javascript':
      runJavascript(input, output, res)
      break;
    default:
      res.send('LANGUAGE NOT FOUND');
  }
}

module.exports = {
  returnMethods,
};
