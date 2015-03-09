module.exports = function(dirname, ext, callback) {
  var extension = "." + ext;
  require('fs').readdir(dirname, function(err, files) {
    if (err) {
      callback(err, null);
    }else {
      var result = files.filter(function(file){
        return require('path').extname(file) === extension;
      });
      callback(null, result);
    }
  });
};