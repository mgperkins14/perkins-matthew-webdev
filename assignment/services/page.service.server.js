var app = require('../../express');
var pageModel = require('../model/page/page.model.server');


app.post('/api/assignment/website/:websiteId/page', createPage);
app.get('/api/assignment/website/:websiteId/page', findAllPagesForWebsite);
app.get('/api/assignment/page/:pageId', findPageById);
app.put('/api/assignment/page/:pageId', updatePage);
app.delete('/api/assignment/page/:pageId', deletePage);

var pages = [
    {_id: "321", name: "Post 1", websiteId: "456", description: "Lorem"},
    {_id: "432", name: "Post 2", websiteId: "456", description: "Lorem"},
    {_id: "543", name: "Post 3", websiteId: "456", description: "Lorem"}
];

function createPage(req, res) {
    var websiteId = req.query['websiteId'];
    var page = req.body;
    page._website = websiteId;

    pageModel
        .createPage(page)
        .then(function (page) {
            res.send(page);
        }, function (err) {
            console.log(err)
        })

}

function findAllPagesForWebsite(req, res) {
    var websiteId = req.params.websiteId;

    pageModel
        .findAllPagesForWebsite(websiteId)
        .then(function (pages) {
            res.send(pages)
        }, function (err) {
            res.sendStatus(404)
        })
}

function findPageById(req, res) {
    var pageId = req.params.pageId;

    pageModel
        .findPageById(pageId)
        .then(function (page) {
            res.json(page)
        }, function (err) {
            res.sendStatus(404)
        })
}

function updatePage(req, res) {
    var page = req.body;
    var pageId = req.params.pageId;

    pageModel
        .updatePage(pageId, page)
        .then(function (status) {
            res.sendStatus(200)
        })
}

function deletePage(req, res) {
    var pageId = req.params.pageId;

    pageModel
        .deletePage(pageId)
        .then(function (status) {
            res.sendStatus(200);
        })
}
