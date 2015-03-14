var http = require('http');

var port = process.argv[2];

http.createServer(function(req, res){

    if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function (data) {
          res.write(body.toUpperCase());
          res.end();
        });
    }

}).listen(port);

