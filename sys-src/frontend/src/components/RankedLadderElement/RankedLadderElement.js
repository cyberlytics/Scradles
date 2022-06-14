import './RankedLadderElement.css';
import PropTypes from 'prop-types';

function RankedLadderElement(props) {

    return(
        <div className='RankedLadderElement'>
            <div className='Number'>{props.number}</div>
            <div className='Score'>{props.score}</div>
            <div className='Player'>{props.player}</div>
        </div>
    );    
}


RankedLadderElement.propTypes = {
    number: PropTypes.number,
    score: PropTypes.number,
    player: PropTypes.string
}

export default RankedLadderElement;