var net = require('net');

var server = net.createServer(function(socket) {
	
    socket.on('data', function(chunk) {
        console.log(`Data received from client: ${chunk.toString()}`);
        socket.write('Data Recieved from you \r\n');
    });

    socket.on('error', function(err) {
        console.log(`Error: ${err}`);
    });

});

server.listen(80,(err)=>{
    if(err){
        console.log('error occured');
        throw err
    }else{
        console.log('server is running')
    }
});