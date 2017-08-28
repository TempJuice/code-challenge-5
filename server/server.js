//Requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var path = require('path');
var messages = require('./routes/messages.router.js');


//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//Routes
app.use('/', index);
app.use('/messages', messages);

//Mongoose Connection
var databaseUrl = 'mongodb://localhost:27017/messageapp';
mongoose.connect(databaseUrl,
    {
        useMongoClient: true
    });

//DB feedback
mongoose.connection.on('connected', function () {
    console.log('mongoose connected to : ', databaseUrl);
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});


// Server running
var port = process.env.PORT || 5000; 
app.listen(port, function () {
    console.log('listening on port: ', port);
});