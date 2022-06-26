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
    const [enemySelected, setEnemySelected] = useState(false);
    const [selection, setSelection] = useState("None");

    let roomsize;
    let userjoined;

    const handleSelection = (selection) => {
        console.log(`Lobby selection: ${selection}`)
        socket.emit("selection", selection, room);
        setSelection(selection)
    }

    useEffect(() => {
        socket.on("userJoinsLobby", (gameobject, size) =>{
          roomsize = size;
          // hier wird dem aktuellen client das gameobject zur verfügung gestellt
          setGameobject(gameobject);
        })

        socket.on("gameStart", (gameobject) =>{
          // hier wird dem aktuellen client das gameobject zur verfügung gestellt
          setGameobject(gameobject);
          setGameState('gameStart')
        })

        socket.on("roundUpdate", (playerNumberOfSelection) =>{
          console.log("update yo")
          if(playerNumberOfSelection !== playerNumber){
            setEnemySelected(true)
          }
          setGameState('roundUpdate')
        })

        socket.on("roundWinner", (gameobject) =>{
          setGameobject(gameobject);
          setGameState('roundWinner')
        })
    
        socket.on("roundEnd", (gameobject) =>{
          setTimeout(function() {
            setGameobject(gameobject);
            setEnemySelected(false)
            setSelection("None")
            setGameState('roundEnd')
          }, 3000);
        })

        socket.on("gameWinner", (gameobject) =>{
          setTimeout(function(){
            setGameobject(gameobject);
            setGameState('gameWinner');
          }, 3100)
        })

        return () => {
          // hier sollten auch noch die genau callbacks angegeben werden (socket.off("lobby_null", this.onLobbyFull))
          // dafür irgendwann die funktionen auslagern
          // aktuell werden so alle callbacks für dieses event entfernt
          socket.off("userJoinsLobby");
        }
      }, [socket])

    return(
        <div className='container'  data-testid='lobby'>
            <Ingame gameState={gameState} gameobject={gameobjectState} playerNumber={playerNumber} playerSelection={selection} enemySelected={enemySelected} onSelectionChange={handleSelection}/>
        </div>
    )
}

export default Lobby;