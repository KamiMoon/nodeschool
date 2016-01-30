var Q = require('q');

function attachTitle(str) {
    return "DR. " + str;
}

var defer = Q.defer();

//values maybe passed down the chain
defer.promise.then(attachTitle).then(console.log);

defer.resolve("MANHATTAN");
