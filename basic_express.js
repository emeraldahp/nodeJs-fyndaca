const express = require('express');
const app = express();

app.get('/', function (req, res) {  
    res.send('hello');  
});

var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log(host);
    console.log(port);
    console.log("app running at:", host, port);

})

