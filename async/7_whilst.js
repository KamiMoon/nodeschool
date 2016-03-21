/*

WHILST
 Exercise 7 of 7


## Challenge

Write a program that will receive a single command line argument to a URL.

Using async.whilst and http.get, send GET requests to this URL until
the response body contains the string "meerkat".

console.log the amount of GET requests needed to retrieve the "meerkat" string.

## Hints

String.prototype.trim() is your friend.

You can get documentation on async.whilst() here:

  [https://github.com/caolan/async#whilst](https://github.com/caolan/async#whilst)

test() - synchronous truth test to perform before each execution of fn.
fn(callback) - A function which is called each time test passes. The function is passed a callback(err), which must be called once it has completed with an optional err argument.
callback(err, [results]) - A callback which is called after the test function has failed and repeated execution of fn has stopped. callback will be passed an error and any arguments passed to the final fn's callback.

*/

var http = require('http');
var async = require('async');

var baseUrl = process.argv[2];

function makeRequest(url, cb) {
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

var continueSearch = true;
var count = 0;

async.whilst(
    function() {
        return continueSearch;
    },
    function(callback) {
        count++;

        makeRequest(baseUrl, function(err, result) {
            if (result.trim().search('meerkat') !== -1) {
                continueSearch = false;
            }

            callback(null, count);
        });

    },
    function(err, n) {
        if (err) {
            console.error(err);
        }

        console.log(count);
    }
);
