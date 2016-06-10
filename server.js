var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

// var configDB = require('./config/database.js');

// mongoose.connect(configDB.url);
mongoose.connect('mongodb://'+process.env.USER+':'+process.env.MONGO_PW+'@ds019033.mlab.com:19033/nodeauth')

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app'));

app.use(session({ secret: 'johniscool' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport);

app.listen(port);
console.log('The magic happens on port ' + port);
