import PropTypes from 'prop-types';
import './gameboard.css';
import Selection from '../Selection/Selection';
import { ReactComponent as Schere } from '../images/scissors.svg';
import { ReactComponent as Stein } from '../images/rock.svg';
import { ReactComponent as Papier } from '../images/paper.svg';
import Summary from '../Summary/Summary';

function GameBoard(props) {
    let selection
    let image
    if (props.main === true && props.gameState !== 'roundWinner' && props.gameState !== null && props.gameState !== 'gameWinner') {
        selection = <Selection onSelectionChange={props.onSelectionChange} />
        if (props.value === "Schere") {
            image = <Schere />
        }
        else if (props.value === 'Stein') {
            image = <Stein />
        }
        else if (props.value === 'Papier') {
            image = <Papier />
        }
    } else {
        selection = <></>
        image = <></>
    }

    return (
        <div className='gameboard' data-testid='gameBoard'>
            <div className='gameboard-name'>
                <p>{props.name}</p>
            </div>
            <div className='gameboard-value'>
                <p>
                    {image}
                    {props.value}
                </p>
            </div>
            <div className='gameboard-selection'>
                {selection}
            </div>
            
        </div>
    );
}

// GameBoard.propTypes = {
//     value: PropTypes.string
// }

export default GameBoard;