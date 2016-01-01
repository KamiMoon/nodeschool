var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, function(err, data) {
    if (err) {

    }

    var buffer = data;
    var str = buffer.toString();
    var split = str.split('\n');
    var total = split.length - 1;

    console.log(total);

});
