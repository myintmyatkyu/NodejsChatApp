var socket=io('127.0.0.1:4000');

socket.on('messages',function(data){
    newFunction(data);
});

$('form').submit(function(){
    var message=$('#name').val()+" : "+  $('#message').val();
    socket.emit('messages',message);
    $('#message').val('');
    return false;
})

function newFunction(data) {
    $('#thread').append('<li>' + data + '</li>');
}
