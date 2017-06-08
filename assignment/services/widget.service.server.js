var app = require('../../express');
var multer = require('multer'); // npm install multer --save
var upload = multer({ dest: __dirname+'/../../public/assignment/uploads' });

app.post    ('/api/assignment/page/:pageId/widget', createWidget);
app.get     ('/api/assignment/page/:pageId/widget', findAllWidgetsForPage);
app.get     ('/api/assignment/widget/:widgetId', findWidgetById);
app.put     ('/api/assignment/widget/:widgetId', updateWidget);
app.delete  ('/api/assignment/widget/:widgetId', deleteWidget);
app.put     ('api/assignment/page/:pageId/widget', reorderWidget);
app.post    ("/api/upload", upload.single('myFile'), uploadImage);

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

    var widget = [
        widget.pageId = pageId,
        widget._id = (new Date()).getTime() + ""
    ];

    widgets.push(widget);
    res.send(widget);
}

function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;
    var resultSet = [];
    for(var w in widgets) {
        if(widgets[w].pageId === pageId) {
            resultSet.push(widgets[w]);
        }
    }
    res.send(resultSet);
}

function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;
    for (var w in widgets) {
        if (widgets[w]._id === widgetId) {
            res.send(widgets[w]);
            return;
        }
    }
    res.sendStatus(404);
}

function updateWidget(req, res) {
    var widget = req.body;
    var widgetId = req.params.widgetId;
    for (var w in widgets) {
        if (widgetId === widgets[w]._id) {
            widgets[w] = widget;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;
    var widget = widgets.find(function (widget) {
        return widget._id === widgetId;
    });
    var index = widgets.indexOf(widget);
    widgets.splice(index, 1);
    res.sendStatus(200);
}

function reorderWidget(req, res) {
    var index1 = req.query['index1'];
    var index2 = req.query['index2'];

}

function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    // var widget = findWidgetById(widgetId);
    var widget = {};
    widget.url = '/assignment/public/uploads' + filename;

    var callbackUrl   = "/assignment/#!/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;

    res.redirect(callbackUrl);

}
