const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json()); // to support JSON body
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//////INDEX
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname ,'static/index.html'));
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname,  'static/about.html'));
})

/////// ENDPOINTS

/////Updates Number of total Wins
app.post('/updatewins', function(req,res){
  console.log(req.body);
  const userid = req.body.userid;
  const query = 'update User set wins=wins +1'+
  ' where userId='+userid+';'
  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'crayon',
    password : 'crayola123',
    database : 'magicboard'
  });

  connection.connect();

  connection.query(query, function (err, rows, fields) {
    if (err) throw err;
    res.send('Wins Succesfull Updated');
  })

  connection.end();
})

////Get list of users

app.get('/getinitialstate', function (req, res) {

  const query='select userId userid,u.name name, u.nickname,rt.name rankingName, '+
      'u.ranking rankingNumber,wins '+
      'from User u '+
      'join RankingType rt '+
      'where u.ranking between floor and ceil; '


  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'crayon',
    password : 'crayola123',
    database : 'magicboard'
  });

  connection.connect();

  connection.query(query, function (err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  })

  connection.end();

})


/// SERVER START WITH node serve.js

app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT+'!')
})
