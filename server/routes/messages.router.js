var express = require('express');
var router = express.Router();
var Messages = require('../models/messages.schema.js');

router.post('/', function (req, res) {
    console.log(req.body);
    
    var newMessage = new Messages(req.body);
    newMessage.save(function (err, data) {
        if (err) {
            console.log('save error: ', err);

            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }

    });
});

router.get('/', function (req, res) {
    Messages.find({}, function (err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });//End of Messages.find
});//End of router.get

router.delete('/:id', function (req, res) {
    Messages.findByIdAndRemove(
        { _id: req.params.id },
        function (err, data) {
            if (err) {
                console.log('delete error: ', err);

                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});

module.exports = router;