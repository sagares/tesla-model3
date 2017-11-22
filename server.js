// set up ======================================================================
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 7070;

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json


// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
