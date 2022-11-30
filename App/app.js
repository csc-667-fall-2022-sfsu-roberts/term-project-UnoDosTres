const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sessionInstance = require("./app-config/session");
const protect = require("./app-config/protect");

if(process.env.NODE_ENV === "development") {
  require("dotenv").config();
  }

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testsRouter = require('./routes/tests');
const authRouter = require('./routes/auth');
const lobbyRouter = require('./routes/authenticated/lobby');
const gamesRouter = require('./routes/authenticated/games');
const chatRouter = require('./routes/authenticated/chat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sessionInstance);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tests', testsRouter);
app.use('/auth', authRouter);
<<<<<<< HEAD
app.use('/lobby', lobbyRouter);
app.use('/games', gamesRouter);
=======
app.use('/authenticated/lobby', protect, lobbyRouter);
app.use('/authenticated/games', protect, gamesRouter);
app.use('/chat', protect, chatRouter);
>>>>>>> 7c86c3c846217e78ddc4d7706b645b080cf478be

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
