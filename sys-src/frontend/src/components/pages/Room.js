import React, { useContext ,useEffect, useLayoutEffect } from 'react';
import { useState, setTime } from "react";
import io from 'socket.io-client';
import { useNavigate, useParams } from 'react-router-dom';
import {SocketContext} from '../../context/socket';

function Room() {

  let navigate = useNavigate();
  const socket = useContext(SocketContext);

  let roomsize;
  let userjoined;

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    socket.on("lobby_null", () => {
      //dieser raum exisitiert nicht, erstelle einen raum oder such nach einem existentem raum. 
    })
    
    socket.on("lobby_voll", () => {
      //dieser raum ist voll!
    })
    
    socket.on("roomalreadyexists", () => {
      //dieser raum existiert bereits
    })

    socket.on("userJoinsLobby", (gameobject, size) =>{
      roomsize = size;
      // hier wird dem aktuellen client das gameobject zur verfügung gestellt
      console.log(`Der/Die User ${gameobject.player1} und ${gameobject.player2} trifft/treffen ein und die Raumbelegung ${roomsize} von 2`)
    })

    socket.on("joined", (gameobject) => {
      console.log(gameobject)
      navigate("/Lobby");
    })

    return () => {

    }
  }, [socket])
  
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