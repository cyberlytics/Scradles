import './MatchMenu.css';
import { useNavigate } from 'react-router-dom';
function MatchMenu(props) {

    let navigate = useNavigate();

    return (
        <div className='matchmenu-container' data-testid='matchMenu'>
            <div className='matchmenu'>
                <h3>Spiel wählen</h3>
                <button>Spiel starten</button>
                <button onClick={() => { navigate("/Room"); }}>Raum erstellen/beitreten</button>
            </div>
        </div>
    );
}


export default MatchMenu;