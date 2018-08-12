const express = require('express');
const path = require('path');

if (process.env.NODE_ENV == 'production') {
  require('dotenv').config({
    path: 'configs/.env'
  })
} else {
  require('dotenv').config({
    path: 'configs/.dev.env'
  })
}
const session = require('express-session');
// var redisStore = require('connect-redis')(session);
const cookieParser = require('cookie-parser')
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const cors = require('cors');
//const Redis = require('./redis');

const app = express();

mongoose.connect('mongodb://localhost:27017/pwa_app', {
    useNewUrlParser: true
  });

//Redis connection
// Redis.connectRedis();

app.use(cors());

function requireHttps(req, res, next) {
  if (!req.secure) {
    return res.redirect('https://' + req.get('host') + req.url);
  }

  next();
}

if (process.env.NODE_ENV == 'production')
  app.use(requireHttps)

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
  res.setHeader('Content-Type', 'application/json');
  next();
})

app.use(logger('dev'));

//session middleware
// app.use(session({
//   secret: 'secretSession',
//   // create new redis store.
//   store: new redisStore({ host: 'localhost', port: 6379, client: Redis.connectRedis(),ttl :  260}),
//   saveUninitialized: false,
//   resave: false
// }));

//Pase body
app.use(express.json());
//Alternative
// app.use(bodyParser.json())

app.use(express.urlencoded({
  extended: false
}));
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
  res.json({
    error
  });
})

if (process.env.NODE_ENV == 'production') {
  console.log("test")
//   const https = require('https');
//   const fs = require('fs');
//   const options = {
//     key: fs.readFileSync(process.env.SSL_PATH + 'privkey.pem'),
//     cert: fs.readFileSync(process.env.SSL_PATH + 'cert.pem'),
//     ca: [fs.readFileSync(process.env.SSL_PATH + 'chain.pem'), fs.readFileSync(process.env.SSL_PATH + 'fullchain.pem')]
//   }
//   let server = https.createServer(options, app);
//   server.listen(443);
//   let server1 = http.createServer(app);
//   server1.listen(80);
//   server.on('error', onError);
// server.on('listening', onListening);
}
else{
  console.log("test")
  const http = require('http');
  let server = http.createServer(app);
  server.listen(3000)
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
// 

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

// module.exports = app;