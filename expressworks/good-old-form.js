var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({
    extended: false
}));


var port = process.argv[2];

app.post('/form', function(req, res) {

    var reversed = req.body.str.split('').reverse().join('');

    res.send(reversed);
});


app.listen(port);
