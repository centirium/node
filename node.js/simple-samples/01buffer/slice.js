/**
* slice.js - Pello Altadill
* Shows how to slice a buffer
*/

var buffer = new Buffer('Slice me like a pizza');

console.log('Buffer size: ' + buffer.length); //
console.log('Buffer contents in 0: ' + buffer[0]); // 83
console.log('Buffer contents: ' + buffer); //
// slice(begin, end) begin < end
console.log(buffer.slice(9,13).toString()); // like
