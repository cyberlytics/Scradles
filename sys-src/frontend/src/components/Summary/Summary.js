import './Summary.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Summary(props) {
    let navigate = useNavigate();
    const [modal, setModal] = useState(true);

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    let win = ''
    if(props.win === true){
        win = 'modal-content score-win'
    } else {
        win = 'modal-content score-loss'
    }

    return (
        <>
            {modal && (
                <div className="modal" data-testid='summary'>
                    <div className="overlay"></div>
                    <div className={win}>
                        <h2>Summary</h2>
                        <p>
                            Winner is: {props.winner}
                        </p>
                        <button className="close-game" onClick={() => { navigate("/Room"); }}>
                            EXIT GAME
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}