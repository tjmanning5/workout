var express = require('express');
var app = express();
var mongoose = require('mongoose');
var exerciseController = require('/controllers/exerciseController');
var liftController = require('/controllers/exerciseController');

var port = process.env.port || 3000;

exerciseController(app);
liftController(app);

app.listen(port);