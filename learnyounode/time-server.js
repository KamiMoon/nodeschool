var net = require('net');
var dateFormat = require('dateformat');



var port = process.argv[2];

var server = net.createServer(function(socket) {
    // socket handling logic  

    var data = dateFormat(new Date(), "yyyy-mm-dd HH:MM") + '\n';

    //socket.write(data);

    socket.end(data);
});

server.listen(port);
