const findMethod = require('./script.js').findMethod;
const exec = require('child_process').exec
const argumentSuggestor = require('./argumentSuggestor.js');

module.exports = {
  returnMethods: function(language, input, output, res) {
    console.log('in return methods function')
    const args =  argumentSuggestor.suggestArguments(input, output);
    switch(language) {
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
        return 'Error'
    }
  }
};

function runRuby(input, output, args, rubyRes) {
  exec(`ruby ./server/src/script.rb ${JSON.stringify(input)} ${JSON.stringify(output)}`, function (error, stdout, stderr) {
    return rubyRes.send(stdout);
  });
}

function runPython(input, output, pythonRes) {
  exec(`python ./server/src/script.py ${input} ${output}`, function (error, stdout, stderr) {
    argumentSuggestor.suggestArguments(input, output);
    return pythonRes.send(JSON.parse(stdout));
  });
}

function runJavascript(input, output, jsRes) {
  return jsRes.send(findMethod(input, output))
}
