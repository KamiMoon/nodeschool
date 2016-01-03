var express = require('express');
var app = express();


var PORT = process.argv[2];
var STATIC_DIR = process.argv[3];

app.use(express.static(STATIC_DIR || path.join(__dirname, 'public')));


app.listen(PORT);
