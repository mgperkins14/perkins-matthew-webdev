var app             = require('./express');
var bodyParser      = require('body-parser');
var cookieParser    = require('cookie-parser');
var session         = require('express-session');
var passport        = require('passport');
var msf             = require("./sportsfeed");


app.use(cookieParser());
//
// app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(session({   secret: "anb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// configure a public directory to host static content
app.use(app.express.static(__dirname + '/public'));

require("./test/app.js")(app);

var port = process.env.PORT || 3000;

require('./assignment/app.js');
require('./project/app');
require('./project/services/sportsfeed.service.server');

app.listen(port);