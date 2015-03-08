module.exports = function(file_path, file_ext, callback){

  var fs = require('fs');
  var path = require('path');

  fs.readdir(file_path, function(error, file_list){
    if(error)
      return callback(error);

    var newList = file_list.filter(function(name){
      return path.extname(name) === file_ext;
    });

    callback(null, newList);
  }); 
};
