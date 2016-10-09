var http = require("http");
var express = require("express");
var expressLess = require("express-less");

var app = express()
app.set('views', './views');
app.set('view engine', 'pug');
app.use('/bootstrapjs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/bootstrapless', expressLess(__dirname + '/node_modules/bootstrap/less'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000)