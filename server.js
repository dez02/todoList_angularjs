const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3100;
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const routes = require('./api_todos/routes/index');
// const apiRoutes = express.Router();


const app = express();
mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true });

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// app.use('/api', apiRoutes);
app.use('/', routes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port);
console.log(`This app listens on port ${port}`);

