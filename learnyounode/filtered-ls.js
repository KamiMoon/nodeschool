var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var extention = process.argv[3];

fs.readdir(filePath, function(err, files) {

    files.forEach(function(file) {

        if (path.extname(file) === '.' + extention) {
            console.log(file);
        }

    });

});
