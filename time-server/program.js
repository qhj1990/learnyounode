var net = require('net');
function fillZero(number) {
  return (number < 10 ? '0': '') + number;
}

function getTime () {
  var date = new Date();
  var year = date.getFullYear();
  var month = fillZero(date.getMonth()+1);
  var day = fillZero(date.getDate());
  var hour = fillZero(date.getHours());
  var minute = fillZero(date.getMinutes());
  return '' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
}
var server = net.createServer(function(socket) {
  socket.end(getTime() + '\n');
});

server.listen(process.argv[2]);
