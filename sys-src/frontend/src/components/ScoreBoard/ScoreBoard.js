import './ScoreBoard.css';

import PropTypes from 'prop-types';

function ScoreBoard(props) {
    return (
        <div>
            <p>Score</p>
            <div style={ { minHeight: 50} }>
                <div className={"circle score-" + (props.score1 === undefined ? 'null' : props.score1)} />
                <div className={"circle score-" + (props.score2 === undefined ? 'null' : props.score2)} />
                <div className={"circle score-" + (props.score3 === undefined ? 'null' : props.score3)} />
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