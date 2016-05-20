var fs = require('fs');
var path = require('path');

module.exports.getFileListFiltered = function (directoryName, fileExtension, callback) {
    var filtered = [];


    fs.readdir(directoryName, function (err, files) {
        if (err) {
            return callback(err);
        }

        for (var i = 0; i < files.length; i++) {
            if (path.extname(files[i]) === '.' + fileExtension) {
                filtered.push(files[i]);
            }
        }

        return callback(null, filtered);
    });
};

