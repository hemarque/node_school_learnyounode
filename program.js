var http = require('http');

var port = process.argv[2];

function parsetime(_date){
  return JSON.stringify( { 
    hour: _date.getHours(), 
    minute: _date.getMinutes(), 
    second: _date.getSeconds()
  });
}

function unixtime(_date){
  return JSON.stringify( {
    unixtime: _date.getTime()
  });
}

http.createServer(function(req, res) {
  if (req.method == 'GET') {
    var pathname = req.url.substr(0, req.url.indexOf('?')); 
    var str_date = req.url.substring(1+req.url.indexOf('='), req.url.length);
    var _date = new Date(str_date);
    res.write(pathname==='/api/parsetime'?parsetime(_date):unixtime(_date));
    res.end();
  }
}).listen(port);
