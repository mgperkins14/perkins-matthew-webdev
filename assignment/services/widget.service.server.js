var app = require('../../express');
var multer = require('multer'); // npm install multer --save
var upload = multer({dest: __dirname + '/../../public/assignment/uploads'});
var widgetModel = require('../model/widget/widget.model.server');


app.post('/api/assignment/page/:pageId/widget', createWidget);
app.get('/api/assignment/page/:pageId/widget', findAllWidgetsForPage);
app.get('/api/assignment/widget/:widgetId', findWidgetById);
app.put('/api/assignment/widget/:widgetId', updateWidget);
app.delete('/api/assignment/widget/:widgetId', deleteWidget);
app.put('api/assignment/page/:pageId/widget', reorderWidget);
app.post("/api/upload", upload.single('myFile'), uploadImage);

var widgets = [
    {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"
    },
    {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E"
    },
    {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

function createWidget(req, res) {
    var pageId = req.params.pageId;
    var widget = req.body;
    widget.pageId = pageId;

    widgetModel
        .createWidget(widget)
        .then(function (widget) {
            res.json(widget)
        })

}

function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;

    widgetModel
        .findAllWidgetsForPage(pageId)
        .then(function (widgets) {
            widgets = widgetModel.sort({order: 1})
            res.send(widgets);
        })
}

function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;

    widgetModel
        .findWidgetById(widgetId)
        .then(function (widget) {
            res.json(widget)
        }, function (err) {
            res.sendStatus(404)
        })
}

function updateWidget(req, res) {
    var widget = req.body;
    var widgetId = req.params.widgetId;

    widgetModel
        .updateWidget(widgetId, widget)
        .then(function (status) {
            res.sendStatus(200)
        })
}

function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;

    widgetModel
        .deleteWidget(widgetId)
        .then(function (status) {
            res.sendStatus(200)
        })
}

function reorderWidget(req, res) {
    var pageId = req.query['pageId'];
    var start = req.query['index1'];
    var end = req.query['index2'];

    widgetModel
        .reorderWidget(pageId, index1, index2)
        .then(function (widgets) {
            res.send(widgets)
        });
}

function uploadImage(req, res) {

    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    // var widget = findWidgetById(widgetId);
    var widget = {};
    widget.url = '/assignment/public/uploads' + filename;

    var callbackUrl = "/assignment/#!/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;

    res.redirect(callbackUrl);

}
