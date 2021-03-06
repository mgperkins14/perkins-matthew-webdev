var app = require('../../express');
var websiteModel = require('../model/website/website.model.server');

app.post    ('/api/assignment/user/:userId/website', createWebsite);
app.get     ('/api/assignment/user/:userId/website', findAllWebsitesForUser);
app.get     ('/api/assignment/website/:websiteId', findWebsiteById);
app.put     ('/api/assignment/website/:websiteId', updateWebsite);
app.delete  ('/api/assignment/website/:websiteId', deleteWebsite);

var websites = [
    {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
    {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
    {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
    {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
    {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
    {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
    {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
];

function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params.userId;

    website._user = userId;

    websiteModel
        .createWebsite(website)
        .then(function (status) {
            res.sendStatus(200)
        });
}

function findAllWebsitesForUser(req, res) {
    var userId = req.params.userId;

    websiteModel
        .findAllWebsitesForUser(userId)
        .then(function (websites) {
            res.send(websites);
        }, function (err) {
            res.sendStatus(404);
        })
}

function findWebsiteById(req, res) {
    var websiteId = req.params.websiteId;

    websiteModel
        .findWebsiteById(websiteId)
        .then(function (website) {
            res.json(website)
        }, function (err) {
            res.sendStatus(404)
        });
}

function updateWebsite(req, res) {
    var website = req.body;
    var websiteId = req.params.websiteId;

    websiteModel
        .updateWebsite(websiteId, website)
        .then(function (status) {
            res.sendStatus(200)
        })
}

function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;

    console.log("yuh");
    websiteModel
        .deleteWebsite(websiteId)
        .then(function (status) {
            res.sendStatus(200)
        }, function (err) {
            console.log(err);
        })
}
