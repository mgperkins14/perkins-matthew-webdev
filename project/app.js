var app = require('../express');
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
// mongoose.connect('mongodb://localhost/project_data');

require('./services/post.service.server');
require('./services/sportsfeed.service.server');
require('./services/user.service.server');