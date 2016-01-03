var express = require('express');
var bodyparser = require('body-parser');
var crypto = require('crypto');

var app = express();

app.use(bodyparser.urlencoded({
    extended: false
}));


var port = process.argv[2];

app.put('/message/:id', function(req, res) {

    var id = req.params.id;

    var hash = crypto.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');

    res.send(hash);
});


app.listen(port);
