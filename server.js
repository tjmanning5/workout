var express = require('express');
var app = express();
var methodOverride = require('method-override')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');
require('dotenv').config();

var port = process.env.PORT || 3000;

// app.use(express.static('/public'));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({'extended': true}));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./routes/routes')(app); // controller must be defined after body parser, or else req.body will be undefined

mongoose.connect(process.env.MONGODB_URL);

app.listen(port);