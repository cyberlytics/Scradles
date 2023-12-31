import './ScoreBoard.css';
import PropTypes from 'prop-types';




function ScoreBoard(props) {
    let score = [undefined, undefined, undefined]

    props.roundWinner.forEach((element, index) => {
        if (props.playerNumber === 1) {
            score[index] = element === 'p1' ? 'win' : 'loss';
        } else {
            score[index] = element === 'p2' ? 'win' : 'loss';
        }
        if (element === 'draw') {
            score[index] = undefined
        }
    });



    return (
        <div className='scoreboard' data-testid='scoreboard'>
            <p>Score</p>
            <div className='scoreboard-circles' style={{ minHeight: 50 }}>
                <div className={"circle score-" + (score[0] === undefined ? 'null' : score[0])} />
                <div className={"circle score-" + (score[1] === undefined ? 'null' : score[1])} />
                <div className={"circle score-" + (score[2] === undefined ? 'null' : score[2])} />
            </div>
        </div>
    );
}

ScoreBoard.propTypes = {
    score1: PropTypes.oneOf(['win', 'loss', undefined]),
    score2: PropTypes.oneOf(['win', 'loss', undefined]),
    score3: PropTypes.oneOf(['win', 'loss', undefined]),
}

export default ScoreBoard;