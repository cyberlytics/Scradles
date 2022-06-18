import ScoreBoard from '../ScoreBoard/ScoreBoard';
import GameBoard from '../GameBoard/GameBoard';
import './Ingame.css';
import React, { useContext ,useEffect, useState} from 'react';

function Ingame(props) {
    let gameobject = props.gameobject;
    let playerNumber = props.playerNumber;

    const [selection, setSelection] = useState("None");

    let p1name = ''
    let p2name = 'Kein Mitspieler'
    console.log(playerNumber)
    if(playerNumber === 1){
        if(typeof gameobject['players'][0] !== 'undefined') {
            p1name = gameobject['players'][0]['player'];
        }
    
        if(typeof gameobject['players'][1] !== 'undefined') {
            p2name = gameobject['players'][1]['player'];
        }
       
    } else {
        if(typeof gameobject['players'][1] !== 'undefined') {
            p1name = gameobject['players'][1]['player'];
        }
    
        if(typeof gameobject['players'][0] !== 'undefined') {
            p2name = gameobject['players'][0]['player'];
        }
    }


    
    const handleSelection = (selection) => {
        setSelection(selection)
        props.onSelectionChange(selection) 
    }

    return (
        <div className='ingame-container'>
            <div className='gameboard-container'><GameBoard value={selection} name={p1name} onSelectionChange={handleSelection} main={true}/></div>
            <div className='scoreboard-container'><ScoreBoard score1="win" score2="loss"/></div>
            <div className='gameboard-container'><GameBoard value="Noneee" name={p2name} main={false}/></div>
        </div>
    );
}

export default Ingame;