var split = require('split');
var through2 = require('through2');


var lineIndex = 1;

function write(buffer, encoding, next) {
    var value = buffer.toString();

    if (lineIndex % 2 === 0) {
        value = value.toUpperCase();
    } else {
        value = value.toLowerCase();
    }

    this.push(value + '\n');

    lineIndex++;
    next();
}

function end(done) {
    done();
}

var stream = through2(write, end);

process.stdin
    .pipe(split())
    .pipe(stream).pipe(process.stdout);
