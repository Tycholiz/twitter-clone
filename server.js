/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./webpack.config.js');
const dbconfig = require('./dbconfig')

const Tweet = require('./models/Tweet')

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

mongoose.connect(dbconfig.DB, { useNewUrlParser: true })
  .then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot connect to database:', err) }
  )

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.render
})

//====GET ALL TWEETS===//
app.get('/api/tweets', function (req, res) {
  Tweet.find({}).then(doc => {
    res.json(doc);
  })
})

//====POST NEW TWEET===//
app.post('/api/tweets', function (req, res) {
  const { user, text, pic, liked } = req.body

  Tweet.create({
    user,
    text,
    pic,
    liked
  }).then(tweet => {
    res.json(tweet)
  });
});


app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
