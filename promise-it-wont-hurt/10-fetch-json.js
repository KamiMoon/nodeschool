var HTTP = require("q-io/http");

HTTP.read('http://localhost:1337').then(function(result) {
        var json = JSON.parse(result);

        console.log(json);
    })
    .then(null, console.error)
    .done();
