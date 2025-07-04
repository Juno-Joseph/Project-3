var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var logger = require('morgan');
require("dotenv").config();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const dbURL = process.env.ATLAS_URI;
const port = 2000;

//routers
var indexRouter = require('./routes/index');
var signinRouter = require('./routes/signin');
var signupRouter = require('./routes/signup');
var quizRouter = require('./routes/quiz');
var profileRouter = require('./routes/profile');

var app = express();

//Session 
// Configure session middleware
app.use(session({
  secret: 'ihatequizzes',
  resave: false,
  saveUninitialized: true
}));

app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routers
app.use(signinRouter);
app.use(signupRouter);
app.use(indexRouter);
app.use(quizRouter);
app.use(profileRouter);

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

// MongoDB Connection
mongoose.connect(dbURL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

//Server Starts
app.listen(port,()=>{
  console.log(`Port connected at ${port}`)
});

module.exports = app;
