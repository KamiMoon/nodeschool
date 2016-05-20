var express = require('express');
var app = express();


var PORT = process.argv[2];
var TEMPLATE_DIR = process.argv[3];

app.set('views', TEMPLATE_DIR || path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
    res.render('index', {
        date: new Date().toDateString()
    });
});

app.listen(PORT);