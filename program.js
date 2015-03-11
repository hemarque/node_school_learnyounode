var http = require('http');

var url = process.argv[2];

http.get(url, function(resp){
  resp.setEncoding("utf8");

  var buffer = "";
  var characters = 0;

  resp.on("data", function(data){
    buffer += data;
    characters += data.length;
  });
 
  resp.on("end", function(end){
    console.log(characters);
    console.log(buffer);
  });
});
