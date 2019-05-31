var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.status(200).send("hello world");
});

io.on('connection', function(socket) {
    console.log('Alguien se ha conectado con sockets');
});

server.listen(8080, function() {
    console.log('Corriendo en http://localhost:8080');
});