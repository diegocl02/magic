const express = require('express');
const app = express();
const path = require('path');

const PORT = 80;

app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname ,'static/index.html'));
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname,  'static/about.html'));
})

app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT+'!')
})
