
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import GameBoard from '../GameBoard/GameBoard';

function Ingame() {
    return (
        <table style={ { width: '100%'} }>
        <tr>
            <td style={ { width: '40%', backgroundColor: 'lightgray'} }>
                <GameBoard value="Schere"/>
            </td>
            <td style={ { width: '20%'} }>
                <ScoreBoard score1="win" score2="loss"/>
            </td>
            <td style={ { width: '40%', backgroundColor: 'lightgray'} }>
                <GameBoard value="Stein"/>
            </td>
        </tr>
        </table>
    );
}

export default Ingame;