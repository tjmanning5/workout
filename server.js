var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var exerciseController = require('./controllers/exerciseController');
var liftController = require('./controllers/exerciseController');
var workoutController = require('./controllers/workoutController');
var path = require('path');
var exphbs = require('express-handlebars');
require('dotenv').config();

var port = process.env.PORT || 3000;

exerciseController(app);
liftController(app);
workoutController(app);
// app.use(express.static('/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


mongoose.connect(process.env.MONGODB_URL);

app.get('/', function (req, res) {
    workoutController
    res.render('home');
});

app.get('/workout:_id', function (req, res) {
    res.render('workout');
});

app.get('/exercise:_id', function (req, res) {
    res.render('exercise');
});

app.listen(port);