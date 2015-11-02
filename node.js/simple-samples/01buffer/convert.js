/**
* convert.js - Pello Altadill
* Shows how to make conversions
*/

var buffer = new Buffer('Esto es... ¡ESPAÑAAA!');
console.log(buffer.toString());

var bufferBase64 = buffer.toString('base64');
console.log(bufferBase64.toString());

var bufferUtf8 = bufferBase64.toString('utf8');
console.log(bufferUtf8.toString());
