var mongoose = require('mongoose');

var postSchema = mongoose.Schema({

    _user: {type: mongoose.Schema.ObjectId, ref: "UserModel"},
    title: String,
    text: String,
    upvotes: {type: Number, default: 0},
    downvotes: {type: Number, default: 0},
    dateCreated: {type: Date, default: Date.now},
    dateUpdated: {type: Date, default: Date.now}

}, {collection: "NBA_post"});

module.exports = postSchema;