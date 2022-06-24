import ScoreBoard from '../ScoreBoard/ScoreBoard';
import GameBoard from '../GameBoard/GameBoard';
import './Ingame.css';
import React, { useContext ,useEffect, useState} from 'react';

function Ingame(props) {
    let gameobject = props.gameobject;
    let playerNumber = props.playerNumber;

    //const [selection, setSelection] = useState("None");

    let p1name = ''
    let p2name = 'Kein Mitspieler'

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

    let enemyChoice = 'None'
    if(gameobject['roundNumber'] > 0){
        if(playerNumber === 1){
            if(gameobject['p2Choice'][gameobject['roundNumber'] - 1] != undefined){
                enemyChoice = gameobject['p2Choice'][gameobject['roundNumber'] - 1]
            }
        } else {
            if(gameobject['p1Choice'][gameobject['roundNumber'] - 1] != undefined){
                enemyChoice = gameobject['p1Choice'][gameobject['roundNumber'] - 1]
            }
        }
    }

    if(props.enemySelected === true && props.gameState === 'roundUpdate'){
        enemyChoice = 'Selected';
    }

    const handleSelection = (selection) => {
        //setSelection(selection)
        props.onSelectionChange(selection) 
    }

    useEffect(() => {
        if(props.gameState === 'roundEnd'){
            enemyChoice = 'None';
        }
    })

    return (
        <div className='ingame-container'>
            <div className='gameboard-container'><GameBoard value={props.playerSelection} name={p1name} onSelectionChange={handleSelection} main={true} gameState={props.gameState}/></div>
            <div className='scoreboard-container'><ScoreBoard playerNumber={playerNumber} roundWinner={gameobject['roundWinner']}/></div>
            <div className='gameboard-container'><GameBoard value={enemyChoice} name={p2name} main={false}/></div>
        </div>
    );
}

export default Ingame;