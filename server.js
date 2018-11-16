const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || '3100';


const app = express();

mongoose.connect('mongodb://localhost/todoListApp', { useNewUrlParser: true});
mongoose.set('debug', true);

//Enable bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
 
//Enable CORS
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});


app.use(express.static(path.join(__dirname, '/public')));
 
//Catch all other routes and return to the index file
app.get('*', (req, res) =>{
   res.sendFile(path.join(__dirname, 'index.html'));
})

//Get environment port or use 3000
app.set('port', port);
 
//Listen on port
app.listen(port, () => console.log(`API running on localhost:${port}`));














