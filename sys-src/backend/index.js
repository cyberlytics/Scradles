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

//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://mongo:27017/scradles';

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});

const db = mongoose.connection;

db.on('connected', console.log.bind(console, 'Connected to mongoDB'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Router
let leaderboard = require('./routes/leaderboardRoute')

//Middleware

//App
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/leaderboard', leaderboard)

//Socket
let clientNo = 0;

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    clientNo++;

    socket.on("join_room", (data, name) => {

        if(io.sockets.adapter.rooms.get(data) == null){
            console.log("du kannst diesem raum nicht beitreten, er existiert nicht")
            socket.emit("lobby_null");
        }
        else{
            if(io.sockets.adapter.rooms.get(data).size < 2){
                socket.join(data);
                console.log(`lobbysize ${io.sockets.adapter.rooms.get(data).size}`)
                console.log(`User with ID: ${socket.id} joined room: ${data}`)
                socket.emit("joined")
                //schickt allen clients im selben raum die nachricht, alle clients die nach einem gejoint werden beim vorherig gejointen client angezeigt
                io.to(data).emit("userJoinsLobby", name, io.sockets.adapter.rooms.get(data).size)
            }
            else{
                console.log('Cant join a full lobby')
                socket.emit("lobby_voll")
            }
        }      
    })

    socket.on("create_room", (data, name) =>{
        if(io.sockets.adapter.rooms.get(data) == null){
            console.log(`raum ${data} wurde erstellt`)
            socket.join(data);
            socket.emit('joined')
        }
        else{
            console.log("er existiert bereits")
            socket.emit('roomalreadyexists')
        }
    })

    socket.on("disconnect", () => {
        clientNo--;
        console.log(`User Anzahl: ${clientNo}`);
        console.log("User Disconnected", socket.id);
    })
});

//testing
setInterval(()=>{
     io.to('clock-room').emit('time', new Date())
},1000)

server.listen(PORT, err=> {
  if(err) console.log(err)
  console.log('Server running on Port ', PORT)
})