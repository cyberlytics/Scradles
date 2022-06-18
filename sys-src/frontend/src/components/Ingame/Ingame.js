import ScoreBoard from '../ScoreBoard/ScoreBoard';
import GameBoard from '../GameBoard/GameBoard';
import './Ingame.css';

function Ingame(props) {
    let gameobject = props.gameobject;
    let playerNumber = props.playerNumber;

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



    return (
        <div className='ingame-container'>
            <div className='gameboard-container'><GameBoard value="None" name={p1name}/></div>
            <div className='scoreboard-container'><ScoreBoard score1="win" score2="loss"/></div>
            <div className='gameboard-container'><GameBoard value="None" name={p2name}/></div>
        </div>
    );
}

export default Ingame;