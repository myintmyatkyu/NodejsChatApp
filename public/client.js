var socket=io.connect('http://192.168.43.235:5555');

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
