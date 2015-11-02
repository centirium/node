$( document ).ready(function() {
 
    var SERVER = 'http://localhost:8888/';
 
  var webSocket = io.connect(SERVER);
  var username;
 
  $('#enter').click(function() {
    console.log('Log in server with: ' + $('#login').val());
    // I introduce myself to the server
    webSocket.emit('myname', { name: $('#login').val() });
    username = $('#login').val();
    $('#logindiv').hide();
    $('#chatdiv').show();
  });
 
  /**
  * If servers emit a message with 'fromserver' header
  * we handle here.
  */
  webSocket.on('fromserver', function (data) {
        console.log('Received from server: ' + data.msg);
        $('#chattext').append('<div class="chat">' + data.msg +'</div>');
        $('#chattext')[0].scrollTop = $('#chattext')[0].scrollHeight;
  });
 
 
    /**
    * when user press enter in textfield we sent the message
    */
    $('#usertext').keypress(function (event) {
        var dataToSend = $('#usertext').val();
        if (event.which == 13) {
            $('#chattext').append('<div class="chatlog">' + dataToSend +' sent</div>');
            $('#chattext')[0].scrollTop = $('#chattext')[0].scrollHeight;
            //$('#chattext').append('(' + dataToSend +' sent)\n');         
 
            console.log('Sending to server: ' + dataToSend);
            webSocket.emit('fromclient', { msg: username+': '+dataToSend });
            $('#usertext').val("");
        }
    });
           
});