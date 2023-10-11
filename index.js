const express  = require('express');
const rateLimiter = require('./rateLimitHandler');

const app = express();
const reqWindow = {
  start: Math.floor((Date.now()/1000)/60),
  counter: 0,
}

app.use((_req, res, next) => {
  if (!rateLimiter(reqWindow)) {
    res.status(429).send('too many requests');
  } else {
    next();
  }

});

app.get('/coolstuff', (req, res, _next) => {
  res.status(200).send('good request!');
});


app.listen('4010', () => {
  console.log('app is listening on port 4010');
});

