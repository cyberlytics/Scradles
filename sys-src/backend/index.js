const express = require('express')
const socketIo = require('socket.io')
const http = require('http')
const PORT = process.env.PORT || 3001
const app = express()
const server = http.createServer(app)
const io = socketIo(server,{ 
    cors: {
      origin: 'http://localhost:3000'
    }
})

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
io.on('connection',(socket)=>{
  console.log('client connected: ',socket.id)
  
  //testing
  socket.join('clock-room')
  
  socket.on('disconnect',(reason)=>{
    console.log(reason)
  })

  socket.on("beispiel1",()=>{
    //DOTHIS
  })

  socket.on("beispiel2",()=>{
    //DOTHAT
  })
})

//testing
setInterval(()=>{
     io.to('clock-room').emit('time', new Date())
},1000)

server.listen(PORT, err=> {
  if(err) console.log(err)
  console.log('Server running on Port ', PORT)
})