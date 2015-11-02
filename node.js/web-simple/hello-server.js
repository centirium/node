/**
* Hello server using express module
* It will respond to an event when it receives '/hello' request
* To test just run this with
/** 
* node hello-server.js
* And see from a browser http://localhost:8666/hello
* @author Pello Xabier Altadill Izura
*/
var express = require('express');
var myserver = express();
var port = 8666;  // By demon be driven
 
// event when server receives GET /hello request
myserver.get('/hello', function(req, res){
    res.send('Say hello to my little friend');
});
 
myserver.listen(port);
console.log('Listening on port ' + port);