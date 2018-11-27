var express = require('express');
var app = express();
var mongoose = require('mongoose');
var exerciseController = require('/controllers/exerciseController');
var liftController = require('/controllers/exerciseController');

var port = process.env.PORT || 3000;

exerciseController(app);
liftController(app);

mongoose.connect(process.env.MONGODB_URL);

app.listen(port);