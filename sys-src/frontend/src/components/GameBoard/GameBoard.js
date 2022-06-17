import PropTypes from 'prop-types';
import Selection from '../Selection/Selection';

function GameBoard(props) {

    return(
        <div>
            <p>{props.value}</p>
            <Selection></Selection>
        </div>
    );    
}

GameBoard.propTypes = {
    value: PropTypes.string
}

export default GameBoard;