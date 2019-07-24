var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var inputRouter = require('./routes/input');
var metadataRouter = require('./routes/metadata');
// var videosRouter = require('./routes/videos');

var app = express();

/////////////////////
// UPDATE HERE
// Get Developer Token from Dev Console->App->Configuration
// Will expire after 30 minutes
app.locals.devToken = 'kaH2VZUB7TpKzIjoZlYDAOIQ7youXVpu';

app.locals.version = '__Atlanta';
// Set to root Id of the main folder you want to see on the homepage
app.locals.rootFolder = '77254170534';
// Set to folder you want new content uploaded directly into
app.locals.uploadFolder = '77253195217';
/////////////////////


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/input', inputRouter);
app.use('/metadata', metadataRouter);
// app.use('/videos', videosRouter);

app.use(function fileLog(req, res, next) {
    console.log('fileLog');
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
