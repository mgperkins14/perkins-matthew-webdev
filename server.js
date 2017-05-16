var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./test/app.js")(app);

app.get('/env', function(req, res) {
//  res.json(process.env);
  
  var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
  if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
      var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
      var password = process.env.MLAB_PASSWORD_WEBDEV;
      connectionString = 'mongodb://' + username + ':' + password;
      connectionString += '@ds151279.mlab.com:51279/heroku_6gg9qzq5'; // user yours
  }
 
//   var mongoose = require('mongoose');
  var error = null;
//   try {
//   mongoose.connect(connectionString);
//   } catch(e) {
//     error = e;
//   }
  
  res.json({connectionString: connectionString, error: error});
});

var port = process.env.PORT || 3000;

app.listen(port);
