var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Listings Schema
var messagesSchema = new Schema({
    name: { type: String },
    message: { type: String }
},
    {
        collection: 'messages' 
    }
);

module.exports = mongoose.model('Messages', messagesSchema);