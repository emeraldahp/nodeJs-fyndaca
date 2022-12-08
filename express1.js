const express = require('express');
const app = express();

app.get("/",function(req, res){
    res.send("welcome");
});

app.get('/hello', function(req, res){
    res.send("hello world");
 });
 
 app.post('/hello2', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });

 app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });

app.listen(8000);