const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/pwa_app');

app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
  res.setHeader('Content-Type', 'application/json');
  next();
})

app.use(logger('dev'));

//Pase body
app.use(express.json());
//Alternative
// app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

app.use((req, res, next) => {
  let err = new Error('Not found...');
  err.status = 400;

  next(err);
});

app.use((err, req, res, next) => {
  let error = err.message;
  res.status(err.status || 500);
  res.json({ error});
})

module.exports = app;

