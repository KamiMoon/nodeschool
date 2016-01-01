var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
    //will make it so you don't have to toString
    response.setEncoding('utf8');

    var totalString = "";

    response.on("data", function(data) {
        totalString += data;
    });

    response.on("error", function(data) {

    });

    response.on("end", function(data) {
        console.log(totalString.length);
        console.log(totalString);
    });

});
