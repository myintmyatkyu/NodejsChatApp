var express=require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io')(server);
var port = process.env.PORT || 4000;

app.get('/',function(req,res,next){
    res.sendFile(__dirname+'/public/index.html');
});

app.use(express.static('public'));

io.on('connect',function(client){
    console.log('Client Connected....');

    // client.on('join',function(data){
    //     console.log("Data from Client : "+data);
    // });

    client.on('disconnect',function(data){
        console.log('A Client disconnected just now !');
    });

    client.on('messages',function(data){
        io.emit('messages',data);
    })
    
})

server.listen(port);