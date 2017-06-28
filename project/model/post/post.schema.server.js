var mongoose = require('mongoose');

var postSchema = mongoose.Schema({

    _user: {type: mongoose.Schema.ObjectId, ref: "UserModel"},
    title: String,
    text: String,
    likes: {type: Number, default: 0},
    likedBy: [{ type: mongoose.Schema.ObjectId, ref: "UserModel" }],
    dateCreated: {type: Date, default: Date.now},
    dateUpdated: {type: Date, default: Date.now}

}, {collection: "NBA_post"});

module.exports = postSchema;