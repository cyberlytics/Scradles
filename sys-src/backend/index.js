const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended: true}));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

let clientNo = 0;

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    clientNo++;

    //socket.join(Math.round(clientNo/2));
    //socket.emit('serverMsg', roomNo);

    console.log(`User Anzahl: ${clientNo}`);
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    })
    socket.on("disconnect", () => {
        clientNo--;
        console.log(`User Anzahl: ${clientNo}`);
        console.log("User Disconnected", socket.id);
    })
});


setInterval(()=>{
     io.to('clock-room').emit('time', new Date())
},1000)

server.listen(PORT, err=> {
  if(err) console.log(err)
  console.log('Server running on Port ', PORT)
})