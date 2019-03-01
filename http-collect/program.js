var http = require('http');
var bl = require('bl');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data) {
    var data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
})

