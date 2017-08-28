var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
    // __dirname is the file path to this file
    // console.log('dir name: ', __dirname);
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;