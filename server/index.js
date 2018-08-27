const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/client/public')))

app.use(cors())

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get('/ping', cors(), async (req, res, next) => {
 return res.send('pong');
});

app.post('/api/scripts', function (req, res) {
  console.log('req:')
  console.log(req.body)
  // console.log('got request ' + req.statusCode)
  // console.log(typeof req.body)
  // console.log(req.method)
  // console.log(req.headers)
  console.log(req.headers['content-type'])
  var text = 'Please work!'
  res.json(text)
});

app.get('/ruby', function(req, res) {
  const exec = require('child_process').exec
  exec('./server/src/script.rb', function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    console.log('error: ' + error);
  })
})

app.listen(process.env.PORT || 8080, () => {
  console.log('CORS-enabled web server listening on port 8080 | HELLO SALLY!')
});
