import PropTypes from 'prop-types';
import './gameboard.css';
import Selection from '../Selection/Selection';

function GameBoard(props) {

    return(
        <div className='gameboard'>
            <div className='gameboard-name'>
                <p>{props.name}</p>
            </div>
            <div className='gameboard-value'>
                <p>{props.value}</p>
            </div>
            <div className='gameboard-selection'>
                <Selection/>
            </div>
        </div>
    );    
}

GameBoard.propTypes = {
    value: PropTypes.string
}

export default GameBoard;