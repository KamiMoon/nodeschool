var Q = require('q');
var defer = Q.defer();

defer.promise.then(console.log);

//A promise is always resovled asynchronously and not on the same turn of the event loop
defer.resolve("SECOND");

console.log("FIRST");
