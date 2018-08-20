const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port  = 8080;

// Mongoose
// Obviously never check user and pass into git for a real app
mongoose.connect('mongodb://duckUser:superSecretDontTell@url:27017/ducks', { useNewUrlParser: true } );
// from within mongo shell: db.auth("duckUser","superSecretDontTell");
mongoose.Promise = global.Promise;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Routes
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// API Routes
require('./api/routes')(app);

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;
