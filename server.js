const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || '3100';
const routes = require('./api_todos/routes/index');


const app = express();

mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser: true});
mongoose.set('debug', true);

//Enable bodyParser
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
 
//Enable CORS
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});


app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);
//Catch all other routes and return to the index file
app.get('*', (req, res) =>{
   res.sendFile(path.join(__dirname, './public/index.html'))
   console.log("coucou")
});



app.listen(port);
  console.log(`API running on localhost:${port}`);














