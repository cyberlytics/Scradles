import './LeaderboardElement.css';
import PropTypes from 'prop-types';

function LeaderboardElement(props) {

    return(
        <div className='LeaderboardElement'>
            <div className='Number'>{props.number}</div>
            <div className='Score'>{props.score}</div>
            <div className='Player'>{props.player}</div>
        </div>
    );    
}


LeaderboardElement.propTypes = {
    number: PropTypes.number,
    score: PropTypes.number,
    player: PropTypes.string
}

export default LeaderboardElement;