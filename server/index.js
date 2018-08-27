const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/client/public')))

app.get('/ping', cors(), async (req, res, next) => {
 return res.send('pong');
});

app.post('/scripts', cors(), async (req, res, next) => {
  console.log(req.params)
});

app.get('/scripts', cors(), async (req, res, next) => {
  try {
    var text = 'Hello world!'
    res.json(text)
  } catch (err) {
    next(err)
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log('CORS-enabled web server listening on port 8080 | HELLO SALLY!')
});
