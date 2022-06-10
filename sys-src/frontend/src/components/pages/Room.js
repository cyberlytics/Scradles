import React, { useEffect, useLayoutEffect } from 'react';
import { useState, setTime } from "react";
import io from 'socket.io-client';
import { useNavigate, useParams } from 'react-router-dom';



const socket = io('http://localhost:8080')
socket.on('connect', () => console.log(socket.id))
socket.on('connect_error', () => {
  setTimeout(() => socket.connect(), 5000)
})
socket.on('time', (data) => setTime(data))
socket.on('disconnect', () => setTime('server disconnected'))


socket.on("lobby_null", () => {
  //dieser raum exisitiert nicht, erstelle einen raum oder such nach einem existentem raum. 
})

socket.on("lobby_voll", () => {
  //dieser raum ist voll!
})

socket.on("roomalreadyexists", () => {
  //dieser raum existiert bereits
})

let roomsize;
let userjoined;

socket.on("userJoinsLobby", (gameobject, size) =>{
  roomsize = size;
  // hier wird dem aktuellen client das gameobject zur verfügung gestellt
  console.log(`Der/Die User ${gameobject.player1} und ${gameobject.player2} trifft/treffen ein und die Raumbelegung ${roomsize} von 2`)
})

function Room() {

  let navigate = useNavigate();

  // problem mit react router, springt auf die seite zig mal, funktioniert aber trotzdem. feature?
  socket.on("joined", (gameobject) => {
    console.log(gameobject)
    navigate("/Lobby");
  })

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {

    if (username !== "" && room !== "") {
      socket.emit("join_room", room, username);
    }
  }
  const createRoom = () => {

    if (username !== "" && room !== "") {
      socket.emit("create_room", room, username);
    }
  }

  return (

    <div className="Room">
      <input type="text" placeholder="Name..." onChange={(event) => {
        setUsername(event.target.value);
      }}
      />
      <input type="text" placeholder='Room ID' onChange={(event) => {
        setRoom(event.target.value);
      }} />

      <button onClick={(joinRoom)}>Join a Room
      </button>
      <button onClick={(createRoom)}>Create a Room
      </button>
    </div>
  )
}

export default Room;