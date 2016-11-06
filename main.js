var http = require("http");
var express = require("express");
var expressLess = require("express-less");
var routeHome = require("./routes/home");

var app = express()
app.set('views', './views');
app.set('view engine', 'pug');
app.use('/bootstrapjs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/bootstrapless', expressLess(__dirname + '/node_modules/bootstrap/less'));

app.use('/', routeHome);

app.listen(3000)