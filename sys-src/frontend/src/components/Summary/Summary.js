import './Summary.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Summary() {



    let navigate = useNavigate();
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Summary</h2>
                        <p>
                            Winner is:
                        </p>
                        <button className="close-game" onClick={() => { navigate("/Room"); }}>
                            EXIT GAME
                        </button>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}