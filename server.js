var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();


app.listen(port);
console.log('starting server on port ' + port);

