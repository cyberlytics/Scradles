const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const PORT = process.env.PORT || 3001
const { createAdapter } = require("@socket.io/mongo-adapter");
const { MongoClient } = require("mongodb");

app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://mongo:27017/scradles';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', console.log.bind(console, 'Connected to mongoDB'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Set up socketio adapter
const DB = "scradles";
const COLLECTION = "socket.io-adapter-events";

const mongoClient = new MongoClient("mongodb://mongo:27017", {
    useUnifiedTopology: true,
});

const connectAdapter = async () => {
  await mongoClient.connect();

try {
  await mongoClient.db(DB).createCollection(COLLECTION, {
    capped: true,
  size: 1e6
});
} catch (e) {
 // collection already exists
}
const mongoCollection = mongoClient.db(DB).collection(COLLECTION);

io.adapter(createAdapter(mongoCollection));
}

connectAdapter();

//Router
let leaderboard = require('./routes/leaderboardRoute')

//Middleware

//App
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/leaderboard', leaderboard)


//gamearray
let lobbyfunctions = require('./game/gamelobbyfunctions')


//Socket
let clientNo = 0;



io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    clientNo++;

    socket.on("join_room", (data, name) => {

        if (io.sockets.adapter.rooms.get(data) == null) {
            console.log("du kannst diesem raum nicht beitreten, er existiert nicht")
            socket.emit("lobby_null");
        }
        else {
            if (io.sockets.adapter.rooms.get(data).size < 2) {
                socket.join(data);
                console.log(`lobbysize ${io.sockets.adapter.rooms.get(data).size}`)
                console.log(`User with ID: ${socket.id} joined room: ${data}`)
                let gamejoinobject = lobbyfunctions.joinGame(data, name, socket.id)
                console.log(gamejoinobject);
                socket.emit("joined", gamejoinobject)
                //schickt allen clients im selben raum die nachricht
                io.in(data).emit("userJoinsLobby", gamejoinobject, io.sockets.adapter.rooms.get(data).size)
            }
            else {
                console.log('Cant join a full lobby')
                socket.emit("lobby_voll")
            }
        }
    })

    socket.on("create_room", (data, name) => {
        if (io.sockets.adapter.rooms.get(data) == null) {
            console.log(`raum ${data} wurde erstellt`)
            socket.join(data);
            let gameobject = lobbyfunctions.addGame(name, socket.id, data);
            socket.emit('joined', gameobject)
            console.log(gameobject)
            io.in(data).emit("userJoinsLobby", gameobject, io.sockets.adapter.rooms.get(data).size)
        }
        else {
            console.log("er existiert bereits")
            socket.emit('roomalreadyexists')
        }
    })

    socket.on("disconnect", () => {
        clientNo--;
        console.log(`User Anzahl: ${clientNo}`);
        console.log("User Disconnected", socket.id);
        let gameleaveobject = lobbyfunctions.leaveGame(socket.id);
        console.log(gameleaveobject)
        
        if (gameleaveobject != undefined) {
            console.log(gameleaveobject.players.length)
            // der raum wird gelöscht und alle spieler darin entfernt wenn creater verlässt
            if (gameleaveobject.players[0].socket == socket.id) {
                console.log("der creator ist raus")
                io.in(gameleaveobject.id).emit("LobbyWurdeEntfernt")
                io.in(gameleaveobject.id).socketsLeave(gameleaveobject.id);
            }
            // gameobject wird ans frontend weiter gereicht wenn spieler 2 den raum verlässt
            else if (gameleaveobject.players[1].socket == socket.id) {
                console.log("der zweite spieler ist raus")
                io.in(gameleaveobject.id).emit("userLeavesLobby", gameleaveobject, io.sockets.adapter.rooms.get(gameleaveobject.id).size)
            } 
        }
        else {
            console.log(gameleaveobject)
            console.log("er war in keinem raum")

        }
        // wenn spieler 1 verlässt dann raum schliesen und spieler 2 in lobby suchen bereich zurück setzen
        // wenn spieler 2 verlässt dann bleibt raum bestehen und spieler 1 bekommt eine nachricht
    })
});

//testing
setInterval(() => {
    io.to('clock-room').emit('time', new Date())
}, 1000)

server.listen(PORT, err => {
    if (err) console.log(err)
    console.log('Server running on Port ', PORT)
})