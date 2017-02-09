var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static('public'))

io.on('connection', function(socket){
  socket.on('interact', function(msg){
    io.emit('update3d', msg);
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});