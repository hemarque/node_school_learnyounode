var net = require('net');

function writeDate(date){
  date.setHours(date.getHours()+1);
  return date.toISOString().replace('T', ' ').substring(0,16);;
}

var server = net.createServer(function(socket){
  var now = new Date();
  socket.write(writeDate(now));
  socket.end();
});

server.listen(process.argv[2]);
