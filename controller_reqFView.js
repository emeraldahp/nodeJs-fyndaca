const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.static('public'));

app.post('/ex1', urlencodedParser, function(req, res){
    response={
        item1: req.body.item1,
        item2: req.body.item2
    };
    res.end(JSON.stringify(response));
});

app.listen(8000);
