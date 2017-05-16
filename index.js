var express = require('express');
var app = express();
var bodyPareser = require('body-parser');
var mongoose = require('mongoose');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var User = require('./models/user');
var secret = "orcasecretsadmin";

app.use(require('morgan')('dev'));

app.get('/', function(req, res) {
    res.send('Hello Backend!');
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
