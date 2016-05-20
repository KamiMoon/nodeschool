var filteredLs = require('./filtered-ls-module');

var filePath = process.argv[2];
var extention = process.argv[3];

filteredLs.getFileListFiltered(filePath, extention, function(err, files) {
    if (err) {
        console.error(err);
    }

    files.forEach(function(file) {
        console.log(file);
    });

});

