var http = require('http');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];


function getUrlString(url, callback) {
    http.get(url, function(response) {
        //will make it so you don't have to toString
        response.setEncoding('utf8');

        var totalString = "";

        response.on("data", function(data) {
            totalString += data;
        });

        response.on("error", function(data) {
            callback('error occured');
        });

        response.on("end", function(data) {
            callback(null, totalString);
        });

    });

}

getUrlString(urlOne, function(err, url) {
    if (err) console.error(err);

    console.log(url);

    getUrlString(urlTwo, function(err, url) {
        if (err) console.error(err);

        console.log(url);

        getUrlString(urlThree, function(err, url) {
            if (err) console.error(err);

            console.log(url);

        });

    });

});
