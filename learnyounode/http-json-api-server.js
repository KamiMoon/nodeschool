var http = require('http');
var url = require('url');

var port = process.argv[2];

function writeError(res) {
    res.writeHead(404);
    res.end('error');
}

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {

        var parsedUrl = url.parse(req.url, true);

        var iso = parsedUrl.query.iso;
        var date = new Date(iso);
        var responseObj = {};

        switch (parsedUrl.pathname) {
            case '/api/parsetime':

                responseObj.hour = date.getHours();
                responseObj.minute = date.getMinutes();
                responseObj.second = date.getSeconds();
                break;

            case '/api/unixtime':
                responseObj.unixtime = date.getTime();
                break;
        }

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        var json = JSON.stringify(responseObj);

        res.end(json);

    }

    writeError(res);

});
server.listen(port);
