const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const returnMethods = require('./server/src/language_selector.js').returnMethods;

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname + '/client/build')));
app.use(cors())
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get('/ping', cors(), async (req, res, next) => {
 return res.send('pong');
});

app.post('/api/scripts', function (req, res) {
  console.log(req.body)
  const input = req.body.input
  const output = req.body.output
  const language = req.body.language
  returnMethods(language, input, output, res)
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
app.listen(process.env.PORT || 8080, () => {
  console.log('CORS-enabled web server listening on port 8080 | HELLO SALLY!')
});
