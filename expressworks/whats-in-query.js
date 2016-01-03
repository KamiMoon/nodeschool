var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({
    extended: false
}));


var port = process.argv[2];

app.get('/search', function(req, res) {

    var query = req.query;

    res.send(query);
});


app.listen(port);
