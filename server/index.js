const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// app.use(cors())

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/client/public')))

app.get('/ping', cors(), async (req, res, next) => {
 return res.send('pong');
});

app.post('/scripts', function (req, res) {
  console.log('got request ' + req.statusCode)
  console.log(typeof req.body)
  console.log(req.method)
  var text = 'Please work!'
  res.json(text)
});

app.get('/scripts', function (req, res) {
  var text = 'Hello world!'
  res.json(text)
});

app.listen(process.env.PORT || 8080, () => {
  console.log('CORS-enabled web server listening on port 8080 | HELLO SALLY!')
});
