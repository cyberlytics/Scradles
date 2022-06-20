import PropTypes from 'prop-types';
import './gameboard.css';
import Selection from '../Selection/Selection';

function GameBoard(props) {
    let selection
    if(props.main === true && props.gameState !== 'roundWinner' && props.gameState !== null){
        selection = <Selection onSelectionChange={props.onSelectionChange}/>
    } else {
        selection = <></>
    }
    return(
        <div className='gameboard'>
            <div className='gameboard-name'>
                <p>{props.name}</p>
            </div>
            <div className='gameboard-value'>
                <p>{props.value}</p>
            </div>
            <div className='gameboard-selection'>
                {selection}
            </div>
        </div>
    );    
}

GameBoard.propTypes = {
    value: PropTypes.string
}

export default GameBoard;