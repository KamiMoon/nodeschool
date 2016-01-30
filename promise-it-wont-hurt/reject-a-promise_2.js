var q = require('q');
var defer = q.defer();

// your solution here

function rejectionHandler(error) {
    console.log(error.message);
}

defer.promise.then(null, rejectionHandler);

setTimeout(function() {

    defer.reject(new Error("REJECTED!"));

}, 300);
