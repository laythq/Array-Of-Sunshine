const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/client/public')))

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/hello', async (req, res, next) => {
  try {
    var text = 'Hello world!'
    res.json(text)
  } catch (err) {
    next(err)
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Hello Sally!')
});
