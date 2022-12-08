const express = require('express');
const mongodb = require('./fetchFromDB');
const app = express();



let data;
mongodb.fetchFromDB("ecomdb", "orders").then(function(value){data=value});
app.all('/', function(req, res){
    
    console.log(data);
    res.send(data);
});
app.listen(8000);