/*

 async you - learn to use the async package
────────────────────────────────────────────
 MAP
 Exercise 4 of 7

With async.each, the results of the asynchronous function are lost.

This is where async.map comes in. It does the same thing as async.each,
by calling an asynchronous iterator function on an array, but collects
the results of the asynchronous iterator function and passes them to the
results callback.

The results are in an array that is in the same order as the original array.

For example, the example in the EACH problem can be written as:

    var http = require('http')
      , async = require('async');
    async.map(['cat', 'meerkat', 'penguin'], function(item, done){
      var opts = {
        hostname: 'http://httpbin.org',
        path: '/post',
        method: 'POST'
      };
      var body = '';
      var req = http.request(opts, function(res){
        res.on('data', function(chunk){
          body += chunk.toString();
        });
        res.on('end', function(){
         return done(null, body);
        });
      });
      req.write(item);
      req.end();
    },
    function(err, results){
      if (err) return console.log(err);
      // results is an array of the response bodies in the same order
    });

## Challenge

Write a program that will receive two command-line arguments to two URLs.

Using http.get create two GET requests to these URLs.

You will need to use async.map, then console.log the results array.

https://github.com/caolan/async#map
*/

var http = require('http');
var async = require('async');

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

async.map(process.argv.slice(2), function(item, done) {
        makeRequest(item, done);
    },
    function(err, results) {
        if (err) return console.log(err);
        // results is an array of the response bodies in the same order
        console.log(results);
    });
