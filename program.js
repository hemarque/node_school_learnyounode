var mymodule = require('./mymodule');

var mypath = process.argv[2];
var myext = '.' + process.argv[3];

mymodule(mypath, myext, function(error, list){
  if(error)
    console.log('errores: ' + error);

  for (var i = 0; i < list.length; i++){
    console.log(list[i]);
  }
});
