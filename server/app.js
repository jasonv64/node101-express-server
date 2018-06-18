// import files and packages up here
var data = require('../server/data.json');

var express = require('express');
var app = express();


// create your express server below
app.get('/', function (req, res) {
    res.status(200);
    res.send('Hello World');
})

app.get("/data", function (req, res) {
    res.status(200);
    res.json(data);
})
// add your routes and middleware below

// finally export the express application
module.exports = app;
