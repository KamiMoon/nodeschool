var fs = require('fs');
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({
    extended: false
}));

var port = process.argv[2];
var filePath = process.argv[3];

app.get('/books', function(req, res) {

    fs.readFile(filePath, function(error, data) {
        if (error) {
            return res.sendStatus(500);
        }

        var stringData = data.toString();
        var object;

        try {
            object = JSON.parse(stringData);
        } catch (e) {
            return res.sendStatus(500);
        }

        res.json(object);
    });


});

app.listen(port);

