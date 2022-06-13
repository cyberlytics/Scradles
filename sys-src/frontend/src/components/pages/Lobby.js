import React from 'react';
import Ingame from '../Ingame/Ingame'
import './pages.css';
import { useLocation } from 'react-router-dom';

function Lobby(){
    // hier lesen wir aus in welchem mode wir uns befinden
    // erstellter raum, zufälliges match, ranked usw
    // dann verwenden wir eine lobby für alles können aber ja nach mode anpassungen durchführen
    // navigate("/Lobby", {state: {mode: 'createdRoom'}});
    const {state} = useLocation();
    const { mode } = state;
    console.log(mode)

    return(
        <div className='container'>
            <Ingame/>
        </div>
    )
}

export default Lobby;