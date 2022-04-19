
const express = require('express')
const app = express()
const port = 3000

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

var proxy = require('express-http-proxy');
app.use('/', proxy('www.google.com'));


module.exports = app;


