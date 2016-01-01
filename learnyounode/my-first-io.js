var fs = require('fs');


var path = process.argv[2];

var buffer = fs.readFileSync(path);
var str = buffer.toString();
var split = str.split('\n');
var total = split.length - 1;

console.log(total);
