import './Header.css';

function Header(props) {

    return(
        <div className='Header'>
            <h1 className='header-title'>
                Scradles
            </h1>
            <nav>
                <a>Placeholder 1</a>
                <a>Placeholder 2</a>
                <a>Placeholder 3</a>
                <a>Placeholder 4</a>
            </nav>
        </div>
    );    
}


export default Header;