var Q = require('q');


var firstDefer = Q.defer();
var secondDefer = Q.defer();

function all(first, second) {
    var defered = Q.defer();
    var counter = 0;
    var bothData = [];

    first.then(function(data) {
        counter++;
        bothData.push(data);

        if (counter === 2) {
            defered.resolve(bothData);
        }
    });
    first.then(null, function() {
        defered.reject();
    });

    second.then(function(data) {
        counter++;

        bothData.push(data);

        if (counter === 2) {
            defered.resolve(bothData);
        }
    });
    second.then(null, function() {
        defered.reject();
    });

    return defered.promise;
}

//all(firstDefer.promise, secondDefer.promise)
//    .then(console.log);

Q.all([firstDefer.promise, secondDefer.promise])
    .then(console.log);


setTimeout(function() {
    firstDefer.resolve("PROMISES");
    secondDefer.resolve("FTW");
}, 200);
