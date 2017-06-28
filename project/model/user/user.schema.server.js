var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    role: {type: String, enum: ["ADMIN", "USER"] },

    username: String,
    password: String,
    dob: Date,
    firstName: String,
    lastName: String,
    email: String,
    following: [{ type: mongoose.Schema.ObjectId, ref: "NBAUserModel"}],
    dateCreated: { type: Date, default: Date.now() }

}, {collection: "NBAuser"});

module.exports = userSchema;