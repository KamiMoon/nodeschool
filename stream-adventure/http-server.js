 var http = require('http');
 var through = require('through2');

 var port = process.argv[2];

 function write(buffer, encoding, next) {
     this.push(buffer.toString().toUpperCase());
     next();
 }

 function end(done) {
     done();
 }

 var stream = through(write, end);


 var server = http.createServer(function(req, res) {

     if (req.method === 'POST') {
         req.pipe(stream).pipe(res);
     }

 });
 server.listen(port);
