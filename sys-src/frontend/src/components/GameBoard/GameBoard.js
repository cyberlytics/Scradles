import PropTypes from 'prop-types';

function GameBoard(props) {

    return(
        <div>
            <p>{props.value}</p>
        </div>
    );    
}

GameBoard.propTypes = {
    value: PropTypes.string
}

export default GameBoard;