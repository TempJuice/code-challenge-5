//Requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var path = require('path');

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//Routes
app.use('/', index);

// Server spin up
var port = process.env.PORT || 5000; 
app.listen(port, function () {
    console.log('listening on port: ', port);
});