/* 

REDUCE
 Exercise 6 of 7


## Challenge

Write a program that will receive an URL as the first command line argument.

To this URL, for each of the values in the following array, send a GET request
using http.get with a query parameter named number set at the proper value:

    ['one', 'two', 'three']

Each time, convert the response body to Number and add it to the previous value.
console.log the final reduced value.

## Hints

Use async.reduce:

  [https://github.com/caolan/async#reduce](https://github.com/caolan/async#reduce)

  arr - An array to iterate over.
memo - The initial state of the reduction.
iteratee(memo, item, callback) - A function applied to each item in the array to produce the next step in the reduction. The iteratee is passed a callback(err, reduction) which accepts an optional error as its first argument, and the state of the reduction as the second. If an error is passed to the callback, the reduction is stopped and the main callback is immediately called with the error.
callback(err, result) - Optional A callback which is called after all the iteratee functions have finished. Result is the reduced value.

*/

var http = require('http');
var async = require('async');

var baseUrl = process.argv[2];
var arrayToReduce = ['one', 'two', 'three'];

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

async.reduce(arrayToReduce, 0, function(memo, item, callback) {

    makeRequest(baseUrl + '?number=' + item, function(err, result) {
        callback(null, memo + (+result));
    });

}, function(err, result) {
    if (err) {
        console.error(err);
    }

    console.log(result);
});
