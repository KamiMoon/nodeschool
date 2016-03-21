/* 


 TIMES
 Exercise 5 of 7


# Challenge

Write a program that will receive two command line arguments containing
the hostname and port. Using http.request send a POST request to

    url + '/users/create'

with the body containing a JSON.stringify'ed object:

    {"user_id": 1}

Do this five times with each time the user_id property being incremented,
starting at 1.

Once these requests are done, send a GET request to:

    url + '/users'

and console.log the response body for the GET request.

## Hints

In this problem, you will need to co-ordinate a few async operations.

Use async.series for this and pass in an Object. One of the task
functions will need to use async.times to send POST requests using
http.request. The other will then do the GET request.

You can read more about async.times here:

  [https://github.com/caolan/async#times](https://github.com/caolan/async#times)

  times(n, iteratee, [callback])

Calls the iteratee function n times, and accumulates results in the same manner you would use with map.

Arguments

n - The number of times to run the function.
iteratee - The function to call n times.
callback - see map

*/


var http = require('http');
var async = require('async');

var hostname = process.argv[2];
var port = process.argv[3];
var times = 5;
var postUrl = '/users/create';
var getUrl = 'http://' + hostname + ':' + port + '/users';

function makeGet(url, cb) {
    var body = '';

    http.get(url, function(res) {
        res.on('data', function(chunk) {
            body += chunk.toString();
        });
        res.on('end', function() {
            cb(null, body);
        });
    }).on('error', function(err) {
        cb(err);
    });
}

var postOptions = {
    hostname: hostname,
    port: port,
    path: postUrl,
    method: 'POST'
};

function makePost(id, cb) {

    var postData = JSON.stringify({ "user_id": id + 1 });
    var body = '';

    var req = http.request(postOptions, function(res) {
        res.on('data', function(chunk) {
            body += chunk.toString();
        });
        res.on('end', function() {
            cb(null, body);
        });
    });

    req.on('error', function(err) {
        cb(err);
    });

    req.write(postData);
    req.end();
}

async.times(times, function(n, next) {

    makePost(n, function(err, user) {
        next(err, user);
    });

}, function(err, users) {
    if (err) {
        return console.log(err);
    }

    //console.log(users);

    makeGet(getUrl, function(err, result) {
        if (err) {
            return console.log(err);
        }

        console.log(result);
    });
});
