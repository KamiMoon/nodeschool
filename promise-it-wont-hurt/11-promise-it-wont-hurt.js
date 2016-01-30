var HTTP = require("q-io/http");

HTTP.read({
        url: 'http://localhost:7000',
        method: 'GET'
    })
    .then(function(userId) {
        return HTTP.read({
            url: 'http://localhost:7001/' + userId.toString(),
            method: 'GET'
        });
    })
    .then(function(user) {
        console.log(JSON.parse(user.toString()));
    })
    .then(null, console.error)
    .done();
