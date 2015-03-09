var mymodule = require('./mymodule');

var dirname = process.argv[2];
var ext = process.argv[3];

mymodule(dirname, ext, function(err, files) {
  if(err){
  	console.log('Errors: ' + err);
  }else{
  	files.forEach(function(file) {
      console.log(file);
    });
  }
});