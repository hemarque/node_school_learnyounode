var fs = require('fs');
var path = require('path');

var filepath = process.argv[2];
var ext = "."+process.argv[3];

fs.readdir(filepath, function(error, list){
  for(var i = 0; i < list.length-1; i++){
    if(path.extname(list[i]) === ext){
      console.log(list[i]);
    }
  }
}); 
