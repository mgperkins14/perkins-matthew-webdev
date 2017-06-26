var app = require('../../express');
var postModel = require('../model/post/post.model.server');
var passport = require('passport');

app.post    ('/api/project/post', createPost);
app.get     ('/api/project/post/:postId', findPostById);
app.get     ('/api/project/post', findPostByTitle);
app.get     ('/api/project/post', findPostsByUser);
app.delete  ('/api/project/post/:postId', deletePost);
app.put     ('/api/project/post/:postId', editPost);

function createPost(req, res) {
    var post = req.body;

    postModel
        .createPost(post)
        .then(function (post) {
                res.json(post)
        });
}

function findPostById(req, res) {
    var postId = req.params.postId;

    postModel
        .findPostById(postId)
        .then(function (post) {
            res.json(post);
        }, function (err) {
            console.log(err);
        });
}

function findPostByTitle(req, res) {
    var title = req.query['title'];

    postModel
        .findPostByTitle(title)
        .then(function (posts) {
            res.json(posts);
        }, function (err) {
            res.sendStatus(404);
        });
}

function deletePost(req, res) {
    var postId = req.params.postId;

    postModel
        .deletePost(postId)
        .then(function (status) {
            res.sendStatus(200);
        }, function (err) {
            console.log(err)
        });
}

function editPost(req, res) {
    var post = req.body;
    var postId = req.params.postId;

    postModel
        .editPost(postId, post)
        .then(function (status) {
            res.sendStatus(200);
        }, function (err) {
            console.log(err)
        });
}

function findPostsByUser(req, res) {
    var user = req.query['user'];

    postModel
        .findPostsByUser(user)
        .then(function (posts) {
            res.json(posts);
        }, function (err) {
            res.sendStatus(404);
        });
}