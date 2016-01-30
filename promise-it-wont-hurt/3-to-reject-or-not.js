var Q = require('q');
var defer = Q.defer();

defer.promise.then(console.log, console.log);

//Once a promise is resolved it is done - the other resolves are ignored
defer.resolve("I FIRED");
defer.resolve("I DID NOT FIRE");
