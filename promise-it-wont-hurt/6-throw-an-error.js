var Q = require('q');

var inputJSON = process.argv[2];

function parsePromised() {
    var defer = Q.defer();

    try {
        defer.resolve(JSON.parse(inputJSON));
    } catch (e) {
        defer.reject(e);
    }

    return defer.promise;
}

parsePromised().then(console.log).then(null, console.log);
