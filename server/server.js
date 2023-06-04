const express = require('express');
const {Server, Socket} = require('socket.io')
const cors = require('cors');

const io= new Server();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}))
app.use(cors())

io.on('connection',(Socket)=>{
    Socket.on('join-room',(data)=>{
        const {roomId,emailId} = data;
        Socket.join(roomId);
        Socket.broadcast.to(roomId).email("user-joined",{emailId});
    })
});

app.listen(8080,()=>{
    console.log('listening on port 8080');
});
io.listen(8081,()=>{});