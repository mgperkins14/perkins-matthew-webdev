var app = require('../../express');

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
    var websiteId = req.params.websiteId;

    var page = [
        page.websiteId = websiteId,
        page._id = (new Date()).getTime() + ""
    ];

    pages.push(page);
    res.send(page);
}

function findAllPagesForWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var resultSet = [];
    for(var p in pages) {
        if(pages[p].websiteId === websiteId) {
            resultSet.push(pages[p]);
        }
    }
    res.send(resultSet);
}

function findPageById(req, res) {
    var pageId = req.params.pageId;
    for (var p in pages) {
        if (pages[p]._id === pageId) {
            res.send(pages[p]);
            return;
        }
    }
    res.sendStatus(404);
}

function updatePage(req, res) {
    var page = req.body;
    var pageId = req.params.pageId;
    for (var p in pages) {
        if (pageId === pages[p]._id) {
            pages[p] = page;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function deletePage(req, res) {
    var pageId = req.params.pageId;
    var page = pages.find(function (page) {
        return page._id === pageId;
    });
    var index = pages.indexOf(page);
    pages.splice(index, 1);
    res.sendStatus(200);
}
