const findMethod = require('./script.js').findMethod;
const exec = require('child_process').exec

module.exports = {
  returnMethods: function(language, input, output, res) {
    switch(language) {
      case 'ruby':
        runRuby(input, output, res)
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

function runRuby(input, output, res) {
  exec(`ruby ./server/src/script.rb ${input} ${output}`, function (error, stdout, stderr) {
    return res.send(stdout)
  })
}

function runPython(input, output, res) {
  exec(`python ./server/src/script.py ${input} ${output}`, function (error, stdout, stderr) {
    return res.send(stdout)
  })
}

function runJavascript(input, output, res) {
  return res.send(findMethod(input, output))
}
