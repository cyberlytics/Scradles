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
    const { mode, gameobject, playerNumber, room} = state;

    const socket = useContext(SocketContext);
    //todo: gameobjectState und gameState zusammenlegen
    const [gameobjectState, setGameobject] = useState(gameobject);
    const [gameState, setGameState] = useState(null);

    let roomsize;
    let userjoined;

    const handleSelection = (selection) => {
        console.log(`Lobby selection: ${selection}`)
        socket.emit("selection", selection, room);
    }

    useEffect(() => {
        socket.on("userJoinsLobby", (gameobject, size) =>{
          roomsize = size;
          // hier wird dem aktuellen client das gameobject zur verfügung gestellt
          setGameobject(gameobject);
        })

        socket.on("roundUpdate", (gameobject) =>{
          setGameobject(gameobject);
        })

        socket.on("roundWinner", (gameobject) =>{
          setGameobject(gameobject);
          setGameState('roundWinner')
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
            <Ingame gameState={gameState} gameobject={gameobjectState} playerNumber={playerNumber} onSelectionChange={handleSelection}/>
        </div>
    )
}

export default Lobby;