import PropTypes from 'prop-types';
import react from 'react';
import Selection from '../Selection/Selection';

import Schere from '../images/schere.svg';
import Papier from '../images/papier.svg';
import Stein from '../images/stein.svg';

function GameBoard(props) {

    return (
        <div>
            <img className={"gameboard-image"}
                src={
                    props === "Stein" ? Stein : props === "Papier" ? Papier : Schere
                }
                alt="rock scissors paper">
            </img>
            <Selection></Selection>
        </div>
    );
}

export default GameBoard;