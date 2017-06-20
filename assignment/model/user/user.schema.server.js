var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    dateCreated: Date,

    facebook: {
        id: String,
        token: String
    }

}, {collection: "user"});

module.exports = userSchema;