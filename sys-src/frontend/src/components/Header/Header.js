import './Header.css';
import {useNavigate} from 'react-router-dom';

function Header(props) {

    let navigate = useNavigate();

    return(
        <div className='Header' data-testid='header'>
            <h1 className='header-title'
                onClick={() => {navigate("/");}}>
                Scradles
            </h1>
            <nav>
                <a onClick={() => {navigate("/Leaderboard");}}>Rangliste</a>
                <a>Placeholder 2</a>
                <a>Placeholder 3</a>
                <a>Placeholder 4</a>
            </nav>
        </div>
    );    
}


export default Header;