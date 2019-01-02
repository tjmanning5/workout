var express = require('express');
var app = express();
var mongoose = require('mongoose');
var exerciseController = require('/controllers/exerciseController');
var liftController = require('/controllers/exerciseController');
var workoutController = require('/controllers/workoutController');
var path = require('path');

var port = process.env.PORT || 3000;

exerciseController(app);
liftController(app);
workoutController(app);
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URL);

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.get('/workout', function(req, res) {
//     res.sendFile(path.join(__dirname + '/workout.html'));
// });

// app.get('/exercise', function(req, res) {
//     res.sendFile(path.join(__dirname + '/exercise.html'));
// });




app.listen(port);