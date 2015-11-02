/**
* Simple chat server using socket.io and websockets in frontend
* @author Eugenia Pérez
*/
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var port = 8888;

app.listen(port);

console.log('Ok, listening on http://127.0.0.1:'+ port);
 
function handler (req, res) {
  // We send back the client interface
  // with socket.io dynamic library
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading websockets.html');
    }
 
    res.writeHead(200);
    res.end(data);
  });
}
 
 var clients = [];
/**
* onConnection controller.
* we set a kind of event depending on emit parameters.
* when client send emit('event666') the handler will be socket.on('event666')
*/
io.sockets.on('connection', function (socket) {
   
   //clients.push(socket);

  socket.on('myname', function (data) {
    console.log('Received from client:' + JSON.stringify(data));

    // Push new client to the array of chat users
    clients.push({name: data.name, clientSocket: socket});
    // Send message from server to the new user
    socket.emit('fromserver', { msg: 'ok, hello ' + data.name });

    // Notify to all connected users
     clients.forEach(function (client,i) {
        client.clientSocket.emit('fromserver', { msg:  data.name + ' entered the room'});
      })
  });
 
  // Incoming message from client
  socket.on('fromclient', function (data) {
    console.log('Received from client:' + JSON.stringify(data));
      // Sent back to all users
      clients.forEach(function (client,i) {
        client.clientSocket.emit('fromserver', { msg:  data.msg });
      })
  });
 
});
