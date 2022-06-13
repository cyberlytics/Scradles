import ScoreBoard from '../ScoreBoard/ScoreBoard';
import GameBoard from '../GameBoard/GameBoard';
import './Ingame.css';

function Ingame() {
    return (
        <div className='ingame-container'>
            <div className='gameboard'><GameBoard value="Schere"/></div>
            <div className='scoreboard'><ScoreBoard score1="win" score2="loss"/></div>
            <div className='gameboard'><GameBoard value="Stein"/></div>
        </div>
    );
}

export default Ingame;