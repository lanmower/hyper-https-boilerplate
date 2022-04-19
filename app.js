const express = require('express')


/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

const app = express()
const port = 3000
const { createProxyMiddleware } = require('http-proxy-middleware');
const exampleProxy = createProxyMiddleware({
  target: 'http://www.example.org',
  changeOrigin: true,
  ws: true, 
});
app.use('/', exampleProxy);
module.exports = app;


