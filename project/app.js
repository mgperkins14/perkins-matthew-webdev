var app = require('../express');
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost/webdev_summer1_2017');

require('./services/post.service.server');
require('./services/sportsfeed.service.server');
require('./services/user.service.server');