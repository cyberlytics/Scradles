import React, { useContext ,useEffect, useState} from 'react';
import Ingame from '../Ingame/Ingame'
import './pages.css';
import { useLocation } from 'react-router-dom';
import {SocketContext} from '../../context/socket';

function Lobby(){
    // hier lesen wir aus in welchem mode wir uns befinden
    // erstellter raum, zufälliges match, ranked usw
    // dann verwenden wir eine lobby für alles können aber ja nach mode anpassungen durchführen
    // navigate("/Lobby", {state: {mode: 'createdRoom'}});
    const {state} = useLocation();
    const { mode, gameobject, playerNumber} = state;

    const socket = useContext(SocketContext);
    const [gameobjectState, setGameobject] = useState(gameobject);

    let roomsize;
    let userjoined;

    console.log(gameobject)
    useEffect(() => {
        socket.on("userJoinsLobby", (gameobject, size) =>{
          roomsize = size;
          // hier wird dem aktuellen client das gameobject zur verfügung gestellt
          setGameobject(gameobject);
        })
    
        return () => {
          // hier sollten auch noch die genau callbacks angegeben werden (socket.off("lobby_null", this.onLobbyFull))
          // dafür irgendwann die funktionen auslagern
          // aktuell werden so alle callbacks für dieses event entfernt
          socket.off("userJoinsLobby");
        }
      }, [socket])

    return(
        <div className='container'>
            <Ingame gameobject={gameobjectState} playerNumber={playerNumber} />
        </div>
    )
}

export default Lobby;