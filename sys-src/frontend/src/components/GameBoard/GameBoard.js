import PropTypes from 'prop-types';
import react from 'react';

import './GameBoard.css';
import Selection from '../Selection/Selection';

import scissors from '../images/scissors.svg'
import paper from '../images/paper.svg'
import rock from '../images/rock.svg'

function GameBoard(props) {

    return (
        <div>
            <img className={"gameboard-image"}
                src={
                    props === "rock" ? rock : props === "paper" ? paper : scissors
                }
                alt="rock scissors paper">
            </img>
            <Selection></Selection>
        </div>
    );
}

export default GameBoard;